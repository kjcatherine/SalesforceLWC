import { LightningElement } from 'lwc';
const MOVIE_URL = 'https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids'
export default class MoviesApp extends LightningElement {
    movies
    connectedCallback(){
        this.fetchMovieData()
    }
    fetchMovieData(){
        fetch(MOVIE_URL)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            this.movies = data
        })
        .catch(error=>console.error(error))
    }
}