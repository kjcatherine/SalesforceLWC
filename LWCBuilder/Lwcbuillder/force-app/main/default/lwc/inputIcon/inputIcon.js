import { LightningElement } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader'
import input from '@salesforce/resourceUrl/input'

export default class InputIcon extends LightningElement {
    connectedCallback(){
        loadStyle(this, input).then(()=>{
            console.log("Styles loaded succesully")
        }).catch(error=>{
            console.error(error)
        })
    }
}