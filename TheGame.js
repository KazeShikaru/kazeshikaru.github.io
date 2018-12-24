var canvas = document.querySelector('canvas');

canvas.width = 971;
canvas.height = 600;

var c = canvas.getContext('2d');
c.fillRect(0, 0, 400, 500);
c.stroke();


var images = [new Image(), new Image()];


function rose() {
  for (var i = 0; i < images.length; i++) {
    var why = images[i];
    switch (i) {
      case 0:
        why.src = 'startscreen1.png';
        break;
      case 1:
        why.src = 'button.png';
        break;
    }
    why.onload = soup;
  }
}
rose();
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
          c.drawImage(images[i], 300, 300);
          break;
      }

    }
  }
}

function drawImageActualSize() {

  c.drawImage(this, 0, 0);


}

function Magus(x, y, url) {
  this.image = new Image();
  this.image.src = url;
  this.x = x;
  this.y = y;

}
