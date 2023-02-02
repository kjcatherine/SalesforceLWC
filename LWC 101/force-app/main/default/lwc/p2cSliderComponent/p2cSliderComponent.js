import { LightningElement, api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    val=20
    changeHandler(event){
        this.val = event.target.value
    }

    //expose this to parent using api, first we call this in the parent js
   @api resetSlider(){
        this.val = 50
    }
}