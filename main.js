window.addEventListener("load", function(event) {

  var display    = new Display(document.querySelector("canvas"));

  display.buffer.canvas.height = game.world.height;
  display.buffer.canvas.width = game.world.width;
});
