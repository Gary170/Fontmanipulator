noseX = 0;
noseY = 0;
difference = 0;
rwX = 0;
lwX= 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(350, 150);
    canvas = createCanvas(550, 500);
    canvas.position(950, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#d6a08b');
    
        textSize(difference);
        text('Meet', 30, 320);
        fill('#f51d1d');
        
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        lwX = results[0].pose.leftWrist.x;
        rwX = results[0].pose.rightWrist.x;
        difference = floor(lwX - rwX);

        
        console.log("Wrists: " + "leftX = " + lwX + " and rightX = " + rwX );
    }
}
