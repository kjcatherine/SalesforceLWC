import { LightningElement, wire } from 'lwc';
import {getRelatedListInfo} from 'lightning/uiRelatedListApi'
export default class GetRelatedListInfoDemo extends LightningElement {
relatedListData
  @wire(getRelatedListInfo, {
    parentObjectApiName:'Account',  // This is an API name of a parent object that you want to get related list for
    relatedListId: 'Contacts' // Api name of related list object
    // recordTypeId:'' //optional
  })listInfoHandler({data, error}){
    if(data){
      console.log(JSON.stringify(data))
      this.relatedListData = data.displayColumns
    } 
    if(error){
      console.error(error)
    }
  }
}