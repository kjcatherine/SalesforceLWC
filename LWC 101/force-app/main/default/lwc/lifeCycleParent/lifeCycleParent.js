import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {

    //the 3 mounting phase hooks
    constructor(){
        super();
        console.log("parent constructor called")
        //say we have a <div class="xyz"</div> in html, we cant query it as below
        // this.template.querySelector('.abc') beacuse the dom is not ready
        //this.template.addEventListener('mouseover', function)
        // when you want to attach a listener at a parent level, above works
        // though we rarely implement this
    }
    connectedCallback(){
        console.log('Parent connectedCallback called') //notice that constructor gets called firt and this second
    }
    renderedCallback(){
        console.log('Parent renderedCallback called')
    }
}