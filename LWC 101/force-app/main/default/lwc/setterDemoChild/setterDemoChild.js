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
        let newAge = data.age*2
        //location is not originally part of the object, is that why its in quotes?
        this.userDetail = {...data, age:newAge, "location":"Africa"}
   }
}