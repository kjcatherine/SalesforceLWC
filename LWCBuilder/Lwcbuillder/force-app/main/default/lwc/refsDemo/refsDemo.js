import { LightningElement } from 'lwc';

export default class RefsDemo extends LightningElement {
    submitHandler(){
        console.log("this.refs.nameRef", this.refs.nameRef)
        //Equivalent to event.target
        const nameVal = this.refs.nameRef.value
        const ageVal = this.refs.ageRef.value
        console.log("nameValue", nameVal)
        console.log("ageValue", ageVal)

        this.refs.responseRef.innerHTML = `<p>Submitted Name is ${nameVal} and Age is ${ageVal}</p>`
    }
}