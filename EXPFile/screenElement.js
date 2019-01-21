
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

function ScrTxt(x, y, text,  font, color,name) {
    var screenTxt = {
        locX:x,
        locY:y,
        text:text,
        name:name,
        font:font,
        
        update:function(ctx){
            
            ctx.font=this.font;
            ctx.fillStyle ="white";
            ctx.fillText(this.text,this.locX,this.locY);
            ctx.fillStyle ="black";
        }
    };
    
    return screenTxt;
};

function ScriptText(re) {
    var screenTxt = { 
        lines:[
            [0,0,[0,1],"Rena","I like Soup and Cream"],
        
        ],
        currentLine:0,
        charaImages:[
            "img/RoseLeft.png",
            "img/RenaRight.png",
        ],
        backgrounds:[
            
        ],
        nextText:function(){
            var nextLine = this.lines[this.currentLine];
            this.currentLine++;
            return nextLine;
        },
        
    };
    
    return screenTxt;
    
}