var mobilenet;
var canv;
var MyMup = false;
function modelReady(){
    console.log('Model ready');
}

function setup(){
    canv = createCanvas(640,480);
    background(100);
    canv.drop(gotFile);
    mobilenet  = new ml5.imageClassifier('MobileNet',modelReady);
    canv.mousePressed(changeGray);
    canv.mouseReleased(stopGray);
    clearSoup();
    frameRate(120);
    
}


function gotFile(file) {
  // If it's an image file
  if (file.type === 'image') {
    // Create an image DOM element but don't show it
    const img = createImg(file.data).hide();
    // Draw the image onto the canvas
    canv.getContext('2d').clearRect(0,0,width,height);
    image(img, 0, 0, width, height);
  } else {
    console.log('Not an image file!');
  }
}

function mouseDragged() 
{ 
    
	strokeWeight(10);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
function changeColor(r,g,b){
    stroke(r,g,b);
}
function clearSoup(){
    fill(255);
    canv.clear(0, 0, width, height);
    fill(0);
}
function changeGray(){
   MyMup=true;
}
function stopGray(){
    MyMup=false;
}

function predict(){
    
    var savedData = document.getElementById("images");
    savedData.src = canvas.toDataURL();
    console.log(savedData);
    mobilenet.predict(savedData, getResult);
    
    
    
    
}
function getResult(erroo, resu){
    console.log(resu);
    document.getElementById("text1").innerHTML = "Prediction:"+resu[0].className;
}
function imageReady(){
    
}