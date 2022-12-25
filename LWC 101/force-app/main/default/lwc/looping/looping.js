import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {

carList = ["Ford", "Audi", "Toyota", "Benz", "Honda"];

//Array of objects
ceoList=[
    {
        id:1,
        company:"Google",
        name: "Sunder Pichal"
    },
    {
        id:2,
        company:"Apple Inc.",
        name: "Tim Cook"
    },
    {
        id:3,
        company:"Facebook",
        name: "Mark Zuckerberg"
    },
    {
        id:4,
        company:"Amazon",
        name: "Jeff Bezos"
    }
]
}