import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    /*****Data binding example***** */
    fullName = "Zero to Hero";
    title = "aura";
    changeHandler(event){
        this.title  = event.target.value;//whenever youre accessing a property 
        //inside a class, you need to use this.propertyname
    }

    /******track binding example**** */
    @track address={
        city: "tennessee",
        postcode: 37077,
        country: "USA"
    }
    @track userList = ["A", "B", "C"]

    trackHandler(event){
        this.address.city = event.target.value;
        this.userList[0] = ""
    }

    //Destructuring method
    address={
        city: "tennessee",
        postcode: 37077,
        country: "USA"
    }

    trackHandler(event){
        this.address = {...this.address, "city":event.target.value};
    }

    /***********Getter example************* */
users = ["Mary", "Jay", "Blige"]
num1 = 10;
num2 = 20;

get firstUser(){
    return this.users[0].toUpperCase();
}
get multiply(){
    return this.num1 * this.num2;
}









    /*name;
    age = 30;
    showData = false;
    details={
        name:"dummy",
        place:"Canada"
    }
    userList = ["A", "B", "C"] //these are all properties
    fullName = "Zero to Hero";

    //methods
    getName(){

    }*/

}