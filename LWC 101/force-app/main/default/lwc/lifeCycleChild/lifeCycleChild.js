import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    //the 3 mounting phase hooks
    constructor(){
        super();
        console.log("child constructor called")
    }
    //interval;
    connectedCallback(){
        console.log('child connectedCallback called') //notice that constructor 
        //gets called first and this second
        //attaching eventlistener to window obj can cause a memory leak so we remove it in discocallba
        //window.addEventListener('click', this.handleClick)
        //we need to store this in a variable to be able to explicily remove it later
        //this.interval = window.setInterval()
        //demonstrating error component which we will catch in the parent component
        throw new Error('Loading of child component failed')
    }
    renderedCallback(){
        console.log('child renderedCallback called')
    }
   
    disconnectedCallback(){
        alert('child disconnectedCallback called!!')
        // window.removeEventListener('click', this.handleClick)
        // window.clearInterval(this.interval)
    }
}