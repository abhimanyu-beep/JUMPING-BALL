var canvas;
var music;
var box1
var box2
var box3
var box4
var ball

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces

    box1 = createSprite(55,380,100,30)
    box1.shapeColor = ("blue")

    box2 = createSprite(210,380,100,30)
    box2.shapeColor = ("red")

    box3 = createSprite(350,380,100,30)
    box3.shapeColor = ("green")

    box4= createSprite(490,380,100,30)
    box4.shapeColor = ("pink")

    //create box sprite and give velocity


    ball = createSprite(random(20,750),100,40,40)
    ball.shapeColor = ("black")
    ball.velocityY = 6
    ball.velocityX = 6
    

}

function draw() {
    background(rgb(169,169,169));

   

    //create edgeSprite
  edges = createEdgeSprites()
  ball.bounceOff(edges)

  



  if(box1.isTouching(ball)&&ball.bounceOff(box1)){
    ball.shapeColor = "blue"
    music.play()
   }

   if(box2.isTouching(ball)&&ball.bounceOff(box2)){
       ball.shapeColor = "red"
   }

   if(box3.isTouching(ball)&&ball.bounceOff(box3)){
       ball.shapecolor = "green"
   }
   
   if(box4.isTouching(ball)&&ball.bounceOff(box4)){
   ball.shapeColor = "pink"
   }
  
  
  

    



    //add condition to check if box touching surface and make it box



    drawSprites()
}
