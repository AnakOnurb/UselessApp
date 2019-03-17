var categories = [];

function getCategories(){
  url = "https://api.chucknorris.io/jokes/categories";
  console.log(url);
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Success!', JSON.parse(xhr.responseText));
      categories = JSON.parse(xhr.responseText);
      for(let item of categories){
        console.log(item);
        var x = document.getElementById("selectCategories");
        var option = document.createElement("option");
        option.text = item;
        x.add(option);
      }
    }
    else {
      let error_message= "Error <br>" + xhr.statusText;
      console.log(error_message);
    }
    console.log("Categories Retrieved");
  };
  xhr.open('GET', url);
  xhr.send();
}

function retrieveRandom(){
  url = "https://api.chucknorris.io/jokes/random";
  console.log(url);
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Success!', JSON.parse(xhr.responseText));
      let field = document.getElementById("chuckAnswer");
      let fact = JSON.parse(xhr.responseText);
      field.innerHTML = fact.value;
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

function retrieveCategory(){
  var selected = document.getElementById("selectCategories").value;
  console.log("get: " + selected);
  url = "https://api.chucknorris.io/jokes/random?category={"+selected+"}";
  console.log(url);
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Success!', JSON.parse(xhr.responseText));
      let field = document.getElementById("chuckAnswer");
      let fact = JSON.parse(xhr.responseText);
      field.innerHTML = fact.value;
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

function retrieveSearch(){
  var selected = document.getElementById("chuckInput").value;
  console.log("get: " + selected);
  url = "https://api.chucknorris.io/jokes/search?query={"+selected+"}";
  console.log(url);
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Success!', JSON.parse(xhr.responseText));
      let field = document.getElementById("chuckAnswer");
      let fact = JSON.parse(xhr.responseText);
      field.innerHTML = fact.value;
    }
    else {
      let error_message= "Error <br>" + xhr.statusText;
      console.log(error_message);
    }
    console.log("Search Fact Retrieved!");
  };
  xhr.open('GET', url);
  xhr.send();
}
