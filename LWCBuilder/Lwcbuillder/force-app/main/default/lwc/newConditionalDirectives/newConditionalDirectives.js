import { LightningElement } from 'lwc';

export default class NewConditionalDirectives extends LightningElement {
    showText = false

    get getLabel(){
        return this.showText ? 'Hide text' : 'Show Text'
    }

    showTextHandler(){
        this.showText= !this.showText
    }

    //Getter demo
    country = 'USA'
    newCountry = 'Canada'
    get isCountryUsa(){
        console.log('isCountryUsa getter called')
        return this.country === 'USA'
    }
    get isCountryCanada(){
        console.log('isCountryCanada getter called')
        return this.newCountry === 'Canada'
    }

    get isCountryUk(){
        console.log('isCountryUk getter called')
        return this.newCountry === 'UK'
    }

    changeHandler(event){
        this.country = event.target.value
    }

    changeHandler1(event){
        this.newCountry = event.target.value
    }
}