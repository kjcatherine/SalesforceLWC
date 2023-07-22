import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert'
export default class LightningAlertDemo extends LightningElement {
    /*alertHandler(event){
        const {name} = event.target
        //window.alert("Hello") //Deprecated in JS soon
        LightningAlert.open({
            message:"This is an alert",
            label:`I am ${name} alert header`,
            theme:name //success -> green, warning->orange, error->red, infro->grey
        })
    }*/

    //In the documentation, async awit is used, usually when we need to perform another action right after the alert
    async alertHandler(event){
        const {name} = event.target
        //window.alert("Hello") //Deprecated in JS soon
        await LightningAlert.open({
            message:"This is an alert",
            variant:"headerless", //hides alert headers
            label:`I am ${name} alert header`,
            theme:name //success -> green, warning->orange, error->red, infro->grey
        }) //.then(result=>{..code})
        //The below code can be wrapped in a then method if you dont want to use async 
        let x =3
        let y = 2
        this.add(x,y)
    }
    add(a,b){
        console.log(a+b)
    }
    //If you only need to show alert without any further action the n async is not needed
}