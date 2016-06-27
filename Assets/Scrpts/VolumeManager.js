#pragma strict

public static var muteToggle:boolean = false;

private var SliderValue : float;

public static var allAudioSources: AudioSource[];

private static var instance:VolumeManager;

private var isGameOver:boolean;

private var isPaused:boolean;

private var name:String;

function Awake()
{
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

function Update()
{
	PauseUpdate();

	TimerUpdate();
	// var that gets the boolean for the toggle from the VolumeControls script
	muteToggle = VolumeControls.muteToggle;
	// var that gets the slider value from the VolumeControls script
	SliderValue = VolumeControls.SliderValue;
	// array of all sounds
	allAudioSources = FindObjectsOfType(AudioSource) as AudioSource[];

	OptionControl();
}

// Function to pause (mute) the sound
public static function PauseAllAudio()
{
	for(var audioS: AudioSource in allAudioSources)
	{
		//audioS.volume = 0;
		MuteSelectedAudio("BgMusic");
		//Debug.Log("audio " + audioS);
	}
}

// Function to play (unmute) the sound
public static function PlayAllAudio()
{
	for(var audioS: AudioSource in allAudioSources)
	{
		audioS.volume = 1;
	}
}

// Function to control the mute toggle
public function muteSound()
{
	if(muteToggle == true)
	{
		PauseAllAudio();
	}
	
	if(muteToggle == false)
	{
		PlayAllAudio();
	}
}

// As both toggle and slider dont work together this function only 
//allows the slider to work if the sond is not muted
private function OptionControl()
{
if(muteToggle)
	{
		muteSound();
	}
	
	for(var audioS: AudioSource in allAudioSources)
	{
		if(!muteToggle)
		{
			audioS.volume = SliderValue;
		}
	}
}

// Timer update for when the game is over. The Game over sets time scale to 0. 
//When time scale is 0 the Volume manger did not work
private function TimerUpdate()
{
	isGameOver = GameOver.gameOverPage;
	if(isGameOver)
	{
		Time.timeScale = 1;
	}
}

// check if the game is paused
private function PauseUpdate()
{
isPaused = PauseManager.isPause;
	if(isPaused)
	{
		//MuteSelectedAudio("bubbles");
	}
	else if(!isPaused)
	{
		//PlayAllAudio();
		
	}
}

public static function MuteSelectedAudio(name:String):AudioSource
{
	for (var audioS:AudioSource in allAudioSources)
	{
		if(audioS.tag == name) audioS.volume = 0;
	}
}






