import { LightningElement, wire } from 'lwc';
import filterAccountTypeType from '@salesforce/apex/AccountController.filterAccountTypeType'
export default class WireApexWithParams extends LightningElement {
    selectedType = ''
    @wire(filterAccountTypeType, {type:$selectedType})
    filteredAccounts
}