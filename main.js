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
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
