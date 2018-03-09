/*eslint-env browser*/
//STEP 1
/*var favoriteMovies = ["Black Panther", "Titanic", "The Godfather", "Daddy's Daycar", "Star Wars"];
window.console.log(favoriteMovies[1]);*/

//STEP 2
/*var movies = new Array(5);
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
window.console.log(movies[0]);*/

//STEP 3
/*var movies = new Array(5);
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
movies[5] = "Logan";
window.console.log(movies.length);*/

//STEP 4
/*var movies = [];
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
delete movies[0];
window.console.log(movies);*/


//STEP 5
/*var movies = [];
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
movies[5] = "Logan";
movies[6] = "Inception";
var i;
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i] + "\n");
}*/

//STEP 6
/*
var movies = [];
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
movies[5] = "Logan";
movies[6] = "Inception";
var i;
for (i in movies) {
    if (movies.hasOwnProperty(i)) {
      window.console.log(movies[i] + "\n");
}
}
*/

//STEP 7
/*var movies = [];
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
movies[5] = "Logan";
movies[6] = "Inception";
var i;
movies.sort();
for (i in movies) {
    if (movies.hasOwnProperty(i)) {
      window.console.log(movies[i] + "\n");
}
}*/

//STEP 8
/*var movies = [];
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
movies[5] = "Logan";
movies[6] = "Inception";
var leastFavMovies = [];
leastFavMovies[0] = "The Post";
leastFavMovies[1] = "Toy Story";
leastFavMovies[2] = "Baby Boss";
var i;
window.console.log("Movies I like\n\n\n\n");
for (i in movies) {
    if (movies.hasOwnProperty(i)) {
     window.console.log(movies[i] + "\n");
}
}
window.console.log("\n\n\n\n");
window.console.log("Movies I reget to watch\n\n\n\n");
for (i in leastFavMovies) {
    if (movies.hasOwnProperty(i)) {
      window.console.log(leastFavMovies[i] + "\n");
}
}*/


//STEP 9
/*var movies = [];
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
movies[5] = "Logan";
movies[6] = "Inception";
var leastFavMovies = [];
leastFavMovies[0] = "The Post";
leastFavMovies[1] = "Toy Story";
leastFavMovies[2] = "Baby Boss";
var i;
movies = movies.concat(leastFavMovies);
window.console.log("concation movies \n\n\n");
for (i in movies) {
    if (movies.hasOwnProperty(i)) {
      window.console.log(movies[i] + "\n");
}
}
movies.sort();
window.console.log("\n\n\nsorted movies \n\n\n");
for (i in movies) {
    if (movies.hasOwnProperty(i)) {
     window.console.log(movies[i] + "\n");
}
}
movies.reverse();
window.console.log("\n\n\nreverse-sort movies \n\n\n");
for (i in movies) {
    if (movies.hasOwnProperty(i)) {
      window.console.log(movies[i] + "\n");
}
}*/

//STEP 10
/*var movies = [];
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
movies[5] = "Logan";
movies[6] = "Inception";
var leastFavMovies = [];
leastFavMovies[0] = "The Post";
leastFavMovies[1] = "Toy Story";
leastFavMovies[2] = "Baby Boss";
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
movies = movies.pop();
window.console.log(movies);*/

//STEP 11
/*var movies = [];
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
movies[5] = "Logan";
movies[6] = "Inception";
var leastFavMovies = [];
leastFavMovies[0] = "The Post";
leastFavMovies[1] = "Toy Story";
leastFavMovies[2] = "Baby Boss";
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
movies = movies.shift();
window.console.log(movies);*/

//STEP 12
/*var movies = [];
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
movies[5] = "Logan";
movies[6] = "Inception";
movies[7] = "The Post";
movies[8] = "Toy Story";
movies[9] = "Baby Boss";
var x = movies.indexOf("The Post");
movies.splice(x, 1, "Wonder");
var y = movies.indexOf("Toy Story");
movies.splice(y, 1, "Spider Man");
var z = movies.indexOf("Baby Boss");
movies.splice(z, 1, "It");
window.console.log(movies);*/

//STEP 13
/*var employee1 = [];
employee1.id = 4235;
employee1.name = "Zak Ruvalcaba";
employee1.title = "Web Developer";
employee1.department = "Engineering";
employee1.isCurrent = true;
var employee2 = [];
employee2.id = 4236;
employee2.name = "John";
employee2.title = "full stack developer";
employee2.department = "information technology";
employee2.isCurrent = true;
var employee = [];
employee.push(employee1);
employee.push(employee2);
window.console.log(employee[1].name);*/

//STEP 14
/*var employee1 = [];
employee1.id = 4235;
employee1.name = "Zak Ruvalcaba";
employee1.title = "Web Developer";
employee1.department = "Engineering";
employee1.isCurrent = true;
var employee2 = [];
employee2.id = 4236;
employee2.name = "John";
employee2.title = "full stack developer";
employee2.department = "information technology";
employee2.isCurrent = true;
var employee = [];
employee.push(employee1);
employee.push(employee2);
var i;
for (i = 0; i < employee.length; i += 1) {
   window.console.log(employee[i].name);
}*/

//STEP 15
/*\var employee1 = [];
employee1["id"] = 4235;
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;
var employee2 = [];
employee2["id"] = 4236;
employee2["name"] = "Mark";
employee2["title"] = "full stack developer";
employee2["department"] = "information technology";
employee2["isCurrent"] = true;
var employee3 = [];
employee3["id"] = 4267;
employee3["name"] = "Johny";
employee3["title"] = "Software Engineer";
employee3["department"] = "Computer Science";
employee3["isCurrent"] = false;
var employee = [];
employee.push(employee1);
employee.push(employee2);
employee.push(employee3);
var i;
for(i =0; i < employee.length; i += 1) {
    if(employee[i].isCurrent === true) {
   window.console.log(employee[i].name); 
}
}*/

//STEP 16
/*var movies = [["Black Panther", 1], ["Titanic", 2], ["The Godfather", 3], ["Daddy's Daycar", 4], ["Star Wars", 5]];
var moviesName = [];
movies.filter(function(movie) {
    
    if(typeof movie[0] !== "number") {
       moviesName.push(movie[0]); 
    }
    return moviesName;
});
window.console.log(moviesName);*/


//STEP 17
/*var employee = ["Zak", "Mike", "Jessica", "Fred", "Mark"];
var showEmployee = function (p) {
   "use strict";
    window.console.log("Employees: \n\n\n\n");
    var i;
    for (i = 0; i < p.length; i += 1) {
        window.console.log(p[i] + "\n");
    }
        
}; showEmployee(employee);*/

//STEP 18
/*var filterValues = function (para) {
    "use strict";
    var i, result =[];
    for (i = 0; i < para.length; i += 1) {        
        if ((para[i] !== false) && (para[i] !== null) && (para[i] !== "") && (para[i] !== 0)) {
         result.push(para[i]);
    }
    }
    return result;
};
window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));*/


//STEP 19
/*var items = [254, 45, 212, 365, 2543, 56, 76, 87, 5, 3];
function randomItem(items) {
	"use strict";
	return items[Math.floor(Math.random() * items.length)];
}
window.console.log(randomItem(items));*/


//STEP 20

/*var myArray = [100, 150, 200, 99, 68, 7, 24];
function largeNumber(myArray) {
    "use strict";
	var largeNum = 0, i;
for (i = 0; i < myArray.length; i += 1) {
    if (myArray[i] > largeNum) {
        largeNum = myArray[i];
     }
}
window.console.log(largeNum);
} largeNumber(myArray);*/
