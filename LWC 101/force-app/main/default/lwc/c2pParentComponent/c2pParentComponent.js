import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal=false;
    msg;
    clickHandler(){
        this.showModal = true;
    }
    //we also have closehandler on the child, this can be any name we waant
//     closeHandler(){
//         this.showModal = false;
//     }
// }
//to receiev the detail passed from the event in child we recieve event here
closeHandler(event){
    this.msg = event.detail
    this.showModal = false;
}
}