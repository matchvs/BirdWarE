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
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this) || this;
        _this.gravity = 1500;
        _this.currentSpeed = 0;
        _this.flySpeed = 600;
        _this.ceilY = 430;
        _this.groundY = -580;
        _this.isShield = false;
        _this.isTrack = false;
        _this.isDied = false;
        _this.beChicken = false;
        _this.timeOnEnterFrame = 0;
        return _this;
    }
    Object.defineProperty(Player.prototype, "Camp", {
        get: function () {
            return this.camp;
        },
        set: function (val) {
            this.camp = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "UserId", {
        get: function () {
            return this.userId;
        },
        set: function (val) {
            this.userId = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "IsTrack", {
        get: function () {
            return this.isTrack;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "IsShield", {
        get: function () {
            return this.isShield;
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
    };
    Player.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    Player.prototype.addToStage = function () {
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.timeOnEnterFrame = egret.getTimer();
    };
    Player.prototype.init = function () {
        this.gravity = 1500;
        this.currentSpeed = 0;
        this.flySpeed = -600;
        this.ceilY = 0;
        this.groundY = 1200;
        this.isShield = false;
        this.isTrack = false;
        this.isDied = false;
        this.beChicken = false;
        this.playerfly.alpha = 1;
        this.playerdead.alpha = 0;
        this.playerchicken.alpha = 0;
        this.shieldSp.alpha = 0;
        this.smoke.alpha = 0;
    };
    Player.prototype.onEnterFrame = function (e) {
        var now = egret.getTimer();
        var time = this.timeOnEnterFrame;
        var pass = now - time;
        var dt = pass / 1000;
        this.currentSpeed += dt * this.gravity;
        this.y += dt * this.currentSpeed;
        if (this.y > this.groundY) {
            this.y = this.groundY;
            if (this.isDied && !this.beChicken) {
                this.beChicken = true;
                //this.chicken.play(0);
                this.playerfly.alpha = 0;
                this.playerdead.alpha = 0;
                this.playerchicken.alpha = 1;
                this.smoke.alpha = 0;
            }
        }
        if (this.y < this.ceilY) {
            this.y = this.ceilY;
            this.currentSpeed = 0;
        }
        this.timeOnEnterFrame = egret.getTimer();
    };
    Player.prototype.setShield = function (active) {
        this.shieldSp.alpha = 1;
        this.isShield = active;
        this.shieldSp.visible = active;
    };
    Player.prototype.setTrack = function (active) {
        this.isTrack = active;
    };
    Player.prototype.getItem = function (itemType) {
        var jsonValue = JSON.stringify({
            action: "playerGetItem",
            itemType: itemType,
            playerId: this.userId
        });
        mvs.MsEngine.getInstance.sendEventEx(0, jsonValue, 0, GameData.playerUserIds);
    };
    Player.prototype.getItemNotify = function (info) {
        var itemType = info.itemType;
        switch (itemType) {
            case ItemType.shield:
                this.setShield(true);
                break;
            case ItemType.track:
                this.setTrack(true);
                break;
        }
    };
    Player.prototype.removeItem = function (itemType) {
        var jsonValue = JSON.stringify({
            action: "playerRemoveItemEvent",
            itemType: itemType
        });
        mvs.MsEngine.getInstance.sendEvent(jsonValue);
    };
    Player.prototype.removeItemNotify = function (cpProto) {
        var info = JSON.parse(cpProto);
        var itemType = info.itemType;
        switch (itemType) {
            case ItemType.shield:
                this.setShield(false);
                break;
            case ItemType.track:
                this.setTrack(false);
                break;
        }
    };
    Player.prototype.hurt = function (murderId) {
        var jsonValue = JSON.stringify({
            action: "playerHurt",
            playerId: this.userId,
            murderId: murderId
        });
        mvs.MsEngine.getInstance.sendEventEx(0, jsonValue, 0, GameData.playerUserIds);
    };
    Player.prototype.hurtNotify = function (murderId) {
        if (this.isShield) {
            this.setShield(false);
            return false;
        }
        else {
            if (this.isDied)
                return false;
            this.playerDead(murderId);
            return true;
        }
    };
    Player.prototype.playerDead = function (murderId) {
        if (this.isDied)
            return;
        this.isDied = true;
        this.shieldSp.visible = false;
        this.playerfly.alpha = 0;
        this.playerdead.alpha = 1;
        this.playerchicken.alpha = 0;
        this.smoke.alpha = 1;
        this.currentSpeed = -1000;
        if (Math.abs(this.y - this.groundY) < 5) {
            if (this.isDied && !this.beChicken) {
                this.beChicken = true;
                var self_1 = this;
                setTimeout(function () {
                    //self.chicken.play(0);
                    self_1.playerfly.alpha = 0;
                    self_1.playerdead.alpha = 0;
                    self_1.playerchicken.alpha = 1;
                    self_1.smoke.alpha = 0;
                }, 1000);
            }
        }
    };
    Player.prototype.flyNotify = function () {
        if (this.isDied) {
            return;
        }
        this.currentSpeed = this.flySpeed;
        this.fly.play(0);
    };
    Player.prototype.fireNotify = function () {
        if (this.isDied) {
            return;
        }
        var friendBullet = new FriendBullet();
        friendBullet.x = this.firepoint.x;
        friendBullet.y = this.firepoint.y;
        this.parent.addChild(friendBullet);
    };
    return Player;
}(eui.Component));
__reflect(Player.prototype, "Player", ["eui.UIComponent", "egret.DisplayObject"]);
var Camp;
(function (Camp) {
    Camp[Camp["friend"] = 0] = "friend";
    Camp[Camp["enemy"] = 1] = "enemy";
    Camp[Camp["none"] = 2] = "none";
})(Camp || (Camp = {}));
//# sourceMappingURL=Player.js.map