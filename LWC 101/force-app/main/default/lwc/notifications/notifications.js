import { LightningElement } from 'lwc';
import {ShowToastEvent} from'lightning/platformShowToastEvent'
export default class Notifications extends LightningElement {
    toastHandler(){
        this.showToast('Success!!', 'Account Created','success')
    //   const evt = new ShowToastEvent({
    //         title:'Success!!',
    //         message:'Account Created',
    //         variant:'success'
    //     })
    //     this.dispatchEvent(evt)
    }
toastHandlerTwo(){
    this.showToast('Error!!', 'Account Creation failed','error')
    // const evt = new ShowToastEvent({
    //     title:'Error!!',
    //     message:'Account Creation failed',
    //     variant:'error'
    // })
    // this.dispatchEvent(evt)
}

toastHandlerThree(){
    this.showToast('Warning!!', 'Password should have alphanumeric charcters!','warning')
}

toastHandlerFour(){
    this.showToast('Info!!', 'Summer 22 is available!','info')
}
 
//to make this more efficient, create a common method
showToast(title, message, variant){
    const evt = new ShowToastEvent({
        title,
        message,
        variant
    })
    this.dispatchEvent(evt)
}
}