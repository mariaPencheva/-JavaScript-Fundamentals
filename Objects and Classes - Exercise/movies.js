function movies(arr) {
    let movies = [];

    for (let command of arr){

        if (command.includes('addMovie')){ //string & array use includes();
            let movieName = command.split('addMovie ')[1];
            //console.log(movieName);
            let movieObj = { name: movieName};
            movies.push(movieObj);

        } else if (command.includes('directedBy')){
            //let [movieName, director] = command.split(' directedBy ')

            let movieName = command.split(' directedBy ')[0];
            let directorName = command.split(' directedBy ')[1];

            // console.log(movieName);
            // console.log(director);

            let movie = movies.find(movie => movie.name == movieName) //от филмите - масива с обектите, намери филм - обект, чието име отговаря на нашето име; ако метода find намери името, ще ни върне true, а иначе връща 'undefined'; 
            if (movie) {
                movie.director = directorName; //към текущия обект - за филм, добави режисьор, чието име е directorName
            }

        } else if (command.includes('onDate')){
            let movieName = command.split(' onDate ')[0];
            let movieDate = command.split(' onDate ')[1];

            let movie = movies.find(movie => movie.name == movieName)

            if (movie) {
                movie.date = movieDate;
            }
        }

        //console.log(command);
    }

    for (let movie of movies){
        //console.log(movie);
        if (movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    }   

}

movies(
    [ 'addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen' ]
);