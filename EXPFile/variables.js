//Standard:s = screenchange (same number same locaiton jump), b= background, c = charaImage,d=nothing , e = erodable, u=containsMore



//Main menu (Play button, background image, loading,mute,mutesound)
var text1_1 = ScrTxt(170, 430, "loading",  "30px Arial", "red","txt1");
var elem1_1 = ScrEle(200,200,500,100,"img/button.png","s1");
var elem1_2 = ScrEle(000,000,1024,640,"img/startscreen1.png","b1"); 
var screen1 = [elem1_2,elem1_1,text1_1];

//Story screen (character 1- 4 , textbox. text, background image)
var text2_1 = ScrTxt(170, 430, "load",  "30px Arial", "red","txt2");
var text2_2 = ScrTxt(170, 460, "load",  "20px Arial", "red","txt2");
var elem2_1 = ScrEle(100,100,40,20,"img/Map1.png","s2");
var elem2_2 = ScrEle(000,000,1024,640,"img/Map2.png","b2");
var elem2_3 = ScrEle(0,200,200,400,"img/RoseLeft.png","c1");
var elem2_4 = ScrEle(640,200,300,400,"img/RenaRight.png","c2");
var elem2_7 = ScrEle(200,200,320,400,"img/LuCenter.png","c3");
var elem2_8 = ScrEle(400,200,250,400,"img/LabyLeft.png","c4");
var elem2_5 = ScrEle(100,400,800,150,"img/ButtonBlue3.jpg","s3");
var elem2_6 = ScrEle(2000,000,1024,640,"img/water.png","b2");

//elem2_3.style.opacity="0.5";
//elem2_3.style.filter  = 'alpha(opacity=90)';
var screen2 = [elem2_2,elem2_3,elem2_4,elem2_1,elem2_7,elem2_8,elem2_5,text2_1,text2_2];

//Camp(save, shop,next mission, storybook)
var elem3_1 = ScrEle(0,0,1024,640,"img/CC1.jpg","d1");
var elem3_2 = ScrEle(680,480,200,70,"img/CButton2.png","s4");
var elem3_3 = ScrEle(460,480,200,70,"img/CButton2.png","s5");
var elem3_4 = ScrEle(240,480,200,70,"img/CButton2.png","s6");
var elem3_5 = ScrEle(20,480,200,70,"img/CButton2.png","s7");

var text3_1 = ScrTxt(30, 525, "NextLevel",  "30px Arial", "red","txt3");
var text3_2 = ScrTxt(250, 525, "Skill",  "30px Arial", "red","txt4");
var text3_3 = ScrTxt(470, 525, "Save",  "30px Arial", "red","txt5");
var text3_4 = ScrTxt(690, 525, "Shop",  "30px Arial", "red","txt6");
var screen3 = [elem3_1,elem3_2,elem3_3,elem3_4,elem3_5,text3_1,text3_2,text3_3,text3_4];


//Shopscreen(Buy, Sell, background, up,down, buy)
var elem4_1 = ScrEle(50,50,881,500,"img/CC2.png","b4");
var elem4_2 = ScrEle(760,490,120,50,"img/pink.png","s3a");
var elem4_3 = ScrEle(75,75,440,450,"img/red.png","b4");
var elem4_4 = ScrEle(535,75,380,400,"img/green.png","b4");
var text4_1 = ScrTxt(535, 520, "Money: 0",  "30px Arial", "red","txt6");
var screen4 = [elem4_1,elem4_2,elem4_3,elem4_4,text4_1];


//save screen
var elem5_1 = ScrEle(50,50,881,500,"img/CC3.png","b4");
var elem5_2 = ScrEle(620,500,120,50,"img/pink.png","s3a");

var screen5 = [elem5_1,elem5_2];

//SkillScreen(lulu, Eric, Mina, background, skill*9)

var elem6_1 = ScrEle(50,50,881,500,"img/green.png","b4");
var elem6_2 = ScrEle(620,500,120,50,"img/pink.png","s3a");
var chara1 = ScrEle(120,100,200,60,"Sc2/Belfast.JPG","lulu");
var chara2 = ScrEle(400,100,200,60,"Sc2/Enty.JPG","mina");
var chara3 = ScrEle(660,100,200,60,"Sc2/Shoka.JPG","eric");
var sk1 = ScrEle(100,200,60,60,"Sc2/Sk1.png","ssr");
var sk2 = ScrEle(180,200,60,60,"Sc2/Sk2.png","ssr");
var sk3 = ScrEle(260,200,60,60,"Sc2/Sk3.png","ssr");
var sk4 = ScrEle(340,200,60,60,"Sc2/Sk4.png","ssr");
var sk5 = ScrEle(420,200,60,60,"Sc2/Sk5.png","ssr");
var sk6 = ScrEle(100,280,60,60,"Sc2/Sk6.png","ssr");
var sk7 = ScrEle(180,280,60,60,"Sc2/Sk7.png","ssr");
var sk8 = ScrEle(260,280,60,60,"Sc2/Sk8.png","ssr");
var sk9 = ScrEle(340,280,60,60,"Sc2/Sk9.png","ssr");
var sk10 = ScrEle(420,280,60,60,"Sc2/Sk10.png","ssr");
var sk11 = ScrEle(100,360,60,60,"Sc2/Sk11.png","ssr");
var sk12 = ScrEle(180,360,60,60,"Sc2/Sk12.png","ssr");
var sk13 = ScrEle(260,360,60,60,"Sc2/Sk13.png","ssr");
var sk14 = ScrEle(340,360,60,60,"Sc2/Sk14.png","ssr");
var sk15 = ScrEle(420,360,60,60,"Sc2/Sk15.png","ssr");
var sk16 = ScrEle(100,440,60,60,"Sc2/Sk10.png","ssr");
var sk17 = ScrEle(180,440,60,60,"Sc2/Sk11.png","ssr");
var sk18 = ScrEle(260,440,60,60,"Sc2/Sk12.png","ssr");
var sk19 = ScrEle(340,440,60,60,"Sc2/Sk13.png","ssr");
var sk20 = ScrEle(420,440,60,60,"Sc2/Sk14.png","ssr");

var statText1 = ScrTxt(500, 250, "Hp: 300", "20px Impact", "red","txt1");
var statText2 = ScrTxt(500, 280, "Mp: 400", "20px Impact", "red","txt1");
var statText3 = ScrTxt(500, 310, "Def: 100", "20px Impact", "red","txt1");
var statText4 = ScrTxt(500, 340, "Res: 20%", "20px Impact", "red","txt1");
var statText5 = ScrTxt(500, 370, "Speed: 4", "20px Impact", "red","txt1");
var statText6 = ScrTxt(500, 400, "Initiation: 30%",  "20px Impact", "red","txt1");
var statText7 = ScrTxt(500, 430, "MpRegen: 5", "20px Impact", "red","txt1");
var statText8 = ScrTxt(700, 250, "Attack: 10", "20px Impact", "red","txt1");
var statText9 = ScrTxt(700, 280, "Vigilance: 0", "20px Impact", "red","txt1");
var statText10 = ScrTxt(700, 310, "Fatal Shock: 1", "20px Impact", "red","txt1");
var statText11 = ScrTxt(700, 340, "Crit: 30%",  "20px Impact", "red","txt1");
var statText12 = ScrTxt(700, 370, "",  "20px Impact", "red","txt1");
var statText13 = ScrTxt(700, 400, "",  "20px Impact", "red","txt1");
var statText14 = ScrTxt(700, 430, "",  "20px Impact", "red","txt1");
var infbox = InfoBox();
var screen6 = [elem6_1,elem6_2,sk1,sk2,sk3,sk4,sk5,sk6,sk7,sk8,sk9,sk10,sk11,sk12,sk13,sk14,sk15,sk16,sk17,sk18,sk19,sk20,chara1,chara2,chara3,statText1,statText2,statText3,statText4,statText5,statText6,statText7,statText8,statText9,statText10,infbox];

//GamePlay
var elem7_1 = ScrEle(0,0,1024,640,"img/black.JPG","b4");
var elem7_2 = ScrEle(620,500,120,50,"img/pink.png","s3a");
var elem7_3 = ScrEle(640,200,250,400,"img/RoseRight.png","c2");
var elem7_4 = ScrEle(700,200,300,400,"img/RenaRight.png","c2");
var elem7_5 = ScrEle(100,400,700,150,"img/ButtonBlue3.jpg","s8");
var elem7_6 = ScrEle(0,0,64*16,64*10,"img/redGridSmall.png","e1");
var elem7_7 = ScrEle(-900,-400,200,400,"img/Box2.jpg","e1");
var elem7_8 = ScrEle(0,0,1024,640,"img/red.png","e1");
var elem7_9 = ScrEle(60,70,64,96,"img/lulu.png","e1");
var text7_1 = ScrTxt(170, 460, "Press your unit by left clicking your mouse",  "20px Arial", "red","txt7_1");
var text7_2 = ScrTxt(170, 490, "You can drag the background",  "20px Arial", "red","txt7_2");
var cmdMenu = CommandMenu();
var game7_1 = getLevel1();
cmdMenu.closeThis();
var screen7 = [elem7_1,elem7_8,elem7_6,game7_1,elem7_7,cmdMenu,elem7_9];