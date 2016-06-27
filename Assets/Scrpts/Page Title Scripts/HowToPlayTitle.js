#pragma strict

public var TheSkin:GUISkin;

function OnGUI () 
{
	GUI.skin = TheSkin;
	
	GUI.Label(Rect(Screen.width / 2f - 137f, Screen.height / 2f - 252f, 640, 35),"How To Play");
}