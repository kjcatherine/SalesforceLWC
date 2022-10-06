import { LightningElement, wire } from 'lwc';
//we are ignoring the namespace  before classname because we dont have one
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
export default class ApexWireDemo extends LightningElement {
    @wire(getAccountList)
    accounts;

    accountList //should be on the top though
    @wire(getAccountList)
    accountsHandler({data, error}){
        if(data){
            this.accountList = data.map(item=>{
                let newType = item.Type === 'Customer - Channel' ? 'Channel' : 
                item.Type === 'Customer - Direct' ? 'Direct' : '-------'
                return {...item, newType}
            })
        }
        if(error){
            console.error(error)
        }
    }
}