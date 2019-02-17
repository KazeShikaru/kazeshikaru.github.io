var mobilenet;
var canv;
var MyMup = false;
function modelReady(){
    console.log('Model ready');
}

function setup(){
    canv = createCanvas(640,480);
    background(0);
    
    mobilenet  = new ml5.imageClassifier('MobileNet',modelReady);
    canv.mousePressed(changeGray);
    canv.mouseReleased(stopGray);
    clearSoup();
    frameRate(120);
}

function draw(){
    
    
    
  
    
    
}
function mouseDragged() 
{ 
	strokeWeight(10);
	line(mouseX, mouseY, pmouseX, pmouseY);
}

function clearSoup(){
    fill(255);
    rect(0, 0, width, height);
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