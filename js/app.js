//Secret Menu Challenge!
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var restaurants = document.getElementsByClassName("name");

for (i = 0; i<restaurants.length; i++){
  restaurants[i].addEventListener("click", displayMenu);
}

function displayMenu(){
  var showItem = this.querySelectorAll(".menu")[0];
  if(showItem.style.display === "none"){
    showItem.style.display = "block";
  } else {
    showItem.style.display = "none";
  }
}
