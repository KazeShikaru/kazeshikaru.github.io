function setup() {
  var c = createCanvas(100, 100);
  background(200);
  textAlign(CENTER);
  text('drop image', width / 2, height / 2);
  c.drop(file => loadImage(file.data, img => image(img, 0, 0, width, height)));
}
