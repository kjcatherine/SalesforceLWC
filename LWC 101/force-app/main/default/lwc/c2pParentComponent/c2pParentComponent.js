import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal=false;
    clickHandler(){
        this.showModal = true;
    }
    //we also have closehandler on the child, this can be any name we waant
    closeHandler(){
        this.showModal = false;
    }
}