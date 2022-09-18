import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import {showToastEvent} from 'lightning/platformShowToastEvent';
export default class CreateRecordDemo extends LightningElement {
    formFields={}
    changeHandler(event){
        const {name, value} = event.target
        this.formFields[name]=value
    }

    createContact(){
        const recordInput ={apiName:CONTACT_OBJECT.objectApiName, fields:this.formFields}
        createRecord(recordInput)
        .then(result=>{
            this.showToast('Sucess!!!', `Contact created with Id ${result.id}`, 'sucess')
            //Resets form
            this.template.querySelector('form.createForm').reset()
            this.formFields={}
        }).catch(error=>{ 
            this.showToast('Error Creating Record', error.body.message, 'error')
        })
    }
    showToast(title, message, variant){
        this.dispatchEvent(new showToastEvent({
            title,
            message,
            variant:variant || 'success'
        }))
    }
}