import { deleteRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';

export default class DeleteRecordDemo extends LightningElement {
    recordId
    changeHandler(event){
        this.recordId = event.target.value
    }

    deleteHandler(){
        deleteRecord(this.recordId).then((result)=>{
            console.log('deleted successfully')
        }).catch(error=>{
            console.error(error)
        })
    }
}