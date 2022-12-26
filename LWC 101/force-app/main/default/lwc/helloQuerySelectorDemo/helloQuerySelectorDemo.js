import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    fetchDetailHandler(){
        //saving into a variable is a choice
        const elem = this.template.querySelector('h1');
        console.log(elem.innerText)
    }
}