#pragma strict

public var MenuSkin:GUISkin;

private var _go:GameObject;
public var gameOverPreFab:GameObject;

function Start()
{
	GameOverLogo();
	//GameOver._isGameOver = false;
}

function OnGUI () 
{
	//if(GameOver.gameOverPage)return;
	GUI.skin = MenuSkin;
	if(GUI.Button(Rect(Screen.width / 2 -145, Screen.height / 2 +110, 290, 50), "Retry"))
	{
		Application.LoadLevel("gamePlay");
		GameOver.bubbleReset = false;
		//GameOver.gameOverReset = true;
	}
	if(GUI.Button(Rect(Screen.width / 2 - 145, Screen.height / 2 +155, 290, 50), "High Scores"))
	{
		Application.LoadLevel("Scores");
		GameOver.bubbleReset = false;
		//GameOver.gameOverReset = true;
	}
	if(GUI.Button(Rect(Screen.width / 2 - 145, Screen.height / 2 +200, 290, 50), "Main Menu"))
	{
		Application.LoadLevel("Home");
		GameOver.bubbleReset = false;
		//GameOver.gameOverReset = true;
	}
}


private function GameOverLogo()
{
	if(!_go)
	{
		_go = Instantiate(gameOverPreFab);
		_go.transform.position = new Vector3(0,3.5,0);
	}
}
