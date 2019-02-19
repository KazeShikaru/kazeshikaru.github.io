
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
        locY:300,
        content:[ScrEle(400,300,200,250,"img/Box2.jpg","e0"),ScrTxt(420, 320, "Whats this umu",  "10px Arial", "red","e0"), ScrTxt(420, 330, "This Box is an ability",  "10px Arial", "red","e0")],
        update : function (ctx){
            this.content[0].update(ctx);
            this.content[1].update(ctx);
            this.content[2].update(ctx);
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
            if(y>300){
                y=300;
            }
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
        checkContained: function(x,y){
            for(var l= 2;l<22;l++){
                var tempElem = screen6[l];
                if(x-tempElem.locX>0&&x-tempElem.locX<tempElem.length && y-tempElem.locY>0&&y-tempElem.locY<tempElem.width){
                    
                    
                    switch(l){
                        case 2:this.content[2].text="Fusion Core";
                            break;
                        case 3:this.content[2].text="Version Core";
                            break;
                        case 4:this.content[2].text="Nano Core";
                            break;
                           
                           
                           
                    }
                    
                    
                    
                    return true;
                }
            }
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
function isRealValue(obj)
{
 return obj && obj !== 'null' && obj !== 'undefined';
};
var faketile =make2DArray(16,10);
var objectTileArray = make2DArray(16,10);
function getLevel1(){
    var gameset = {
        
        mytileArray:[],
        movetileArray:[],
        update:function(ctx){
            
            
            for (let g=0;g<mytileArray.length;g++){
                for(let f = 0; f<mytileArray[0].length;f++){
                    mytileArray[g][f].update(ctx,elem7_6.locX,elem7_6.locY);
            
                }
            } 
            for (let g=0;g<mytileArray.length;g++){
                for(let f = 0; f<mytileArray[0].length;f++){
                    if(isRealValue(movetileArray[g][f])){                        
                      movetileArray[g][f].update(ctx,elem7_6.locX,elem7_6.locY);
                        
                    }
            
                }
            }
            
          
        },
        checkWhereClicked : function(disX,disY){
            if(disX>this.locX && disX<this.locX+this.width && disY>this.locY&&disY<this.locY+this.length){
                return 1;
            }
            return -1;
        },
        clickThis : function(disX,disY){
            movetileArray=make2DArray(16,10);
            faketile=make2DArray(16,10);
            console.log(movetileArray);
            //console.log(disX,disY)
            let coreTile = mytileArray[Math.floor((disX-elem7_6.locX)/64)][Math.floor((disY-elem7_6.locY)/64)];
            //coreTile.image.src="img/pink.png";
            faketile[coreTile.c][coreTile.r]=9;
            console.log(faketile);
            for(let range2 = 5;range2>0;range2--){   
                for (let g=0;g<mytileArray.length;g++){
                    for(let f = 0; f<mytileArray[0].length;f++){
                        
                        getNextMovement(1,g,f);
                    
                    
            
                    }
                } 
            }
            console.log(faketile);
            for (let g=0;g<mytileArray.length;g++){
                    for(let f = 0; f<mytileArray[0].length;f++){
                        
                        if(faketile[g][f]>0){
                            movetileArray[g][f]=maketile(g,f,2);
                            //mytileArray[g][f].image.src="img/pink.png";
                            
                            
                            
                        }
                    
                    
            
                    }
                } 
            console.log(faketile);
            
        },
        
    };
    this.movetileArray=make2DArray(16,10);
    this.mytileArray=make2DArray(16,10);
    for (let g=0;g<this.mytileArray.length;g++){
        for(let f = 0; f<this.mytileArray[0].length;f++){
            this.mytileArray[g][f]=maketile(g,f,1);
            
        }
    } 
    
    return gameset;
    
};
function getNextMovement(UnitType,localX,localY){
    if(UnitType==1){
        
        let tempNum= faketile[localX][localY];
        if(localX>0){
            if(faketile[localX-1][localY]<faketile[localX][localY]-2){
                faketile[localX-1][localY]=faketile[localX][localY]-2;
            }
        }
        if(localX<15){
            if(faketile[localX+1][localY]<faketile[localX][localY]-2){
                faketile[localX+1][localY]=faketile[localX][localY]-2;
            }
        }
        if(localY>0){
            if(faketile[localX][localY-1]<faketile[localX][localY]-2){
                faketile[localX][localY-1]=faketile[localX][localY]-2;
            }
        }
        if(localY<9){
            if(faketile[localX][localY+1]<faketile[localX][localY]-2){
                faketile[localX][localY+1]=faketile[localX][localY]-2;
            }
        }
        
        
    }
    
    
    
}

function maketile(c, r,type) {
    
    var screenTile = {
        c:c,
        r:r,
        tileType:4,
        image : new Image(),
        update:function(ctx,x,y){
            ctx.drawImage(this.image,x+64*c,y+64*r,64, 64);
        },
        checkWhereClicked : function(disX,disY){
            if(disX>this.locX && disX<this.locX+this.width && disY>this.locY&&disY<this.locY+this.length){
                this.image.src="img/pink.png";
                return 1;
            }
            return -1;
        },
        clickThis : function(disX,disY){
              this.image.src="img/pink.png";
            /*
            console.log(Math.floor(disX/64)==this.c&&Math.floor(disY/64==this.r));
            if(Math.abs(Math.floor(disX/64)-this.c)+Math.abs(Math.floor(disY/64)-this.r)<5){
               console.log("True");
                this.image.src="img/pink.png";
            }else{
                this.image.src="img/tileGrass.png";
            }*/
                 
            
        },
    };
    if(type ==1){
        screenTile.image.src="img/tileGrass.png";
    }else if(type == 2){
        screenTile.image.src="img/pink.png";
    }
    return screenTile;
    
};

function make2DArray(n,m){
    var arrayU = Array(n);
    for (let l = 0; l< n;l++){
        arrayU[l]=Array(m);
    }
    console.log(arrayU);
    return arrayU;
    
};

function getChara(CharacterZ){
    var thisCharacter = {
        hp:100*CharacterZ,
        mp:200*CharacterZ,
        def:100*CharacterZ,
        res:0.2*CharacterZ,
        speed:4*CharacterZ,
        initiation:30*CharacterZ,
        mpRegen:5*CharacterZ,
        attack:40*CharacterZ,
        vigilance:30*CharacterZ,
        fatalShock:1*CharacterZ,
        levelUp:function(){
            
        },
        
        
    };
    
    
    return thisCharacter;
    
};

