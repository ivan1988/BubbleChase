#pragma strict

public static var _leftEdge:float;
public static var _rightEdge:float;
public static var _topEdge:float;

function Awake () 
{
	// find the left edge
	_leftEdge = Camera.main.ViewportToWorldPoint(new Vector3(0,0,0)).x;
// find the right edge
	_rightEdge = Camera.main.ViewportToWorldPoint(new Vector3(1,0,0)).x;
// find the top edge
	_topEdge = Camera.main.ViewportToWorldPoint(new Vector3(0,0,0)).y;
}
