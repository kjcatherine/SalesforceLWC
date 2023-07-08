import { LightningElement,wire } from 'lwc';
import {getRelatedListRecords} from 'lightning/uiRelatedListApi'
export default class GetRelatedListRecordDemo extends LightningElement {
  recordList
  @wire(getRelatedListRecords, {
    parentRecordId:'0010C00000a7TFhQAM',
    relatedListId:'Contacts',
    fields:['Contact.Name', 'Contact.Id'] //optional field
  })listRecordsHandler({data,error}){
    if(data){
      console.log(JSON.stringify(data))
      this.recordList = data.records
    }
    if(error){
      console.error(error)
    }
  }
}