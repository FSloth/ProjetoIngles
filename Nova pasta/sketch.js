var INICIO = 1
var REINICIO = 0
var estadoJogo = INICIO

var Nome,Ni

var filme1,filme2,filme3,filme4,filme5,filme6,filme7,filme8,filme9,filme10
var estrela1,estrela2,estrela3,estrela4,estrela5,estrela6,estrela7,estrela8,estrela9,estrela10

var escola,escola2

var img1,img2,img3,img4,img5,img6,img7,img8,img9,img10

var Ri

var De1,De2,De3,De4,De5,De6,De7,De8,De9,De10


function preload(){
  Ni = loadImage("Movue_Room-removebg-preview.png")
  
  img1 = loadImage("1.jpg")
  img2 = loadImage("2.jpg")
  img3 = loadImage("3.jpg")
  img4 = loadImage("4.jpg")
  img5 = loadImage("5.jpg")
  img6 = loadImage("6.jpg")
  img7 = loadImage("7.jpg")
  img8 = loadImage("8.jpg")
  img9 = loadImage("9.jpg")
  img10 = loadImage("10.jpg")
  
  De1 = loadImage("1,5.jpg")
  De2 = loadImage("2,5.jpg")
  De3 = loadImage("3,5.jpg")
  De4 = loadImage("4,5.jpg")
  De5 = loadImage("5,5.jpg")
  De6 = loadImage("6,5.jpg")
  De7 = loadImage("7,5.jpg")
  De8 = loadImage("8,5.jpg")
  De9 = loadImage("9,5.jpg")
  De10 = loadImage("10,5.jpg")
  
  Ri = loadImage("seta-removebg-preview.png")
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  Nome = createSprite(width-400,100,800,100);
  Nome.addImage("Nome", Ni);
  Nome.scale = 1.9
  
  filme1 = createSprite(width-700,260,110, 150);
  estrela1 = createSprite(width-700,350,120,20);

  filme1.addAnimation("Foto",img1)
  filme1.scale = 0.17
  
  filme2 = createSprite(width-550,260,110, 150);
  estrela2 = createSprite(width-550,350,120,20);
  filme2.addAnimation("Foto",img2)
  filme2.scale = 0.17
  
  filme3=createSprite(width-400,260,110, 150);
  estrela3=createSprite(width-400,350,120,20);
  filme3.addAnimation("Foto",img3)
  filme3.scale = 0.16
  
  filme4=createSprite(width-250,260,110, 150);
  estrela4=createSprite(width-250,350,120,20);
  filme4.addAnimation("Foto",img4)
  filme4.scale = 0.17
  
  filme5=createSprite(width-100,260,110, 150);
  estrela5=createSprite(width-100,350,120,20);
  filme5.addAnimation("Foto",img5)
  filme5.scale = 0.16
  
  filme6=createSprite(width-700,460,110, 150);
  estrela6=createSprite(width-700,550,120,20);
  filme6.addAnimation("Foto",img6)
  filme6.scale = 0.16
  
  filme7=createSprite(width-550,460,110, 150);
  estrela7=createSprite(width-550,550,120,20);
  filme7.addAnimation("Foto",img7)
  filme7.scale = 0.17
  
  filme8=createSprite(width-400,460,110, 150);
  estrela8=createSprite(width-400,550,120,20);
  filme8.addAnimation("Foto",img8)
  filme8.scale = 0.17
  
  filme9=createSprite(width-250,460,110, 150);
  estrela9=createSprite(width-250,550,120,20);
  filme9.addAnimation("Foto",img9)
  filme9.scale = 0.17
  
  filme10=createSprite(width-100,460,110, 150);
  estrela10=createSprite(width-100,550,120,20);
  filme10.addAnimation("Foto",img10)
  filme10.scale = 0.17
  
  reiniciar = createSprite(378,450,60,60);
  reiniciar.addAnimation("voltar", Ri)
  reiniciar.visible = false;
  reiniciar.scale = 0.2
  
  DescA=createSprite(150,300,150,200);
  DescA.addAnimation("Foto",img1)
  DescA.scale = 0.32
  Desc1=createSprite(400,300,400,200);
  Desc1.addAnimation("Descriçao",De1)
  Desc1.scale = 0.18
  DescA.visible = false;
  Desc1.visible = false;
  
  DescB=createSprite(150,300,150,200);
  DescB.addAnimation("Foto",img2)
  DescB.scale = 0.32
  Desc2=createSprite(400,300,400,200);
  Desc2.addAnimation("Descriçao",De2)
  Desc2.scale = 0.18
  DescB.visible = false;
  Desc2.visible = false;
  
  DescC=createSprite(150,300,150,200);
  DescC.addAnimation("Foto",img3)
  DescC.scale = 0.32
  Desc3=createSprite(400,300,400,200);
  Desc3.addAnimation("Descriçao",De3)
  Desc3.scale = 0.18
  DescC.visible = false;
  Desc3.visible = false;
  
  DescD=createSprite(150,300,150,200);
  DescD.addAnimation("Foto",img4)
  DescD.scale = 0.32
  Desc4=createSprite(400,300,400,200);
  Desc4.addAnimation("Descriçao",De4)
  Desc4.scale = 0.18
  DescD.visible = false;
  Desc4.visible = false;
  
  DescE=createSprite(150,300,150,200);
  DescE.addAnimation("Foto",img5)
  DescE.scale = 0.32
  Desc5=createSprite(400,300,400,200);
  Desc5.addAnimation("Descriçao",De5)
  Desc5.scale = 0.18
  DescE.visible = false;
  Desc5.visible = false;
  
  DescF=createSprite(150,300,150,200);
  DescF.addAnimation("Foto",img6)
  DescF.scale = 0.32
  Desc6=createSprite(400,300,400,200);
  Desc6.addAnimation("Descriçao",De6)
  Desc6.scale = 0.18
  DescF.visible = false;
  Desc6.visible = false;
  
  DescG=createSprite(150,300,150,200);
  DescG.addAnimation("Foto",img7)
  DescG.scale = 0.32
  Desc7=createSprite(400,300,400,200);
  Desc7.addAnimation("Descriçao",De7)
  Desc7.scale = 0.18
  DescG.visible = false;
  Desc7.visible = false;
  
  DescH=createSprite(150,300,150,200);
  DescH.addAnimation("Foto",img8)
  DescH.scale = 0.32
  Desc8=createSprite(400,300,400,200);
  Desc8.addAnimation("Descriçao",De8)
  Desc8.scale = 0.18
  DescH.visible = false;
  Desc8.visible = false;
  
  DescI=createSprite(150,300,150,200);
  DescI.addAnimation("Foto",img9)
  DescI.scale = 0.32
  Desc9=createSprite(400,300,400,200);
  Desc9.addAnimation("Descriçao",De9)
  Desc9.scale = 0.18
  DescI.visible = false;
  Desc9.visible = false;
  
  DescJ=createSprite(150,300,150,200);
  DescJ.addAnimation("Foto",img10)
  DescJ.scale = 0.32
  Desc10=createSprite(400,300,400,200);
  Desc10.addAnimation("Descriçao",De10)
  Desc10.scale = 0.18
  DescJ.visible = false;
  Desc10.visible = false;
  
  
}

function draw() {
  
  background(25);
  
  
  if(estadoJogo === INICIO){
  
  if(mousePressedOver(filme1)){
     Pag1();
  }
  if(mousePressedOver(filme2)){
     Pag2();
   }
  if(mousePressedOver(filme3)){
     Pag3();
   }
  if(mousePressedOver(filme4)){
     Pag4();
   }
    if(mousePressedOver(filme5)){
     Pag5();
   }
    if(mousePressedOver(filme6)){
     Pag6();
   }
    if(mousePressedOver(filme7)){
     Pag7();
   }
    if(mousePressedOver(filme8)){
     Pag8();
   }
    if(mousePressedOver(filme9)){
     Pag9();
   }
    if(mousePressedOver(filme10)){
     Pag10();
   }
    
  if(mousePressedOver(reiniciar)){
    estadoJogo = REINICIO
  }
}
  
  if(estadoJogo === REINICIO){
    Reinicio();
  }
  
  
  drawSprites();
}
function Reinicio(){
   
  Nome = createSprite(width-400,100,800,100);
  Nome.addImage("Nome", Ni);
  Nome.scale = 1.9
    filme1 = createSprite(width-700,260,110, 150);
  estrela1 = createSprite(width-700,350,120,20);
  filme1.addAnimation("Foto",img1)
  filme1.scale = 0.17
  
  filme2 = createSprite(width-550,260,110, 150);
  estrela2 = createSprite(width-550,350,120,20);
  filme2.addAnimation("Foto",img2)
  filme2.scale = 0.17
  
  filme3=createSprite(width-400,260,110, 150);
  estrela3=createSprite(width-400,350,120,20);
  filme3.addAnimation("Foto",img3)
  filme3.scale = 0.16
  
  filme4=createSprite(width-250,260,110, 150);
  estrela4=createSprite(width-250,350,120,20);
  filme4.addAnimation("Foto",img4)
  filme4.scale = 0.17
  
  filme5=createSprite(width-100,260,110, 150);
  estrela5=createSprite(width-100,350,120,20);
  filme5.addAnimation("Foto",img5)
  filme5.scale = 0.16
  
  filme6=createSprite(width-700,460,110, 150);
  estrela6=createSprite(width-700,550,120,20);
  filme6.addAnimation("Foto",img6)
  filme6.scale = 0.16
  
  filme7=createSprite(width-550,460,110, 150);
  estrela7=createSprite(width-550,550,120,20);
  filme7.addAnimation("Foto",img7)
  filme7.scale = 0.17
  
  filme8=createSprite(width-400,460,110, 150);
  estrela8=createSprite(width-400,550,120,20);
  filme8.addAnimation("Foto",img8)
  filme8.scale = 0.17
  
  filme9=createSprite(width-250,460,110, 150);
  estrela9=createSprite(width-250,550,120,20);
  filme9.addAnimation("Foto",img9)
  filme9.scale = 0.17
  
  filme10=createSprite(width-100,460,110, 150);
  estrela10=createSprite(width-100,550,120,20);
  filme10.addAnimation("Foto",img10)
  filme10.scale = 0.17
  
  DescA.destroy();
  Desc1.destroy();
  
  DescB.destroy();
  Desc2.destroy();
  
  DescC.destroy();
  Desc3.destroy();
  
  DescD.destroy();
  Desc4.destroy();
  
  DescE.destroy();
  Desc5.destroy();
  
  DescF.destroy();
  Desc6.destroy();
  
  DescG.destroy();
  Desc7.destroy();
  
  DescH.destroy();
  Desc8.destroy();
  
  DescI.destroy();
  Desc9.destroy();
  
  DescJ.destroy();
  Desc10.destroy();
  
  DescA.visible = false;
  Desc1.visible = false;
  
  DescB.visible = false;
  Desc2.visible = false;
  
  DescC.visible = false;
  Desc3.visible = false;
  
  DescD.visible = false;
  Desc4.visible = false;
  
  DescE.visible = false;
  Desc5.visible = false;
  
  DescF.visible = false;
  Desc6.visible = false;
  
  DescG.visible = false;
  Desc7.visible = false;
  
  DescH.visible = false;
  Desc8.visible = false;
  
  DescI.visible = false;
  Desc9.visible = false;
  
  DescJ.visible = false;
  Desc10.visible = false;
  
  reiniciar.visible = false;
  
}

function Pag1(){
  
  
  filme1.destroy();
  filme2.destroy();
  filme3.destroy();
  filme4.destroy();
  filme5.destroy();
  filme6.destroy();
  filme7.destroy();
  filme8.destroy();
  filme9.destroy();
  filme10.destroy();
  
  estrela1.destroy();
  estrela2.destroy();
  estrela3.destroy();
  estrela4.destroy();
  estrela5.destroy();
  estrela6.destroy();
  estrela7.destroy();
  estrela8.destroy();
  estrela9.destroy();
  estrela10.destroy();
  
  reiniciar.visible = true;
  
  DescA.visible = true;
  Desc1.visible = true;
}
function Pag2(){
  
  filme1.destroy();
  filme2.destroy();
  filme3.destroy();
  filme4.destroy();
  filme5.destroy();
  filme6.destroy();
  filme7.destroy();
  filme8.destroy();
  filme9.destroy();
  filme10.destroy();
  
  estrela1.destroy();
  estrela2.destroy();
  estrela3.destroy();
  estrela4.destroy();
  estrela5.destroy();
  estrela6.destroy();
  estrela7.destroy();
  estrela8.destroy();
  estrela9.destroy();
  estrela10.destroy();
  
  reiniciar.visible = true;
  
  DescB.visible = true;
  Desc2.visible = true;
}
function Pag3(){
  
  
  filme1.destroy();
  filme2.destroy();
  filme3.destroy();
  filme4.destroy();
  filme5.destroy();
  filme6.destroy();
  filme7.destroy();
  filme8.destroy();
  filme9.destroy();
  filme10.destroy();
  
  estrela1.destroy();
  estrela2.destroy();
  estrela3.destroy();
  estrela4.destroy();
  estrela5.destroy();
  estrela6.destroy();
  estrela7.destroy();
  estrela8.destroy();
  estrela9.destroy();
  estrela10.destroy();
  
  reiniciar.visible = true;
  
  DescC.visible = true;
  Desc3.visible = true;
}
function Pag4(){
  
  filme1.destroy();
  filme2.destroy();
  filme3.destroy();
  filme4.destroy();
  filme5.destroy();
  filme6.destroy();
  filme7.destroy();
  filme8.destroy();
  filme9.destroy();
  filme10.destroy();
  
  estrela1.destroy();
  estrela2.destroy();
  estrela3.destroy();
  estrela4.destroy();
  estrela5.destroy();
  estrela6.destroy();
  estrela7.destroy();
  estrela8.destroy();
  estrela9.destroy();
  estrela10.destroy();
  reiniciar.visible = true;
  
  DescD.visible = true;
  Desc4.visible = true;
}
function Pag5(){
  
  filme1.destroy();
  filme2.destroy();
  filme3.destroy();
  filme4.destroy();
  filme5.destroy();
  filme6.destroy();
  filme7.destroy();
  filme8.destroy();
  filme9.destroy();
  filme10.destroy();
  
  estrela1.destroy();
  estrela2.destroy();
  estrela3.destroy();
  estrela4.destroy();
  estrela5.destroy();
  estrela6.destroy();
  estrela7.destroy();
  estrela8.destroy();
  estrela9.destroy();
  estrela10.destroy();
  
  reiniciar.visible = true;
  
  DescE.visible = true;
  Desc5.visible = true;
  
}
function Pag6(){
  
  
  filme1.destroy();
  filme2.destroy();
  filme3.destroy();
  filme4.destroy();
  filme5.destroy();
  filme6.destroy();
  filme7.destroy();
  filme8.destroy();
  filme9.destroy();
  filme10.destroy();
  
  estrela1.destroy();
  estrela2.destroy();
  estrela3.destroy();
  estrela4.destroy();
  estrela5.destroy();
  estrela6.destroy();
  estrela7.destroy();
  estrela8.destroy();
  estrela9.destroy();
  estrela10.destroy();
  
  reiniciar.visible = true;
  
  DescF.visible = true;
  Desc6.visible = true;
}
function Pag7(){
  
  
  filme1.destroy();
  filme2.destroy();
  filme3.destroy();
  filme4.destroy();
  filme5.destroy();
  filme6.destroy();
  filme7.destroy();
  filme8.destroy();
  filme9.destroy();
  filme10.destroy();
  
  estrela1.destroy();
  estrela2.destroy();
  estrela3.destroy();
  estrela4.destroy();
  estrela5.destroy();
  estrela6.destroy();
  estrela7.destroy();
  estrela8.destroy();
  estrela9.destroy();
  estrela10.destroy();
  
  reiniciar.visible = true;
  
  DescG.visible = true;
  Desc7.visible = true;
}
function Pag8(){
  
  
  filme1.destroy();
  filme2.destroy();
  filme3.destroy();
  filme4.destroy();
  filme5.destroy();
  filme6.destroy();
  filme7.destroy();
  filme8.destroy();
  filme9.destroy();
  filme10.destroy();
  
  estrela1.destroy();
  estrela2.destroy();
  estrela3.destroy();
  estrela4.destroy();
  estrela5.destroy();
  estrela6.destroy();
  estrela7.destroy();
  estrela8.destroy();
  estrela9.destroy();
  estrela10.destroy();
  
  reiniciar.visible = true;
  
  DescH.visible = true;
  Desc8.visible = true;
}
function Pag9(){
  
  
  filme1.destroy();
  filme2.destroy();
  filme3.destroy();
  filme4.destroy();
  filme5.destroy();
  filme6.destroy();
  filme7.destroy();
  filme8.destroy();
  filme9.destroy();
  filme10.destroy();
  
  estrela1.destroy();
  estrela2.destroy();
  estrela3.destroy();
  estrela4.destroy();
  estrela5.destroy();
  estrela6.destroy();
  estrela7.destroy();
  estrela8.destroy();
  estrela9.destroy();
  estrela10.destroy();
  
  reiniciar.visible = true;
  
  DescI.visible = true;
  Desc9.visible = true;
}
function Pag10(){
  
  
  filme1.destroy();
  filme2.destroy();
  filme3.destroy();
  filme4.destroy();
  filme5.destroy();
  filme6.destroy();
  filme7.destroy();
  filme8.destroy();
  filme9.destroy();
  filme10.destroy();
  
  estrela1.destroy();
  estrela2.destroy();
  estrela3.destroy();
  estrela4.destroy();
  estrela5.destroy();
  estrela6.destroy();
  estrela7.destroy();
  estrela8.destroy();
  estrela9.destroy();
  estrela10.destroy();
  
  reiniciar.visible = true;
  
  DescJ.visible = true;
  Desc10.visible = true;
}