import { LightningElement } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader'
import input from '@salesforce/resourceUrl/input'

export default class InputIcon extends LightningElement {
    //Using the eye icon to hide and show password
    showPassword = false
    get passwordIcon(){
        return this.showPassword ? 'utility:hide':'utility:preview'
    }

    get passwordType(){
        return this.showPassword ? 'text':'password'
    }

    connectedCallback(){
        loadStyle(this, input).then(()=>{
            console.log("Styles loaded succesully")
        }).catch(error=>{
            console.error(error)
        })
    }
//Toggling the visibility on and off
    passwordHandler(){
        this.showPassword = !this.showPassword
    }
}