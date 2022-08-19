import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
//hardcoding values is not adviced, always import reference
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
const fields = [NAME_FIELD, EMAIL_FIELD]

export default class WireDemoUserDetail extends LightningElement {
    userId = Id;
    userDetail;
    //0053M000003XfuXQAS

    // @wire (adapter, {adapterConfig})
    // propertyorfunction;

    // @wire(getRecord, {recordId:'0053M000003XfuXQAS', fields:['User.Name', 'User.Email']})

    // @wire(getRecord, {recordId:'0053M000003XfuXQAS', fields:[NAME_FIELD, EMAIL_FIELD]})

    //another way fields:fields, if key/value are same, just rep with one
    //@wire(getRecord, {recordId:'0053M000003XfuXQAS', fields})
    //importing id reference is asynchronous, so if we replace the hadcoded id with this.userId, it throws an error because its not yet avaiable when we call the getrecords wire
    //how to solve this? we make it reactive by using $ infront of the property in quotes, which basically says update it imediately its available, do not do $this.userId, dont use this keyword
    @wire(getRecord, {recordId:'$userId', fields})
   // userDetailhandler({data, error}) //some people destructure its the same
    // userDetailhandler(response){
    //     console.log(response)
    // }
    //function approach
    userDetailHandler({data, error}){
        if(data){
            this.userDetail = data.fields;
        }
        if(error){
            console.error(error)
        }
    }

    //property approach
    @wire(getRecord, {recordId:'$userId', fields})
    userDetailProperty; //response from above immediately gets received here

}