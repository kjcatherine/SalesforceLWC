import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList'
export default class FilteringAndSortingDemo extends LightningElement {
    headings=["Id", "Name", "Title", "Email"]
    fullTableData=[]
    filteredData =[]
    @wire(getContactList)
    contactHandler({data, error}){
        if(data){
            console.log(data)
            this.fullTableData = data
            this.filteredData = data
        }
        if(error){
            console.error(error)
        }
    }

    filterHandler(event){
        const {value} = event.target
        console.log(value)
        this.filteredData = this.fullTableData.filter(eachobj=>{
            //Object.keys(eachobj) = ["Id", "Name", "Title", "Email"]
            return Object.keys(eachobj).some(key=>{
                return eachobj[key].toLowerCase().includes(value)
            })
        })
    }
}