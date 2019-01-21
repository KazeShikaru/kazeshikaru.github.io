
function ScrEle(x, y, width, length, file,name) {
    
    var screenEl = {
        name:name,
        image: new Image(),
        locX:x,
        locY:y,
        width:width,
        length:length,
        file:file,
        checkClicked : function(disX,disY){
            if(disX>this.locX && disX<this.locX+this.width && disY>this.locY&&disY<this.locY+this.length){
                return true;
            }
            return false;
        },
        
        update : function (ctx){
            
            ctx.drawImage(this.image,
                this.locX,
                this.locY,
                this.width, this.length);
        }
    };
    
    screenEl.image.src = file;
    
    
    return screenEl;
    
};

function ScrTxt(x, y, width, length, font, Lsize ,name) {
    var screenTxt = {
        
    };
};