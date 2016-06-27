#pragma strict

public var HowToPlay = false;

public var theSkin:GUISkin;

var windowRect : Rect = Rect (20, 20, 120, 50);

function Update()
{
// gets the how to play boolean from the PauseManager script
	HowToPlay = GameObject.FindWithTag("PauseManager").GetComponent(PauseManager).HowToPlay;
}

// displays the how to play window if the HowToPlay = true
public function OnGUI()
{
	GUI.skin = theSkin;
	if(HowToPlay)
	{
		windowRect = GUI.Window (0, windowRect, DoMyWindow, "How To Play");
	}
}

// label for the top of the how to play window
function DoMyWindow (windowID : int) 
{	
	GUI.Label (Rect (10,20,250,320), " Hello World Hello World Hello World Hello World Hello World Hello World");
}
