function retrievePhrase(){
  url = "https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote";
  console.log(url);
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Success!', JSON.parse(xhr.responseText));
      let field = document.getElementById("tronaldAnswer");
      let fact = JSON.parse(xhr.responseText);
      field.innerHTML = fact.value;
    }
    else {
      let error_message= "Error <br>" + xhr.statusText;
      console.log(error_message);
    }
    console.log("Randon Quote Retrieved!");
  };
  xhr.open('GET', url, true);
  xhr.setRequestHeader("X-RapidAPI-Key", "aebfd50debmsha10498101f5c40dp1b0484jsn320484a781df");
  xhr.setRequestHeader("Accept", "application/hal+json");
  xhr.send();
}

function retrievePicture(){
  url = "https://api.tronalddump.io/random/meme";
  console.log(url);
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Success!', JSON.parse(xhr.responseText));
      let field = document.getElementById("tronaldAnswer");
      let fact = JSON.parse(xhr.responseText);
      field.innerHTML = fact.value;
    }
    else {
      let error_message= "Error <br>" + xhr.statusText;
      console.log(error_message);
    }
    console.log("Randon Image Retrieved!");
  };
  xhr.open('GET', url, true);
  xhr.setRequestHeader('Content-Type', 'image/jpeg');
  xhr.send();
  let field = document.getElementById("tronaldAnswer");
  field.innerHTML = "<img src='img/trumpcard.png' width='400vw'>";
}
