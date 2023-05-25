import { LightningElement } from 'lwc';

export default class DateValidation extends LightningElement {
    startDate
    endDate //note they are same as the name attribute in html
    dateHandler(event){
        const {name, value} = event.target
        this[name] = value //this["startDate"] = value
    }
}