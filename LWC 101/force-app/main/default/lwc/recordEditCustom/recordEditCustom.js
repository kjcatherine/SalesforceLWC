import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class RecordEditCustom extends LightningElement {
    objectName = ACCOUNT_OBJECT
    inputValue = ''
    handleChange(event){
        this.inputValue = event.target.value
    }
    handleSubmit(event){
        event.preventDefault()
        const inputCmp = this.template.querySelector('lightning-input')
        const value = inputCmp.value
        if(!value.includes('Australia')){
            inputCmp.setCustomValidity("The Account name must include Australia")
        }else{
            inputCmp.setCustomValidity("")
            const fields = event.detail.fields
            fields.Name = value
            this.template.querySelector('lightning-record-edit-form').submit(fields)
        }
        inputCmp.reportValidity()
    }
    sucessHandler(){
       const toastEvent = new ShowToastEvent({
            title:"Account created",
            message:"Record Id: " + event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastEvent)
    }
    //To handle server Error
    handleError(event){
        const toastEvent = new ShowToastEvent({
            title:"Error creating Account",
            message:event.detail.message,
            variant:"error"
        })
        this.dispatchEvent(toastEvent)
    }
}