let colorSpace = document.getElementById('color-space');
let colorName = document.getElementById('color-name')
let colorPos = 0;
function generateRandomNumber(min, max){
  return Math.floor(Math.random() * (max-min) + min);
}

function shuffle(ordered){
  let shuffled = [];
  for(var i=ordered.length; i>0; i--){
    let r =generateRandomNumber(0, i);
    shuffled.push(ordered.splice(r, 1)[0])
  }
  return shuffled;
}

function setColor(RGBColor){
  colorSpace.style.background = `#${RGBColor[0]}`;
  colorName.innerHTML = RGBColor[1];
}

let colorBucket = shuffle(colorList);

setColor(colorBucket[colorPos])

document.getElementsByTagName("body")[0]
.addEventListener("click", function(){
  setColor(colorBucket[colorPos++]);
});

document.addEventListener("keydown", function(event) {
  if(event.which == 32){
   setColor(colorBucket[colorPos++]);
  }
});