import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList'
export default class FilteringAndSortingDemo extends LightningElement {
    headings=["Id", "Name", "Title", "Email"]
    fullTableData=[]
    filteredData =[]
    timer
    filterBy="Name"
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

    //Real life requirement-search by Nmae, etc, we need combobox for this
    get FilterByOptions(){
        return [
                    { label: 'All', value: 'All' },
                    { label: 'Id', value: 'Id' },
                    { label: 'Name', value: 'Name' },
                    { label: 'Title', value: 'Title' },
                    { label: 'Email', value: 'Email' },
                ];
    }

    filterByHandler(event){
        this.filterBy = event.target.name
    }


    filterHandler(event){
        const {value} = event.target
        // console.log(value)
        if(value){
            window.clearTimeout(this.timer)
            this.timer = window.setTimeout(()=>{
                console.log(value)
                this.filteredData = this.fullTableData.filter(eachObj=>{
                    if(this.filterBy === 'All'){
                        return Object.keys(eachObj).some(key=>{
                        return eachObj[key].toLowerCase().includes(value)
                        })
                    }else{
                        const val = eachObj[this.filterBy] ? eachObj[this.filterBy] : ''
                        return val.toLowerCase().includes(value)
                    }
                    //Below logic will filter each and every property of object
                    //Object.keys(eachobj) = ["Id", "Name", "Title", "Email"]
                    // return Object.keys(eachobj).some(key=>{
                    //     return eachobj[key].toLowerCase().includes(value)
                    // })
                })
            }, 500)
            }else{
                //this check avoids an empty table when something umavailabe is typed
                this.filteredData = [...this.fullTableData]
        }
    }
}