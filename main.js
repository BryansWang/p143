img=""
noseX=0;
noseY=0;
marioX=325;
marioY=325;

function preload() {
	mario_jump= loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_gameover= loadSound("gameover.wav")
	mario_die= loadSound("mariodie.wav");
	mario_kick= loadSound("kick.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();

}

function setup() {
	canvas = createCanvas(650,400);
	canvas.parent('canvas'); 
	instializeInSetup(mario);
	video= createCapture(VIDEO);
	video.size(800,400)
	video.parent('game_console')
	poseNet= ml5.posenet(video, modlLoaded);
	poseNet.on('pose', gotPoses);

	initializeInSetup(mario);
}

function modelLoaded() {
	console.log('Model Loaded!');
}

function draw() {
	background("#D3D3D3");
	Image(img, marioX, marioY, 40, 70);
}

function gotPoses(results) {
	if(results.length>0)
	{
		console.log(results);
		noseX= results[0].pose.nose.x;
		noseY+ results[0].pose.nose.y;
		console.log("noseX=" + noseX+", noseY=" + noseY);
	}
}






