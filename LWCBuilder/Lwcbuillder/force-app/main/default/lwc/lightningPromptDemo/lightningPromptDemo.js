import { LightningElement } from 'lwc';
import LightningPrompt from 'lightning/prompt'
import LightningAlert from 'lightning/alert'
export default class LightningPromptDemo extends LightningElement {
    result
    async promptHandler(){ //no need to use async since no further action required
            this.result = await LightningPrompt.open({
                message:"Please enter your age",
                label:"Check you voting eligibility",
                theme:"success",
                defaultValue:30
                //variant:"headerless"
            })
            console.log(this.result)
            if(this.result && Number(this.result) > 18){
                //Calling an alert within a prompt
                this.alertHandler("Hurray you are eligible", "Success", "success")
            }else{
                this.alertHandler("Sorry you are not eligible", "Error", "error")
            }
        }
//Using alert with prompt use case
alertHandler(message, label, theme){
    LightningAlert.open({
        message,
        label,
        theme
    })
}

//then method
// promptHandler(){
//    LightningPrompt.open({
//         message:"Please enter your age",
//     }).then(result=>{
//         console.log(result)
//     })
    
}