#pragma strict

public var MenuSkin:GUISkin;

function OnGUI()
{
	GUI.skin = MenuSkin;
	if (GUI.Button(Rect(Screen.width / 2 - 145, Screen.height / 2 +200, 290, 50), "Main Menu"))
	{
		Application.LoadLevel("Home");
	}
}