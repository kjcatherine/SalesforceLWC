import { LightningElement, wire } from 'lwc';
import allAccountsWithContact from '@salesforce/apex/AccountContact.allAccountsWithContact'

export default class TreeGridLwc extends LightningElement {
    @wire(allAccountsWithContact)
    accountsWithContactsResult({data, error}){
        if(data){
            console.log(data)
        }
        if(error){
            console.error(error)
        }
    }
}