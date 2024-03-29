import { LightningElement,wire } from 'lwc';
import {getListUi} from 'lightning/uiListApi'
import {updateRecord} from 'lightning/uiRecordApi'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
//Always define constants above the class or within a function
const COLS =[
    {label:'Id', fieldName:'Id'},
    {label:'Name', fieldName:'Name'},
    {label:'Title', fieldName:'Title'},
    {label:'Phone', fieldName:'Phone', editable:true},
    {label:'Email', fieldName:'Email', type:'email', editable:true},
]
export default class UpdateRecordDemo extends LightningElement {
    contacts=[]
    draftValues=[]
    columns = COLS
    @wire(getListUi, {
        objectApiName: CONTACT_OBJECT,
        listViewApiName:'AllContacts'
    })
    listViewHandler({data,error}){
        if(data){
            console.log(data)
            this.contacts = data.records.records.map(item=>{
                return {
                    //"Name":item.fields.Name.Value
                    "Id":this.getValue(item, 'Id'),
                    "Name":this.getValue(item, 'Name'),
                    "Title":this.getValue(item, 'Title'),
                    "Phone":this.getValue(item, 'Phone'),
                    "Email":this.getValue(item, 'Email'),
                }
            })
        }
        if(error){
            console.error(error)
        }
    }
    getValue(data, field){
        return data.fields[field].value
    }
    handleSave(event){
        console.log(JSON.stringify(event.detail.draftValues))
        const recordInputs=event.detail.draftValues.map(draft=>{
            const fields ={...draft}
            //fields ={"Phone":"(785) 241-62789","id":"row-0"} //got this from console
            return {fields:fields}
        })
        const promises = recordInputs.map(recordInput=>updateRecord(recordInput))
        Promise.all(promises).then(()=>{

            //clears the values in yellow and removes the buttons
            this.draftValues=[]
        }).catch(error=>{
            console.error("Error updating the record", error)
        })
        
    }
}