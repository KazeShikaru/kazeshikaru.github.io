var canvas = document.querySelector('canvas');

canvas.width = 971;
canvas.height = 600;
//canvas.addEventListener('mouse_down',rose());
canvas.addEventListener("click", rose);
canvas.addEventListener("mousedown",function(event){ arr(event);});
var c = canvas.getContext('2d');
//c.fillRect(0, 0, 400, 500);
//c.stroke();
var globalInventCounter{
  money : 0,
  //HP,MaxHP,MP;MaxMP,Attak,Def;SPD,lvlHp,lvlMp,lvlAttack,lvlDefence,lvlSpeed
  eric : makeChara(300,300,100,100,20,5,100,20,10,4,1,10),
  mina : {100,30,40,50},
  lulu : {100,30,40,50},
  inventory : getInvent(),
  skillChart: getSkillChart(),



};

var images = [new Image(), new Image()];
var rect = canvas.getBoundingClientRect();
function arr(event){
  console.log(event);
if(event.clientX-rect.left>336 && event.clientY-rect.top>263 &&event.clientY-rect.top<263+75 &&event.clientX-rect.left<336+300){
    //c.clearRect(0,0,981,600);
    images[0].src='img/monix gif.gif';
    //soup();
  }
}
var truesstart=0;
function rose() {
  var iconlist = 0;
if(truesstart<1){
  console.log("Hello world!");
  for (var i = iconlist; i < images.length+iconlist; i++) {
    var why = images[i];
    switch (i) {
      case 0:
        why.src = 'img/startscreen1.png';
        break;
      case 1:
        why.src = 'img/button.png';
        break;

    }
    why.onload = soup;
  }
}truesstart++;
}

/*
var background = new Image();
var button = new Image();
background.onload = drawImageActualSize(1);
button.onload = drawImageActualSize(1);

background.src = 'button.png';
button.src = 'startscreen1.png';
*/
var y = images.length;

function soup() {
  y--;
  if (y < 1) {
    for (var i = 0; i < images.length; i++) {
      switch (i) {
        case 0:
          c.drawImage(images[i], 0, 0);
          break;
        case 1:
          c.drawImage(images[i], 336, 263);
          break;
      }

    }
  }
}

function drawImageActualSize() {

  //c.drawImage(this, 0, 0);


}

function Magus(x, y, url) {
  this.image = new Image();
  this.image.src = url;
  this.x = x;
  this.y = y;

}
