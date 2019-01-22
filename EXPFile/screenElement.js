
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
function CommandMenu() {
    
    var scoop = {
        locX:400,
        locY:400,
        content:[ScrEle(400,400,200,400,"img/Box2.jpg","e0"),ScrTxt(420, 420, "Whats this umu",  "10px Arial", "red","e0")],
        update : function (ctx){
            this.content[0].update(ctx);
            this.content[1].update(ctx);
        },
        closeThis : function (){
            var changeX = this.locX+400;
            var changeY = this.locY+400;
            this.locX-=changeX;
            this.locY-=changeY;
            for( i = 0; i< this.content.length;i++){
                this.content[i].locX-=changeX;
                this.content[i].locY-=changeY;
            }; 
        },
        openThis:function (x,y){
            var changeX = x-this.locX;
            var changeY = y-this.locY;
            this.locX+=changeX;
            this.locY+=changeY;
            for( i = 0; i< this.content.length;i++){
                this.content[i].locX+=changeX;
                this.content[i].locY+=changeY;
            }; 
            
        },
        addSpell:function(spl){
            switch(spl){
                   
            }
        },
        checkClicked : function(disX,disY){
            this.content[0].locX++;
            if(disX>this.locX && disX<this.locX+this.width && disY>this.locY&&disY<this.locY+this.length){
                return true;
            }
            return false;
        },
        checkWhereClicked : function(disX,disY){
            if(disX>this.locX && disX<this.locX+this.width && disY>this.locY&&disY<this.locY+this.length){
                return 1;
            }
            return -1;
        },
        
    };
    
    
    
    return scoop;
    
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
            [0,0,[0,1,0,0],"Rena","I like Soup and Cream"],
            [0,0,[0,1,0,0],"Rose","I Dont like Soup and Cream"],
            [0,0,[0,1,0,0],"Rena","Thats sad"],
            [0,0,[0,1,0,0],"Rena","Very Sad"],
            [6,0,[0,1,0,0],"Rena","Let's go through this tutorial!"],
            [0,1,[0,1,0,0],"Rose","Sure"],
            [0,-1,[0,1,0,0],"Sp","Nof"],
            [0,1,[0,1,0,0],"Rena","First lets try melee attack"],
            [0,1,[0,1,0,0],"Rena","Explain"],
            [-1,1,[0,1,0,0],"",""],
        
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
    
};

function getChara(CharacterZ){
    
    
    
    return 0;
    
};

