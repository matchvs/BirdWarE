var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var EnemyBullet = (function (_super) {
    __extends(EnemyBullet, _super);
    function EnemyBullet() {
        var _this = _super.call(this) || this;
        _this.speed = -10;
        _this.speedY = 10;
        return _this;
    }
    EnemyBullet.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    EnemyBullet.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return EnemyBullet;
}(Bullet));
__reflect(EnemyBullet.prototype, "EnemyBullet");
//# sourceMappingURL=EnemyBullet.js.map