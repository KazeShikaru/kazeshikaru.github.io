
var background;
var playbutton;

function startGame() {
playbutton = new buttonMage(600,200,"img/button.png",200,200);
background = new drawMage(971, 600, "img/startscreen1.png", 0, 0);


    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 971;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 30);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function drawMage(width, height, color, x, y ) {


    this.image = new Image();
    this.image.src = color;

    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);

    }

}
function buttonMage(width, height, color, x, y ) {


    this.image = new Image();
    this.image.src = color;

    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        

    }


}

function updateGameArea() {
    myGameArea.clear();
    background.update();
    playbutton.update();
}

