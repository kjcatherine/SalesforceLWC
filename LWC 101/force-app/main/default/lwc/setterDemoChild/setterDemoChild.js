import { LightningElement, api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
   // @api detail
   // for the use case where we want the child to show the component
   userDetail;
   @api
   get detail(){
    return this.userDetail
   }
   set detail(data){
        this.userDetail = data
   }
}