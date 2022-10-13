import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
export default class ApexImperativeDemo extends LightningElement {
    accounts
    handleClick(){
        getAccountList().then(result=>{
            //this.accounts = result
            cconsole.log(result)
        }).catch(error=>{
            console.error(error)
        })
    }
}