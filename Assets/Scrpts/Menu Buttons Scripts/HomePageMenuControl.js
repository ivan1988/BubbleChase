#pragma strict

public var menuSkin:GUISkin;

private var _go:GameObject;
public var gameLogo:GameObject;

function Start()
{
	GameLogo();
}

function OnGUI()
{
	GUI.skin = menuSkin;
	if(GUI.Button(Rect(Screen.width / 2 - 145, Screen.height / 2 -100, 290, 50), "Start Game"))
	{
		Application.LoadLevel("gamePlay");
	}
	if(GUI.Button(Rect(Screen.width / 2 - 145, Screen.height / 2 -55, 290, 50), "How to play"))
	{
		Application.LoadLevel("HowToPlay");
	}
	if(GUI.Button(Rect(Screen.width / 2 - 145, Screen.height / 2 -10, 290, 50), "Settings"))
	{
		Application.LoadLevel("Settings");
	}
	if(GUI.Button(Rect(Screen.width / 2 - 145, Screen.height / 2 +35, 290, 50), "Scores"))
	{
		Application.LoadLevel("Scores");
	}
	if(GUI.Button(Rect(Screen.width / 2 - 145, Screen.height / 2 +80, 290, 50), "Credits"))
	{
		Application.LoadLevel("Credits");
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