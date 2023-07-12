import { LightningElement } from 'lwc';
import {getRelatedListCount} from 'lightning/uiRelatedListApi'
export default class GetRelatedListCountDemo extends LightningElement {
  relatedData
  @wire(getRelatedListCount, {
    parentRecordId:'0010C00000a7TFhQAM', // The ID of the parent record that you want to get related list for
    relatedListId:'Contacts' // The API name of a related list object such as Contacts, Opportunities etc
  })listCountHandler({error, data}){
    if(data){
      console.log(JSON.stringify(data))
      this.relatedData = data
    }
    if(error){
      console.error(error)
    }
  }
}