function hitTestPosition(obj1:egret.DisplayObject,obj2:egret.DisplayObject)
{
	let rect1:egret.Rectangle = obj1.getBounds();
	let rect2:egret.Rectangle = obj2.getBounds();
	rect1.x = obj1.x;
	rect1.y = obj1.y;
	rect2.x = obj2.x;
	rect2.y = obj2.y;
	var enterCollision = rect1.intersects(rect2);
	return enterCollision;
}

function randomNum(min,max)
{
	let range = max - min;
	let random = Math.random();
	let num = min + Math.round(random * range);
	return num;
}

function distance(obj1:egret.DisplayObject,obj2:egret.DisplayObject)
{
	let posA = new egret.Point(obj1.x,obj1.y);
	let posB = new egret.Point(obj2.x,obj2.y);
	return egret.Point.distance(posA,posB);
}