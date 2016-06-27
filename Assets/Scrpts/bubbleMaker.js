#pragma strict

public var bubblePreFab:GameObject;
public var bubblePreFab2:GameObject;
public var bubblePreFab3:GameObject;
public var bubblePreFab4:GameObject;
public var bubblePreFab5:GameObject;
public var bubblePreFab6:GameObject;

private var chooser:int;

private var isPaused:boolean = false;

var bubbleGap:int = 20;
var bubbleCount:int = 0;

private var _leftEdge:float;
private var _rightEdge:float;
private var _topEdge:float;

private var minWidth:float = 0.3;
private var maxWidth:float = 0.5;

private var _pm:PauseManager;

private var width:float;

function Awake()
{
// find the left edge
	_leftEdge = Camera.main.ViewportToWorldPoint(new Vector3(0,0,0)).x;
// find the right edge
	_rightEdge = Camera.main.ViewportToWorldPoint(new Vector3(1,0,0)).x;
// find the top edge
	_topEdge = Camera.main.ViewportToWorldPoint(new Vector3(0,0,0)).y;
}

function Start()
{
// var to access the PauseManager script
	_pm = GameObject.FindWithTag("PauseManager").GetComponent(PauseManager);
}

function Update () 
{
// checks if pause manager is true and if so gets the isPause boolean which checks if the game is paused
	if(_pm)isPaused = _pm.isPause;
// checks if game is not paused and bubbleReset is false
	if(!isPaused && !GameOver.bubbleReset)
		{
		bubbleCount++;
		if(bubbleCount >= bubbleGap)
		{
			bubbleCount = 0;
			colourSelector();
			Time.timeScale = 1;
		}
	}	
	// if paused the time stops
	else if (isPaused)
	{
		Time.timeScale = 0;
	}
}

// chooses bubble size 
private function bubbleSize()
{
	var size:float = Random.Range(minWidth, maxWidth);
	return size;
	
}

// instantiates bubbles
private function colourSelector():void
{
	var xPos:float = Random.Range(_leftEdge, _rightEdge);
	var yPos:float = -7f;
	var size:float = bubbleSize();
	
	var hasSpace:boolean = false;
	var n:int = 0;
	while(n < 50 && hasSpace == false){
// checks if there is enough space for a new bubble	
		if(enoughSpaceToAddBubble(xPos, yPos, size)){
			hasSpace = true;
		} else {
			size = bubbleSize();
			n++;
		}
	}
	
	if(hasSpace == false)return;

	var chooser:int = Random.Range(1,6);
	var bubble:GameObject;
	if (chooser == 1)
	{
		bubble = Instantiate(bubblePreFab);
		bubble.GetComponent(BubbleInfo).myColour = "bubblePreFab(Clone)";
		
	}
	else if (chooser == 2)
	{
		bubble = Instantiate(bubblePreFab2);
		bubble.GetComponent(BubbleInfo).myColour = "bubblePreFab2(Clone)";
	}
	else if (chooser == 3)
	{
		bubble = Instantiate(bubblePreFab3);
		bubble.GetComponent(BubbleInfo).myColour = "bubblePreFab3(Clone)";
	}
	else if (chooser == 4)
	{
		bubble = Instantiate(bubblePreFab4);
		bubble.GetComponent(BubbleInfo).myColour = "bubblePreFab4(Clone)";
	}
	else if (chooser == 5)
	{
		bubble = Instantiate(bubblePreFab5);
		bubble.GetComponent(BubbleInfo).myColour = "bubblePreFab5(Clone)";
	}
	else if (chooser == 6)
	{
		bubble = Instantiate(bubblePreFab6);
		bubble.GetComponent(BubbleInfo).myColour = "bubblePreFab6(Clone)";
	}
	
	
	bubble.transform.position = new Vector3(xPos,-7,0); 
	bubble.transform.localScale = new Vector3(size,size,size);
}

// checks if there is enough space for a new bubble
private function enoughSpaceToAddBubble(xpos:float, ypos:float, size:float):boolean {
	// check to see if any bubbles are in the way
	var bubbs:Array = GameObject.FindGameObjectsWithTag("Bubble");
	for(var n:int = 0; n < bubbs.length; n++){
		// check each bubble
		var go:GameObject = bubbs[n];
		var xx:float = go.transform.position.x;
		var yy:float = go.transform.position.y;
		var min:float = (size + go.renderer.bounds.size.x) / 2.9;
		var dx:float = Mathf.Abs(xx - xpos);
		var dy:float = Mathf.Abs(yy - ypos);
		var dist:float = Mathf.Sqrt((dx * dx) + (dy * dy));
		
		if(dist < min)return false;
	}
	return true;
}

