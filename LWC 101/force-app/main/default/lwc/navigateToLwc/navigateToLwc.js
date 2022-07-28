import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToLwc extends NavigationMixin(LightningElement) {
   
    navigateToLwc(){

        var defination = {
            componentDef: 'c:navigationLwcTarget',
            //optionally to pass data such as record id, them we iport it in the target comp js
            attributes:{
                recordId: '45678999999999'
            }
        }

        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: '/one/one.app#'+btoa(JSON.stringify(defination)),
            }
        })
    }
}