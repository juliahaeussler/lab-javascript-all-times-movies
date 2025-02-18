// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  
    let directors = movies.map(movie => {
        return movie.director;
    }) 

    return directors;
    
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

    if (movies.length == 0) {return 0;}

    let spielbergMovies = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return spielbergMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if(movies.length == 0) {return 0;}
    
    let sumRate = movies.reduce(function(sum, movie){
        if (!movie.rate) {return sum;} 
        return sum + movie.rate;
    }, 0);

    let avgRate = sumRate/movies.length;

    return Math.round(avgRate*100)/100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {

    if (movies.length == 0) {return 0;}

    let dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));

    return ratesAverage(dramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

    let moviesCopy = movies.slice();

    let orderedMovies = moviesCopy.sort(function compare (oneMovie, secondMovie) {
        if (oneMovie.year < secondMovie.year) return -1;
        if (oneMovie.year > secondMovie.year) return 1;
        if (oneMovie.year === secondMovie.year) {
            if (oneMovie.title < secondMovie.title) return -1;
            if (oneMovie.title > secondMovie.title) return 1;
        } 
    });
    return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    
    let secondCopy = movies.slice();

    let allTitles = secondCopy.map(movie => {return movie.title;}); 

    let sortedTitles = allTitles.sort();

    let firstTwenty = sortedTitles.slice(0,20);

    return firstTwenty;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

    let thirdCopy = movies.slice();

    
}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
