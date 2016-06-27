#pragma strict

private var playersScore:int;
private var _sm:ScoreManager;

private var bubblesMissed:int;
private var _got:GameOverTimer;

public var BonusPoints:boolean;

public var Level:int;

function Start()
{
// this var sets the GameOverPage to false (ie the game over page is not displaying)
	GameOver.gameOverPage = false;
	_sm = GameObject.FindWithTag("GameControl").GetComponent(ScoreManager);
	_got = GameObject.FindWithTag("Timer").GetComponent(GameOverTimer);
}

function Update()
{
	// var that get player score
	playersScore = _sm.playersScore;
	// var that gets the ammount of instantiated game over timer blocks
	bubblesMissed = _got.blockCount;
	GameOverManager();
	LevelSellect();
}

// function that manages game over
private function GameOverManager()
{
	if(playersScore == -1)
	{
		GameOver.GameOver();
	}
	else if(bubblesMissed == 20)
	{
		GameOver.GameOver();
	}
}

// function that selects the levels depending on the players score
private function LevelSellect()
{
	if(playersScore == 0)
	{
		Level = 1;
		BonusPoints = true;
	}
	else if (playersScore == 15)
	{
		Level = 2;
		BonusPoints = false;
	}
	else if (playersScore == 30)
	{
		Level = 3;
		BonusPoints = true;
	}
	else if (playersScore == 45)
	{
		Level = 4;
		BonusPoints = true;
	}
	else if (playersScore == 60)
	{
		Level = 5;
		BonusPoints = true;
	}
}
