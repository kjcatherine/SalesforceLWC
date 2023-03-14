import { LightningElement } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
//to get the receive the data that is published by comp A
import { subscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';
export default class LmsComponentX extends LightningElement {
    receivedMessage;
    @wire(MessageContext)
    context;

    connectedCallback(){
        this.subscribeMessage()
    }
    // subscribe(messageContext, messageChannel, listener, subscriberOptions)
    subscribeMessage(){
        subscribe(this.context, SAMPLEMC, (message)=>{this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
    }
    handleMessage(message){
        this.receivedMessage = message.lmsData.value ? message.lmsData.value : "No Message Published"
    }

    
}