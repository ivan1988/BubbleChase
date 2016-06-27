#pragma strict
//
public var fadeTexture:Texture2D;

private var fadeSpeed:float = 0.3;

private var drawDepth:float = -1000;

private var alpha:float = 0;

private var fadeDir:int = -1;

public function OnGUI()
{
	if(alpha > 0){
		if(alpha == 1)alpha +=fadeDir * fadeSpeed * Time.deltaTime;	
		
		alpha +=fadeDir * fadeSpeed * Time.deltaTime;

		GUI.color.a = alpha;
		GUI.depth = drawDepth;
		
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), fadeTexture);
	}
}



public function fadeIn()
{
	fadeDir = -3;
}

function Start () 
{
	fadeIn();
	alpha = 1;
	Time.timeScale = 1;
}





