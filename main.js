lips_x = 0;
lips_y = 0;
function preload(){
 //lips = loadImage("https://lh3.googleusercontent.com/proxy/9QmcL4yqkGczvdPwG48qPk31h2wxk271du7tktM0xblRnyNZg3pmn2nStomwtuyR-mZ1j9w5F2Nmps12FyuoL3VDHAp8jXV5AsYZkGiu2gMC8yfQvzBk21ieBx4R4Zipe19bL6e6fYhBeH_gWWvCf_M0zZvQNjN_XDU");
    lips = loadImage("https://i.postimg.cc/2jP2Lmmn/R.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    
    video.size(300,300);
    video.hide();

    my_poseNET = ml5.poseNet(video,modelLoaded);
    my_poseNET.on('pose',gotPoses);
    
}


function draw(){
    image(video, 0,0,300,300);
    image(lips, lips_x, lips_y, 40, 40);
}

function takeSnapshot(){
save("lipstickfilterimage.png");
}

function gotPoses(results){

    if (results.length >0){
        lips_x = results[0].pose.nose.x-17;
        lips_y = results[0].pose.nose.y;
    }

}

function modelLoaded() {
    console.log("Model Initialized")
}