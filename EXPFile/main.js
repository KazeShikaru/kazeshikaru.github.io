




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
};

var background = ScrEle(0,0,600,500,"img/button.png");
    

function updateGameArea() {
    myGameArea.clear();
    background.update(myGameArea.canvas);
}

function startGame() {

    myGameArea.start();
}