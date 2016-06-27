#pragma strict

//public var PopAnim:GameObject;

private var _sm:ScoreManager;

private var isPause:boolean;

private var mouseY:float;

function Start () 
{
	_sm = GameObject.FindWithTag("GameControl").GetComponent(ScoreManager);
}

function Update () 
{
	BubbleDestroyer();
}

public function BubbleDestroyer()
{
	isPause = GameObject.FindWithTag("PauseManager").GetComponent(PauseManager).isPause;
		
	if(isPause)return;
	
	mouseY = Camera.main.ScreenToWorldPoint(Input.mousePosition).y;

	if(mouseY < -4.3) return;
	
	var BubbleName = "BonusFish(Clone)";
	var BombName = "Bomb(Clone)";

	if(Input.GetMouseButtonDown(0))
	{
		var hit:RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		if(hit.collider != null)
		{
			var mousePosY:float = Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
			var mousePosX:float = Camera.main.ScreenToWorldPoint(Input.mousePosition).x;
				
			if(hit.collider.gameObject.name == BubbleName)
			{
				Destroy(hit.collider.gameObject);
				_sm.playersScore += 10;
				SoundManager.PlaySfx("popCorrect", 1f, 1f, false);
			}
			else if(hit.collider.gameObject.name == BombName)
			{
				Destroy(hit.collider.gameObject);
				_sm.playersScore -= 10;
				SoundManager.PlaySfx("popCorrect", 1f, 1f, false);
			}
		}
	}
}

//// animation for when the player pops the bubble
//private function popAnim(mousePosY:float, mousePosX:float):void 
//{
//	var pop:GameObject;
//	pop = Instantiate(PopAnim);
//	pop.transform.position.y = mousePosY;
//	pop.transform.position.x = mousePosX;
//}

