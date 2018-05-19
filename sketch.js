var diam1 = 0;

function setup() {
  createCanvas (600,600);
    background("#006459");
}

function draw() {
    
  background("#EC7063"); 
  fill("#add8e6");
  stroke("#ffff00");
  strokeWeight(1);
  ellipse(50,100,diam1,diam1);
    Diam1=diam1+9;
  fill ("#ff0000");
  ellipse(560,320,diam1,diam1);
    Diam1=diam1+5;
  fill ("#ff0000");
  ellipse(280,452,diam1,diam1);
    Diam1=diam1+5;
  fill ("#add5b5");
  ellipse(180,241,diam1,diam1);
    Diam1=diam1+5;
  fill("#004821");
  ellipse(320,52,diam1,diam1)
    Diam1=diam1+5;
  ellipse(500,290,diam1,diam1);
    Diam1=diam1+5;
  ellipse(205,401,diam1,diam1);
    Diam1=diam1+5;
  ellipse(60,585,diam1,diam1);
    Diam1=diam1+5;
    ellipse(mouseX,mouseY,20,20);
    
  textSize(20);
  textFont("Verdana");
  textStyle(BOLD);
  textAlign(CENTER);
  text("POP!",300,300);
  console.log(diam1);
}


function mousePressed() {
    if(diam1>50){
        diam1=0;
    }else{
    diam1=diam1+5;
    }
}