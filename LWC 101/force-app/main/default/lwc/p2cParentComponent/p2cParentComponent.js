import { LightningElement, api } from 'lwc';

export default class P2cParentComponent extends LightningElement {

    //Non-primitive parent to child- Create courousel data
    carouselData=[
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header:"First Card",
            description:"First card description."
        },
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header:"Second Card",
            description:"Second card description."
        },
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header:"Third Card",
            description:"Third card description."
        },
    ]

    percentage=10
    changeHandler(event){
        this.percentage = event.target.value
    }
}