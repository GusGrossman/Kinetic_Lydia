let font;
function preload (){
font=loadFont('data/qi.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gfx=createGraphics(windowWidth,windowHeight);
  gfx.textAlign(CENTER,CENTER);
  gfx.fill(22,255,7);
  gfx.textFont(font);
  gfx.textSize(75);
  
  gfx.textLeading(60);
    gfx.text('Lydia\n Doban', width/2,height/2);
 
}

function draw() {
  background(0);
  
  
  const tileSize = 10;
  for (let x = 0; x < 220; x = x + 1) {
    for (let y=0; y < 60; y=y+1) {
      
      const wave=0.05
      
      const distortionX=sin(frameCount*wave+x*0.5+y*0.1) * 10
      
      distortionY=sin(frameCount*wave+x*0.05+y*1) * 5
      
      const sx = x * tileSize+distortionX 
      const sy = y * tileSize+distortionY
      const sw = tileSize
      const sh = tileSize
      
      const dx = x * tileSize
      const dy = y * tileSize
      const dw = tileSize
      const dh = tileSize
       image(gfx, dx, dy, dw, dh,sx,sy,sw,sh)
    
    }
  }
  
}
