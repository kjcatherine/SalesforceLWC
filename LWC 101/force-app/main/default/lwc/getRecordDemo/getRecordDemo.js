import { LightningElement, wire, api } from 'lwc';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi'
//import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'

export default class GetRecordDemo extends LightningElement {
    name 
    owner
    AnnualRevenue
    @api recordId
    //Fields wire mode
    @wire(getRecord, {recordId: '$recordId', fields:[NAME_FIELD, OWNER_NAME_FIELD, ANNUAL_REVENUE_FIELD]})
    //Layout wire mode-returns all the fields available in the layout when you check the console, got with fields type if you just need a few fields
    // @wire(getRecord, {recordId: '$recordId', layoutTypes:['Full'], modes:['View']})
    if(data){
        console.log(data)
        //To avoid this complexity we use getFieldValue adapter
        this.name = getFieldValue(data, NAME_FIELD)
        this.AnnualRevenue = getFieldValue(data, ANNUAL_REVENUE_FIELD)
        this.owner = getFieldValue(data, OWNER_NAME_FIELD)
    }
    // accountHandler({data}){
        // if(data){
        //     console.log(data)
        //     //To avoid this complexity we use getFieldValue adapter
        //     this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value
        //     this.AnnualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value
        //     this.owner = data.fields.Owner.displayValue ? data.fields.Owner.displayValue : data.fields.Owner.value
        // }
    
}