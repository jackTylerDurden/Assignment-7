//STEP 1
var myFavoriteMovies = ["Fight Club", "Whiplash", "Scott Pilgrim V/S The World", "Pulp Fiction", "Birdman"];
window.console.log("Step 1 : My second favorite movie is ", myFavoriteMovies[1]);
window.console.log("\n\n");

//STEP 2
var movies = new Array(5);
var i;
for (i = 0; i < myFavoriteMovies.length; i += 1) {
    movies[i] = myFavoriteMovies[i];
}
window.console.log("Step 2 : My favorite movie is ", movies[0]);
window.console.log("\n\n");

//STEP 3
movies.splice(2, 0, "Se7en");
window.console.log("Step 3 :Number of my favorite movies is ", movies.length);
window.console.log("\n\n");

//STEP 4
var moviesStep4 = [];
window.console.log("Step 4 :");
for (i = 0; i < movies.length; i += 1) {
    moviesStep4[i] = movies[i];
}
delete moviesStep4[0];
moviesStep4.forEach(function (movie) {
    "use strict";
    window.console.log(movie + "\n");
});
window.console.log("\n\n");
//STEP 5
window.console.log("Step 5 :");
var moviesStep5 = [];
for (i = 0; i < myFavoriteMovies.length; i += 1) {
    moviesStep5[i] = myFavoriteMovies[i];
}
moviesStep5[5] = "The Avengers : Infinity War";
moviesStep5[6] = "What we do in the shadows";
window.console.log("Using for loop\n");
for (i = 0; i < moviesStep5.length; i += 1) {
    window.console.log("movie " + moviesStep5[i]);
}
window.console.log("\n\n");


//STEP 6
window.console.log("Step 6 : Using for in loop\n");
var index;
for (index in moviesStep5) {
    if (moviesStep5.hasOwnProperty(index)) {
        window.console.log("movie " + moviesStep5[index]);
    }
}
window.console.log("\n\n");

//STEP 7
window.console.log("Step 7 : Using for in  loop in sorted order\n");
var moviesStep7 = moviesStep5.sort();
for (index in moviesStep7) {
    if (moviesStep7.hasOwnProperty(index)) {
        window.console.log("movie " + moviesStep7[index]);
    }
}
window.console.log("\n\n");

//STEP 8
var leastFavMovies = ["The Room", "Baywatch", "Jumanji"];
window.console.log("Step 8 : \n");

window.console.log("Movies I like: \n");
myFavoriteMovies.forEach(function (movie) {
    "use strict";
    window.console.log(movie + "\n");
});
window.console.log("\n");

window.console.log("Movies I regret watching : \n");
leastFavMovies.forEach(function (movie) {
    "use strict";
    window.console.log(movie + "\n");
});
window.console.log("\n\n");

//STEP 9
window.console.log("Step 9 : \n");
var moviesStep9 = myFavoriteMovies.concat(leastFavMovies);
moviesStep9 = moviesStep9.sort().reverse();
moviesStep9.forEach(function (movie) {
    "use strict";
    window.console.log(movie + "\n");
});
window.console.log("\n\n");
//STEP 10
window.console.log("Step 10 : \n");
window.console.log("Last movie---------->> ", moviesStep9.slice(moviesStep9.length - 1));

