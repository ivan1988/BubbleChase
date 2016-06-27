#pragma strict

public static var muteToggle:boolean = false;

public static var SliderValue : float = 1f;

// toggle and slider GUI for settings page
function OnGUI () 
{
	SliderValue = GUI.HorizontalSlider (Rect (25, 25, 100, 30), SliderValue, 0.0, 1.0);
	muteToggle = GUI.Toggle(new Rect(Screen.width / 2 -100, Screen.height / 2 +100, 90, 30), muteToggle, "Mute");
}