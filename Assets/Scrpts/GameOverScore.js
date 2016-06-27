#pragma strict

public var theSkin:GUISkin;

public var HighScore:Array;

private var PlayerScore:int;

//private var max:Array;
function Start()
{
	HighScore = GameObject.FindWithTag("GameControl").GetComponent(ScoreManager).highScores;
	PlayerScore = GameObject.FindWithTag("GameControl").GetComponent(ScoreManager).playersScore;
}


function OnGUI () 
{	
	GUI.skin = theSkin;
	
	if(PlayerScore > 0)var highestScore:int = HighScore[HighScore.length - 1];
	if(PlayerScore >= highestScore)
	{
		GUI.Label(Rect(Screen.width / 2f -85f, Screen.height / 2f -120f, 600, 40), "Congratulations");
		GUI.Label(Rect(Screen.width / 2f -105f, Screen.height / 2f -100f, 600, 40), "Your New High Score: " + PlayerScore);
	}
	
	GUI.Label(Rect(Screen.width	/ 2f -45f, Screen.height / 2f +10f, 600, 40),"Score: " + ScoreManager.playersScore);		
}

