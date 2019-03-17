function translateYoda(){
  var selected = document.getElementById("translatorInput").value;
  console.log("get: " + selected);
  url = "https://api.funtranslations.com/translate/yoda.json?text="+selected;
  console.log(url);
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Success!', JSON.parse(xhr.responseText));
      let field = document.getElementById("translatorAnswer");
      let fact = JSON.parse(xhr.responseText);
      field.innerHTML = fact.contents.translated;
    }
    else {
      let error_message= "Error <br>" + xhr.statusText;
      console.log(error_message);
    }
    console.log("Randon Fact Retrieved!");
  };
  xhr.open('GET', url);
  xhr.send();
}

function translateMinion(){
  var selected = document.getElementById("translatorInput").value;
  console.log("get: " + selected);
  url = "https://api.funtranslations.com/translate/minion.json?text="+selected;
  console.log(url);
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Success!', JSON.parse(xhr.responseText));
      let field = document.getElementById("translatorAnswer");
      let fact = JSON.parse(xhr.responseText);
      field.innerHTML = fact.contents.translated;
    }
    else {
      let error_message= "Error <br>" + xhr.statusText;
      console.log(error_message);
    }
    console.log("Randon Fact Retrieved!");
  };
  xhr.open('GET', url);
  xhr.send();
}

function translateKlingon(){
  var selected = document.getElementById("translatorInput").value;
  console.log("get: " + selected);
  url = "https://api.funtranslations.com/translate/klingon.json?text="+selected;
  console.log(url);
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Success!', JSON.parse(xhr.responseText));
      let field = document.getElementById("translatorAnswer");
      let fact = JSON.parse(xhr.responseText);
      field.innerHTML = fact.contents.translated;
    }
    else {
      let error_message= "Error <br>" + xhr.statusText;
      console.log(error_message);
    }
    console.log("Randon Fact Retrieved!");
  };
  xhr.open('GET', url);
  xhr.send();
}

function translateGroot(){
  var selected = document.getElementById("translatorInput").value;
  console.log("get: " + selected);
  url = "https://api.funtranslations.com/translate/groot.json?text="+selected;
  console.log(url);
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Success!', JSON.parse(xhr.responseText));
      let field = document.getElementById("translatorAnswer");
      let fact = JSON.parse(xhr.responseText);
      field.innerHTML = fact.contents.translated;
    }
    else {
      let error_message= "Error <br>" + xhr.statusText;
      console.log(error_message);
    }
    console.log("Randon Fact Retrieved!");
  };
  xhr.open('GET', url);
  xhr.send();
}
