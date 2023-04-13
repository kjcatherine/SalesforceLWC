import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList'
export default class FilteringAndSortingDemo extends LightningElement {
    @wire(getContactList)
    contactHandler({data, error}){
        if(data){
            console.log(data)
        }
        if(error){
            console.error(error)
        }
    }
}