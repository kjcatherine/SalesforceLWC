import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/CsvController.getAccounts'
export default class CsvDemo extends LightningElement {
    @wire(getAccounts)
    accountHandler({data, error}){
        if(data){
            console.log("This is data from Contoller", data)
        }
        if(error){
            console.error("An error has occured when retreiving account records", error)
        }
    }
}