import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isChildVisible = false;
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
    // name;
    // changeHandler(event){
    //     this.name = event.target.value;
    // }
    handleClick(){
        //toggle it
        this.isChildVisible = !this.isChildVisible;
    }
    errorCallback(error, stack){
        console.log(error.message)
        console.log(stack) //this tells us what comp was rendering when this error happened
    }
}