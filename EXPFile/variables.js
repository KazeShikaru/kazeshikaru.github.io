//Standard:s = screenchange (same number same locaiton jump), b= background, c = charaImage,d=nothing



//Main menu (Play button, background image, loading,mute,mutesound)
var text1 = ScrTxt(170, 430, "loading",  "30px Arial", "red","txt1");
var elem = ScrEle(200,200,500,100,"img/button.png","s1");
var elem2 = ScrEle(000,000,981,600,"img/startscreen1.png","b1"); 
var screen1 = [elem2,elem,text1];

//Story screen (character 1- 4 , textbox. text, background image)
var text2 = ScrTxt(170, 430, "load",  "30px Arial", "red","txt2");
var elem3 = ScrEle(100,100,40,20,"img/Map1.png","s2");
var elem4 = ScrEle(000,000,981,600,"img/Map2.png","b2");
var elem5 = ScrEle(0,000,300,600,"img/RoseLeft.png","c1");
var elem6 = ScrEle(400,000,400,600,"img/RenaRight.png","c2");
var elem7 = ScrEle(100,400,600,150,"img/ButtonBlue3.jpg","s3");
var screen2 = [elem4,elem5,elem6,elem3,elem7,text2];

//Camp(save, shop,next mission, storybook)
var elem8 = ScrEle(0,0,981,600,"img/CC1.jpg","d1");
var elem9 = ScrEle(620,500,120,50,"img/pink.png","d2");
var elem10 = ScrEle(420,500,120,50,"img/pink.png","d3");
var elem11 = ScrEle(220,500,120,50,"img/pink.png","d4");
var elem12 = ScrEle(20,500,120,50,"img/pink.png","d5");

var text3 = ScrTxt(30, 525, "NextLevel",  "30px Arial", "red","txt3");
var text4 = ScrTxt(230, 525, "Skill",  "30px Arial", "red","txt4");
var text5 = ScrTxt(430, 525, "Save",  "30px Arial", "red","txt5");
var text6 = ScrTxt(630, 525, "Shop",  "30px Arial", "red","txt6");
var screen3 = [elem8,elem9,elem10,elem11,elem12,text3,text4,text5,text6];
//Shopscreen(Buy, Sell, background, up,down, buy)


var screen4 = [];
//SkillScreen(lulu, Eric, Mina, background, skill*9)

var screen5 = [];
//