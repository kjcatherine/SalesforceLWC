import { LightningElement } from 'lwc';
import LightningConfirm from 'lightning/confirm'
export default class LightningConfirmDemo extends LightningElement {
    result
    async confirmHandler(){
        this.result = await LightningConfirm.open({
            message:"Would you like to refresh the page",
            label:"Are you sure?",
            theme:"success",
            //variant:"headerless"
        })
        console.log(this.result)
        if(this.result){
            location.reload()
        }
    }
}