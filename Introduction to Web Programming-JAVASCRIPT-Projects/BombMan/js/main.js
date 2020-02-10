//canvas
let width1= 1250;
let height1 = 850;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = width1;
canvas.height = height1;


//variable to count when the time start and finish
let startGame;
let finishTime= false;

//DECLARATION OF VARIABLE IMAGE
//variable of img of bombMan
let img = new Image();
img.src="image/black.png";
//variable of img of bombMan back
let backPlayerImg = new Image();
backPlayerImg.src="image/blackBack.jpg";
//variable of img of block
let blockImg = new Image();
blockImg.src="image/block2.jpg";
//variable of img of bomb
let bombImg = new Image();
bombImg.src="image/bomb.png";
//variable of img of bomb exploding
let bombExplodingImg = new Image();
bombExplodingImg.src="image/exploding.jpg";
//variable of img of animal UP
let animalImgUp = new Image();
animalImgUp.src="image/yoshiUp.png";
//variable of img of animal DOWN
let animalImgDown = new Image();
animalImgDown.src="image/yoshiLeft.png";
//variable of img of animal LEFT
let animalImgLeft = new Image();
animalImgLeft.src="image/yoshiLeft.png";
//variable of img of animal RIGHT
let animalImgRight = new Image();
animalImgRight.src="image/yoshiRight.png";
//variable of img of animal DIE
let animalImgDie = new Image();
animalImgDie.src="image/yoshiDie.jpg";
//variable of img of animal DIE
let playerImgDie = new Image();
playerImgDie.src="image/backDie.png";

//Ask the name of player and display in the html
let name = prompt("Please Enter you name: ");
document.getElementById("showName").innerHTML = name;

//variable of the object
let myplayer;
let myGame;

//create array animals
let animals = new Array();
//create array block	
let blockArray= new Array();
//function to create blocks
function createBlocks(){
	for(let j=1; j < 17; j++){
		if(j%2==0){
			for(let i=1; i < 25; i++){
				if(i%2==0){
					blockArray.push(new Block((i-1)*50,(j-1)*50,50,50));
				}
			}
		}
	}
}	

//call function to draw the blocks
createBlocks();
//this function draw the player and push the animals for the array
function initObject(){
	myplayer = new Player(img, 0, 0, 30, 50);
	animals.push(new Animal(animalImgUp, 0, 800, 30, 50));
	animals.push(new Animal(animalImgDown, 1000, 0, 30 ,50));
	animals.push(new Animal(animalImgLeft, 600, 500, 30, 50));
	animals.push(new Animal(animalImgRight, 100, 600, 30, 50));
	myGame = new Game();
}
//call function to draw player and put animals in the array
initObject();
//function that is called when the player click in the button start
function init() {
	document.getElementById("play").blur();
	//call function inside the object to start the game
	myGame.start();
}


//class of the object myGame
function Game(){
	this.level=1;
	this.stop = clearUpdate();
	this.updateGame;
	this.updateGameAnimals=setInterval(moveDirection, 200);
    //start the game
	this.start=function(){
		startGame = new Date().getTime();
		this.updateGame=setInterval(clearUpdate, 20);
		ctx.clearRect(0,0, width1, height1);
		myplayer.drawPlayer();
		updateBlocks();
		showBomb();
		updateAnimals();
		collisionBombAnimals();		
		//show the time
		this.timeCount= setInterval (function(){
			var getTimeNow= new Date().getTime();
			var timeDifferent= getTimeNow-startGame;
			let min= Math.floor((timeDifferent % (1000 * 60 * 60)) / (1000 * 60));
			let sec= Math.floor((timeDifferent % (1000 * 60)) / 1000);
			if (sec < 10){
				document.getElementById("timer").innerHTML = min + ":0 " + sec ;
			}
			else{
				document.getElementById("timer").innerHTML = min + ": " + sec ;
			}
			if(min== 3){
				finishTime=true;
			}
		 
		}, 1000);
		
	};
	//level game
	this.startAgain1= function(){
		//speed = 10;
		myplayer.speed= 10;
		animals.push(new Animal(animalImgUp, 200, 300, 30, 50));
		animals.push(new Animal(animalImgDown, 400, 400, 30 ,50));
		animals.push(new Animal(animalImgUp, 750, 200, 30, 50));
		animals.push(new Animal(animalImgDown, 1100, 750, 30 ,50));
		initObject();
		init();
	};
	//level game
	this.startAgain2= function(){
		//speed = 15;
		myplayer.speed= 10;
		animals.push(new Animal(animalImgUp, 200, 300, 30, 50));
		animals.push(new Animal(animalImgDown, 400, 400, 30 ,50));
		animals.push(new Animal(animalImgUp, 750, 200, 30, 50));
		animals.push(new Animal(animalImgDown, 1100, 750, 30 ,50));
		animals.push(new Animal(animalImgUp, 1150, 100, 30, 50));
		animals.push(new Animal(animalImgUp, 1150, 700, 30, 50));
		animals.push(new Animal(animalImgUp, 900, 750, 30, 50));
		animals.push(new Animal(animalImgUp, 300, 50, 30, 50));
		animals.push(new Animal(animalImgUp, 700, 50, 30, 50));
		animals.push(new Animal(animalImgUp, 800, 650, 30, 50));
		animals.push(new Animal(animalImgUp, 500, 250, 30, 50));
		initObject();
		init();
	};
}


//when the player use the keyboard
 addEventListener("keydown", function(event){
	if(myplayer.alive){
		if(event.keyCode == 39){
			myplayer.right();
		}
		else if(event.keyCode == 37){
			myplayer.left();
		}
		else if(event.keyCode == 40){
			myplayer.down();
		}
		else if(event.keyCode == 38){
			myplayer.up();
		}
		else if(event.keyCode == 32){
			myplayer.createBomb();
		}
	}
});

//create function to clear and update the canvas 
function clearUpdate(){
	//condition to stop the game
	if(checkCollisionPlayer(myplayer.x, myplayer.y, myplayer.width, myplayer.height) || finishTime == true){
		myplayer.alive=false;
		alert("GAME OVER");
		myplayer.image=playerImgDie;
		myplayer.drawPlayer();
		
		clearInterval(myGame.updateGame);
		clearInterval(myGame.updateGameAnimals);
		clearInterval(timeCount);
		clearInterval(timeCount);
	}
	//condition to change the level
	else if(animals.length <= 0 && myGame.level==1){
		myGame.level++;
		myGame.startAgain1();
	}
	//condition to change the level
	else if(animals.length <= 0 && myGame.level==2){
		myGame.level++;
		myGame.startAgain2();
	}
	//condition to show you win
	else if(animals.length <= 0 && myGame.level==3){
		alert("YOUR WON");
	}
	ctx.clearRect(0,0, width1, height1);
	myplayer.drawPlayer();
	updateBlocks();
	showBomb();
	updateAnimals();
	collisionBombAnimals();
}

//class to create object player
function Player(img,x,y,width,height){
	this.speed=5;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.image=img;

	this.bombArray= new Array();
	this.alive=true;
	//function to draw player
	this.drawPlayer = function(){
		ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
	}
	//function to walk to right
	this.right= function(){
		if(this.x >= 0 && this.x < width1- 30 && !checkCollision(this.x + 5, this.y, this.width, this.height)){
			ctx.clearRect(this.x,this.y, 30, 50);
			this.x += 5;
			this.image = img;
			this.drawPlayer();
		}
	};
	//function to walk to left
	this.left= function(){
		if(this.x >0  && this.x <= width1- 30 && !checkCollision(this.x-5, this.y, this.width, this.height)){
			ctx.clearRect(this.x,this.y,  30, 50);
			this.x -= 5;
			this.image = img;
			this.drawPlayer();
		}
	};
	//function to walk to down
	this.down = function(){
		if(this.y >= 0 && this.y < height1 - 50 && !checkCollision(this.x, this.y+5, this.width, this.height)){
			ctx.clearRect(this.x,this.y,  30, 50);
			this.y +=5;
			this.image = img;
			this.drawPlayer();
		}
	};
	//function to walk to up
	this.up = function(){
		if(this.y >0 && this.y <= height1 - 50 && !checkCollision(this.x, this.y-5, this.width, this.height)){
			ctx.clearRect(this.x,this.y,  30, 50);
			this.y -= 5;
			this.image = backPlayerImg;
			this.drawPlayer();
		}
	};
	//function to create bomb
	this.createBomb = function(){
		if(this.bombArray.length < 4){
			this.bombArray.push(new Bomb(this.x,this.y,30,30));
		}
			
	};
}

//this is the class that I call inside of player myplayer object
function Block(x,y,width,height){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	//function to draw block
	this.drawBlock = function(){
		ctx.drawImage(blockImg,this.x,this.y,this.width,this.height);
	}	
}
	
//function to check collision block player/animals
function checkCollision(pX, pY, width, height){	
	for(let i=0; i <blockArray.length ; i++){
		if(pX < blockArray[i].x  +  blockArray[i].width && pX + width >  blockArray[i].x  && pY <  blockArray[i].y +  blockArray[i].height && pY + height >  blockArray[i].y){
			return true;
		}
	}
	return false;
}

//function call to draw and display the array block
function updateBlocks(){
	for(let i=0; i <blockArray.length ; i++){
		blockArray[i].drawBlock();
	}
}	

//class that I call bombArray
function Bomb(x,y,width,height){
	this.y=y;
	this.x=x;
	this.width=width;
	this.height=height;
	this.imageBomb = bombImg;
	this.dateCreation= new Date();
	this.bombExploding= false;
	this.drawBomb = function(){
		ctx.drawImage(this.imageBomb, this.x, this.y, this.width, this.height);
	}
};
//function to draw bomb and exploding bomb
function showBomb(){
	for(let i = 0; i < myplayer.bombArray.length; i++){		
		myplayer.bombArray[i].drawBomb();
		var dateFirst = myplayer.bombArray[i].dateCreation.getTime();	
		var result = new Date().getTime() - dateFirst;		
		
		if(result > 7000) {
			//remove somethings of list
			myplayer.bombArray.splice(i, 1);
		} else if(result > 5000) {
			//change just the image of the bomb. dont call to draw a new img
			myplayer.bombArray[i].imageBomb= bombExplodingImg;	
			myplayer.bombArray[i].bombExploding= true;
			myplayer.bombArray[i].width = 200;			
		}
	}
}

// Object animals of class Animal
function Animal(imageAnimal,x,y,width,height) {
	this.y=y;
	this.x=x;
	this.width=width;
	this.height=height;
	this.imageAnimal = imageAnimal;
	this.direction = getDirection();
	this.count=0;
	this.drawAnimal = function(){
		ctx.drawImage(this.imageAnimal, this.x, this.y, this.width, this.height);
	}	
	
}
//update to show animal
function updateAnimals(){
	for(let i=0; i<animals.length; i++){
		animals[i].drawAnimal();
	}
}

//get direction of animal
function getDirection(){
	 return Math.floor((Math.random() * 4) + 1);	
}

//function to move the animals
function moveDirection(){	
	
	for(let i =0; i < animals.length;i++){
		//right
		if(animals[i].direction == 1){
			if(animals[i].x >= 0 && animals[i].x < width1- 30 && 
			!checkCollision(animals[i].x+5, animals[i].y, animals[i].width,animals[i].height) && 
			animals[i].count<=80){
				animals[i].x += myplayer.speed;
				animals[i].count++;
			}
			else{
				animals[i].count=0;
				animals[i].direction= getDirection();
			}
		}
		//left
		else if(animals[i].direction == 2){
			if(animals[i].x >0 && animals[i].x <= width1- 30 && 
			!checkCollision(animals[i].x-5, animals[i].y, animals[i].width,animals[i].height) &&
			animals[i].count<=80){
				animals[i].x -= myplayer.speed;
				animals[i].count++;
			}
			else{
				animals[i].count=0;
				animals[i].direction= getDirection();
			}
		}
		//up
		else if(animals[i].direction == 3){
			if(animals[i].y >0 && animals[i].y <= height1 - 50 && 
			!checkCollision(animals[i].x, animals[i].y-5, animals[i].width,animals[i].height) &&
			animals[i].count<=80){
				animals[i].y -= myplayer.speed;
				animals[i].count++;
			}
			else{
				animals[i].count=0;
				animals[i].direction= getDirection();
			}
		}
		//down
		else if(animals[i].direction == 4){
			if(animals[i].y >= 0 && animals[i].y < height1 - 50 && 
			!checkCollision(animals[i].x, animals[i].y +5, animals[i].width,animals[i].height)&& 
			animals[i].count<=80 ){
				animals[i].y +=myplayer.speed;
				animals[i].count++;
			}
			else{
				animals[i].count=0;
				animals[i].direction= getDirection();
			}
		}
	}
}
//check collision bomb-Animals
function collisionBombAnimals(){
	for(let j = 0; j < myplayer.bombArray.length; j++){
		for(let i=0; i <animals.length ; i++)	{
			if(myplayer.bombArray[j].x < animals[i].x  +  animals[i].width && 
			myplayer.bombArray[j].x  + myplayer.bombArray[j].width >  animals[i].x  && 
			myplayer.bombArray[j].y <  animals[i].y +  animals[i].height && 
			myplayer.bombArray[j].y + myplayer.bombArray[j].height >  animals[i].y && 
				myplayer.bombArray[j].bombExploding){			
					animals.splice(i, 1);			
				}		
		}
	}
}
//collision animals -player
function checkCollisionPlayer(pX, pY, width, height){	
	for(let i=0; i <animals.length ; i++){
		if(pX < animals[i].x  +  animals[i].width && pX + width >  animals[i].x  && pY <  animals[i].y +  animals[i].height && pY + height >  animals[i].y){
		return true;
		}
	}
	return false;
}


