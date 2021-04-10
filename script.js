/*document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
*/

function make_16_divs(){

  for(i = 0; i < 16; i++){
    let box_div = document.createElement('div');
    box_div.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    box_div.style.border = "1px";
    box_div.style.border = "solid";
    box_div.style.fontSize = "30px";
    box_div.style.width = "220px";
    box_div.style.height =  "220px";


    box_div.className = "sub_div";
    box_div.addEventListener("mouseover", function( element ) {
      // highlight the mouseover target
      element.target.style.backgroundColor = "#55cbd3";
    });
    document.getElementById("main_div").appendChild(box_div);
  }
}
make_16_divs();



reset_button.addEventListener("click", function(){
  let sub_divs = document.getElementsByClassName("sub_div");
  Array.from(sub_divs).forEach((sub_div) => {
    // Reset color for all boxes
    sub_div.style.backgroundColor = "#FFF";
});
});