import { LightningElement, wire } from 'lwc';
import allAccountsWithContact from '@salesforce/apex/AccountContact.allAccountsWithContact'

export default class TreeGridLwc extends LightningElement {
    gridData = []
    @wire(allAccountsWithContact)
    accountsWithContactsResult({data, error}){
        if(data){
            console.log(data)
            this.formatGridData(data)
        }
        if(error){
            console.error(error)
        }
    }

    //Columns
    gridColumns=[
        {
            label:'Name',
            fieldName:'Name',
            type:'text'
        },
        {
            label:'Phone',
            fieldName:'Phone',
            type:'text'
        },
        {
            label:'Account Website',
            fieldName:'Website',
            type:'url',
            typeAttributes:{
                target:'_blank'
            }
        },
    ]
//Example of child of contact
    dummyData = [
        {
            Name: 'Salesforce',
            Email: 'Salesforce@gmail.com',
            Website: 'salesforcetroop.com'
        },
        {
            Name: 'Troop',
            Email: 'troop@gmail.com',
            Website: 'salesforcetroop.com'
        }
    ]

    formatGridData(result){
        this.gridData = result.map(item=>{
            const {Contacts, ...accounts} = item
            const updatedContact = Contacts.map(cont=>{
                return {...cont, "_children":this.dummyData}
            })
            return {...accounts, "_children":updatedContact}
        })
        console.log(this.gridData)
    }
}