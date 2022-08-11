import { LightningElement, wire } from 'lwc';
import {getObjectInfo, getPicklistValues} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
export default class GetPicklistValuesDemo extends LightningElement {
    selectedIndustry = '';
    selectedType = '';
    industryOptions = []
    typeOptions = []
    //To get the recordTypeId
    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfo;
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

    //Second Picklist for Type field
    @wire(getPicklistValues, {recordTypeId:'$objectInfo.data.defaultRecordTypeId', fieldApiName: TYPE_FIELD})
    typePicklist({data, error}){
        if(data){
            console.log(data) 
            this.typeOptions = [...this.generatePicklist(data)] //beacuse we dont want to update the arrays directly
        }
        if(error){
            console.error(error)
        }
    }

    handleTypeChange(event) {
        this.selectedType = event.detail.value;
    }
}
