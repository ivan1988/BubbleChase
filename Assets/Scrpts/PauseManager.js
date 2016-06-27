#pragma strict

public static var isPause = false;

public var theSkin:GUISkin;

public var HowToPlay:boolean = false;

public function OnGUI()
{
	// sets the gui skin
	GUI.skin = theSkin;
	// checks if the game is over
	if(GameOver.gameOverPage)return;
	// if not paused then the pause button show
	if(!isPause)
	{
		if(GUI.Button(Rect(Screen.width / 2 +54, Screen.height / 2 +220	, 90, 30), "pause"))
		{	
			isPause = true;
			Time.timeScale = 0;
		}
	}
	// if is paused the pause button dissapears and the resume, how to play and quit buttons
	else if (isPause)
	{
	// if how to play is not pressed the resume how to play and quit buttons show
		if(!HowToPlay)
		{
			if(GUI.Button(Rect(Screen.width / 2 -145, Screen.height / 2 +110, 290, 50),"Resume"))
			{
				Time.timeScale = 1;
				isPause = false;
			}
			if(GUI.Button(Rect(Screen.width / 2 -145, Screen.height / 2 +155, 290, 50),"How To Play"))
			{
				HowToPlay = true;
			}
		}
		// if how to play is sellected the resume and quit buttons show. as well as the how to play 
		// window from the PausedHowToPlayWindow script
		else if(HowToPlay)
		{
			if(GUI.Button(Rect(Screen.width / 2 -145, Screen.height / 2 +155, 290, 50),"Resume"))
			{
				Time.timeScale = 1;
				isPause = false;
				HowToPlay = false;
			}
		}
		if(GUI.Button(Rect(Screen.width / 2 -145, Screen.height / 2 +200, 290, 50),"Quit"))
		{
			Application.LoadLevel("Home");
		}	
	}
}