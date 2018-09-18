// creating objects and setting your variables
var food = {
    burger:{
        value:0
    },
    taco:{
        value:0
    },
    chicken:{
        value:0
    },
    hotdog:{
        value:0
    }

}

var yourscore = 0;
var matchscore = 0;
var wincount = 0;
var losecount= 0;

//functions
var getrandom = function(min, max){
     return Math.floor(Math.random() *(max - min  + 1) + min);
}

var startgame = function() {
    //start your score at 0
     var yourscore = 0;
    // get you random number between 20 and 100 for the score you need to match
     matchscore = getrandom(20, 100);
    //display to your html
    $("#your-score").html(yourscore); 
    $("#randnumber").html(matchscore);
    }
startgame();

var setfood = function(){
    food.burger.value = getrandom(1, 15);
    food.taco.value = getrandom(20, 100);
    food.chicken.value = getrandom(20, 100);
    food.hotdog.value = getrandom(20, 100);
}



$(document).ready(function() {

  $( "#burger" ).on( "click" , setfood );
  $( "#taco" ).on( "click" , setfood );
  $( "#chicken" ).on( "click" ,setfood);
  $( "#hotdog" ).on( "click" ,setfood);
  
  });