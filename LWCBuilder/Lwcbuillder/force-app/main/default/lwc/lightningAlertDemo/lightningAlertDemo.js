import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert'
export default class LightningAlertDemo extends LightningElement {
    alertHandler(event){
        const {name} = event.target
        //window.alert("Hello") //Deprecated in JS soon
        LightningAlert.open({
            message:"This is an alert",
            label:`I am ${name} alert header`,
            theme:name //success -> green, warning->orange, error->red, infro->grey
        })
    }
}