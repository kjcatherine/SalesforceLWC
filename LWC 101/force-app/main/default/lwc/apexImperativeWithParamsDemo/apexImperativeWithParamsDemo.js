import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/AccountController.findAccounts'
export default class ApexImperativeWithParamsDemo extends LightningElement {
    searchKey = ''
    accounts
    timer
    searchHandler(event){
        Window.clearTimeout(this.timer)
        this.searchKey = event.target.value
        // findAccount({searchKey:this.searchKey}).then(result=>{
        //     this.accounts = result
        // }).catch(error=>{
        //     console.error(error)
        // })
        // for the Debouncing impelementation
        this.timer = setTimeout(()=>{
            this.callApex()
        }, 1000)
    }
    //Debouncing technique
    callApex(){
        findAccounts({searchKey:this.searchKey}).then(result=>{
            this.accounts = result
        }).catch(error=>{
            console.error("Call Apex Error here" + error)
        })
    }
}