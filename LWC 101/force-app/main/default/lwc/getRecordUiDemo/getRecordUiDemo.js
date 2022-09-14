import { LightningElement, wire, api } from 'lwc';
import {getRecordUi} from 'lightning/uiRecordApi'

export default class GetRecordUiDemo extends LightningElement {
    @api recordId
    @wire(getRecordUi, {recordIds:'$recordId', layoutTypes:'Full', modes:'Edit'})
    accountRecordUiHandler({data, error}){
        if(data){
            console.log(data)
        }
        if(error){
            console.error(error)
        }
    }
}