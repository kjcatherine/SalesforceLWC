import { LightningElement, api } from 'lwc';
import {updateRecord} from 'lightning/uiRecordApi'
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName'
import ID_FIELD from '@salesforce/schema/Opportunity.Id'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class ClosedAction extends LightningElement {
    @api recordId
    @api invoke(){
        const fields = {}
        fields[ID_FIELD.fieldApiName]= this.recordId
        fields[STAGENAME_FIELD.fieldApiName]= "Closed"
        const recordInput = {fields} //{fields:fields}
        updateRecord(recordInput)
        .then(()=>{
            this.showToast("success!!", "Opportunity closed successfully", "success")
      }).catch(error=>{
        //error handling
        this.showToast("Error!!", error.message, "error")
      })
    }
    showToast(title, message, variant){
        this.dispatchEvent(new ShowToastEvent({
            title, message , variant
        }))
    }
}