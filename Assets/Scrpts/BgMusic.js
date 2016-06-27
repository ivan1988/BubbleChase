#pragma strict

public static var instance:BgMusic;

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

// Back Ground music
function Start () 
{
	SoundManager.PlaySfx("Bgmusic", 1f, 1f, true);
}
