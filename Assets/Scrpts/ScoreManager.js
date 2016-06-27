#pragma strict

// high scores array to store the scores in
public static var highScores:Array;

// var for limitting the amount of scores stored
public static var maxNumOfScores:int = 10;

// current players score
public static var playersScore:int = 0;

// varriable data typed to this script to use in the singelton
private static var instance:ScoreManager;

// singelton that makes sure there is ever only one ScoreManager
function Awake()
{

	playersScore = 0;
	if(instance != null)
	{
		Destroy(this);
	}
	else
	{
		instance = this;
		DontDestroyOnLoad(this);
	}
} 

function Start () 
{	
// high scores array
	highScores = [];	
// built in function (Sort()) that sorts the scores
	highScores.Sort();
}

// function to save players score 
public static function saveScore():void 
{
	if(playersScore == 0 || playersScore == -1) return;
	
	if(highScores.length < maxNumOfScores)
	{
		highScores.push(playersScore);
	}
	else
	{
		var lowestScore:int = highScores[0];
		if(playersScore > lowestScore)
		{
			highScores[0] = playersScore;
		}
	}
	highScores.Sort();
}


