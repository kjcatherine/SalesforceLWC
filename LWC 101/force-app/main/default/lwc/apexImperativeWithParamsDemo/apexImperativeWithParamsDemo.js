import { LightningElement } from 'lwc';
import findAccount from '@salesforce/apex/AccountController.findAccount'
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
        },1000)
    }
    //Debouncing technique
    callApex(){
        findAccount({searchKey:this.searchKey}).then(result=>{
            this.accounts = result
        }).catch(error=>{
            console.error(error)
        })
    }
}