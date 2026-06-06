let time = 0
let colorTime = 0

function setup(){
  createCanvas(600, 400); 
  
}
function draw(){
  background(2);  
 
  let movement = sin(time * 0.05);


  let yOffset = movement * 5; 
  let y1Offset = movement * 6 ;
  let y2Offset = movement * 8;

  let originalY = 150; 
  let originalY1 = 70;
  let originalY2 = 80;
  let originalY3 = 100;
  let originalY4 = 120;
  let originalY5 =180 ;
  let originalY6 =200 ;
  // 직사각형의 원래 시작 Y 좌표
  let currentY = originalY + yOffset;
  let currentY1 = originalY1 - y1Offset;
  let currentY2 = originalY2 + y1Offset;
  let currentY3 = originalY3 - y2Offset;
  let currentY33 = originalY3 + y2Offset;
  let currentY4 = originalY4 -  y1Offset;
  let currentY5 = originalY5 - yOffset;
  let currentY6 = originalY6 + yOffset;
  
  let startBlueColor = color("#C0FFFF"); 
  let endBlueColor = color("#4040FF");   
  let startBlue1Color = color("#99CCFF"); 
  let endBlue1Color = color("#4040FF");   
  let startRedColor = color("#FFC0C0"); 
  let endRedColor = color("#CC0000"); 
  let startRed1Color = color("#FFE5CC"); 
  let endRed1Color =  color("#FFCC99");
  let startRed2Color = color("#993399"); 
  let endRed2Color =  color("#CCCCFF");
 
  let amt = (sin(colorTime * 0.05) + 1) / 2;
  let amt1 = (sin(colorTime * 0.03) + 2) / 2;
  let amt2 = (sin(colorTime * 0.01) + 2) / 2;
  
  let currentColor = lerpColor(startBlueColor, endBlueColor, amt);
  let currentRedColor = lerpColor(startRedColor, endRedColor, amt1);
  let currentBlue1Color = lerpColor(startBlue1Color, endBlue1Color, amt2);
  let currentRed1Color = lerpColor(startRed1Color, endRed1Color, amt);
  let currentRed2Color = lerpColor(startRed2Color, endRed2Color, amt);
  
  colorTime++;
  
  fill(currentRedColor);
  quad(365, 70, 390, 120, 390, 280, 364, 280); // 짙은 빨간색의 비대칭 사각형 
  rect(330, currentY, 16, 135);
  
  // 왼쪽에 위치한 붉은 계열 직사각형
  noStroke() 
  fill("#FFA040");
  rect(350, 90, 10, 100); 
  noStroke()// 얇고 긴 주황색 직사각형
  fill("#FFC080");
  rect(350, 195, 9, 86);  // 아래쪽에 이어지는 연주황색 직사각형
  stroke("#FF9999");
  line(365, currentY1, 365, 70);   // 상단 연분홍색 세로선
  stroke("#FF9999");
  line(365, currentY1, 362, 289);
  // 길게 내려오는 연분홍색 세로선
  
  
  
  stroke("#FFC0C0");
  line(326, 130, 326, 300); // 연분홍색 세로선
  stroke("#FFC0C0");
  strokeWeight(5);          // 선 두께를 5px로 두껍게 설정
  line(320, currentY4, 320, 295); // 두꺼운 연분홍색 세로선

  // 3. 보라/살구색 계열의 구조물 (화면 우측)
  noStroke();               // 테두리선 없애기
  fill(currentRed2Color);
  rect(447, currentY6 , 20, 85);  // 보라색 직사각형

  noStroke(0);
  fill(currentRed1Color);
  quad(410, 170, 440, 165, 440, 280, 395, 280); // 살구색 비대칭 사각형

  stroke("#FFE5CC");
  strokeWeight(2);          // 선 두께 2px로 조절
  line(410, 130, 410, 310); // 연살구색 세로선
  stroke("#FFE5CC");
  line(415, currentY, 415, 290); // 연살구색 세로선

  // 4. 중앙 좌측의 작은 구조물과 방울들 (주황/핑크 계열)
  rect(290, 230, 20, 48);   // 살구색 작은 직사각형
  stroke("#FF4040");
  line(310, 280, 310, 340); // 아래로 뻗는 빨간 세로선
  line(300, 280, 300, 320); // 아래로 뻗는 짧은 빨간 세로선

  fill("#FFE5FF");
  circle(310, 320, 13);     // 아주 연한 핑크색 원
  circle(300, 300, 7);      // 아주 연한 핑크색 작은 원

  // 5. 파란색 계열의 거대 구조물 (화면 중앙~좌측)
  fill("#4040FF");
  noStroke();
  quad(260, 200, 280, 180, 280, 290, 260, 290); // 파란색 비대칭 사각형

  stroke("#C0FFFF");
  line(285, 150, 285, 300); // 하늘색 세로선

  fill("#0000CC");
  noStroke();
  rect(220, 160, 37, 140); 
  fill(currentColor);// 짙은 파란색 직사각형
  noStroke();
  arc(239, 157, 40, 45, PI, TWO_PI); // 직사각형 위에 얹은 파란색 아치(반원) 모양

  stroke(currentColor);
  line(239,  currentY33, 239, 160); // 아치 위로 솟은 파란 세로선

  stroke("#99CCFF");
  strokeWeight(5);
  line(210, currentY2, 210, 330);  // 화면을 가로지르는 두꺼운 하늘색 세로선

  stroke("#C0FFFF");
  strokeWeight(2);
  line(216,  currentY3, 216, 360); // 하늘색 세로선

  fill(currentBlue1Color);
  noStroke();
  quad(150, 130, 200, 100, 200, 290, 150, 290); // 파란색 큰 비대칭 사각형

  stroke(200);
  line(195, 110, 195, 320); // 회색 세로선
  stroke("#CCCCFF");
  strokeWeight(3);
  line(180, 280, 180, 340); // 연보라빛 세로선

  noStroke();
  fill("#80C0FF");
  rect(135, currentY5, 10, 120);  // 하늘색 얇은 직사각형
  fill("#333399");
  rect(123, 150, 5, 160);   // 남색 아주 얇은 직사각형

  // 6. 양쪽 외곽의 미세한 세로선 및 구조물
  stroke("#CCCCFF");
  line(473, currentY5, 473, 290); // 우측 연보라색 세로선

  fill("#400080");
  noStroke();
  quad(100, 250, 119, 220, 119, 296, 90, 296); // 좌측 하단 진보라색 사각형

  stroke("#CCCCFF");
  line(115, 190, 115, 300); // 좌측 연보라색 세로선
  line(480, 230, 480, 300); // 우측 연보라색 세로선 1
  line(486, 210, 486, 290); // 우측 연보라색 세로선 2
  noStroke(0);
  
  let animationFactor = (sin(time * 0.05) + 1) / 2;

  
  let currentSize = map(animationFactor, 0, 1, 15, 20);
  let currentSize1 = map(animationFactor, 0, 1, 7, 2);
  let currentSize2 = map(animationFactor, 0, 1, 2, 7);
  let currentSize3 = map(animationFactor, 0, 1, 4, 10);
  let currentSize4 = map(animationFactor, 0, 1, 15, 5);
  
  fill("#FFCCCC");
  circle(450,90,currentSize);
  circle(430,140,currentSize1);
  circle(228,80,currentSize2);
  fill("#CCE5FF");
  circle(281,136,currentSize2);
  circle(310,110,currentSize1);
  circle(120,100,currentSize1);
  fill("#E5E5FF");
  circle(160,320,currentSize3);
  circle(450,340,currentSize4);
  circle(430,320,currentSize2);
  circle(450,310,currentSize1);
  fill("#FF9999");
  circle(500,190,currentSize1);
  circle(80,200,currentSize2);
  fill("#99CCFF");
  circle(260,50,currentSize1);
  noStroke();
  fill("#C0E0FF");
  rect(490,250,10,40);
  
  time ++
 
} 

function mousePressed() {
  saveGif('click_animation', 5)
}