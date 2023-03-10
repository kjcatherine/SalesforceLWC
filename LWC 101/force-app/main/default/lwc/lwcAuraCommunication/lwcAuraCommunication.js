import { LightningElement, api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api title;

    callAura(){
        //creating event
      const event =  new CustomEvent('sendmsg', {
            detail:{
                "msg":"Hello from Lwc"
            }
        })
        this.dispatchEvent(event)
    }
}