// //alert("Hi welcome to Coffee Plaza!!!");
// let favoriteCoffee = prompt("What is your favorite type of coffee?");
// document.write(favoriteCoffee)
// //const coffeeGoodchoice = ["Latte", "Mocha", "Cappucino", "Black", "Espresso"];
// if (favoriteCoffee == "Latte" ){
//     alert("Good Choice");
// }
// else if (favoriteCoffee == "Mocha" ){
//     alert("Good Choice");
// }
// else if (favoriteCoffee == "Cappucino" ){
//     alert("Good Choice");
// }
// else if (favoriteCoffee == "Black" ){
//    alert("I'm not judging because I know you're tired.");
// }
// else if (favoriteCoffee == "Espresso" ){
//     alert("I'm not judging because I know you're tired.");
//  }
// else if (favoriteCoffee == "Galao"){
//     alert("Would you like a little Coffee with your foam?")
// } 
// else if (favoriteCoffee == "Galao"){
//     alert("Would you like a little Coffee with your foam?")
// } 
// else if (favoriteCoffee == "Galao"){
//     alert("Would you like a little Coffee with your foam?")
// } 
// else if (favoriteCoffee == "Macchiato"){
//     alert("Would you like a little Coffee with your foam?")
// } 
// else if (favoriteCoffee == "Cortado"){
//     alert("Would you like a little Coffee with your milk?")
// } 
// else if (favoriteCoffee == "Flat White"){
//     alert("Would you like a little Coffee with your milk?")
// } 
// else if (favoriteCoffee == "Cafe Au Lait"){
//     alert("Would you like a little Coffee with your milk?")
// } 

// else if (favoriteCoffee == "Red Eye"){
//     alert("Seek help immediatly")
// } 
// else if (favoriteCoffee == "Doppio"){
//     alert("Seek help immediatly")
// } 
// else if (favoriteCoffee == "Lungo"){
//     alert("Seek help immediatly")
// } 
// else if (favoriteCoffee == "Ristretto"){
//     alert("You have way too much energy already if that's all the caffine you need.")
// } 
// else if (favoriteCoffee == "Americano"){
//     alert("You have way too much energy already if that's all the caffine you need.")
// } 
// else if (favoriteCoffee == "Affogato"){
//     alert("You're actually really cool.")
// } 
// else if (favoriteCoffee == "Irish"){
//     alert("You're actually really cool.")
// } 
// else {
//     alert("This doesn't exsist because I said so or you typed something incorrectly. Look at the picture below and refresh the page and type one of the options.")
// }

//Structure of A Function

//Function Declaration(prefered)

//function functionName(parameters){
  // code to be executed - steps;
//}
// let favoriteCoffee
// function coffeeChoice(){
//     favoriteCoffee = prompt("What is your favorite type of coffee?");
//     console.log(favoriteCoffee);
//     document.write(favoriteCoffee);
//     console.log("This is the console of the function", coffeeChoice())
//     return coffeeChoice;
// }

// console.log("This is the console of the function", coffeeChoice())
// let yourCoffee = coffeeChoice;
// console.log("Your coffee here", yourCoffee);
// coffeeChoice();
// console.log(favoriteCoffee);

// function  expression<--- dont do this rn

// let newFunction = function()

// --------------------








//Define a variable outside of the function
let favoriteCoffee;
function coffeeChoice(){
    //Set the variable equal to anything you want(in this case it is set to a promt)
    favoriteCoffee = prompt("What is your favorite type of coffee?");
    favoriteCoffee = favoriteCoffee.toLowerCase();
    console.log(favoriteCoffee);
    document.write(favoriteCoffee);
    console.log("This is the console of the function");
    
}
// console.log("Your coffee here", yourCoffee);
// coffeeChoice();

function customAlert(){
    if (favoriteCoffee == "latte" ){
            alert("Good Choice");
            document.write("Good Choice")
        }
         else if (favoriteCoffee == "mocha" ){
            alert("Good Choice");
            document.write("Good Choice")
        }
        else if (favoriteCoffee == "cappucino" ){
            alert("Good Choice");
            document.write("Good Choice");
        }
        else if (favoriteCoffee == "black" ){
           alert("I'm not judging because I know you're tired.");
           document.write("I'm not judging because I know you're tired.");
        }
        else if (favoriteCoffee == "espresso" ){
            alert("I'm not judging because I know you're tired.");
            document.write("I'm not judging because I know you're tired.");
         }
        else if (favoriteCoffee == "galao"){
            alert("Would you like a little Coffee with your foam?");
            document.write("Would you like a little Coffee with your foam?");
        } 
        else if (favoriteCoffee == "Galao"){
            alert("Would you like a little Coffee with your foam?");
            document.write("Would you like a little Coffee with your foam?");
        } 
        else if (favoriteCoffee == "Galao"){
            alert("Would you like a little Coffee with your foam?");
            document.write("Would you like a little Coffee with your foam?");
        } 
        else if (favoriteCoffee == "macchiato"){
            alert("Would you like a little Coffee with your foam?");
            document.write("Would you like a little Coffee with your foam?");
        } 
        else if (favoriteCoffee == "cortado"){
            alert("Would you like a little Coffee with your milk?");
            document.write("Would you like a little Coffee with your milk?");
        } 
        else if (favoriteCoffee == "flat White"){
            alert("Would you like a little Coffee with your milk?"); 
            document.write("Would you like a little Coffee with your milk?");
        } 
        else if (favoriteCoffee == "aafe au lait"){
            alert("Would you like a little Coffee with your milk?");
            document.write("Would you like a little Coffee with your milk?");
        } 
        
        else if (favoriteCoffee == "red eye"){
            alert("Seek help immediatly");
            document.write("Seek help immediatly");
        } 
        else if (favoriteCoffee == "doppio"){
            alert("Seek help immediatly");
            document.write("Seek help immediatly");

        } 
        else if (favoriteCoffee == "lungo"){
            alert("Seek help immediatly");
            document.write("Seek help immediatly");

        } 
        else if (favoriteCoffee == "ristretto"){
            alert("You have way too much energy already if that's all the caffine you need.");
            document("You have way too much energy already if that's all the caffine you need.");
        } 
        else if (favoriteCoffee == "americano"){
            alert("You have way too much energy already if that's all the caffine you need.");
            document.write("You have way too much energy already if that's all the caffine you need.");
        } 
        else if (favoriteCoffee == "affogato"){
            alert("You're actually really cool.");
            document.writealert("You have way too much energy already if that's all the caffine you need.");
        } 
        else if (favoriteCoffee == "irish"){
            alert("You're actually really cool.");
            document.write("You're actually really cool.");
        } 
        else {
            alert("This doesn't exsist because I said so or you typed something incorrectly. Look at the picture below and refresh the page and type one of the options.");
            document.write("This doesn't exsist because I said so or you typed something incorrectly. Look at the picture below and refresh the page and type one of the options.");

        }
    console.log();
}


// customAlert();

let rating = prompt("How many star would you rate my Plaza? From 1-5");
 console.log(rating)

for (let i = 0; i < rating && i < 5; i++){
    console.log(i);
    // Use single quotes for the inside of your code and use double quotes for the out side of the code in the paraenthesis
    document.write("<img class = 'ratingPictures' src = 'preview.jpg'/>");
}
let likeCoffee = prompt("Do you like Coffee?");

while (likeCoffee.toLowerCase() != "yes") {
    likeCoffee = prompt("Do you like Coffee?");
}