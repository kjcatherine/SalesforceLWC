import { LightningElement } from 'lwc';
import LightningPrompt from 'lightning/prompt'
export default class LightningPromptDemo extends LightningElement {
    result
    async promptHandler(){
            this.result = await LightningPrompt.open({
                message:"Please enter your age",
                // label:"Are you sure?",
                // theme:"warning",
                //variant:"headerless"
            })
            console.log(this.result)
            if(this.result && Number(this.result) > 18){
                console.log("Hurray you are eligible")
            }else{
                console.log("Sorry you are not eligible")
            }
        }


//then method
// promptHandler(){
//    LightningPrompt.open({
//         message:"Please enter your age",
//     }).then(result=>{
//         console.log(result)
//     })
    
}