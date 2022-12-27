nose_y = 0;
nose_x = 0;
difference= 0 ;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(0,150)

    canvas= createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialised")
}

function draw() {
    background("#62bce3");
    fill("#f90093");
    stroke("#f90093");
    square(nose_x,nose_y,difference);
    document.getElementById("square_side").innerHTML = "Size of square =" + difference;
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_y = results[0].pose.nose.y;
        nose_x = results[0].pose.nose.x;
 console.log("noseX =" + nose_x + ",noseY =" + nose_y);

 leftwristX = results[0].pose.leftWrist.x;
 rightwristX = results[0].pose.rightWrist.x;
 difference = floor(leftwristX - rightwristX);
 console.log("Leftwrist X = " + leftwristX + ", Rightwrist X " + rightwristX +"and Difference = " + difference);

}
}
