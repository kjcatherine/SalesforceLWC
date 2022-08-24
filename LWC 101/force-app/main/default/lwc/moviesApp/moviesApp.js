import { LightningElement, track } from 'lwc';

export default class MoviesApp extends LightningElement {
    @track moviesData;
    // query=''
    // timer
    connectedCallback() {
        this.fetchMovieData()
    }

    fetchMovieData(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=78979c75fb54c40e6eeca19518342eda&language=en-US')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("Api Response from tmdb", data);
                this.moviesData = data.results.map(movie => ({
                    ...movie,
                    imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }));
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    // fetchMoviesHandler(event){
    //     this.query= event.target.value
    //     window.clearTimeout(this.timer)
    //     this.timer = setTimeout(()=>{
    //         this.fetchMovieData()
    //     }, 1000)
    // }
}



// import { LightningElement, track } from 'lwc';
// const URL = 'https://moviesdatabase.p.rapidapi.com/titles';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'db4a3d608amshd62221589fb8e9bp1d125fjsna9bdb99c70a6',
//         'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
//     }
// };
// export default class MoviesApp extends LightningElement {

//     @track moviesData
//     connectedCallback() {
//         this.fetchData();
//     }
    
//     fetchData() {
//         fetch(URL, options)
//             .then(response => {
//                 if (response.ok) {
//                     return response.json();
//                 }
//                 throw new Error('Network response was not ok.');
//             })
//             .then(data => {
//                 console.log('API response:', data);
//                 //this.moviesData = data
//                 this.moviesData = Object.assign({}, data);

//                 console.log('Is data realy coming into moviesData', this.moviesData)
//             })
//             .catch(error => {
//                 console.error('There was a problem with the fetch operation:', error);
//             });
//     }
//     renderedCallback() {
//         console.log('Movies data:', this.moviesData);
//     }
    
    
    // movies
    // connectedCallback(){
    //     this.fetchMovieData()
    // }
    // fetchMovieData(){
    //     fetch(MOVIE_URL)
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         this.movies = data
    //     })
    //     .catch(error=>console.error(error))
    // }
//}