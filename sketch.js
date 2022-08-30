var bean,beanImg;
var sussy,sussyImg;
var bgImg;
var banana,bananaImg;
var crown,crowmImg;
var sound1;
var ground;



function preload(){
    beanImg = loadImage("assets/bean.png")
    sussyImg = loadImage("assets/sussy.png")
    sound1 = loadSound("assets/bgMusic.mp3")
    bgImg = loadImage("assets/background.jpg")
    
 

}
function setup(){
    createCanvas(windowWidth,windowHeight)
    sussy = createSprite(80,650)
    sussy.addImage(sussyImg)
    sussy.scale = 0.2

    bean = createSprite(80,650)
    bean.addImage(beanImg)
    bean.scale = 0.4
    bean.visible = false;

    bananaGroup = new Group()
    
    

    // sound1.loop()
    
   
   
     
    

    

    

}
function draw(){
    background(bgImg)
    //Sussy();
    if(keyIsDown(UP_ARROW) ){
        sussy.y=  sussy.y +10
        text("hello",300,300)
    }
    SpawnBananas()
    drawSprites()
   
 

}
function SpawnBananas(){
  if(frameCount % 70 === 0) {
    var banana = createSprite(600,100,40,20)
    banana.y = Math.round(random(100,150))
    banana.velocityX = -5
    banana.lifeTime = 200
    bananaGroup.add(banana)
  }

    
}