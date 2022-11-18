import { LightningElement } from 'lwc';
import {ShowToastEvent} from'lightning/platformShowToastEvent'
export default class Notifications extends LightningElement {
    toastHandler(){
      const evt = new ShowToastEvent({
            title:'Success!!',
            message:'Account Created',
            variant:'success'
        })
        this.dispatchEvent(evt)
    }
}