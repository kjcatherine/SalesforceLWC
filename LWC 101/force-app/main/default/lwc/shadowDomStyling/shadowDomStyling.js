import { LightningElement } from 'lwc';
    
export default class ShadowDomStyling extends LightningElement {
    renderedCallback(){
        const style = document.createElement('style');
        //this above generates a <style></style> behind the scenes
        style.innerText = `c-shadow-dom-styling .slds-button{
            background: red;
            color: white;
        }`
        this.template.querySelector('lightning-button').appendChild(style)
        //we copied the .slds button from the shadow dom in inspect

    }
}