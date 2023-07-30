import { LightningElement } from 'lwc';

export default class NewConditionalDirectives extends LightningElement {
    showText = false

    get getLabel(){
        return this.showText ? 'Hide text' : 'Show Text'
    }

    showTextHandler(){
        this.showText= !this.showText
    }
}