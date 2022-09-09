import { LightningElement, wire } from 'lwc';
import {getListUi} from 'lightning/uiListApi'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import TITLE_FIELD from '@salesforce/schema/Contact.Title'

export default class GetListUiDemo extends LightningElement {
    contacts =[]
    @wire(getListUi, {
        objectApiName: CONTACT_OBJECT, 
        listViewApiName: 'AllContacts',
        pageSize:10,
        sortBy:TITLE_FIELD //by default it sorts by name
    })
    listViewHandler({data, error}){
        if(data){
            console.log(data) 
            this.contacts = data.records.records
        }
        if(error){
            console.error(error)
        }
    }
}