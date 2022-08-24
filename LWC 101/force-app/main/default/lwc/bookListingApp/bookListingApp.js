import { LightningElement } from 'lwc';
const BOOK_URL = 'https://www.googleapis.com/books/v1/volumes?q='
export default class BookListingApp extends LightningElement {
    query='Man'
    books
    timer
    //Call api on the load of the component so we have to use connecteCallBack
    connectedCallback(){
        this.fetchBookData()
    }
    fetchBookData(){
        fetch(BOOK_URL+this.query)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            this.books = data
            console.log('what does book look like', this.books)
        })
        .catch(error=>console.error(error))
    }

    fetchBooksHandler(event){
        this.query= event.target.value
        window.clearTimeout(this.timer)
        this.timer = setTimeout(()=>{
            this.fetchBookData()
        }, 1000)
    }
}