const main_div = document.getElementById("main_div");

function makeBoxes(rows, cols) {
  main_div.style.setProperty('--grid-rows', rows);
  main_div.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let small_box = document.createElement("div");
    small_box.style.border = "solid";
    small_box.style.borderWidth = "thin";
    small_box.addEventListener("mouseover", function( element ) {
      // highlight the mouseover target
      element.target.style.backgroundColor = "#55cbd3";
    });
    main_div.appendChild(small_box).className = "small_box";
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

let img = document.querySelector('img');
let start = img.src;
let hover = img.getAttribute('data-hover');
img.onmouseover = () => { img.src = hover; }
img.onmouseout = () => { img.src = start; }