import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/CsvController.getAccounts'
import {exportCSVFile} from 'c/utils'
export default class CsvDemo extends LightningElement {
    accountData
    accountHeaders = {
        Id:"Record Id",
        Name:"Name",
        AnnualRevenue:"Annual Revenue",
        Industry:"Industry",
        Phone:"Phone"
    }
    @wire(getAccounts)
    accountHandler({data, error}){
        if(data){
            console.log("This is data from Contoller", data)
            this.accountData = data
        }
        if(error){
            console.error("An error has occured when retreiving account records", error)
        }
    }
    csvGenerator(){
        //headers, totalData, fileTitle
        exportCSVFile(this.accountHeaders, this.accountData, "account_records")
        console.log("are they coming in?", this.accountHeaders, this.accountData)
    }
}