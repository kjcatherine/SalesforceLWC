import { LightningElement } from 'lwc';
import LightningConfirm from 'lightning/confirm'
export default class LightningConfirmDemo extends LightningElement {
    confirmHandler(){
        LightningConfirm.open({
            message:"Would you like to refresh the page"
        })
    }
}