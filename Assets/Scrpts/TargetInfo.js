#pragma strict

private var _sr:SpriteRenderer;
public var bubble_sprite:Sprite;
public var bubble2_sprite:Sprite;
public var bubble3_sprite:Sprite;
public var bubble4_sprite:Sprite;
public var bubble5_sprite:Sprite;
public var bubble6_sprite:Sprite;

private var selectedColour:String = "";

function Start () 
{
	_sr = renderer as SpriteRenderer;
	_sr.sprite = bubble_sprite;
	
}


function Update()
{
	colourSelection();
	selectedColour = GameObject.FindWithTag('Player').GetComponent(playerControl).theColour;
}


public function colourSelection()
{
	
	if (selectedColour == "bubblePreFab(Clone)")
	{
	
		_sr.sprite = bubble_sprite;
	}
	else if (selectedColour == "bubblePreFab2(Clone)")
	{
		_sr.sprite = bubble2_sprite;
	}
	else if (selectedColour == "bubblePreFab3(Clone)")
	{
		_sr.sprite = bubble3_sprite;
	}
	else if (selectedColour == "bubblePreFab4(Clone)")
	{
		_sr.sprite = bubble4_sprite;
	}
	else if (selectedColour == "bubblePreFab5(Clone)")
	{
		_sr.sprite = bubble5_sprite;
	}
	else if (selectedColour == "bubblePreFab6(Clone)")
	{
		_sr.sprite = bubble6_sprite;
	}
}
