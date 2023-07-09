song = "";
song2 = "";

function preload()
{
	song = loadSound("Song.mp3");
    song2 = loadSound("music.mp3")
}



function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
    console.log("Model loaded successfully");
}