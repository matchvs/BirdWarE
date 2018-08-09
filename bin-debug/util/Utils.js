function hitTestPosition(obj1, obj2) {
    var rect1 = obj1.getBounds();
    var rect2 = obj2.getBounds();
    rect1.x = obj1.x;
    rect1.y = obj1.y;
    rect2.x = obj2.x;
    rect2.y = obj2.y;
    var enterCollision = rect1.intersects(rect2);
    return enterCollision;
}
function randomNum(min, max) {
    var range = max - min;
    var random = Math.random();
    var num = min + Math.round(random * range);
    return num;
}
function distance(obj1, obj2) {
    var posA = new egret.Point(obj1.x, obj1.y);
    var posB = new egret.Point(obj2.x, obj2.y);
    return egret.Point.distance(posA, posB);
}
//# sourceMappingURL=Utils.js.map