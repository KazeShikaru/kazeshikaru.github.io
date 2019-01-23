//Standard:s = screenchange (same number same locaiton jump), b= background, c = charaImage,d=nothing , e = erodable, u=containsMore



//Main menu (Play button, background image, loading,mute,mutesound)
var text1_1 = ScrTxt(170, 430, "loading",  "30px Arial", "red","txt1");
var elem1_1 = ScrEle(200,200,500,100,"img/button.png","s1");
var elem1_2 = ScrEle(000,000,981,600,"img/startscreen1.png","b1"); 
var screen1 = [elem1_2,elem1_1,text1_1];

//Story screen (character 1- 4 , textbox. text, background image)
var text2_1 = ScrTxt(170, 430, "load",  "30px Arial", "red","txt2");
var text2_2 = ScrTxt(170, 460, "load",  "20px Arial", "red","txt2");
var elem2_1 = ScrEle(100,100,40,20,"img/Map1.png","s2");
var elem2_2 = ScrEle(000,000,981,600,"img/Map2.png","b2");
var elem2_3 = ScrEle(0,000,300,600,"img/RoseLeft.png","c1");
var elem2_4 = ScrEle(400,000,400,600,"img/RenaRight.png","c2");
var elem2_5 = ScrEle(100,400,600,150,"img/ButtonBlue3.jpg","s3");
var elem2_6 = ScrEle(2000,000,981,600,"img/water.png","b2");

//elem2_3.style.opacity="0.5";
//elem2_3.style.filter  = 'alpha(opacity=90)';
var screen2 = [elem2_2,elem2_3,elem2_4,elem2_1,elem2_5,text2_1,text2_2];

//Camp(save, shop,next mission, storybook)
var elem3_1 = ScrEle(0,0,981,600,"img/CC1.jpg","d1");
var elem3_2 = ScrEle(620,500,120,50,"img/pink.png","s4");
var elem3_3 = ScrEle(420,500,120,50,"img/pink.png","s5");
var elem3_4 = ScrEle(220,500,120,50,"img/pink.png","s6");
var elem3_5 = ScrEle(20,500,120,50,"img/pink.png","s7");

var text3_1 = ScrTxt(30, 525, "NextLevel",  "30px Arial", "red","txt3");
var text3_2 = ScrTxt(230, 525, "Skill",  "30px Arial", "red","txt4");
var text3_3 = ScrTxt(430, 525, "Save",  "30px Arial", "red","txt5");
var text3_4 = ScrTxt(630, 525, "Shop",  "30px Arial", "red","txt6");
var screen3 = [elem3_1,elem3_2,elem3_3,elem3_4,elem3_5,text3_1,text3_2,text3_3,text3_4];
//Shopscreen(Buy, Sell, background, up,down, buy)
var elem4_1 = ScrEle(50,50,881,500,"img/CC2.png","b4");
var elem4_2 = ScrEle(620,500,120,50,"img/pink.png","s3a");

var screen4 = [elem4_1,elem4_2];
//save screen

var elem5_1 = ScrEle(50,50,881,500,"img/CC3.png","b4");
var elem5_2 = ScrEle(620,500,120,50,"img/pink.png","s3a");

var screen5 = [elem5_1,elem5_2];

//SkillScreen(lulu, Eric, Mina, background, skill*9)

var elem6_1 = ScrEle(50,50,881,500,"img/green.png","b4");
var elem6_2 = ScrEle(620,500,120,50,"img/pink.png","s3a");
var screen6 = [elem6_1,elem6_2];

//GamePlay
var elem7_1 = ScrEle(0,0,981,600,"img/black.JPG","b4");
var elem7_2 = ScrEle(620,500,120,50,"img/pink.png","s3a");
var elem7_3 = ScrEle(600,200,250,400,"img/RoseRight.png","c2");
var elem7_4 = ScrEle(700,200,300,400,"img/RenaRight.png","c2");
var elem7_5 = ScrEle(100,400,700,150,"img/ButtonBlue3.jpg","s8");
var elem7_6 = ScrEle(0,0,1920,1280,"img/redGrid.png","e1");
var elem7_7 = ScrEle(-900,-400,200,400,"img/Box2.jpg","e1");
var elem7_8 = ScrEle(0,0,981,600,"img/red.png","e1");
var text7_1 = ScrTxt(170, 460, "Press your unit by left clicking your mouse",  "20px Arial", "red","txt7_1");
var text7_2 = ScrTxt(170, 490, "You can drag the background",  "20px Arial", "red","txt7_2");
var cmdMenu = CommandMenu();
var screen7 = [elem7_1,elem7_8,elem7_6 ,elem7_2,elem7_4,elem7_3 ,elem7_5,text7_1,text7_2,elem7_7,cmdMenu];