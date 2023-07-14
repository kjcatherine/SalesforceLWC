import { LightningElement } from 'lwc';
import {getRelatedListsInfo} from 'lightning/uiRelatedListApi'
export default class GetRelatedListsInfoDemo extends LightningElement {
  relatedData
  @wire(getRelatedListsInfo, {
    parentObjectApiName:'Account',
    // recordTypeId - optional
  })ListsInfoHandler({data, error}){
    if(data){
      console.log(JSON.stringify(data))
      this.relatedData = data.relatedLists
    }
    if(error){
      console.error(error)
    }
  }
}