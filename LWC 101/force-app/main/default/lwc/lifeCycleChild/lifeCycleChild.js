import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    //the 3 mounting phase hooks
    constructor(){
        super();
        console.log("child constructor called")
    }
    connectedCallback(){
        console.log('child connectedCallback called') //notice that constructor gets called firt and this second
    }
    renderedCallback(){
        console.log('child renderedCallback called')
    }
}