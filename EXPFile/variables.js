//Standard:s = screenchange (same number same locaiton jump), b= background, c = charaImage,d=nothing



//Main menu (Play button, background image, loading,mute,mutesound)

var elem = ScrEle(200,200,500,100,"img/button.png","s1");
var elem2 = ScrEle(000,000,981,600,"img/startscreen1.png","b1"); 
var screen1 = [elem2,elem];

//Story screen (character 1- 4 , textbox. text, background image)
var text2 = ScrTxt(170, 430, "load",  "30px Arial", "red","text2");
var elem3 = ScrEle(100,100,40,20,"img/Map1.png","s2");
var elem4 = ScrEle(000,000,981,600,"img/Map2.png","b2");
var elem5 = ScrEle(0,000,300,600,"img/RoseLeft.png","c1");
var elem6 = ScrEle(400,000,400,600,"img/RenaRight.png","c2");
var elem7 = ScrEle(100,400,600,150,"img/ButtonBlue3.jpg","s3");
var screen2 = [elem4,elem5,elem6,elem3,elem7,text2];

//Camp(save, shop,next mission, storybook)
var elem8 = ScrEle(0,0,981,600,"img/CC1.jpg","d1");
var elem9 = ScrEle(100,100,40,20,"img/pink.png","d2");
var screen3 = [elem8,elem9];

//Shopscreen(Buy, Sell, background, up,down, buy)


var screen4 = [];
//SkillScreen(lulu, Eric, Mina, background, skill*9)

var screen5 = [];
//