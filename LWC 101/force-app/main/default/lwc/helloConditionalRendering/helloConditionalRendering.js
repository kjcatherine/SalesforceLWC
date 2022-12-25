import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {

    isVisible = false;
    name;

    handleClick(){
        this.isVisible = true;
    }

    //demoing getter again, as soon as you type in the input field, 
    //this receives an event, we also defined name as undefined

    changeHandler(event){
    this.name = event.target.value;
    }

    get helloMethod(){
        return this.name === 'hello';
    }


}