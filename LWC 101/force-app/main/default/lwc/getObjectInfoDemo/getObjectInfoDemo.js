import { LightningElement, wire } from 'lwc';
import {getObjectInfo} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetObjectInfoDemo extends LightningElement {
    defaultRecordTypeId; //got his from the data we got from console logging the data object
    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})

    objectInfo({data, error}){
        if(data){
            console.log(data)
            this.defaultRecordTypeId = data.defaultRecordTypeId
        }
        if(error){
            console.error(error)
        }
    }

    //Note: its always advisable to use function first and print on the console to be sure data is coming in, this is easier than debugging with property, once youre sure you can then switch it for property
    //as a property
    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfo
}