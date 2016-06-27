#pragma strict

public static var _isGameOver:boolean = false;

public static var gameOverPage:boolean = false;

public static var bubbleReset:boolean = false;

function Update () 
{	
	if(_isGameOver)
	{
		if(!gameOverPage)
		{
		// update function that loads the game over page
			Application.LoadLevel("GameOver");
		// saves the score
			ScoreManager.saveScore();
		// sets gameOvePage to true(ie the game over page is displaying)
			gameOverPage = true;
		// resets the bubbles ready to run again
			bubbleReset = true;
		// sets the game over back to falls ready for the player to retry
			_isGameOver = false;
		}
	}
}

// static function that stops the time and declares that the game is over
public static function GameOver():void
{
	_isGameOver = true;
	Time.timeScale = 0;
}
