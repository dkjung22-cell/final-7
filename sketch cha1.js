function setup() {
  createCanvas(600, 400);
}
function draw() {
  background("#E5E5FF");
  noStroke();
  fill(80, 50, 40); 
  ellipse(300, 180, 250, 300); // 얼굴 뒤쪽을 덮는 큰 머리카락 바탕
  ellipse(210, 220, 110, 210); // 왼쪽 아래로 내려오는 머리카락
  ellipse(390, 220, 110, 210); // 오른쪽 아래로 내려오는 머리카락
  ellipse(197, 270, 120, 190); // 왼쪽 아래로 내려오는 머리카락
  ellipse(395, 270, 120, 190);
  ellipse(260, 110, 70, 70);  
  ellipse(340, 110, 70, 70);
  fill("#FFFFE5");
  rect(125,380,20,20)
  rect(455,380,20,20)
  ellipse(300, 380, 350, 150);
  fill(255, 240, 230); 
  rect(275, 260, 50, 80); 
  arc(300, 340, 50, 35, 0, PI);
  fill(255, 240, 230); 
  ellipse(300, 190, 162, 190); 
  ellipse(210, 190, 30, 50);
  ellipse(390, 190, 30, 50); 
  
  fill(255);
  ellipse(255, 170, 50, 30 ); 
  ellipse(345, 170, 50, 30); 
  
    
 
    
    // 반복문을 사용해 눈 주변에 4개의 반짝이
   
  fill(50, 30, 20); 
  ellipse(257, 170, 30, 32); 
  ellipse(343, 170, 30, 32); 
  fill(255);
  noStroke(); 
  ellipse(250, 166, 8, 8); 
  ellipse(258, 174, 4, 4); 
  ellipse(340, 166, 8, 8); 
  ellipse(348, 174, 4, 4); 
    stroke(50, 30, 20);
  strokeWeight(2); 
  noFill();
  arc(255, 168, 55, 25, PI, 0); 
  arc(345, 168, 55, 25, PI, 0); 
  strokeWeight(1); 
  arc(255, 160, 50, 20, PI, 0); 
  arc(345, 160, 50, 20, PI, 0); 
  stroke(50, 30, 20); 
  strokeWeight(2); 
  arc(255, 140, 60, 15, PI, 0);
  arc(345, 140, 60, 15, PI, 0); 
  strokeWeight(1);
  line(230, 170, 205, 165); 
  line(232, 165, 208, 155); 
  line(235, 160, 215, 148); 
  line(238, 155, 222, 142);
  line(241, 150, 230, 137);
  line(370, 170, 395, 165);
  line(368, 165, 392, 155); 
  line(365, 160, 385, 148); 
  line(362, 155, 378, 142);
  line(359, 150, 370, 137);
  noStroke();
  fill("#FFC0C0"); 
  line(300,200,320,215);
  line(320,215,320,215);
  noFill();
  stroke("#FFCCCC"); 
  strokeWeight(1);
  fill("#FFCCCC")
  arc(300,230,50,40,0,PI)
  noStroke();
  fill(80, 50, 40); 
  stroke(200, 200, 200); 
  strokeWeight(4); 
  strokeCap(ROUND);
  line(210, 200, 210, 235); 
  line(390, 200, 390, 235); 
  noFill(); 
  stroke(50, 30, 20); 
  strokeWeight(2);
  beginShape();
  vertex(305, 197); 
  vertex(310, 200);
  vertex(305, 205); 
  endShape();
  stroke("#FFCCCC");
  line (250,200,250,205);
  line (253,200,253,205);
  line (256,200,256,205);
  line (247,200,247,205);
  stroke("#FFCCCC");
  line (350,200,350,205);
  line (353,200,353,205);
  line (356,200,356,205);
  line (347,200,347,205)
  noStroke();
  fill(255);
  circle(360,340,10);
  circle(310,370,10);
  circle(250,340,10);
  circle(220,360,5);
 
  
  
  strokeWeight(2); 
  noFill();
  arc(255, 168, 55, 25, PI, 0); 
  arc(345, 168, 55, 25, PI, 0); 
  strokeWeight(1); 
  arc(255, 160, 50, 20, PI, 0); 
  arc(345, 160, 50, 20, PI, 0); 
  stroke(50, 30, 20); 
  strokeWeight(2); 
  arc(255, 140, 60, 15, PI, 0);
  arc(345, 140, 60, 15, PI, 0); 
  strokeWeight(1);
  line(230, 170, 205, 165); 
  line(232, 165, 208, 155); 
  line(235, 160, 215, 148); 
  line(238, 155, 222, 142);
  line(241, 150, 230, 137);
  line(370, 170, 395, 165);
  line(368, 165, 392, 155); 
  line(365, 160, 385, 148); 
  line(362, 155, 378, 142);
  line(359, 150, 370, 137);
  noStroke();
  fill("#FFC0C0"); 
  line(300,200,320,215);
  line(320,215,320, 215);
  noFill();
  stroke("#FFCCCC"); 
  strokeWeight(1);
  fill("#FFCCCC")
  arc(300,230,50,40,0,PI)
  noStroke();
  fill(80, 50, 40); 
  stroke(200, 200, 200); 
  strokeWeight(4); 
  strokeCap(ROUND);
  line(210, 200, 210, 235); 
  line(390, 200, 390, 235); 
  noFill(); 
  stroke(50, 30, 20); 
  strokeWeight(2);
  beginShape();
  vertex(305, 197); 
  vertex(310, 200);
  vertex(305, 205); 
  endShape();
  stroke("#FFCCCC");
  line (250,200,250,205);
  line (253,200,253,205);
  line (256,200,256,205);
  line (247,200,247,205);
  stroke("#FFCCCC");
  line (350,200,350,205);
  line (353,200,353,205);
  line (356,200,356,205);
  line (347,200,347,205)
  noStroke();
  fill(255);
} 
