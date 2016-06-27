#pragma strict

public static var file_path:String = "Audio/";

public static var musicChannel:AudioSource;

public static var sfx_channels:Array;
public var numOfChannels:int = 16;

function Awake () 
{
	musicChannel = gameObject.AddComponent(AudioSource);
	
	sfx_channels = [];
	
	for( var n:int = 0; n < numOfChannels; n++)
	{
		sfx_channels[n] = gameObject.AddComponent(AudioSource);
	}
}

public static function PlaySfx(name:String, volume:float, pitch:float, loop:boolean):void
{
	var clip:AudioClip = Resources.Load(file_path + name);
	
	if(clip != null)
	{
		var channel:AudioSource = GetChannel();
		if(channel != null)
		{
			channel.clip = clip;
			
			channel.volume = volume;
			
			channel.pitch = pitch;
			
			channel.loop = loop;
			
			channel.Play();
		}
	}
}

private static function GetChannel():AudioSource
{
	var channel:AudioSource;
	for(var n:int = 0; n < sfx_channels.length; n++)
	{
		channel = sfx_channels[n];
		if(channel.isPlaying == false) return channel;
	}
}

//public static function PlayMusic():void
//{
//	musicChannel.clip = Resources.Load(file_path + "");
//	
//	musicChannel.loop = true;
//	
//	musicChannel.Play();
//}

//public static function StopMusic():void 
//{
//	musicChannel.Stop();
//}
//
//public static function PauseMusic():void 
//{
//	musicChannel.Pause();
//}