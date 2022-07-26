import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToRelatedRelationship extends NavigationMixin(LightningElement) {
    navigateTorelatedList(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: '0013M00001M7U5QQAV', //of the account object
                objectApiName: 'Quiz_App',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
        })
    }
}