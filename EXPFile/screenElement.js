
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
function InfoBox() {
    
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
            [0,0,[-4,1,2,3],"Rena","I like Soup and Cream",[100,200,300,800]],
            [0,0,[0,-1,2,3],"Rose","I Dont like Soup and Cream",[100,200,400,800]],
            [0,0,[0,1,-2,3],"Rena","Thats sad",[000,200,300,600]],
            [0,0,[4,1,2,3],"Rena","Very Sad",[100,200,300,800]],
            [6,0,[0,1,2,3],"Rena","Let's go through this tutorial!",[100,200,250,400]],
            [0,1,[-3,1,2,3],"Rose","Sure",[100,200,400,600]],
            [0,-1,[0,1,2,3],"Sp","Nof",[000,200,400,600]],
            [0,0,[4,1,2,3],"Rena","First lets try melee attack",[100,200,400,700]],
            [0,1,[0,1,2,3],"Rena","Explain",[100,200,400,600]],
            [-1,1,[0,1,2,3],"","",[100,200,400,600]],
        
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
function getLevel1(){
    var gameset = {
        myTile:[maketile(1,1,1),maketile(2,2,1)],
        
        update:function(ctx){
            for(var i = 0; i< this.myTile.length;i++){
                this.myTile[i].update(ctx,elem7_6.locX,elem7_6.locY);
            }
            
        },
        checkWhereClicked : function(disX,disY){
            if(disX>this.locX && disX<this.locX+this.width && disY>this.locY&&disY<this.locY+this.length){
                return 1;
            }
            return -1;
        },
        
    } 
    
    return gameset;
    
};

function maketile(c, r,type) {
    
    var screenTile = {
        c:c,
        r:r,
        image : new Image(),
        update:function(ctx,x,y){
            ctx.drawImage(this.image,x+64*c,y+64*r,64, 64);
        },
        checkWhereClicked : function(disX,disY){
            if(disX>this.locX && disX<this.locX+this.width && disY>this.locY&&disY<this.locY+this.length){
                return 1;
            }
            return -1;
        },
    };
    screenTile.image.src="img/tileGrass.png";
    return screenTile;
    
};


function getChara(CharacterZ){
    
    
    
    return 0;
    
};

