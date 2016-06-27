#pragma strict

public var speed:float = 2;

function Update () 
{
	rigidbody2D.velocity.x =- speed;
}