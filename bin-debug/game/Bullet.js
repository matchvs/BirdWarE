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
var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super.call(this) || this;
        _this.speed = 0;
        _this.speedY = 0;
        _this.rotationValue = 0;
        _this.players = [];
        _this.isTrack = false;
        _this.timeOnEnterFrame = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Object.defineProperty(Bullet.prototype, "PlayerId", {
        get: function () {
            return this.playerId;
        },
        set: function (val) {
            this.playerId = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bullet.prototype, "Players", {
        get: function () {
            return this.players;
        },
        set: function (val) {
            this.players = val;
        },
        enumerable: true,
        configurable: true
    });
    Bullet.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Bullet.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    Bullet.prototype.onAddToStage = function () {
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.timeOnEnterFrame = egret.getTimer();
    };
    Bullet.prototype.init = function () {
        this.rotation = 0;
        var player = this.getplayById(this.playerId);
        this.isTrack = player.IsTrack;
    };
    Bullet.prototype.onEnterFrame = function (e) {
        var now = egret.getTimer();
        var time = this.timeOnEnterFrame;
        var pass = now - time;
        var dt = pass / 1000;
        var player = this.getplayById(this.playerId);
        if (this.isTrack && this.players) {
            var targetPlayer = null;
            var playerScript = null;
            var minDistance = Number.MAX_VALUE;
            for (var i = 0; i < this.players.length; i++) {
                playerScript = this.players[i];
                if (playerScript && playerScript.Camp != player.Camp) {
                    var dis = distance(playerScript, player);
                    if (dis < minDistance) {
                        minDistance = dis;
                        targetPlayer = this.players[i];
                    }
                }
            }
            if (targetPlayer) {
                var angle;
                if (playerScript.camp == Camp.enemy) {
                    this.rotation = 30;
                }
                else if (playerScript.camp == Camp.friend) {
                    this.rotation = 150;
                }
                if (Math.abs(this.y - targetPlayer.y) > 1) {
                    if (this.y < targetPlayer.y) {
                        // this.speedY += Math.abs(this.speed * dt);
                        this.speedY += Math.abs(dt * 0.5);
                    }
                    else {
                        // this.speedY -= Math.abs(this.speed * dt);
                        this.speedY -= Math.abs(dt * 0.5);
                    }
                    this.y = this.y + this.speedY * dt;
                }
                this.x = this.x + this.speed * dt;
            }
            else {
                this.x = this.x + this.speed * dt;
            }
        }
        else {
            this.x = this.x + this.speed * dt;
        }
    };
    Bullet.prototype.getplayById = function (playerid) {
        var player;
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].UserId == playerid) {
                player = this.players[i];
            }
        }
        return player;
    };
    return Bullet;
}(eui.Component));
__reflect(Bullet.prototype, "Bullet", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Bullet.js.map