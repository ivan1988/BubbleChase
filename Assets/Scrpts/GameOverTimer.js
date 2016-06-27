#pragma strict

public var TimerTexture:GameObject;

//private var _topOfScreen:float;

private var blockPosition:float = -2.75f;
//private var startPosition:float = -3.2f;
public var blockCount:int = 0;
//private var L1blockCount:int = 20;
//public var BlockSelect:GameObject;

private var timerSize:float =1.3f;
private var blockSize:float = 8f;
//private var blockPosition:float;

private var playerColour:String = "";

//private var _go:GameOver;
//private var _gm:GameManager;
//public var CurrentLevel:int = 1;

//function Awake () 
//{
	//_topOfScreen = Camera.main.ViewportToWorldPoint(new Vector3(0,1.15,0)).y;
//}

//function Start()
//{
	//_go = GameObject.FindWithTag("Timer").GetComponent(GameOver);
//}

function Update () 
{
	playerColour = GameObject.FindWithTag("Player").GetComponent(playerControl).theColour;
	//CurrentLevel = GameObject.FindWithTag("GameControl").GetComponent(GameManager).Level;
	
	//gOver();
	//Debug.Log("blocks " + blockCount);
	//Debug.Log("level " + CurrentLevel);
}

private function timerInstantiate()
{
		var timer:GameObject = Instantiate(TimerTexture);
		timer.transform.position = new Vector3(blockPosition, -4.23f, 0f);
		timer.transform.localScale = new Vector3(timerSize, 1.3f, 0f);
		//Debug.Log("position " + blockPosition);
		blockCount++;
}

public function colourDetection(colour:String)
{
	if (playerColour == colour)
	{
		timerInstantiate();
		timerSize = blockSize++;
		blockPosition = blockPosition+0.23f;			
	}
}

//
//private function gOver()
//{
//	if(CurrentLevel == 1)
//	Debug.Log("level 1 " + CurrentLevel);
//	Debug.Log("blocks " + blockCount);
//		if(blockCount == 20)
//		{
//			_go.GameOver();
//		}
//	else if (CurrentLevel == 2)
//	{
//	Debug.Log("level 2 " + CurrentLevel);
//	Debug.Log("blocks 2 " + blockCount);
//		if(blockCount == 1)
//		{
//			if(blockCount == 5)return;
//			blockCount = 0;
//		}
//		//Destroy(GameObject);
//		
//		if(blockCount == 5)
//		{
//			_go.GameOver();
//		}
//	}
//	else if (CurrentLevel == 3)
//	{
//	Debug.Log("level 3 " + CurrentLevel);
//	Debug.Log("blocks 3 " + blockCount);
//		blockCount = 0;		
//		//Destroy(L1Timer);
//		
//		if(blockCount == 3)
//		{
//			_go.GameOver();
//		}
//	}
//} 