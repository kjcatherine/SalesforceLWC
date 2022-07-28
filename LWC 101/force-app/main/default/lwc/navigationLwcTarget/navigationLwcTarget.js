import { LightningElement, api } from 'lwc';

export default class NavigationLwcTarget extends LightningElement {
    //passing the recordId attribute from NavigateToLwc js
    @api recordId
}