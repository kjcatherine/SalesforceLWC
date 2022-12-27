import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    userNames =["John", "James", "Hayley", "Mary"]
    fetchDetailHandler(){
        //saving into a variable is a choice
        const elem = this.template.querySelector('h1');
        //querying the divs
        const userElements = this.template.querySelectorAll(".name")
        //userElements is not exactly an array so convert with Array.from before looping over it
        Array.from(userElements).forEach(item =>{
            console.log(item.innerText)
        })
        console.log(elem.innerText)
    }
}