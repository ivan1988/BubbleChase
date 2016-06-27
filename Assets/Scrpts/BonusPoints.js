#pragma strict

public var BonusPreFab:GameObject;
public var BombPreFab:GameObject;

private var _leftEdge:float;
private var _rightEdge:float;
private var _topEdge:float;
private var _bottomEdge:float;

private var RandomNumber:int;
private var RandomFish:int = 3;
private var FishCount:int;
private var InstantaitedFish:int = 0;
private var _gm:GameManager;
private var BombInstantiated:boolean = true;

function Start()
{
	_gm = GameObject.FindWithTag("GameControl").GetComponent(GameManager);
}

function Awake()
{
// find the left edge
	_leftEdge = Camera.main.ViewportToWorldPoint(new Vector3(0,0,0)).x;
// find the right edge
	_rightEdge = Camera.main.ViewportToWorldPoint(new Vector3(1,0,0)).x;
// find the top edge
	_topEdge = Camera.main.ViewportToWorldPoint(new Vector3(0,1,0)).y;
// find the bottom edge 	
	_bottomEdge = Camera.main.ViewportToWorldPoint(new Vector3(0,0,0)).y;
}

function Update () 
{	
	BonusControl();
}

// function to instantiate at random bonus objects and a bomb which takes 10 points away
private function BonusControl()
{
	if(BonusPoints)
	{
		FishCount++;
		if(FishCount == 1)
		{	
			yield WaitForSeconds(3);
			RandomNumber = Random.Range(0,4);
			yield WaitForSeconds(RandomNumber);
			FishCount = 0;
			if(BombInstantiated == true)
			{	
				FishCreator();
				InstantaitedFish++;
				if(InstantaitedFish == RandomFish)BombInstantiated = false;
			}
			else if (BombInstantiated == false)
			{	
				BombCreator();
				BombInstantiated = true;
				InstantaitedFish = 0;
				RandomFish = Random.Range(2,5);
			}
		}
	}
}

// function that creates bonus fish
private function FishCreator()
{
	var bottomEdge = -3f;
	var size = Random.Range(_topEdge, bottomEdge - 0.5);
	var Bonus:GameObject = Instantiate(BonusPreFab);
	var _ss:ScrollingScript = Bonus.GetComponent(ScrollingScript);
	Bonus.transform.position = new Vector3(4f,size,0f);
	Bonus.transform.localScale = new Vector3(0.3f,0.3f,0);	
}

// function that creates bombs
private function BombCreator()
{
	var bottomEdge = -3f;
	var size = Random.Range(_topEdge, bottomEdge - 0.5);
	var Bomb:GameObject = Instantiate(BombPreFab);
	var _ss:ScrollingScript = Bomb.GetComponent(ScrollingScript);
	Bomb.transform.position = new Vector3(4f,size,0f);
	Bomb.transform.localScale = new Vector3(0.8f,0.8f,0);	
}