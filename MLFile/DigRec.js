function setup(){
    canv = createCanvas(20,20);
    function mouseDragged() 
{ 	strokeWeight(10);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
    
}