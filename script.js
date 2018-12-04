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

let colorBucket = shuffle(colorList);
let colorSpace = document.getElementById('color-space');
colorSpace.style.background = `#${colorBucket[0][0]}`;