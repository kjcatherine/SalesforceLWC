import { LightningElement } from 'lwc';

export default class DateValidation extends LightningElement {
    startDate
    endDate //note they are same as the name attribute in html
    error
    dateHandler(event){
        const {name, value} = event.target
        this[name] = value //this["startDate"] = value
    }
    submitHandler(){
        if(this.validateDate(this.startDate, this.endDate)){
            console.log('Date is valid')
        }else{
            this.error = "Start Date cannot be greater than End date"
        }    
    }
    validateDate(startDate, endDate){
        return new Date(startDate).getTime() < new Date(endDate).getTime()
    }
}