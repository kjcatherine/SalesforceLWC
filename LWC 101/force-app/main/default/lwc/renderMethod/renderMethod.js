import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html';
import signupTemplate from './signupTemplate.html';
//optionlly import the main html
import renderTemplate from './renderMethod.html';
export default class RenderMethod extends LightningElement {
    selectedBtn ='';
    render(){
        //return renderTemplate
        return this.selectedBtn === 'Signup' ? signupTemplate : 
                this.selectedBtn === 'Signin' ? signinTemplate :
                renderTemplate;
    }
    handleClick(event){
        this.selectedBtn = event.target.label;
    }
}