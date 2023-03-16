import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
//to get the receive the data that is published by comp A
import { subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe } from 'lightning/messageService';
export default class LmsComponentX extends LightningElement {
    receivedMessage;
    subscription;
    @wire(MessageContext)
    context;

    connectedCallback(){
        this.subscribeMessage()
    }
    // subscribe(messageContext, messageChannel, listener, subscriberOptions)
    subscribeMessage(){
        this.subscription = subscribe(this.context, SAMPLEMC, (message)=>{this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
    }
    handleMessage(message){
        this.receivedMessage = message.lmsData.value ? message.lmsData.value : "No Message Published"
    }
    unsubscribeMessage(){
        unsubscribe(this.subscription)
        this.subscription = null
    }
    
}