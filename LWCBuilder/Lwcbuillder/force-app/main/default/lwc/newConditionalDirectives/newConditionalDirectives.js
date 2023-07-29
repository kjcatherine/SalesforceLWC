import { LightningElement } from 'lwc';

export default class NewConditionalDirectives extends LightningElement {
    showText = false
    showTextHandler(){
        this.showText= true
    }
}