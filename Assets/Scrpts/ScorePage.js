#pragma strict

var theSkin : GUISkin;

private var _go:GameObject;
public var gameLogo:GameObject;

public var lineHight:float = 24f;

public var highScores:Array;

function Start()
{
	GameLogo();
}

function OnGUI()
{
	highScores = GameObject.FindWithTag("GameControl").GetComponent(ScoreManager).highScores;
	GUI.skin = theSkin;
	for( var n:int = highScores.length - 1; n >= 0; n--)
	{
		var ranking:int = highScores.length - n;
		GUI.Label(Rect(10f, 100f + (ranking * lineHight), Screen.width, lineHight), "Rank " + ranking + " : " + highScores[n]);
	}
}

private function GameLogo()
{
	if(!_go)
	{
		_go = Instantiate(gameLogo);
		_go.transform.position = new Vector3(0,4,0);
	}
}
