function preload(){

}
function setup(){
    canvas=createCanvas(400,400);
    canvas.position(255,255);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,400,400);
    video.center()
    strokeWeight(4);
    noFill();
    line(0, 200, 200, 0);
    line(0, 200, 200, 400);
    line(200, 400, 400, 200);
    line(400, 200, 200, 0);
    line(200, 0, 200, 400);
    line(0, 200, 400, 200);
    ellipse(200, 200, 50, 50);
    ellipse(200, 400, 50, 50);
    ellipse(400, 200, 50, 50);
    ellipse(200, 0, 50, 50);
    ellipse(0, 200, 50, 50);
}
function take_snapshot(){
   save('your_take_snapshot.png');
}