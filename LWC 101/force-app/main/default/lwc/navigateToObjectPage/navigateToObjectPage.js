import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
//we need this for the default values part
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {

    navigateToNewRecord(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        })
    }

    navigateToNewRecordWithDefault(){
        const defaultValue = encodeDefaultFieldValues({
            FirstName: 'Raymond',
            LastName: 'Reddington',
            LeadSource: 'other'
        })
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: defaultValue
            }
        })
    }

}