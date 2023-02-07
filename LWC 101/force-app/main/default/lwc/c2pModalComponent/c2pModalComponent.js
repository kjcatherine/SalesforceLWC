import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    closeHandler(){ 
        //const myEvent = new CustomEvent('close') //without data
        // 
        
        //we can also pass complex data as detail
        const myEvent = new CustomEvent('close', {
            detail:{
                msg: "Modal closed successfully"
            }
        }) 

        this.dispatchEvent(myEvent)
    }


    // closeHandler(){ //we create and dispatch event on the child comp in order 
    //                 //to close modal onclick of the ok button
    //     const myEvent = new CustomEvent('close')
    //     this.dispatchEvent(myEvent)
    // }
}