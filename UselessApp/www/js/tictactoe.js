function verifyPos(id){
  var field = document.getElementById(id);
  if(field.innerHTML == ""){
    field.innerHTML = "X";
    computerMove();
  }
}

function computerMove(){
  var game = "";
  for (var i = 0; i < 9; i++) {
    let pos = document.getElementById(i).innerHTML;
    if(pos == ""){
      game = game + "-";
    }
    else{
      game = game + "" + pos;
    }
  }
  var player = "O";
  var url = "https://stujo-tic-tac-toe-stujo-v1.p.rapidapi.com/"+game+"/"+player;
  console.log(url);
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Success!', JSON.parse(xhr.responseText));
      let response = JSON.parse(xhr.responseText);
      let field = document.getElementById(response.recommendation);
      field.innerHTML = "O";
    }
    else {
      let error_message= "Error <br>" + xhr.statusText;
      console.log(error_message);
    }
  };
  xhr.open('GET', url, true);
  xhr.setRequestHeader("X-RapidAPI-Key", "aebfd50debmsha10498101f5c40dp1b0484jsn320484a781df");
  xhr.send();
}

function clean(){
  for (var i = 0; i < 9; i++) {
    let pos = document.getElementById(i);
    pos.innerHTML = "";
  }
}
