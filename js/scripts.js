
function switchTurn() {
  if (document.turn === "X") {
    document.turn = "O";
  } else {
    document.turn = "X";
  }
  document.getElementById("message").innerHTML = document.turn + " gets to go";
  winner();
}
function nextmove(square) {

  if(square.innerText === "") {
    square.innerText = document.turn;
  }else {
    alert("that space is taken");
    switchTurn();
  }
  switchTurn();
  return square.innerText;
}

function getBox(number) {
  return document.getElementById("space"+number).innerHTML;

}

function winner() {
  if(((getBox(1) === "X") && (getBox(2) === "X") && (getBox(3) === "X")) || ((getBox(4) === "X") && (getBox(5) === "X") && (getBox(6) === "X")) || ((getBox(7) === "X") && (getBox(8) === "X") && (getBox(9) === "X")) || ((getBox(1) === "X") && (getBox(5) === "X") && (getBox(9) === "X")) || ((getBox(3) === "X") && (getBox(5) === "X") && (getBox(7) === "X")) || ((getBox(1) === "X") && (getBox(4) === "X") && (getBox(7) === "X")) || ((getBox(2) === "X") && (getBox(5) === "X") && (getBox(8) === "X")) || ((getBox(3) === "X") && (getBox(6) === "X") && (getBox(9) === "X"))){
    document.getElementById("message").innerHTML = "X is the winner!";
    document.turn= "";

  }else if(((getBox(1) === "O") && (getBox(2) === "O") && (getBox(3) === "O")) || ((getBox(4) === "O") && (getBox(5) === "O") && (getBox(6) === "O")) || ((getBox(7) === "O") && (getBox(8) === "O") && (getBox(9) === "O")) || ((getBox(1) === "O") && (getBox(5) === "O") && (getBox(9) === "O")) || ((getBox(3) === "O") && (getBox(5) === "O") && (getBox(7) === "O")) || ((getBox(1) === "O") && (getBox(4) === "O") && (getBox(7) === "O")) || ((getBox(2) === "O") && (getBox(5) === "O") && (getBox(8) === "O")) || ((getBox(3) === "O") && (getBox(6) === "O") && (getBox(9) === "O"))){
    document.getElementById("message").innerHTML = "O is the winner!";
    document.turn= "";
  }else if (((getBox(1) != "") && (getBox(2) != "") && (getBox(3) != "") && (getBox(4) != "") && (getBox(5) != "") && (getBox(6) != "") && (getBox(7) != "") && (getBox(8) != "") && (getBox(9) != ""))) {
    document.getElementById("message").innerHTML = "tie";
  }
}



function reset() {
  document.getElementById("space1").innerHTML = "";
  document.getElementById("space2").innerHTML = "";
  document.getElementById("space3").innerHTML = "";
  document.getElementById("space4").innerHTML = "";
  document.getElementById("space5").innerHTML = "";
  document.getElementById("space6").innerHTML = "";
  document.getElementById("space7").innerHTML = "";
  document.getElementById("space8").innerHTML = "";
  document.getElementById("space9").innerHTML = "";
}

//user interface logic:

$(document).ready(function() {
  $("button#start").click(function() {
    startGame();
  })

  function startGame(){
    document.turn= "X";
  }

  $("button#reset").click(function() {
    reset();
  })



})
