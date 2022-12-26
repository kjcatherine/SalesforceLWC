import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={} //for storing answers
    correctAnswers = 0  //used to show number of correct answers
    isSubmitted = false //used to show the reslt to the user
  
    myQuestions=[

        {
            id:"Question1",
            question: "Which one of the following is not a template loop?",
            answers: {
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },

        {
            id:"Question2",
            question: "Which one of the file is invalid in LWC component folder?",
            answers: {
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },

        {
            id:"Question3",
            question: "Which one of the following is not a directive?",
            answers: {
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]
    
    //used for disabling the submit button
    get allNotSelected(){
        //this means if the keys of the selected is equal to the lenght of our array
        //! means the opposite is true then disable submit button
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
    
    //for applying dynamic styling to our result
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ?
        'slds-text-color_success' : 'slds-text-color_error'}`
    }
    
    //changeHandler gets called on every click on the options
    changeHandler(event){
        // console.log("name", event.target.name)
        // console.log("Value", event.target.value)
        const {name, value} = event.target //this is just a short form of the below
        // const name = event.target.name
        // const value = event.target.value
        this.selected = {...this.selected, [name]:value} // e.g [Question1]:"a"
        // it gets stored in this.selected like this - 
        //this.selected={"Question1":"a"} where Question1 is id and a is the value selected for Q1
    }

    //form reset handler
    submitHandler(){
        event.preventDefault() //so our form is not refreshed after submit
        //lets say we have 
        //this.selected = {"Question1":"a", "Question1":"b", "Question1":"c"}
        // we filter through them to check for correct selected answers
        let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer)
        // e.g this.myQuestions.filter(item => "a" === "c")
        //filter returns an array so we store it inside the correctAnswers variable
        this.correctAnswers = correct.length
        this.isSubmitted = true;
        //console.log("this.correctAnswers", this.correctAnswers)
    }
    
    //form reset handler
    resetHandler(){
        this.selected = {}
        this.correctAnswers = 0
        this.isSubmitted = false
    }
}

//On submit, we want to show a message to the user of how many correct answers they have