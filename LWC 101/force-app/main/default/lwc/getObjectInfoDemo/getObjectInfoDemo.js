import { LightningElement, wire } from 'lwc';
import {getObjectInfo, getObjectInfos} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
export default class GetObjectInfoDemo extends LightningElement {
    // defaultRecordTypeId; //got his from the data we got from console logging the data object
    // //getObjectInfo for single object
    // @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})

    // objectInfo({data, error}){
    //     if(data){
    //         console.log(data)
    //         this.defaultRecordTypeId = data.defaultRecordTypeId
    //     }
    //     if(error){
    //         console.error(error)
    //     }
    // }

    //Note: its always advisable to use function first and print on the console to be sure data is coming in, this is easier than debugging with property, once youre sure you can then switch it for property
    //as a property
    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfoProperty

     //getObjectInfos for multiple object
     objectApiNames = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT]

     objectInfos;
     @wire(getObjectInfos, {objectApiNames: '$objectApiNames'})
     objectInfosHandler({data}){
        if(data){
            console.log(data)
            this.objectInfos = data
        }

     }
}