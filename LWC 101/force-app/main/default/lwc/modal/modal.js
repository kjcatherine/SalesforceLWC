import { LightningElement } from 'lwc';

export default class Modal extends LightningElement {
    
    closeModal(){
        const customEvent = new CustomEvent('close')
        this.dispatchEvent(customEvent)
    }
    handleSlotFooterChange(){
        const footerEl = this.template.querySelector('.slds-modal__footer')
        if(footerEl){
            footerEl.classList.remove('slds-hide')
        }
    }
    handleSlotHeaderChange(){
        const headerEl = this.template.querySelector('slds-modal__header')
        if(headerEl){
            headerEl.classList.remove('.remove_header')
        }
    }
}