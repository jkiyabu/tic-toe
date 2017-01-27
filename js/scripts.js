function message(msg){
  document.getElementById("message").innerHTML = msg;
}

function startGame(){
  document.turn= "X";
  message("Let's do this!") ;
}

function nextmove(mark) {
  if(mark.innerText === "") {
    mark.innerText = document.turn;
  }else{
    alert("that space is taken");
    switchTurn();
  }
  switchTurn();
  return mark.innerText;
}

function switchTurn() {
  if (document.turn === "X") {
    document.turn = "O";
  } else {
    document.turn = "X";
  }

  message(document.turn + " gets to go") ;
  winner();
}
function Square(ynumber, yindex) {
  this.ynumber = ynumber;
  this.yindex= yindex;
}
var y1 = document.getElementsByClassName("y1");
var y2 = document.getElementsByClassName("y2");
var y3 = document.getElementsByClassName("y3");

var newSquare1 = new Square(y1, 0);
var newSquare2 = new Square(y1, 1);
var newSquare3 = new Square(y1, 2);
var newSquare4 = new Square(y2, 0);
var newSquare5 = new Square(y2, 1);
var newSquare6 = new Square(y2, 2);
var newSquare7 = new Square(y3, 0);
var newSquare8 = new Square(y3, 1);
var newSquare9 = new Square(y3, 2);

function winner() {
  if ((newSquare1.ypos() === newSquare2.ypos()) && (newSquare2.ypos() === newSquare3.ypos())){

    message("X is the WINNER!!");

  }else if(((newSquare4.ypos() === newSquare5.ypos()) && (newSquare5.ypos() === newSquare6.ypos()))) {
    message("O is the WINNER!!");

  }
    // if (document.turn === "O"){
    // }else{
    //   message("O is the WINNER!!");
    // }
  document.turn= "";
  }
}


$(document).ready(function(){
  //user interface logic:
  $("button#start").click(function() {
    startGame();
    $("#board").show();
    $("button#start").hide();
    $("button#reset").show();
  })
  $("button#reset").click(function() {
     reset();
   })

   Square.prototype.ypos = function () {
     return this.ynumber[this.yindex].innerText;
   };





});


  // var squares= [];
  // function createArray() {
  //    squares.push(newSquare1,newSquare2,newSquare3,newSquare4,newSquare5,newSquare6,newSquare7,newSquare8,newSquare9);
  //    return squares;
  // }
  // //
  // // for(i = 0; i <= squares.length; i++){
  // //   return squares[i].ypos();
  // // }



//
// function winner() {
//   if(((getBox(1) === "X") && (getBox(2) === "X") && (getBox(3) === "X")) || ((getBox(4) === "X") && (getBox(5) === "X") && (getBox(6) === "X")) || ((getBox(7) === "X") && (getBox(8) === "X") && (getBox(9) === "X")) || ((getBox(1) === "X") && (getBox(5) === "X") && (getBox(9) === "X")) || ((getBox(3) === "X") && (getBox(5) === "X") && (getBox(7) === "X")) || ((getBox(1) === "X") && (getBox(4) === "X") && (getBox(7) === "X")) || ((getBox(2) === "X") && (getBox(5) === "X") && (getBox(8) === "X")) || ((getBox(3) === "X") && (getBox(6) === "X") && (getBox(9) === "X"))){
//     document.getElementById("message").innerHTML = "X is the WINNER!!";
//     document.turn= "";
//
//   }else if(((getBox(1) === "O") && (getBox(2) === "O") && (getBox(3) === "O")) || ((getBox(4) === "O") && (getBox(5) === "O") && (getBox(6) === "O")) || ((getBox(7) === "O") && (getBox(8) === "O") && (getBox(9) === "O")) || ((getBox(1) === "O") && (getBox(5) === "O") && (getBox(9) === "O")) || ((getBox(3) === "O") && (getBox(5) === "O") && (getBox(7) === "O")) || ((getBox(1) === "O") && (getBox(4) === "O") && (getBox(7) === "O")) || ((getBox(2) === "O") && (getBox(5) === "O") && (getBox(8) === "O")) || ((getBox(3) === "O") && (getBox(6) === "O") && (getBox(9) === "O"))){
//     document.getElementById("message").innerHTML = "O is the WINNER!!";
//     document.turn= "";
//   }else if (((getBox(1) != "") && (getBox(2) != "") && (getBox(3) != "") && (getBox(4) != "") && (getBox(5) != "") && (getBox(6) != "") && (getBox(7) != "") && (getBox(8) != "") && (getBox(9) != ""))) {
//     document.getElementById("message").innerHTML = "Tie, you both LOSE!!";
//   }
// }
//
// function reset() {
//   document.getElementById("space1").innerHTML = "";
//   document.getElementById("space2").innerHTML = "";
//   document.getElementById("space3").innerHTML = "";
//   document.getElementById("space4").innerHTML = "";
//   document.getElementById("space5").innerHTML = "";
//   document.getElementById("space6").innerHTML = "";
//   document.getElementById("space7").innerHTML = "";
//   document.getElementById("space8").innerHTML = "";
//   document.getElementById("space9").innerHTML = "";
//   startGame();
//
// }
//
//
//
//
// })
