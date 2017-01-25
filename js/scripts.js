// function nextmove(square) {
//
// }

// function message(msg){
//   document.getElementById('message').innerHTML = "x gets to start";
// }

function startGame(){
  document.turn= "X";
}

function nextmove(square) {
  if(square.innerText === "") {
    square.innerText = document.turn;
  } else {
    alert("that space is taken");
    switchTurn();
  }
  switchTurn();
  return square.innerText;
}

function switchTurn() {
  if (document.turn === "X") {
    document.turn = "O";
  } else {
    document.turn = "X";
  }
  document.getElementById("message").innerHTML = document.turn + " gets to go";
  winner();
}

function getBox(number) {
  return document.getElementById("space"+number).innerHTML;

  console.log(getBox(1));
}
function winner() {
  if(((getBox(1) === "X") && (getBox(2) === "X") && (getBox(3) === "X")) || ((getBox(4) === "X") && (getBox(5) === "X") && (getBox(6) === "X"))){
    alert("WINNER!");
    location.reload();
  }else {
  }
}
