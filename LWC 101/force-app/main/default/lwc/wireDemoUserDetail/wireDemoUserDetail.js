import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'

export default class WireDemoUserDetail extends LightningElement {
    userId = Id;
    userDetail;
    //0053M000003XfuXQAS

    // @wire (adapter, {adapterConfig})
    // propertyorfunction;

    @wire(getRecord, {recordId:'0053M000003XfuXQAS', fields:['User.Name', 'User.Email']})

   // userDetailhandler({data, error}) //some people destructure its the same
    // userDetailhandler(response){
    //     console.log(response)
    // }
    
    userDetailHandler({data, error}){
        if(data){
            this.userDetail = data.fields;
        }
        if(error){
            console.error(error)
        }
    }

}