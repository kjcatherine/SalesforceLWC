import { LightningElement, wire } from 'lwc';
import {getObjectInfo, getPicklistValues} from 'lightning/uiObjectInfoApi'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetPicklistValuesDemo extends LightningElement {
    selectedIndustry = '';
    industryOptions = []
    //To get the recordTypeId
    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfo
    //objectInfo.data.defaultRecordTypeId


    @wire(getPicklistValues, {recordTypeId:'$objectInfo.data.defaultRecordTypeId', fieldApiName: INDUSTRY_FIELD})
    industryPicklist({data, error}){
        if(data){
            console.log(data) 
            this.industryOptions = [...this.generatePicklist(data)] //beacuse we dont want to update the arrays directly
        }
        if(error){
            console.error(error)
        }
    }

    //Copied js from combobox in comp reference
    //selectedIndustry = '';
    // get options() {
    //     return [
    //         { label: 'New', value: 'new' },
    //         { label: 'In Progress', value: 'inProgress' },
    //         { label: 'Finished', value: 'finished' },
    //     ];
    // }
//to generate dynamically from getPicklistValues
    generatePicklist(data){
        return data.values.map(item=> ({label: item.label, value: item.value}))
    }

    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }
}
