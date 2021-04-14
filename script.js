/*
function make_divs(amount){
  let main_div = document.getElementById("main_div");
  const main_div_area = main_div.offsetWidth * main_div.offsetHeight;
  let small_box_wh = Math.sqrt(main_div_area/amount);
  let box_string = small_box_wh.toString();


  for(i = 0; i < amount; i++){
    let box_div = document.createElement('div');
    box_div.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    box_div.style.boxSizing = "border-box";
    box_div.style.border = "solid";
    box_div.style.display = "inline-block";
    box_div.style.width = small_box_wh+"px";
    box_div.style.height = small_box_wh+"px";
    box_div.className = "sub_div";
    box_div.addEventListener("mouseover", function( element ) {
      // highlight the mouseover target
      element.target.style.backgroundColor = "#55cbd3";
    });
    document.getElementById("main_div").appendChild(box_div);
  }
}
*/
const container = document.getElementById("main_div");

function makeBoxes(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let small_box = document.createElement("div");
    small_box.style.border = "solid";
    small_box.style.borderWidth = "thin";
    small_box.addEventListener("mouseover", function( element ) {
      // highlight the mouseover target
      element.target.style.backgroundColor = "#55cbd3";
    });
    container.appendChild(small_box).className = "small_box";
  };
};

//Initial value of the board
makeBoxes(16, 16);

reset_button.addEventListener("click", function(){
  let small_boxes = document.getElementsByClassName("small_box");
  Array.from(small_boxes).forEach((small_box) => {
    // Reset color for all boxes
    small_box.style.backgroundColor = "#FFF";
});
});

function sliderUp(){
  let slider = document.getElementById('slider');
  let main_div= document.getElementById('main_div')
  main_div.innerHTML = '';
  makeBoxes(slider.value, slider.value);
}
