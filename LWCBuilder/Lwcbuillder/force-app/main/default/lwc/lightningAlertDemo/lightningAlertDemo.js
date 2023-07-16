import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert'
export default class LightningAlertDemo extends LightningElement {
    alertHandler(){
        //window.alert("Hello") //Deprecated in JS soon
        LightningAlert.open({
            message:"This is an alert"
        })
    }
}