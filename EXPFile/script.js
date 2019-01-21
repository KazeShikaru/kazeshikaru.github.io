var luluState=2;
var ericsState=3;
var minaState=5;



function getCharaState(prime){
    var num;
    switch(prime){
        case 1:num=luluState;
            break;
        case 2:num=ericsState;
            break;
        case 3:num=minaState;
            break;
    }
    switch(num){
        case 2:return "img/RoseLeft.png";           
        case 4:return "";
        case 8:return "";           
        case 16:return "";
        case 3:return "img/RenaRight.png";           
        case 9:return "";
        case 27:return "";           
        case 81:return "";
        case 5:return "";           
        case 25:return "";
        case 125:return "";           
        case 625:return "";
    }
    
    
    return "def";
};