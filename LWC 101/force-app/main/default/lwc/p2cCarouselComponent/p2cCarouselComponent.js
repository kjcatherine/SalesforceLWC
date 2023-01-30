import { LightningElement, api } from 'lwc';

export default class P2cCarouselComponent extends LightningElement {
    //Non-primitive parent to child
    @api carouselDetails;
}