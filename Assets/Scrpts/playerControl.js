#pragma strict

private var colours:Array = ["bubblePreFab(Clone)", "bubblePreFab2(Clone)", "bubblePreFab3(Clone)", "bubblePreFab4(Clone)", "bubblePreFab5(Clone)", "bubblePreFab6(Clone)"];

public var PopAnim:GameObject;

public var theColour:String = "";

private var _sm:ScoreManager;

private var isPause:boolean;

private var mouseY:float;

function Start () 
{
	setColour();
	_sm = GameObject.FindWithTag("GameControl").GetComponent(ScoreManager);
}

function Update () 
{
	if(theColour == ""){
		setColour();
	}
	BubbleDestroyer();
}

public function BubbleDestroyer()
{
	isPause = GameObject.FindWithTag("PauseManager").GetComponent(PauseManager).isPause;
		
	if(isPause)return;
	
	mouseY = Camera.main.ScreenToWorldPoint(Input.mousePosition).y;

	if(mouseY < -4.3) return;
	
	var BubbleName = "BonusFish(Clone)";

	if(Input.GetMouseButtonDown(0))
	{
		var hit:RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		if(hit.collider != null)
		{
			var mousePosY:float = Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
			var mousePosX:float = Camera.main.ScreenToWorldPoint(Input.mousePosition).x;
				
			if(hit.collider.gameObject.name == theColour)
			{
				//Debug.Log("player " + PlayerBonus);
	
//				popAnim(mousePosY, mousePosX);
				
				Destroy(hit.collider.gameObject);
				_sm.playersScore ++;
				SoundManager.PlaySfx("popCorrect", 1f, 1f, false);
				setColour();
			}
			else if(hit.collider.gameObject.name != theColour)
			{
//				popAnim(mousePosY, mousePosX);			
				Destroy(hit.collider.gameObject);
				_sm.playersScore --;
				SoundManager.PlaySfx("popWrong", 1f, 1f, false);
			}
		}
	}
}

// sets the players colours
private function setColour(){
	var colours:Array = GameObject.FindGameObjectsWithTag("Bubble");

	var maxIndex:int = colours.length-1;
	var randomIndex:int = Random.Range(0, maxIndex);
	if(maxIndex < 0)return;
	var go:GameObject = colours[randomIndex];
	theColour = go.GetComponent(BubbleInfo).myColour;
}

// animation for when the player pops the bubble
//private function popAnim(mousePosY:float, mousePosX:float):void 
//{
//	var pop:GameObject;
////	pop = Instantiate(PopAnim);
////	pop.transform.position.y = mousePosY;
////	pop.transform.position.x = mousePosX;
//}

