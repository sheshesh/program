let diam1=10
    diam2=10; diam3=10; 
diam4=10

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("#E77336");
  fill("#2B29C1"); 
  stroke("#21B325");
  strokeWeight(5);
  ellipse(70,100,80,80);
  fill("#DC143C");
  ellipse(400,400,80,80);
  ellipse(mouseX,mouseY,20,20);
  
  textSize(20);
  fill("#2B26C1")
  textFont("GEORGIA");
  textStyle(ITALIC);
  textAlign(CENTER);
  text("*im hungry...maybe donuts NO... a burger...ooo yes*",190,25,85,diam3); 
  
  textSize(20);
  fill("#DC143C")
  textFont("GEORGIA");
  text("*I can read his mind, I'll ask if he wants to get a burger*",250,300,95,diam1);
  textSize(20);
  fill("#DC143C")
  textFont("GEORGIA");
  text("''Hey, want to get a burger?''",260,320,95,diam2);
  
  textSize(20)
  fill("#2B26C1")
  textFont("GEORGIA");
  textStyle(ITALIC);
  textAlign(CENTER);
  text("''I was just thinking that''",190,25,85,diam4);
  
}
function mousePressed() {
  if (diam1===10) {
    diam1=255;
  } else {
     diam1=diam2; 
    diam1=10;   
  } 
  if (diam2===15) {
    diam2=255;
  }else {
    diam2=15;   
  }
  if (diam3===10) {
    diam3=255;
  }else {
    diam3=10;   
}
  if (diam4===15) {
    diam4=255;
  }else {
    diam4=15;   
}
}