import { LightningElement,wire } from 'lwc';
import {getListUi} from 'lightning/uiListApi'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
export default class UpdateRecordDemo extends LightningElement {
    @wire(getListUi, {
        objectApiName: CONTACT_OBJECT,
        listViewApiName:'AllContacts'
    })
    listViewHandler({data,error}){
        if(data){
            console.log(data)
        }
        if(error){
            console.error(error)
        }
    }
}