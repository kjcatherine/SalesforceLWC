import { LightningElement } from 'lwc';
import CAROUSEL_IMAGES from '@salesforce/resourceUrl/carousel'
export default class CustomCarouselWrapper extends LightningElement {
    slides = [
        {
            image:`${CAROUSEL_IMAGES}/carousel/photo1.jpg`,
            heading:'Caption one',
            description:'Descripton of the first Carousel comes here'
        },
        {
            image:`${CAROUSEL_IMAGES}/carousel/photo2.jpg`,
            heading:'Caption two',
            description:'Descripton of the second Carousel comes here'
        },
        {
            image:`${CAROUSEL_IMAGES}/carousel/photo3.jpg`,
            heading:'Caption three',
            description:'Descripton of the third Carousel comes here'
        }
    ]
}