#pragma strict

public var menuSkin:GUISkin;

function OnGUI()
{
	GUI.skin = menuSkin;
	if(GUI.Button(Rect(Screen.width / 2 - 145, Screen.height / 2 +155, 290, 50), "Start Game"))
	{
		Application.LoadLevel("gamePlay");
		
	}
	if(GUI.Button(Rect(Screen.width / 2 - 145, Screen.height / 2 +200, 290, 50), "Main Menu"))
	{
		Application.LoadLevel("Home");
	}
}