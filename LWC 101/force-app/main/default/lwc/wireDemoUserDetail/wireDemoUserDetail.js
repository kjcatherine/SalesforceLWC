import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'

export default class WireDemoUserDetail extends LightningElement {
    userId = Id;
    //0053M000003XfuXQAS

    // @wire (adapter, {adapterConfig})
    // propertyorfunction;

    @wire(getRecord, {recordId:'0053M000003XfuXQAS', fields:['User.Name', 'User.Email']})

    userDetailhandler(response){
        consilelog(response)
    }

}