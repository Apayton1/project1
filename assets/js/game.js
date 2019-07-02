// Initial array of animals
 
var animalsArray = ["cat", "dog", "cow", "monkey"];

// displayAnimalImages function re-renders the HTML to display the appropriate content
function displayAnimalImages() {
  reset();
  var animalName = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalName  + "&api_key=e6OFIzIJm8CK6O6aiWItgKxH4bKZTzjB&limit=12"
  // Creates AJAX call for the specific animal button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
  // console.log(response);
  //Print the 12 images af animal
  for(var i=0; i<12; i++){   
    $("#images-view").append("<div class='image-box'> <img class='gif' src='"+
    response.data[i].images.downsized_still.url + "' data-still='"+
    response.data[i].images.downsized_still.url +"' data-animate='"+
    response.data[i].images.downsized_medium.url +"' data-state='still'/>" + 
    "<div class='rating'>Rating : "+response.data[i].rating + "</div></div>");
 
  }

    //when we click gif images then the src attribute will be changed
    $(".gif").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
      });
  });

 }
//Reset function 
function reset(){
    $("#images-view").empty();
}


function renderButtons() {
    $("#buttons-view").empty();
    // Loops through the array of animalsArray
    for (var i = 0; i < animalsArray.length; i++) {
 
      // Then dynamicaly generates buttons for each animal in the array
      var a = $("<button>");
      // Adds the class btn and buttton-gif to our button
      a.addClass("btn buttton-gif");
      // Added a data-attribute
      a.attr("data-name", animalsArray[i]);
      // Provided the initial button text
      a.text(animalsArray[i]);
      // Added the button to the buttons-view div
      $("#buttons-view").append(a);
    }
  }
  // This function handles events where the add animal button is clicked
  $("#add-Animal").on("click", function(event) {
    event.preventDefault();
    // This line of code will grab the input from the textbox
    var category = $("#animal-input").val().trim();
 
    // The animal from the textbox is then added to our array
    animalsArray.push(category);
 
    // Calling renderButtons which handles the processing of our animal array
    renderButtons();
  });
  //displayAnimalImages("cat");

 $("#buttons-view:first-child").trigger("click");
  $(document).on("click", ".buttton-gif", displayAnimalImages);
  renderButtons();

 //displayAnimalImages();