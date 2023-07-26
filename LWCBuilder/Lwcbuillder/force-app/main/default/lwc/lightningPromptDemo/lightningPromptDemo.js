import { LightningElement } from 'lwc';
import LightningPrompt from 'lightning/prompt'
export default class LightningPromptDemo extends LightningElement {
    result
    promptHandler(){
            this.result = await LightningPrompt.open({
                message:"Please enter your age",
                label:"Are you sure?",
                theme:"warning",
                //variant:"headerless"
            })
            console.log(this.result)
            if(this.result){
                location.reload()
            }
        }
}