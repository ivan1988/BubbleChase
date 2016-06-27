#pragma strict

public var playersScore:int;

var theSkin : GUISkin;

private var _ps:ScoreManager;

function Start()
{
	_ps = GameObject.FindWithTag("GameControl").GetComponent(ScoreManager);
}

function OnGUI () 
{
	GUI.skin = theSkin;
	GUI.Label(Rect(Screen.width / 2f - 137f, Screen.height / 2f + 220f, 50, 25),""+ _ps.playersScore);
}
