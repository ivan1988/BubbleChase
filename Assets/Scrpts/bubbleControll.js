#pragma strict

private var speed:float = 2;

private var _topOfScreen:float;
public var coloursDestroyed:GameObject;

private var playersScore:int;
private var timerRunning:boolean = false;

private var SpeedO:float = .03;

private var BubbleSpeed:boolean;

private var timer:GameOverTimer;

private var Level:int;

private var _gm:GameManager;

public var previousScore:int = 0;	

function Start () 
{
	timer = GameObject.FindWithTag("Timer").GetComponent(GameOverTimer);
	_gm = GameObject.FindWithTag("GameControl").GetComponent(GameManager);
	// var that gets players current score from the ScoreManager script
	playersScore = ScoreManager.playersScore;
}

function Awake()
{
// top of the screen detection
	_topOfScreen = Camera.main.ViewportToWorldPoint(new Vector3(0, 1.15, 0)).y;
}

function Update ()
{
// var that gets current level from GameManager script
Level = _gm.Level;

SpeedControl();

// this assigns the speed to the object
rigidbody2D.velocity.y += speed * Time.deltaTime;

// this destroys the and detects the bubbles destroyed at the top of the screen
	if (renderer.bounds.max.y > _topOfScreen)
	{		
		var goColour:String = gameObject.GetComponent(BubbleInfo).myColour;

		timer.colourDetection(goColour);

		Destroy(gameObject);
	}
}

// function to up the speed when the user gets to a higher level
private function SpeedControl()
{	
	if(Level == 1)
	{
		speed = 2;
	}
	else if(Level == 2)
	{
		speed = 2.5;
	}
	else if(Level == 3)
	{
		speed = 3;
	}
	else if(Level == 4)
	{
		speed = 3.5;
	}
	else if(Level == 5)
	{
		speed = 4;
	}
}





//////// johns original code


//// this all goes in bubble class
//function whenGameObjectIsToBeDestroyed():void {
//	var v3:Vector3 = gameObect.transform.postion;
//	var scale:float = gameObject.transform.localScale.x;
//	var type:String = go.GetComponent(BubbleInfo).myColour;//wht ever var you have stored the type in!
//	popAnim(v3, scale, type);
//	Destroy(gameObject);
//}
//
//private function popAnim(pos:Vector3, scale:float, type:String):void {
//	
//	//var pop:GameObject = Instantiate(prefabAnim, pos, quanternion.identity)
//	var pop.GameObject;
//	if(type == "red bubble"){
//		pop = Instantiate(prefab-redBubble, etc
//	}
//	
//	pop.transform.localScale.x = scale;
//	pop.transform.localScale.y = scale;
//}
