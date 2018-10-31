var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
window["Bullet"] = Bullet;
var GameUser = (function () {
    function GameUser() {
        this.id = 0; //用户ID
        this.name = ""; //名称
        this.avatar = "http://pic.vszone.cn/upload/avatar/1464079970.png";
        this.token = ""; //校验值
        this.pValue = 0; //积分
        this.isOwner = false; //房主标记
    }
    return GameUser;
}());
__reflect(GameUser.prototype, "GameUser");
var Item = (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Item.prototype, "ItemType", {
        get: function () {
            return this.type;
        },
        set: function (val) {
            this.type = val;
        },
        enumerable: true,
        configurable: true
    });
    Item.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Item.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Item;
}(eui.Component));
__reflect(Item.prototype, "Item", ["eui.UIComponent", "egret.DisplayObject"]);
var ItemType;
(function (ItemType) {
    ItemType[ItemType["shield"] = 0] = "shield";
    ItemType[ItemType["track"] = 1] = "track";
})(ItemType || (ItemType = {}));
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
    Object.defineProperty(Player.prototype, "Profile", {
        get: function () {
            return this.profile;
        },
        set: function (val) {
            this.profile = val;
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
window["Player"] = Player;
var BaseView = (function (_super) {
    __extends(BaseView, _super);
    function BaseView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    BaseView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    BaseView.prototype.onEnter = function (context) {
    };
    BaseView.prototype.onExit = function () {
    };
    BaseView.prototype.onResume = function () {
    };
    BaseView.prototype.onPause = function () {
    };
    return BaseView;
}(eui.Component));
__reflect(BaseView.prototype, "BaseView", ["eui.UIComponent", "egret.DisplayObject"]);
var Track = (function (_super) {
    __extends(Track, _super);
    function Track() {
        var _this = _super.call(this) || this;
        _this.type = ItemType.track;
        return _this;
    }
    Track.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Track.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Track;
}(Item));
__reflect(Track.prototype, "Track");
window["Track"] = Track;
var Enemy1 = (function (_super) {
    __extends(Enemy1, _super);
    function Enemy1() {
        return _super.call(this) || this;
    }
    return Enemy1;
}(Player));
__reflect(Enemy1.prototype, "Enemy1");
window["Enemy1"] = Enemy1;
var Enemy2 = (function (_super) {
    __extends(Enemy2, _super);
    function Enemy2() {
        return _super.call(this) || this;
    }
    return Enemy2;
}(Player));
__reflect(Enemy2.prototype, "Enemy2");
window["Enemy2"] = Enemy2;
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
window["EnemyBullet"] = EnemyBullet;
var FriendBullet = (function (_super) {
    __extends(FriendBullet, _super);
    function FriendBullet() {
        var _this = _super.call(this) || this;
        _this.speed = 10;
        _this.speedY = 10;
        return _this;
    }
    FriendBullet.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    FriendBullet.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return FriendBullet;
}(Bullet));
__reflect(FriendBullet.prototype, "FriendBullet");
window["FriendBullet"] = FriendBullet;
var GameData = (function () {
    function GameData() {
    }
    GameData.configEnvir = function (channel, isdebug) {
        GameData.CHANNEL = channel;
        GameData.DEFAULT_ENV = isdebug ? GameData.ENVIRONMENT.dev : GameData.ENVIRONMENT.pro;
        if (channel === "MatchVS") {
            GameData.gameID = 201150;
            GameData.appkey = "0db8550d9bd345da82b852564f59d2e6";
            GameData.secretKey = "15bf7e1bc2454d21b071d67f568e257c";
        }
        if (channel === "MatchVS-Test") {
            GameData.gameID = 201170;
            GameData.appkey = "a5b937f29a4c480bb6946093105c0565";
            GameData.secretKey = "a8c5c84afde44136a5eea6f0ac09887c";
        }
        if (channel === "MatchVS-Test1") {
            GameData.gameID = 201078;
            GameData.appkey = "938e1ee0db444a079fe0695598677ba0";
            GameData.secretKey = "9b11e0eca09141a1961d49d6b6028075";
        }
    };
    /**
     * 获取绑定openID地址
     */
    GameData.getBindOpenIDAddr = function (channel, platform) {
        if (channel == "MatchVS" || channel == "Matchvs") {
            if (platform == "release") {
                return "http://vsuser.matchvs.com/wc6/thirdBind.do?";
            }
            else if (platform == "alpha") {
                return "http://alphavsuser.matchvs.com/wc6/thirdBind.do?";
            }
        }
        else if (channel == "MatchVS-Test1") {
            if (platform == "release") {
                return "http://zwuser.matchvs.com/wc6/thirdBind.do?";
            }
            else if (platform == "alpha") {
                return "http://alphazwuser.matchvs.com/wc6/thirdBind.do?";
            }
        }
    };
    /**
     * 获取签名
     */
    GameData.getSign = function (params) {
        var str = GameData.appkey + "&" + params + "&" + GameData.secretKey;
        var md5Str = new MD5().hex_md5(str);
        return md5Str;
    };
    GameData.CHANNEL = "MatchVS";
    GameData.DEFAULT_ENV = "alpha";
    GameData.ENVIRONMENT = { "dev": "alpha", "pro": "release" };
    GameData.gameID = 201330; //200757;
    GameData.appkey = "7c7b185482d8444bb98bc93c7a65daaa"; //6783e7d174ef41b98a91957c561cf305
    GameData.secretKey = "f469fb05eee9488bb32adfd85e4ca370"; //da47754579fa47e4affab5785451622c
    GameData.gameUser = new GameUser();
    GameData.playerUserIds = [];
    GameData.playerUserProfiles = [];
    GameData.matchType = 0; //匹配类型
    GameData.randomMatch = 1; //随机匹配
    GameData.specialMatch = 2; //指定房间号匹配
    GameData.tagsMatch = 3; //指定属性匹配
    GameData.maxPlayerNum = 4;
    GameData.isRoomOwner = false;
    GameData.roomOwnerID = 0;
    GameData.gameStartEvent = "gameStart";
    GameData.playerPositionEvent = "playerPosition";
    GameData.reconnectStartEvent = "gameReconnectStart";
    GameData.newStarEvent = "newStar";
    GameData.changeStarEvent = "changeStar";
    GameData.gameReadyEvent = "gameReady";
    GameData.reconnectReadyEvent = "gamaeReconnectReady";
    GameData.events = {};
    GameData.syncFrame = false;
    GameData.isGameOver = false;
    GameData.starPositionX = 0;
    GameData.starPositionY = 0;
    GameData.frameRate = 5;
    GameData.defaultHeight = 400;
    GameData.roomID = "";
    GameData.intervalList = []; //定时器列表
    GameData.number1 = "";
    GameData.number2 = "";
    GameData.number3 = "";
    GameData.playerTime = 180;
    GameData.roomPropertyType = { "mapA": "mapA", "mapB": "mapB" };
    GameData.roomPropertyValue = "mapA";
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
var GameManager = (function () {
    function GameManager() {
    }
    return GameManager;
}());
__reflect(GameManager.prototype, "GameManager");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        // 跨域请求
        egret.ImageLoader.crossOrigin = "anonymous";
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 3:
                        userInfo = _a.sent();
                        GameData.gameUser.avatar = userInfo.avatar;
                        GameData.gameUser.name = userInfo.nickname;
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("default.res.json", "http://116.196.73.105:80/birdhunt/resource/")];
                    case 1:
                        _a.sent();
                        // await RES.loadConfig("default.res.json", "/resource/");
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        // await RES.loadConfig("default.res.json", "/resource/");
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        mvs.MsEngine.getInstance.init(GameData.CHANNEL, GameData.DEFAULT_ENV, GameData.gameID);
        ContextManager.Instance.init(this);
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.shareAppMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
var mvs;
(function (mvs) {
    /**
     * 这个是 matchvs 引擎 接口封装模块，对引擎的所有请求接口进行了二次封装，一些接口调用的参数可以在这里组合
     */
    var MsEngine = (function () {
        function MsEngine() {
            this._engine = null; //Matchvs 引擎
            this._response = null;
            this._engine = new MatchvsEngine();
        }
        Object.defineProperty(MsEngine, "getInstance", {
            /**
             * 获取类实例
             */
            get: function () {
                if (MsEngine._instance == null) {
                    MsEngine._instance = new MsEngine();
                }
                return MsEngine._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 初始化
         * @param {string} channel
         * @param {string} platform
         * @param {number} gameID
         */
        MsEngine.prototype.init = function (channel, platform, gameID) {
            this._response = mvs.MsResponse.getInstance.getResponse();
            var res = this._engine.init(mvs.MsResponse.getInstance.getResponse(), channel, platform, gameID);
            if (res !== 200) {
                console.info("[MsEngine init failed] resCode:", res);
                return res;
            }
            console.info("[MsEngine init seccess] resCode:", res);
            return res;
        };
        /**
         * 用户登录
         * @param {number} userID 用户ID
         * @param {string} token 用户token 注册时生成的
         * @param {number} gameID 游戏ID
         * @param {string} appkey 游戏 appkey
         * @param {string} secretkey 游戏 secretkey
         */
        MsEngine.prototype.login = function (userID, token, gameID, appkey, secretkey) {
            var res = this._engine.login(userID, token, gameID, 1, appkey, secretkey, "eglejjddg", 0);
            console.info("[MsEngine login] resCode:", res);
            return res;
        };
        /**
         * 注册用户
         * @returns {number} 0-接口调用成功
         */
        MsEngine.prototype.registerUser = function () {
            var res = this._engine.registerUser();
            if (res !== 0) {
                console.error("[MsEngine registerUser failed] resCode:", res);
                return res;
            }
            console.info("[MsEngine registerUser seccess] resCode:", res);
            return res;
        };
        /**
         * 随机加入房间
         * @param {number} maxPlayer 最大人数
         * @param {string} userProfile 附带数据，默认指定 ""
         * @returns {number}
         */
        MsEngine.prototype.joinRandomRoom = function (maxPlayer, userProfile) {
            var res = this._engine.joinRandomRoom(maxPlayer, userProfile);
            console.info("[MsEngine joinRandomRoom ] resCode:", res);
            return res;
        };
        /**
         * 属性加入房间
         * @param {MsMatchInfo} matchinfo
         * @param {string} userProfile 附带数据，默认指定 ""
         * @returns {number}
         */
        MsEngine.prototype.joinRoomWithProperties = function (matchinfo, userProfile) {
            var res = this._engine.joinRoomWithProperties(matchinfo, userProfile);
            console.info("[MsEngine joinRandomRoom ] resCode:", res);
            return res;
        };
        /**
         * 指定房间号加入房间
         */
        MsEngine.prototype.joinRoom = function (roomID, userProfile) {
            var res = this._engine.joinRoom(roomID, userProfile);
            console.info("[MsEngine joinRoom ] resCode:", res);
            return res;
        };
        /**
         * 创建房间
         * @param {MsCreateRoomInfo} createRoomInfo 房间信息
         * @param {string} userProfile 附带数据，默认指定
         * @returns {number}
         */
        MsEngine.prototype.createRoom = function (createRoomInfo, userProfile) {
            var res = this._engine.createRoom(createRoomInfo, userProfile);
            console.info("[MsEngine createRoom ] resCode:", res, JSON.stringify(createRoomInfo), userProfile);
            return res;
        };
        /**
         * 禁止加入房间
         * @param {string} cpProto 禁止加入房间附带的数据
         * @returns {number}
         */
        MsEngine.prototype.joinOver = function (cpProto) {
            var res = this._engine.joinOver(cpProto);
            console.info("[MsEngine joinOver ] resCode:", res);
            return res;
        };
        /**
         * 设置允许房间加人
         * @param {number} cpProto
         * @returns {number}
         */
        MsEngine.prototype.joinOpen = function (cpProto) {
            var res = this._engine.joinOpen(cpProto);
            console.info("[MsEngine joinOpen ] resCode:", res);
            return res;
        };
        /**
         * 离开房间
         * @param {string} cpProto 离开房间附带的数据
         * @returns {number}
         */
        MsEngine.prototype.leaveRoom = function (cpProto) {
            var res = this._engine.leaveRoom(cpProto);
            console.info("[MsEngine leaveRoom ] resCode:", res);
            return res;
        };
        /**
         * 发送消息
         * @param {string} data 		发送的数据
         */
        MsEngine.prototype.sendEvent = function (data) {
            var res = this._engine.sendEvent(data);
            //console.info("[MsEngine sendEvent ] resCode:",JSON.stringify(res));
            return res;
        };
        /**
         * 发送消息的扩展，
         * @param {number} msgType          0-包含destUids  1-排除destUids
         * @param {string} data             要发送的数据
         * @param {number} desttype         0-客户端+not CPS  1-not客户端+ CPS   2-客户端 + CPS
         * @param {Array<number>} userids   玩家ID集合 [1,2,3,4,5]
         * @returns {{sequence: number, result: number}}
        */
        MsEngine.prototype.sendEventEx = function (msgType, data, desttype, userids) {
            var res = this._engine.sendEventEx(msgType, data, desttype, userids);
            //console.info("[MsEngine sendEventEx ] resCode:",JSON.stringify(res));
            return res;
        };
        /**
         *
         * @param {string} cpProto
         * @returns {number}
         */
        MsEngine.prototype.sendFrameEvent = function (cpProto) {
            var res = this._engine.sendFrameEvent(cpProto);
            console.info("[MsEngine sendFrameEvent ] resCode:", res);
            return res;
        };
        /**
         * frameRate ex:10/s . = 0 is off,>0 is on.
         * @param {number} frameRate
         * @returns {number}
         */
        MsEngine.prototype.setFrameSync = function (frameRate) {
            var res = this._engine.setFrameSync(frameRate);
            console.info("[MsEngine setFrameSync ] resCode:", res);
            return res;
        };
        /**
         * 退出登录
         * @param {number} cpProto
         * @returns {number}
         */
        MsEngine.prototype.logOut = function () {
            var res = this._engine.logout("退出登录");
            console.info("[MsEngine setFrameSync ] resCode:", res);
            return res;
        };
        /**
         *
         * @param {number} userID 被踢者用户ID
         * @param {string} cpProto 踢人附带的消息
         * @returns {number}
         */
        MsEngine.prototype.kickPlayer = function (userID, cpProto) {
            var res = this._engine.kickPlayer(userID, cpProto);
            console.info("[MsEngine kickPlayer ] resCode:", res);
            return res;
        };
        /**
         * 获取房间详细信息
         * @param {string} roomID
         * @returns {number}
         */
        MsEngine.prototype.getRoomDetail = function (roomID) {
            var res = this._engine.getRoomDetail(roomID);
            console.info("[MsEngine getRoomDetail ] resCode:", res);
            return res;
        };
        /**
         * 获取房间列表信息
         * @param {MsRoomFilter} filter
         * @returns {number}
         */
        MsEngine.prototype.getRoomList = function (filter) {
            var res = this._engine.getRoomList(filter);
            console.info("[MsEngine getRoomList ] resCode:", res);
            return res;
        };
        /**
         * 获取房间列表扩展接口
         * @param {MsRoomFilterEx} filter
         * @returns {number}
         */
        MsEngine.prototype.getRoomListEx = function (filter) {
            var res = this._engine.getRoomListEx(filter);
            console.info("[MsEngine getRoomListEx ] resCode:", res);
            return res;
        };
        /**
         * 设置房间属性
         * @param {string} roomID
         * @param {string} roomProperty
         * @returns {number}
         */
        MsEngine.prototype.setRoomProperty = function (roomID, roomProperty) {
            var res = this._engine.setRoomProperty(roomID, roomProperty);
            console.info("[MsEngine setRoomProperty ] resCode:", res);
            return res;
        };
        /**
         * 断线重连
         * @returns {number}
         */
        MsEngine.prototype.reconnect = function () {
            var res = this._engine.reconnect();
            console.info("[MsEngine reconnect ]", res);
            return res;
        };
        MsEngine._instance = null;
        return MsEngine;
    }());
    mvs.MsEngine = MsEngine;
    __reflect(MsEngine.prototype, "mvs.MsEngine");
})(mvs || (mvs = {}));
/**
 * matchvs 事件类型定义
 */
var mvs;
(function (mvs) {
    var MsEvent = (function () {
        function MsEvent() {
        }
        //初始化
        MsEvent.EVENT_INIT_RSP = "MATCHVS_INIT_EVENT";
        //注册
        MsEvent.EVENT_REGISTERUSER_RSP = "MATCHVS_REGISTERUSER_EVENT";
        //登录事件
        MsEvent.EVENT_LOGIN_RSP = "MATCHVS_LOGIN_EVENT";
        //加入房间事件
        MsEvent.EVENT_JOINROOM_RSP = "MATCHVS_JOINROOM_EVENT";
        MsEvent.EVENT_JOINROOM_NTFY = "MATCHVS_JOINROOM_NOTIFY_EVENT";
        //创建房间事件
        MsEvent.EVENT_CREATEROOM_RSP = "MATCHVS_CREATEROOM_RSP_EVENT";
        //发送消息事件
        MsEvent.EVENT_SENDEVENT_RSP = "MATCHVS_INIT_EVENT";
        MsEvent.EVENT_SENDEVENT_NTFY = "MATCHVS_SENDEVENT_NOTIFY_EVENT";
        //gameServer 消息事件
        MsEvent.EVENT_GAMESERVER_NTFY = "MATCHVS_GAMESERVER_NOTIFY_EVENT";
        //离开房间事件
        MsEvent.EVENT_LEAVEROOM_RSP = "MATCHVS_LEAVEROOM_RSP_EVENT";
        MsEvent.EVENT_LEAVEROOM_NTFY = "MATCHVS_LEAVEROOM_NTFY_EVENT";
        //关闭房间事件
        MsEvent.EVENT_JOINOVER_RSP = "MATCHVS_JOINOVER_RSP_EVENT";
        MsEvent.EVENT_JOINOVER_NTFY = "MATCHVS_LEAVEROOM_EVENT";
        //打开房间事件
        MsEvent.EVENT_JOINOPEN_RSP = "MATCHVS_JOINOPEN_RSP_EVENT";
        MsEvent.EVENT_JOINOPEN_NTFY = "MATCHVS_JOINOPEN_NTFY_EVENT";
        //网络状态事件
        MsEvent.EVENT_NETWORKSTATE_NTFY = "MATCHVS_NETWORKSTATE_NTFY";
        //发送帧事件
        MsEvent.EVENT_SENDFRAME_RSP = "MATCHVS_SENDFRAME_RSP_EVENT";
        //设置帧同步事件
        MsEvent.EVENT_SETFRAMESYNC_RSP = "MATCHVS_SETFRAMESYNC_RSP_EVENT";
        //更新帧同步事件
        MsEvent.EVENT_FRAMEUPDATE = "MATCHVS_FRAMEUPDATE_EVENT";
        //错误发生事件
        MsEvent.EVENT_ERROR_RSP = "MATCHVS_ERROR_RSP_EVENT";
        //登出事件
        MsEvent.EVENT_LOGOUT_RSP = "MATCHVS_LOGOUT_RSP_EVENT";
        //设置房间属性
        MsEvent.EVENT_SETROOMPROPERTY_RSP = "MATCHVS_SETROOMPROPERTY_RSP_EVENT";
        MsEvent.EVENT_SETROOMPROPERTY_NTFY = "MATCHVS_SETROOMPROPERTY_NTFY_EVENT";
        //踢人
        MsEvent.EVENT_KICKPLAYER_RSP = "MATCHVS_KICKPLAYER_RSP_EVENT";
        MsEvent.EVENT_KICKPLAYER_NTFY = "MATCHVS_KICKPLAYER_NTFY_EVENT";
        // 获取房间类别 简单信息 接口
        MsEvent.EVENT_GETROOMLIST_RSP = "MATCHVS_GETROOMLIST_RSP_EVENT";
        // 获取房间列表 扩展信息 接口
        MsEvent.EVENT_GETROOMLIST_EX_RSP = "MATCHVS_GETROOMLIST_EX_RSP_EVENT";
        //获取房间详细信息
        MsEvent.EVENT_GETROOMDETAIL_RSP = "MATCHVS_GETROOMDETAIL_RSP_EVENT";
        //断线重新连接
        MsEvent.EVENT_RECONNECT_RSP = "MATCHVS_RECONNECT_RSP_EVENT";
        return MsEvent;
    }());
    mvs.MsEvent = MsEvent;
    __reflect(MsEvent.prototype, "mvs.MsEvent");
})(mvs || (mvs = {}));
/**
 * 对 MatchvsResponse 回调接口 进行封装，使用 事件触发的机制 对消息进行处理，调用者只需要在使用的时候接受该事件消息，然后释放即可
 */
var mvs;
(function (mvs) {
    var MsResponse = (function (_super) {
        __extends(MsResponse, _super);
        function MsResponse() {
            var _this = _super.call(this) || this;
            _this._response = null; //Matchvs 引擎
            _this.registResponseCall();
            return _this;
        }
        Object.defineProperty(MsResponse, "getInstance", {
            /**
             * 获取实例
             */
            get: function () {
                if (MsResponse._instance == null) {
                    MsResponse._instance = new MsResponse();
                }
                return MsResponse._instance;
            },
            enumerable: true,
            configurable: true
        });
        MsResponse.release = function () {
            MsResponse._instance._response = null;
            MsResponse._instance = null;
        };
        /**
         * 获取引擎回调
         */
        MsResponse.prototype.getResponse = function () {
            if (this._response == null) {
                this.registResponseCall();
            }
            return this._response;
        };
        /**
         * MatchvsResponse 接口回调的重新注册
         */
        MsResponse.prototype.registResponseCall = function () {
            this._response = new MatchvsResponse();
            this._response.initResponse = this.initResponse.bind(this);
            this._response.registerUserResponse = this.registerUserResponse.bind(this);
            this._response.loginResponse = this.loginResponse.bind(this);
            this._response.joinRoomResponse = this.joinRoomResponse.bind(this);
            this._response.joinRoomNotify = this.joinRoomNotify.bind(this);
            this._response.createRoomResponse = this.createRoomResponse.bind(this);
            this._response.sendEventResponse = this.sendEventResponse.bind(this);
            this._response.sendEventNotify = this.sendEventNotify.bind(this);
            this._response.gameServerNotify = this.gameServerNotify.bind(this);
            this._response.joinOverResponse = this.joinOverResponse.bind(this);
            this._response.joinOverNotify = this.joinOverNotify.bind(this);
            this._response.leaveRoomResponse = this.leaveRoomResponse.bind(this);
            this._response.leaveRoomNotify = this.leaveRoomNotify.bind(this);
            this._response.networkStateNotify = this.networkStateNotify.bind(this);
            this._response.setFrameSyncResponse = this.setFrameSyncResponse.bind(this);
            this._response.frameUpdate = this.frameUpdate.bind(this);
            this._response.errorResponse = this.errorResponse.bind(this);
            this._response.logoutResponse = this.logOutResponse.bind(this);
            this._response.joinOpenResponse = this.joinOpenResponse.bind(this);
            this._response.joinOpenNotify = this.joinOpenNotify.bind(this);
            //踢人回调
            this._response.kickPlayerNotify = this.kickPlayerNotify.bind(this);
            this._response.kickPlayerResponse = this.kickPlayerResponse.bind(this);
            //设置房间属性回调
            this._response.setRoomPropertyNotify = this.setRoomPropertyNotify.bind(this);
            this._response.setRoomPropertyResponse = this.setRoomPropertyResponse.bind(this);
            // 获取房间详细信息回调
            this._response.getRoomDetailResponse = this.getRoomDetailResponse.bind(this);
            //获取房间列表 扩展 接口回调
            this._response.getRoomListExResponse = this.getRoomListExResponse.bind(this);
            //获取房间列表接口回调
            this._response.getRoomListResponse = this.getRoomListResponse.bind(this);
            this._response.reconnectResponse = this.reconnectResponse.bind(this);
        };
        /**
         * 初始化回调
         */
        MsResponse.prototype.initResponse = function (status) {
            console.info("initResponse status：", status);
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_INIT_RSP, false, false, { status: status }));
        };
        /**
         * 注册回调
         */
        MsResponse.prototype.registerUserResponse = function (userInfo) {
            console.info("registerUserResponse userInfo ", JSON.stringify(userInfo));
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_REGISTERUSER_RSP, false, false, userInfo));
        };
        /**
         * 登录回调
         */
        MsResponse.prototype.loginResponse = function (login) {
            console.info("[loginResponse] " + JSON.stringify(login));
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_LOGIN_RSP, false, false, login));
        };
        /**
         * 加入房间回调
         */
        MsResponse.prototype.joinRoomResponse = function (status, roomUserInfoList, roomInfo) {
            if (status == 200) {
                console.info("[joinRoomResponse] status：", status);
                var users_1 = [];
                roomUserInfoList.forEach(function (element) {
                    // let usr:MsRoomUserInfo = new MsRoomUserInfo(element.userId, element.userProfile);
                    users_1.push(element);
                });
                this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_JOINROOM_RSP, false, false, { status: status, userList: users_1, roomInfo: roomInfo }));
                return;
            }
            console.error("[joinRoomResponse error:]", status);
            return;
        };
        /**
         * 加入房间异步回调 发送 event 事件
         */
        MsResponse.prototype.joinRoomNotify = function (roomUserInfo) {
            console.info("[joinRoomNotify] " + JSON.stringify(roomUserInfo));
            var data = {
                userId: roomUserInfo.userID,
                userProfile: roomUserInfo.userProfile
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_JOINROOM_NTFY, false, false, data));
        };
        /**
         * 创建房间回调
         */
        MsResponse.prototype.createRoomResponse = function (rsp) {
            console.info("[sendEventResponse]" + JSON.stringify(rsp));
            var data = {
                status: rsp.status,
                roomID: rsp.roomID,
                owner: rsp.owner,
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_CREATEROOM_RSP, false, false, data));
        };
        /**
         * 发送消息回调
         */
        MsResponse.prototype.sendEventResponse = function (rsp) {
            //console.info("[sendEventResponse]"+JSON.stringify(rsp));
            var data = {
                status: rsp.status,
                sequence: rsp.sequence
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_SENDEVENT_RSP, false, false, data));
        };
        /**
         * 发送消息异步回调
         */
        MsResponse.prototype.sendEventNotify = function (eventInfo) {
            //console.info("[sendEventNotify] "+JSON.stringify(eventInfo));
            var data = {
                srcUserId: eventInfo.srcUserId,
                cpProto: eventInfo.cpProto
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_SENDEVENT_NTFY, false, false, data));
        };
        /**
         * 收到 gameServe 消息回调 srcUserId = 0
         */
        MsResponse.prototype.gameServerNotify = function (eventInfo) {
            console.info("[gameServerNotify] " + JSON.stringify(eventInfo));
            var data = {
                srcUserId: eventInfo.srcUserId,
                cpProto: eventInfo.cpProto
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_GAMESERVER_NTFY, false, false, data));
        };
        /**
         * 关闭房间回调 并发送 Event 事件
         */
        MsResponse.prototype.joinOverResponse = function (rsp) {
            console.info("[joinOverResponse] " + JSON.stringify(rsp));
            var data = { status: rsp.status, cpProto: rsp.cpProto };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_JOINOVER_RSP, false, false, data));
        };
        /**
         * 关闭房间异步回调 并发送 Event 事件
         */
        MsResponse.prototype.joinOverNotify = function (Info) {
            console.info("[joinOverNotify] " + JSON.stringify(Info));
            var data = { roomID: Info.roomID, userID: Info.srcUserID, cpProto: Info.cpProto };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_JOINOVER_NTFY, false, false, data));
        };
        /**
         * 自己离开房间回调
         */
        MsResponse.prototype.leaveRoomResponse = function (rsp) {
            console.info("[leaveRoomResponse] " + JSON.stringify(rsp));
            var data = {
                roomID: rsp.roomID,
                status: rsp.status,
                userId: rsp.userId,
                cpProto: rsp.cpProto
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_LEAVEROOM_RSP, false, false, data));
        };
        /**
         * 他人离开房间回调
         */
        MsResponse.prototype.leaveRoomNotify = function (leaveRoomInfo) {
            console.info("[leaveRoomNotify] " + JSON.stringify(leaveRoomInfo));
            var data = {
                roomID: leaveRoomInfo.roomID,
                userId: leaveRoomInfo.userId,
                owner: leaveRoomInfo.owner,
                cpProto: leaveRoomInfo.cpProto
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, false, false, data));
        };
        /**
         * 其他玩家网络状态回调
         */
        MsResponse.prototype.networkStateNotify = function (netnotify) {
            console.info("[networkStateNotify] " + JSON.stringify(netnotify));
            var data = {
                roomID: netnotify.roomID,
                userID: netnotify.userID,
                owner: netnotify.owner,
                state: netnotify.state
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY, false, false, data));
        };
        /**
         * 设置帧同步回调
         */
        MsResponse.prototype.setFrameSyncResponse = function (rsp) {
            //console.info("[setFrameSyncResponse] "+JSON.stringify(rsp));
            var data = {
                mStatus: rsp.mStatus
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_SETFRAMESYNC_RSP, false, false, data));
        };
        /**
         * 更新帧数据
         */
        MsResponse.prototype.frameUpdate = function (fd) {
            //console.info("[setFrameSyncResponse] "+JSON.stringify(fd));
            var data = {
                frameIndex: fd.frameIndex,
                frameItems: fd.frameItems,
                frameWaitCount: fd.frameWaitCount,
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_FRAMEUPDATE, false, false, data));
        };
        /**
         * 有错误发生的时候 错误回调
         */
        MsResponse.prototype.errorResponse = function (errCode, errMsg) {
            console.info("[setFrameSyncResponse] errCode:" + errCode + " errMsg:" + errMsg);
            var data = {
                errCode: errCode,
                errMsg: errMsg
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_ERROR_RSP, false, false, data));
        };
        /**
         * 登出回调
         */
        MsResponse.prototype.logOutResponse = function (status) {
            console.info("[logOutResponse] status:", status);
            var data = {
                status: status
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_LOGOUT_RSP, false, false, data));
        };
        /**
         * 自己打开房间回调
         */
        MsResponse.prototype.joinOpenResponse = function (info) {
            console.info("[joinOpenResponse] info:", JSON.stringify(info));
            var data = {
                status: info.status,
                cpProto: info.cpProto,
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_JOINOPEN_RSP, false, false, data));
        };
        /**
         * 他人打开房间回调
         */
        MsResponse.prototype.joinOpenNotify = function (info) {
            console.info("[joinOpenResponse] info:", JSON.stringify(info));
            var data = {
                roomID: info.roomID,
                userID: info.userID,
                cpProto: info.cpProto,
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_JOINOPEN_RSP, false, false, data));
        };
        MsResponse.prototype.kickPlayerNotify = function (knotify) {
            console.info("[kickPlayerNotify] info:", JSON.stringify(knotify));
            var data = {
                cpProto: knotify.cpProto,
                owner: knotify.owner,
                srcUserId: knotify.srcUserId,
                userId: knotify.userId
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_KICKPLAYER_NTFY, false, false, data));
        };
        MsResponse.prototype.kickPlayerResponse = function (rsp) {
            console.info("[kickPlayerResponse] info:", JSON.stringify(rsp));
            var data = {
                owner: rsp.owner,
                userID: rsp.userID,
                status: rsp.status
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_KICKPLAYER_RSP, false, false, data));
        };
        /**
         * 设置房间属性 异步 回调
         */
        MsResponse.prototype.setRoomPropertyNotify = function (notify) {
            console.info("[setRoomPropertyNotify] info:", JSON.stringify(notify));
            var data = {
                roomID: notify.roomID,
                userID: notify.userID,
                roomProperty: notify.roomProperty
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_SETROOMPROPERTY_NTFY, false, false, data));
        };
        /**
         * 设置房间属性回调
         */
        MsResponse.prototype.setRoomPropertyResponse = function (rsp) {
            console.info("[setRoomPropertyResponse] info:", JSON.stringify(rsp));
            var data = {
                roomID: rsp.roomID,
                userID: rsp.userID,
                roomProperty: rsp.roomProperty,
                status: rsp.status
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_SETROOMPROPERTY_RSP, false, false, data));
        };
        /**
         * 获取房间详细信息回调
         */
        MsResponse.prototype.getRoomDetailResponse = function (rsp) {
            console.info("[getRoomDetailResponse] info:", JSON.stringify(rsp));
            var data = {
                canWatch: rsp.canWatch,
                createFlag: rsp.createFlag,
                maxPlayer: rsp.maxPlayer,
                mode: rsp.mode,
                owner: rsp.owner,
                roomProperty: rsp.roomProperty,
                state: rsp.state,
                status: rsp.status,
                userInfos: rsp.userInfos
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_GETROOMDETAIL_RSP, false, false, data));
        };
        /**
         * 获取房间列表 扩展接口 回调
         */
        MsResponse.prototype.getRoomListExResponse = function (rsp) {
            console.info("[getRoomListExResponse] info:", JSON.stringify(rsp));
            var data = {
                roomAttrs: rsp.roomAttrs,
                status: rsp.status,
                total: rsp.total
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_GETROOMLIST_EX_RSP, false, false, data));
        };
        /**
         * 获取房间列表接口回调(信息较少推进使用 getRoomListEx)
         */
        MsResponse.prototype.getRoomListResponse = function (status, roomInfos) {
            console.info("[getRoomListResponse] info:", status, JSON.stringify(roomInfos));
            var data = {
                status: status,
                roomInfos: roomInfos
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_GETROOMLIST_RSP, false, false, data));
        };
        /**
         * 断线重新连接回调
         */
        MsResponse.prototype.reconnectResponse = function (status, roomUserInfoList, roomInfo) {
            console.info("[reconnectResponse] info:", status);
            var data = {
                status: status,
                roomUserInfoList: roomUserInfoList,
                roomInfo: roomInfo
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_RECONNECT_RSP, false, false, data));
        };
        MsResponse._instance = null;
        return MsResponse;
    }(egret.EventDispatcher));
    mvs.MsResponse = MsResponse;
    __reflect(MsResponse.prototype, "mvs.MsResponse");
})(mvs || (mvs = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var Player1 = (function (_super) {
    __extends(Player1, _super);
    function Player1() {
        return _super.call(this) || this;
    }
    return Player1;
}(Player));
__reflect(Player1.prototype, "Player1");
window["Player1"] = Player1;
var Player2 = (function (_super) {
    __extends(Player2, _super);
    function Player2() {
        return _super.call(this) || this;
    }
    return Player2;
}(Player));
__reflect(Player2.prototype, "Player2");
window["Player2"] = Player2;
var RankItem = (function (_super) {
    __extends(RankItem, _super);
    function RankItem(rank_cnt, rank_name, rank_score) {
        var _this = _super.call(this) || this;
        _this.rank_cnt_Str = rank_cnt;
        _this.rank_name_Str = rank_name;
        _this.rank_score_Str = rank_score;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    RankItem.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RankItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    RankItem.prototype.addToStage = function () {
        this.rank_cnt.text = this.rank_cnt_Str;
        this.rank_name.text = this.rank_name_Str;
        this.rank_score.text = this.rank_score_Str;
    };
    return RankItem;
}(eui.Component));
__reflect(RankItem.prototype, "RankItem", ["eui.UIComponent", "egret.DisplayObject"]);
window["RankItem"] = RankItem;
var Shield = (function (_super) {
    __extends(Shield, _super);
    function Shield() {
        var _this = _super.call(this) || this;
        _this.type = ItemType.shield;
        return _this;
    }
    Shield.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Shield.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Shield;
}(Item));
__reflect(Shield.prototype, "Shield");
window["Shield"] = Shield;
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var playerIcon = (function (_super) {
    __extends(playerIcon, _super);
    function playerIcon() {
        var _this = _super.call(this) || this;
        _this.userInfo = null;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    playerIcon.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    playerIcon.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    playerIcon.prototype.addToStage = function () {
        this.player.mask = this.avatarMask;
        this.init();
    };
    playerIcon.prototype.init = function () {
        this.player.visible = false;
        this.userInfo = null;
    };
    playerIcon.prototype.setData = function (userInfo) {
        var avatar = userInfo.avatar;
        this.player.source = avatar;
        this.player.visible = true;
        this.userInfo = userInfo;
    };
    return playerIcon;
}(eui.Component));
__reflect(playerIcon.prototype, "playerIcon", ["eui.UIComponent", "egret.DisplayObject"]);
window["playerIcon"] = playerIcon;
var RoomPrefab = (function (_super) {
    __extends(RoomPrefab, _super);
    function RoomPrefab() {
        return _super.call(this) || this;
    }
    RoomPrefab.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RoomPrefab.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    RoomPrefab.prototype.init = function () {
        this.roomItem.addEventListener(egret.TouchEvent.TOUCH_TAP, this.joinRoom, this);
        this.roomId.text = this.msRoomAttribute.roomID;
        this.roomname.text = this.msRoomAttribute.roomName;
    };
    RoomPrefab.prototype.joinRoom = function () {
        var info = { "id": GameData.gameUser.id, "nickName": GameData.gameUser.name, "avatar": GameData.gameUser.avatar };
        var infostr = JSON.stringify(info);
        mvs.MsEngine.getInstance.joinRoom(this.msRoomAttribute.roomID, infostr);
    };
    return RoomPrefab;
}(eui.Component));
__reflect(RoomPrefab.prototype, "RoomPrefab", ["eui.UIComponent", "egret.DisplayObject"]);
var RoomUserInfo = (function (_super) {
    __extends(RoomUserInfo, _super);
    function RoomUserInfo() {
        var _this = _super.call(this) || this;
        _this.userid = 0;
        _this.userProfile = "";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    RoomUserInfo.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RoomUserInfo.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    RoomUserInfo.prototype.addToStage = function () {
        this.avatar.mask = this.avatarMask;
        this.init();
    };
    RoomUserInfo.prototype.init = function () {
        this.type1.visible = false;
        this.type2.visible = false;
        this.type3.visible = false;
        this.default.visible = true;
        this.username.text = "";
        this.common.visible = false;
        this.kick.visible = false;
        this.kick.addEventListener(egret.TouchEvent.TOUCH_TAP, this.kickPlayer, this);
        this.userid = 0;
    };
    RoomUserInfo.prototype.setData = function (userid, ownerId, userProfile) {
        this.userid = userid;
        this.userProfile = userProfile;
        if (this.userid == ownerId) {
            this.type1.visible = true;
            this.type2.visible = false;
            this.type3.visible = false;
        }
        else if (this.userid == GameData.gameUser.id) {
            this.type1.visible = false;
            this.type2.visible = false;
            this.type3.visible = true;
        }
        else {
            this.type1.visible = false;
            this.type2.visible = true;
            this.type3.visible = false;
        }
        this.default.visible = false;
        this.common.visible = true;
        this.username.text = this.userid.toString();
        if (!GameData.isRoomOwner || this.userid == GameData.gameUser.id) {
            this.kick.visible = false;
        }
        else {
            this.kick.visible = true;
        }
        var nickname = userProfile.nickName;
        var avatar = userProfile.avatar;
        this.username.text = nickname;
        this.avatar.source = avatar;
    };
    RoomUserInfo.prototype.kickPlayer = function () {
        mvs.MsEngine.getInstance.kickPlayer(this.userid, "");
    };
    return RoomUserInfo;
}(eui.Component));
__reflect(RoomUserInfo.prototype, "RoomUserInfo", ["eui.UIComponent", "egret.DisplayObject"]);
var uiCreateRoom = (function (_super) {
    __extends(uiCreateRoom, _super);
    function uiCreateRoom() {
        var _this = _super.call(this) || this;
        _this.num = 2;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    uiCreateRoom.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    uiCreateRoom.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    uiCreateRoom.prototype.addToStage = function () {
        this.num = 2;
        this.playerNum.text = this.num.toString();
        this.roomName.text = "";
        this.addListen();
    };
    uiCreateRoom.prototype.addListen = function () {
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
        this.plus.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlusClick, this);
        this.sub.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSubClick, this);
        this.create.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createRoom, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_CREATEROOM_RSP, this.createRoomResponse, this);
    };
    uiCreateRoom.prototype.onBackClick = function () {
        ContextManager.Instance.dialogBack();
    };
    uiCreateRoom.prototype.onPlusClick = function () {
        if (this.num >= 4) {
            this.plus.touchEnabled = false;
            this.num = 4;
        }
        else {
            this.num += 2;
            this.sub.touchEnabled = true;
        }
        this.playerNum.text = this.num.toString();
    };
    uiCreateRoom.prototype.onSubClick = function () {
        if (this.num <= 2) {
            this.sub.touchEnabled = false;
            this.num = 2;
        }
        else {
            this.num -= 2;
            this.plus.touchEnabled = true;
        }
        this.playerNum.text = this.num.toString();
    };
    uiCreateRoom.prototype.createRoom = function () {
        GameData.maxPlayerNum = this.num;
        var roomName = this.roomName.text;
        var create = new MsCreateRoomInfo(roomName, this.num, 0, 0, 1, "");
        mvs.MsEngine.getInstance.createRoom(create, JSON.stringify({ "id": GameData.gameUser.id, "nickName": GameData.gameUser.name, "avatar": GameData.gameUser.avatar }));
    };
    uiCreateRoom.prototype.createRoomResponse = function (ev) {
        var rsp = ev.data;
        GameData.roomID = rsp.roomID;
        ContextManager.Instance.showUI(UIType.roomView, [true, rsp]);
    };
    return uiCreateRoom;
}(BaseView));
__reflect(uiCreateRoom.prototype, "uiCreateRoom");
var uiExit = (function (_super) {
    __extends(uiExit, _super);
    function uiExit() {
        return _super.call(this) || this;
    }
    uiExit.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    uiExit.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    uiExit.prototype.init = function () {
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
        this.quit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLeaveGameClick, this);
    };
    uiExit.prototype.onBackClick = function () {
        ContextManager.Instance.dialogBack();
    };
    uiExit.prototype.onLeaveGameClick = function () {
        mvs.MsEngine.getInstance.leaveRoom("");
    };
    return uiExit;
}(BaseView));
__reflect(uiExit.prototype, "uiExit");
var uiGame = (function (_super) {
    __extends(uiGame, _super);
    function uiGame() {
        var _this = _super.call(this) || this;
        _this.players = [];
        _this.gameover = false;
        _this.gamestart = false;
        _this.enemyHeartNum = 3;
        _this.enemyNum = 0;
        _this.friendHeartNum = 3;
        _this.friendNum = 0;
        _this.friends = [];
        _this.friendIdsState = [];
        _this.enemys = [];
        _this.enemyIdsState = [];
        _this.friendBullets = [];
        _this.enemyBullets = [];
        _this.roundSeconds = 30;
        _this.curRound = 1;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addMsResponseListen, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.removeFromStage, _this);
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.onEnterFrame, _this);
        return _this;
    }
    uiGame.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    uiGame.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    uiGame.prototype.addToStage = function () {
        this.addMsResponseListen();
    };
    uiGame.prototype.removeFromStage = function () {
        for (var i = 0; i < this.players.length; i++) {
            this.removeChild(this.players[i]);
        }
        this.players = [];
        this.removeMsResponseListen();
    };
    uiGame.prototype.init = function () {
        this.exit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitClick, this);
    };
    uiGame.prototype.onEnter = function (context) {
        this.updateinfo();
    };
    uiGame.prototype.updateinfo = function () {
        this.curRound = 1;
        this.friendHeartNum = 3;
        this.enemyHeartNum = 3;
        for (var i = 0; i < this.playerHeart.numChildren; i++) {
            this.playerHeart.getChildAt(i).visible = true;
        }
        for (var i = 0; i < this.enemyHeart.numChildren; i++) {
            this.enemyHeart.getChildAt(i).visible = true;
        }
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchEvent, this);
        this.gamestart = false;
        this.gameover = false;
        var self = this;
        this.roundStart();
    };
    uiGame.prototype.initPlayers = function () {
        this.friends = [];
        this.enemys = [];
        GameData.playerUserProfiles.sort(function (a, b) { return a.id - b.id; });
        // let index = GameData.playerInfos.indexOf(GameData.gameUser.id);
        var index = -1;
        for (var i_1 = 0; i_1 < GameData.playerUserProfiles.length; i_1++) {
            var userProfile = GameData.playerUserProfiles[i_1];
            var id = userProfile.id;
            if (GameData.gameUser.id == id) {
                index = i_1;
                break;
            }
        }
        //分组
        for (var i_2 = 0; i_2 < GameData.playerUserProfiles.length; i_2++) {
            if (i_2 < GameData.playerUserProfiles.length / 2) {
                if (index < GameData.playerUserProfiles.length / 2)
                    this.friends.push(GameData.playerUserProfiles[i_2]);
                else
                    this.enemys.push(GameData.playerUserProfiles[i_2]);
            }
            else {
                if (index >= GameData.playerUserProfiles.length / 2)
                    this.friends.push(GameData.playerUserProfiles[i_2]);
                else
                    this.enemys.push(GameData.playerUserProfiles[i_2]);
            }
        }
        this.friendIdsState = [];
        for (var i_3 = 0; i_3 < this.friends.length; i_3++) {
            this.friendIdsState.push({ id: this.friends[i_3].id, state: 0 });
        }
        this.enemyIdsState = [];
        for (var i_4 = 0; i_4 < this.enemys.length; i_4++) {
            this.enemyIdsState.push({ id: this.enemys[i_4].id, state: 0 });
        }
        var team = [{ "id": GameData.gameUser.id, "nickName": GameData.gameUser.name, "avatar": GameData.gameUser.avatar }];
        for (var i_5 = 0; i_5 < this.friends.length; i_5++) {
            if (this.friends[i_5].id != GameData.gameUser.id) {
                team.push(this.friends[i_5]);
            }
        }
        for (var i_6 = 0; i_6 < this.enemys.length; i_6++) {
            team.push(this.enemys[i_6]);
        }
        GameData.playerUserProfiles = team;
        var playerScript = null;
        if (this.players && this.players.length > 0) {
            var campFlg = GameData.playerUserProfiles.length / 2;
            for (var j = 0; j < this.players.length; j++) {
                playerScript = this.players[j];
                if (playerScript) {
                    playerScript.init();
                    if (j < campFlg) {
                        if (j < 1) {
                            playerScript.x = -15;
                            playerScript.y = 1200;
                        }
                        else {
                            playerScript.x = 165;
                            playerScript.y = 1200;
                        }
                    }
                    else {
                        if (j < campFlg + 1) {
                            playerScript.x = 550;
                            playerScript.y = 1200;
                        }
                        else {
                            playerScript.x = 380;
                            playerScript.y = 1200;
                        }
                    }
                }
            }
        }
        else {
            var player = null;
            this.players = [];
            var campFlg = GameData.playerUserProfiles.length / 2;
            for (var i = 0; i < GameData.playerUserProfiles.length; i++) {
                if (i < campFlg) {
                    if (i < 1) {
                        player = new Player1();
                        player.x = -15;
                        player.y = 1200;
                    }
                    else {
                        player = new Player2();
                        player.x = 165;
                        player.y = 1200;
                    }
                    player.Camp = Camp.friend;
                }
                else {
                    if (i < campFlg + 1) {
                        player = new Enemy1();
                        player.x = 550;
                        player.y = 1200;
                    }
                    else {
                        player = new Enemy2();
                        player.x = 380;
                        player.y = 1200;
                    }
                    player.Camp = Camp.enemy;
                }
                this.addChild(player);
                player.UserId = GameData.playerUserProfiles[i].id;
                this.players.push(player);
            }
            GameData.playerUserIds = [];
            for (var i_7 = 0; i_7 < GameData.playerUserProfiles.length; i_7++) {
                var id = GameData.playerUserProfiles[i_7].id;
                GameData.playerUserIds.push(id);
            }
        }
        if (GameData.maxPlayerNum == 2) {
            this.playerIcon1.visible = false;
            this.enemyIcon1.visible = false;
            this.playerIcon2.visible = true;
            this.playerIcon2.setData(GameData.playerUserProfiles[0]);
            this.enemyIcon2.visible = true;
            this.enemyIcon2.setData(GameData.playerUserProfiles[1]);
            this.enemyNum = this.friendNum = 1;
        }
        else {
            this.playerIcon1.visible = true;
            this.playerIcon1.setData(GameData.playerUserProfiles[0]);
            this.playerIcon2.visible = true;
            this.playerIcon2.setData(GameData.playerUserProfiles[1]);
            this.enemyIcon1.visible = true;
            this.enemyIcon1.setData(GameData.playerUserProfiles[2]);
            this.enemyIcon2.visible = true;
            this.enemyIcon2.setData(GameData.playerUserProfiles[3]);
            this.enemyNum = this.friendNum = 2;
        }
    };
    uiGame.prototype.checkIsRoundOver = function () {
        var enemyDiedCnt = 0;
        var friendDiedCnt = 0;
        for (var i = 0; i < this.players.length; i++) {
            var playerScript = this.players[i];
            if (playerScript && playerScript.isDied) {
                if (playerScript.camp == Camp.friend) {
                    friendDiedCnt++;
                }
                else {
                    enemyDiedCnt++;
                }
            }
        }
        if (enemyDiedCnt >= this.players.length / 2 || friendDiedCnt >= this.players.length / 2) {
            return true;
        }
        return false;
    };
    uiGame.prototype.addMsResponseListen = function () {
        //发送消息
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_SENDEVENT_NTFY, this.sendEventNotify, this);
        //离开房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP, this.leaveRoomResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY, this.networkStateNotify, this);
        //踢人
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_KICKPLAYER_RSP, this.kickPlayerResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_KICKPLAYER_NTFY, this.kickPlayerNotify, this);
    };
    uiGame.prototype.removeMsResponseListen = function () {
        //发送消息
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_SENDEVENT_NTFY, this.sendEventNotify, this);
        //离开房间
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP, this.leaveRoomResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY, this.networkStateNotify, this);
        //踢人
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_KICKPLAYER_RSP, this.kickPlayerResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_KICKPLAYER_NTFY, this.kickPlayerNotify, this);
    };
    uiGame.prototype.leaveRoomNotify = function (ev) {
        var leaveRoom = ev.data;
        var userid = leaveRoom.userId;
        var ownerId = leaveRoom.owner;
        var self = this;
        var friend = this.friendIdsState.filter(function (x) {
            return x.id == userid;
        });
        for (var i = 0; i < friend.length; i++) {
            friend[i].state = 1;
        }
        var enemy = this.enemyIdsState.filter(function (x) {
            return x.id == userid;
        });
        for (var i = 0; i < enemy.length; i++) {
            enemy[i].state = 1;
        }
        if (GameData.maxPlayerNum > 2) {
            var newRoomOwner = ownerId;
            if (GameData.gameUser.id == newRoomOwner) {
                GameData.isRoomOwner = true;
                self.scheuleFire();
                self.scheduleSpawItem();
                self.countDown();
            }
        }
        if (userid != GameData.gameUser.id) {
            if (!this.gameover) {
                var friends = this.friends.filter(function (x) {
                    return x == userid;
                });
                var tip = void 0;
                if (friends.length > 0) {
                    tip = new uiTip("队友离开了游戏");
                }
                else {
                    tip = new uiTip("对手离开了游戏");
                }
                this.addChild(tip);
            }
        }
        if (!this.gameover) {
            var friendState_1 = 1;
            for (var i = 0; i < this.friendIdsState.length; i++) {
                if (this.friendIdsState[i].state == 0) {
                    friendState_1 = 0;
                    break;
                }
            }
            var enemyState_1 = 1;
            for (var i = 0; i < this.enemyIdsState.length; i++) {
                if (this.enemyIdsState[i].state == 0) {
                    enemyState_1 = 0;
                    break;
                }
            }
            var friends = this.friends.filter(function (x) {
                return x == userid;
            });
            if (friends.length > 0) {
                this.friendNum--;
                if (this.friendNum == 0) {
                    this.gameover = true;
                    this.gamestart = false;
                    var loseCamp = Camp.friend;
                    this.gameoverAni.play(0);
                    var sound = RES.getRes("gameover_mp3");
                    sound.play(0, 1);
                    setTimeout(function () {
                        var data = {
                            friendState: friendState_1,
                            friendIds: self.friends,
                            enemyState: enemyState_1,
                            enemyIds: self.enemys,
                            friendScore: 3 - self.enemyHeartNum,
                            enemyScore: 3 - self.friendHeartNum
                        };
                        ContextManager.Instance.showUI(UIType.gameOver, data);
                    }, 2000);
                }
            }
            else {
                this.enemyNum--;
                if (this.enemyNum == 0) {
                    this.gameover = true;
                    this.gamestart = false;
                    var loseCamp = Camp.enemy;
                    this.gameoverAni.play(0);
                    var sound = RES.getRes("gameover_mp3");
                    sound.play(0, 1);
                    setTimeout(function () {
                        var data = {
                            friendState: friendState_1,
                            friendIds: self.friends,
                            enemyState: enemyState_1,
                            enemyIds: self.enemys,
                            friendScore: 3 - self.enemyHeartNum,
                            enemyScore: 3 - self.friendHeartNum
                        };
                        ContextManager.Instance.showUI(UIType.gameOver, data);
                    }, 2000);
                }
            }
        }
    };
    uiGame.prototype.sendEventNotify = function (event) {
        var sdNotify = event.data;
        if (sdNotify && sdNotify.cpProto) {
            if (sdNotify.cpProto.indexOf("fly") >= 0) {
                var id = sdNotify.srcUserId;
                var player_1 = this.getPlayerById(id);
                player_1.flyNotify();
                var sound = RES.getRes("jump_mp3");
                sound.play(0, 1);
            }
            else if (sdNotify.cpProto.indexOf("fireEvent") >= 0) {
                var info = JSON.parse(sdNotify.cpProto);
                var data = info.data;
                for (var i = 0; i < data.length; i++) {
                    var playerId = data[i].playerID;
                    var offset = data[i].offset;
                    var player = this.getPlayerById(playerId);
                    var pos = player.localToGlobal(player.firepoint.x, player.firepoint.y);
                    var bulletX = pos.x - 20;
                    var bulletY = pos.y + offset;
                    var bullet;
                    if (player.camp == Camp.enemy) {
                        bullet = new EnemyBullet();
                        this.enemyBullets.push(bullet);
                    }
                    else {
                        bullet = new FriendBullet();
                        this.friendBullets.push(bullet);
                    }
                    bullet.x = bulletX;
                    bullet.y = bulletY;
                    bullet.PlayerId = playerId;
                    bullet.Players = this.players;
                    this.addChild(bullet);
                }
            }
            else if (sdNotify.cpProto.indexOf("newItem") >= 0) {
                if (this.items && this.items.parent)
                    this.removeChild(this.items);
                var info = JSON.parse(sdNotify.cpProto);
                var index = info.itemIndex;
                var position = info.position;
                var item = void 0;
                if (index < 50) {
                    item = new Shield();
                }
                else {
                    item = new Track();
                }
                item.x = 330;
                item.y = position;
                this.items = item;
                this.addChild(item);
            }
            else if (sdNotify.cpProto.indexOf("playerGetItem") >= 0) {
                var info = JSON.parse(sdNotify.cpProto);
                var userID = info.playerId;
                var player = this.getPlayerById(userID);
                player.getItemNotify(info);
            }
            else if (sdNotify.cpProto.indexOf("timeOver") >= 0) {
                this.gamestart = false;
                for (var i_8 = 0; i_8 < this.players.length; i_8++) {
                    var player = this.players[i_8];
                    if (player) {
                        player.playerDead(-1);
                    }
                }
                this.timeoverTween.play(0);
                this.roundOver(Camp.none);
            }
            else if (sdNotify.cpProto.indexOf("roundStart") >= 0) {
                this.roundStart();
            }
            else if (sdNotify.cpProto.indexOf("playerHurt") >= 0) {
                var info = JSON.parse(sdNotify.cpProto);
                var playerID = info.playerId;
                var murderId = info.murderId;
                var camp = Camp.none;
                var die = false;
                for (var i_9 = 0; i_9 < this.players.length; i_9++) {
                    var player = this.players[i_9];
                    if (player.UserId == playerID) {
                        camp = player.Camp;
                        die = player.hurtNotify(murderId);
                    }
                }
                if (murderId == GameData.gameUser.id) {
                    if (die) {
                        this.hit.play(0);
                        var sound = RES.getRes("hit_mp3");
                        sound.play(0, 1);
                    }
                }
                else if (playerID == GameData.gameUser.id && murderId) {
                    if (die) {
                        this.hitby.play(0);
                        var sound = RES.getRes("behit_mp3");
                        sound.play(0, 1);
                    }
                }
                if (die)
                    this.roundOver(camp);
            }
        }
    };
    uiGame.prototype.leaveRoomResponse = function () {
        ContextManager.Instance.backSpecifiedUI(UIType.lobbyBoard);
        GameData.isRoomOwner = false;
    };
    uiGame.prototype.onExitClick = function () {
        ContextManager.Instance.showDialog(UIType.exit);
    };
    uiGame.prototype.countDown = function () {
        if (!this.gamestart)
            return;
        var self = this;
        if (this.countDownInterval != null)
            clearInterval(this.countDownInterval);
        var times = this.roundSeconds;
        this.time.text = times.toString();
        this.countDownInterval = setInterval(function () {
            times--;
            if (times < 0) {
                clearInterval(self.countDownInterval);
                if (GameData.isRoomOwner) {
                    self.timeOverMsg();
                }
            }
            else if (!self.gamestart) {
                clearInterval(self.countDownInterval);
            }
            else {
                self.time.text = times.toString();
            }
            if (times == 10) {
                self.clock.play(0);
            }
        }, 1000);
    };
    uiGame.prototype.playerDead = function (data) {
        if (data.murderId == GameData.gameUser.id) {
            this.hit.play(0);
        }
        else if (data.Id == GameData.gameUser.id && data.murderId) {
            this.hitby.play(0);
        }
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].userid == data.id) {
                this.players[i].playerDead(data.murderId);
            }
        }
    };
    uiGame.prototype.gameOver = function () {
        this.gameoverAni.play(0);
        var sound = RES.getRes("gameover_mp3");
        sound.play(0, 1);
        clearInterval(this.countDownInterval);
    };
    uiGame.prototype.timeOver = function () {
        //Todo
    };
    uiGame.prototype.timeOverMsg = function () {
        var msg = JSON.stringify({
            action: "timeOver"
        });
        mvs.MsEngine.getInstance.sendEventEx(0, msg, 0, GameData.playerUserIds);
    };
    uiGame.prototype.roundStart = function () {
        this.time.text = 30 + "";
        var curRound = this.curRound;
        this.roundCntLb.text = curRound.toString();
        this.roundLb.play(0);
        this.rope.play(0);
        this.ready.play(0);
        var sound = RES.getRes("readygo_mp3");
        sound.play(0, 1);
        if (this.items && this.items.parent) {
            this.removeChild(this.items);
            this.items = null;
        }
        var self = this;
        setTimeout(function () {
            self.gamestart = true;
            self.scheuleFire();
            self.scheduleSpawItem();
            self.countDown();
        }, 3000);
        this.initPlayers();
        this.hitByGroup.alpha = 0;
        this.hitgroup.alpha = 0;
        this.gameoverGroup.alpha = 0;
        this.readyGroup.alpha = 0;
        this.timeoverGroup.alpha = 0;
    };
    uiGame.prototype.roundOver = function (loseCamp) {
        this.gamestart = false;
        var self = this;
        this.curRound++;
        switch (loseCamp) {
            case Camp.friend:
                this.friendHeartNum--;
                break;
            case Camp.enemy:
                this.enemyHeartNum--;
                break;
            case Camp.none:
                this.friendHeartNum--;
                this.enemyHeartNum--;
                break;
        }
        for (var i = 0; i < this.playerHeart.numChildren; i++) {
            if (i < this.friendHeartNum) {
                this.playerHeart.getChildAt(i).visible = true;
            }
            else {
                this.playerHeart.getChildAt(i).visible = false;
            }
        }
        for (var i = 0; i < this.enemyHeart.numChildren; i++) {
            if (i < this.enemyHeartNum) {
                this.enemyHeart.getChildAt(i).visible = true;
            }
            else {
                this.enemyHeart.getChildAt(i).visible = false;
            }
        }
        if (this.enemyHeartNum <= 0 || this.friendHeartNum <= 0) {
            this.gamestart = false;
            var loseCamp = Camp.none;
            if (this.enemyHeartNum <= 0 && this.friendHeartNum <= 0) {
                loseCamp = Camp.none;
            }
            else if (this.enemyHeartNum <= 0) {
                loseCamp = Camp.enemy;
            }
            else if (this.friendHeartNum <= 0) {
                loseCamp = Camp.friend;
            }
            this.gameover = true;
            this.gameoverAni.play(0);
            var sound = RES.getRes("gameover_mp3");
            sound.play(0, 1);
            setTimeout(function () {
                var data = {
                    friendIds: self.friends,
                    enemyIds: self.enemys,
                    friendScore: 3 - self.enemyHeartNum,
                    enemyScore: 3 - self.friendHeartNum
                };
                ContextManager.Instance.showUI(UIType.gameOver, data);
            }, 2000);
        }
        else if (GameData.isRoomOwner) {
            setTimeout(function () {
                var msg = JSON.stringify({
                    action: "roundStart"
                });
                mvs.MsEngine.getInstance.sendEventEx(0, msg, 0, GameData.playerUserIds);
            }, 3000);
        }
        clearInterval(this.countDownInterval);
    };
    uiGame.prototype.onTouchEvent = function () {
        if (!this.gamestart) {
            return;
        }
        var message = JSON.stringify({
            action: "fly"
        });
        mvs.MsEngine.getInstance.sendEventEx(0, message, 0, GameData.playerUserIds);
    };
    uiGame.prototype.getPlayerById = function (id) {
        var player = null;
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].UserId == id) {
                player = this.players[i];
            }
        }
        return player;
    };
    uiGame.prototype.scheuleFire = function () {
        while (this.friendBullets.length > 0) {
            this.removeChild(this.friendBullets[0]);
            this.friendBullets.splice(0, 1);
        }
        while (this.enemyBullets.length > 0) {
            this.removeChild(this.enemyBullets[0]);
            this.enemyBullets.splice(0, 1);
        }
        var self = this;
        if (GameData.isRoomOwner) {
            clearInterval(this.scheduleFire);
            this.scheduleFire = setInterval(function () {
                var bulletCnt = self.curRound > 3 ? 3 : self.curRound;
                if (!self.gamestart) {
                    clearInterval(self.scheduleFire);
                    return;
                }
                var data = [];
                for (var i = 0; i < self.players.length; i++) {
                    var player = self.players[i];
                    if (player) {
                        for (var j = 0; j < bulletCnt; j++) {
                            var offset = (j - bulletCnt / 2) * 40;
                            //var pos = player.localToGlobal(player.firepoint.x,player.firepoint.y);
                            data.push({ playerID: player.UserId, offset: offset });
                        }
                    }
                }
                var msg = JSON.stringify({
                    action: "fireEvent",
                    data: data
                });
                mvs.MsEngine.getInstance.sendEventEx(0, msg, 0, GameData.playerUserIds);
            }, 1500);
        }
    };
    uiGame.prototype.scheduleSpawItem = function () {
        if (this.items && this.items.parent) {
            this.removeChild(this.items);
            this.items = null;
        }
        var self = this;
        if (GameData.isRoomOwner) {
            clearInterval(this.scheduleItemSpaw);
            this.scheduleItemSpaw = setInterval(function () {
                if (!self.gamestart) {
                    clearInterval(self.scheduleItemSpaw);
                    return;
                }
                var index = randomNum(0, 100);
                var y = randomNum(400, 1025);
                var msg = JSON.stringify({
                    action: "newItem",
                    itemIndex: index,
                    position: y
                });
                mvs.MsEngine.getInstance.sendEventEx(0, msg, 0, GameData.playerUserIds);
            }, 5000);
        }
    };
    uiGame.prototype.onEnterFrame = function (e) {
        if (!this.gamestart)
            return;
        //检测子弹
        for (var i = 0; i < this.friendBullets.length; i++) {
            for (var j = 0; j < this.enemyBullets.length; j++) {
                var enter = hitTestPosition(this.friendBullets[i], this.enemyBullets[j]);
                if (enter) {
                    if (this.friendBullets[i].parent) {
                        this.removeChild(this.friendBullets[i]);
                        this.friendBullets.splice(i, 1);
                    }
                    if (this.enemyBullets[j].parent) {
                        this.removeChild(this.enemyBullets[j]);
                        this.enemyBullets.splice(j, 1);
                    }
                    return;
                }
            }
        }
        //检查小鸟	
        for (var i = 0; i < this.friendBullets.length; i++) {
            for (var j = 0; j < this.players.length; j++) {
                var player = this.players[j];
                var bullet = this.friendBullets[i];
                var enter = hitTestPosition(bullet, player);
                if (enter) {
                    var playerId = bullet.PlayerId;
                    var bulletPlayer = this.getPlayerById(playerId);
                    if (bulletPlayer.UserId != player.UserId && bulletPlayer.Camp != player.Camp) {
                        if (GameData.isRoomOwner) {
                            player.hurt(bulletPlayer.UserId);
                        }
                        this.removeChild(this.friendBullets[i]);
                        this.friendBullets.splice(i, 1);
                    }
                    return;
                }
            }
        }
        for (var i = 0; i < this.enemyBullets.length; i++) {
            for (var j = 0; j < this.players.length; j++) {
                var player = this.players[j];
                var bullet = this.enemyBullets[i];
                var enter = hitTestPosition(bullet, player);
                if (enter) {
                    var playerId = bullet.PlayerId;
                    var bulletPlayer = this.getPlayerById(playerId);
                    if (bulletPlayer.UserId != player.UserId && bulletPlayer.Camp != player.Camp) {
                        if (GameData.isRoomOwner) {
                            player.hurt(bulletPlayer.UserId);
                        }
                        if (this.enemyBullets[i].parent) {
                            this.removeChild(this.enemyBullets[i]);
                            this.enemyBullets.splice(i, 1);
                        }
                    }
                    return;
                }
            }
        }
        //检查buff	
        for (var i = 0; i < this.friendBullets.length; i++) {
            if (!this.items)
                return;
            var item = this.items;
            var bullet = this.friendBullets[i];
            var enter = hitTestPosition(bullet, item);
            if (enter) {
                var playerId = bullet.PlayerId;
                var player = this.getPlayerById(playerId);
                var type = item.ItemType;
                player.getItem(type);
                this.removeChild(this.items);
                this.items = null;
                if (this.friendBullets[i].parent) {
                    var sound = RES.getRes("tool_mp3");
                    sound.play(0, 1);
                    this.removeChild(this.friendBullets[i]);
                    this.friendBullets.splice(i, 1);
                }
                return;
            }
        }
        for (var i = 0; i < this.enemyBullets.length; i++) {
            if (!this.items)
                return;
            var item = this.items;
            var bullet = this.enemyBullets[i];
            var enter = hitTestPosition(bullet, item);
            if (enter) {
                var playerId = bullet.PlayerId;
                var player = this.getPlayerById(playerId);
                var type = item.ItemType;
                player.getItem(type);
                this.removeChild(this.items);
                this.items = null;
                if (this.enemyBullets[i].parent) {
                    var sound = RES.getRes("tool_mp3");
                    sound.play(0, 1);
                    this.removeChild(this.enemyBullets[i]);
                    this.enemyBullets.splice(i, 1);
                }
                return;
            }
        }
    };
    uiGame.prototype.onErrorRsp = function (ev) {
        var data = ev.data;
        var errorCode = data.errCode;
        if (errorCode == 1001) {
            var tip = new uiTip("网络断开连接");
            this.addChild(tip);
            setTimeout(function () {
                mvs.MsEngine.getInstance.logOut();
                ContextManager.Instance.backSpecifiedUI(UIType.loginBoard);
            }, 5000);
        }
    };
    uiGame.prototype.kickPlayerResponse = function (ev) {
        var data = ev.data;
        var userid = data.userID;
        var ownerId = data.owner;
        if (data.status != 200)
            return;
        var self = this;
        var friend = this.friendIdsState.filter(function (x) {
            return x.id == userid;
        });
        for (var i = 0; i < friend.length; i++) {
            friend[i].state = 1;
        }
        var enemy = this.enemyIdsState.filter(function (x) {
            return x.id == userid;
        });
        for (var i = 0; i < enemy.length; i++) {
            enemy[i].state = 1;
        }
        if (GameData.maxPlayerNum > 2) {
            var newRoomOwner = ownerId;
            if (GameData.gameUser.id == newRoomOwner) {
                GameData.isRoomOwner = true;
                self.scheuleFire();
                self.scheduleSpawItem();
                self.countDown();
            }
        }
        if (userid != GameData.gameUser.id) {
            if (!this.gameover) {
                var friends = this.friends.filter(function (x) {
                    return x == userid;
                });
                var tip = void 0;
                if (friends.length > 0) {
                    tip = new uiTip("队友离开了游戏");
                }
                else {
                    tip = new uiTip("对手离开了游戏");
                }
                this.addChild(tip);
            }
        }
        if (!this.gameover) {
            var friendState_2 = 1;
            for (var i = 0; i < this.friendIdsState.length; i++) {
                if (this.friendIdsState[i].state == 0) {
                    friendState_2 = 0;
                    break;
                }
            }
            var enemyState_2 = 1;
            for (var i = 0; i < this.enemyIdsState.length; i++) {
                if (this.enemyIdsState[i].state == 0) {
                    enemyState_2 = 0;
                    break;
                }
            }
            var friends = this.friends.filter(function (x) {
                return x == userid;
            });
            if (friends.length > 0) {
                this.friendNum--;
                if (this.friendNum == 0) {
                    this.gameover = true;
                    this.gamestart = false;
                    var loseCamp = Camp.friend;
                    this.gameoverAni.play(0);
                    var sound = RES.getRes("gameover_mp3");
                    sound.play(0, 1);
                    setTimeout(function () {
                        var data = {
                            friendState: friendState_2,
                            friendIds: self.friends,
                            enemyState: enemyState_2,
                            enemyIds: self.enemys,
                            friendScore: 3 - self.enemyHeartNum,
                            enemyScore: 3 - self.friendHeartNum
                        };
                        ContextManager.Instance.showUI(UIType.gameOver, data);
                    }, 2000);
                }
            }
            else {
                this.enemyNum--;
                if (this.enemyNum == 0) {
                    this.gameover = true;
                    this.gamestart = false;
                    var loseCamp = Camp.enemy;
                    this.gameoverAni.play(0);
                    var sound = RES.getRes("gameover_mp3");
                    sound.play(0, 1);
                    setTimeout(function () {
                        var data = {
                            friendState: friendState_2,
                            friendIds: self.friends,
                            enemyState: enemyState_2,
                            enemyIds: self.enemys,
                            friendScore: 3 - self.enemyHeartNum,
                            enemyScore: 3 - self.friendHeartNum
                        };
                        ContextManager.Instance.showUI(UIType.gameOver, data);
                    }, 2000);
                }
            }
        }
    };
    uiGame.prototype.kickPlayerNotify = function (ev) {
        var data = ev.data;
        var userid = data.userID;
        var ownerId = data.owner;
        var self = this;
        var friend = this.friendIdsState.filter(function (x) {
            return x.id == userid;
        });
        for (var i = 0; i < friend.length; i++) {
            friend[i].state = 1;
        }
        var enemy = this.enemyIdsState.filter(function (x) {
            return x.id == userid;
        });
        for (var i = 0; i < enemy.length; i++) {
            enemy[i].state = 1;
        }
        if (GameData.maxPlayerNum > 2) {
            var newRoomOwner = ownerId;
            if (GameData.gameUser.id == newRoomOwner) {
                GameData.isRoomOwner = true;
                self.scheuleFire();
                self.scheduleSpawItem();
                self.countDown();
            }
        }
        if (userid != GameData.gameUser.id) {
            if (!this.gameover) {
                var friends = this.friends.filter(function (x) {
                    return x == userid;
                });
                var tip = void 0;
                if (friends.length > 0) {
                    tip = new uiTip("队友离开了游戏");
                }
                else {
                    tip = new uiTip("对手离开了游戏");
                }
                this.addChild(tip);
            }
        }
        if (!this.gameover) {
            var friendState_3 = 1;
            for (var i = 0; i < this.friendIdsState.length; i++) {
                if (this.friendIdsState[i].state == 0) {
                    friendState_3 = 0;
                    break;
                }
            }
            var enemyState_3 = 1;
            for (var i = 0; i < this.enemyIdsState.length; i++) {
                if (this.enemyIdsState[i].state == 0) {
                    enemyState_3 = 0;
                    break;
                }
            }
            var friends = this.friends.filter(function (x) {
                return x == userid;
            });
            if (friends.length > 0) {
                this.friendNum--;
                if (this.friendNum == 0) {
                    this.gameover = true;
                    this.gamestart = false;
                    var loseCamp = Camp.friend;
                    this.gameoverAni.play(0);
                    var sound = RES.getRes("gameover_mp3");
                    sound.play(0, 1);
                    setTimeout(function () {
                        var data = {
                            friendState: friendState_3,
                            friendIds: self.friends,
                            enemyState: enemyState_3,
                            enemyIds: self.enemys,
                            friendScore: 3 - self.enemyHeartNum,
                            enemyScore: 3 - self.friendHeartNum
                        };
                        ContextManager.Instance.showUI(UIType.gameOver, data);
                    }, 2000);
                }
            }
            else {
                this.enemyNum--;
                if (this.enemyNum == 0) {
                    this.gameover = true;
                    this.gamestart = false;
                    var loseCamp = Camp.enemy;
                    this.gameoverAni.play(0);
                    var sound = RES.getRes("gameover_mp3");
                    sound.play(0, 1);
                    setTimeout(function () {
                        var data = {
                            friendState: friendState_3,
                            friendIds: self.friends,
                            enemyState: enemyState_3,
                            enemyIds: self.enemys,
                            friendScore: 3 - self.enemyHeartNum,
                            enemyScore: 3 - self.friendHeartNum
                        };
                        ContextManager.Instance.showUI(UIType.gameOver, data);
                    }, 2000);
                }
            }
        }
    };
    uiGame.prototype.networkStateNotify = function (ev) {
        var data = ev.data;
        var state = data.state;
        var userid = data.userID;
        var ownerId = data.owner;
        if (state == 1) {
            var tip = new uiTip("玩家" + userid + "网络断开连接");
            this.addChild(tip);
            mvs.MsEngine.getInstance.kickPlayer(userid, "");
        }
        else if (state == 3) {
            // let tip = new uiTip("玩家"+userid+"离开房间");
            // this.addChild(tip);
            // let self = this;
            // let friend = this.friendIdsState.filter(function(x){
            // 	return x.id == userid;
            // });
            // for(let i=0;i<friend.length;i++)
            // {
            // 	friend[i].state = 1;
            // }
            // let enemy = this.enemyIdsState.filter(function(x){
            // 	return x.id == userid;
            // });
            // for(let i=0;i<enemy.length;i++)
            // {
            // 	enemy[i].state = 1;
            // }
            // if(GameData.maxPlayerNum > 2)
            // {
            // 	let newRoomOwner = ownerId;
            // 	if(GameData.gameUser.id == newRoomOwner)
            // 	{
            // 		GameData.isRoomOwner = true;
            // 		self.scheuleFire();
            // 		self.scheduleSpawItem();
            // 		self.countDown();	
            // 	}
            // }
            // if(userid != GameData.gameUser.id)
            // {
            // 	if(!this.gameover){
            // 		let friends = this.friendIds.filter(function(x){
            // 			return x == userid;
            // 		});
            // 		let tip:uiTip;
            // 		if(friends.length > 0)
            // 		{
            // 			tip = new uiTip("队友离开了游戏");
            // 		}else{
            // 			tip = new uiTip("对手离开了游戏");
            // 		}
            // 		this.addChild(tip);
            // 	}
            // }
            // if(!this.gameover)
            // {
            // 	let friendState = 1;
            // 	for(let i=0;i<this.friendIdsState.length;i++)
            // 	{
            // 		if(this.friendIdsState[i].state == 0)
            // 		{
            // 			friendState = 0;
            // 			break;
            // 		}
            // 	}
            // 		let enemyState = 1;
            // 		for(let i=0;i<this.enemyIdsState.length;i++)
            // 		{
            // 			if(this.enemyIdsState[i].state == 0)
            // 			{
            // 				enemyState = 0;
            // 				break;
            // 			}
            // 		}
            // 		let friends = this.friendIds.filter(function(x){
            // 			return x == userid;
            // 		});
            // 		if(friends.length > 0)
            // 		{
            // 			this.friendNum --;
            // 			if(this.friendNum == 0)
            // 			{
            // 				this.gameover = true;
            // 				this.gamestart = false;
            // 				var loseCamp:Camp = Camp.friend;
            // 				this.gameoverAni.play(0);
            // 				var sound:egret.Sound = RES.getRes("gameover_mp3");
            // 				sound.play(0,1);
            // 				setTimeout(function() {
            // 					var data = {
            // 						friendState:friendState,
            // 						friendIds:self.friendIds,
            // 						enemyState:enemyState,
            // 						enemyIds:self.enemyIds,
            // 						friendScore:3-self.enemyHeartNum,
            // 						enemyScore:3-self.friendHeartNum
            // 					}
            // 					ContextManager.Instance.showUI(UIType.gameOver,data)
            // 				}, 2000);
            // 			}
            // 		}else{
            // 			this.enemyNum --;
            // 			if(this.enemyNum == 0)
            // 			{
            // 				this.gameover = true;
            // 				this.gamestart = false;
            // 				var loseCamp:Camp = Camp.enemy;
            // 				this.gameoverAni.play(0);
            // 				var sound:egret.Sound = RES.getRes("gameover_mp3");
            // 				sound.play(0,1);
            // 				setTimeout(function() {
            // 					var data = {
            // 						friendState:friendState,
            // 						friendIds:self.friendIds,
            // 						enemyState:enemyState,
            // 						enemyIds:self.enemyIds,
            // 						friendScore:3-self.enemyHeartNum,
            // 						enemyScore:3-self.friendHeartNum
            // 					}
            // 					ContextManager.Instance.showUI(UIType.gameOver,data)
            // 				}, 2000);
            // 			}
            // 		}
            // }
        }
    };
    return uiGame;
}(BaseView));
__reflect(uiGame.prototype, "uiGame");
var uiLobby = (function (_super) {
    __extends(uiLobby, _super);
    function uiLobby() {
        var _this = _super.call(this) || this;
        _this.isRankClick = false;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.removeFromStage, _this);
        return _this;
    }
    uiLobby.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    uiLobby.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    uiLobby.prototype.addToStage = function () {
        this.avatar.mask = this.avatarMask;
        if (egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME) {
            this.username.text = GameData.gameUser.name.toString();
            this.avatar.source = GameData.gameUser.avatar;
        }
        else {
            this.username.text = GameData.gameUser.id.toString();
            this.avatar.source = GameData.gameUser.avatar;
        }
        this.addMsResponseListen();
    };
    uiLobby.prototype.removeFromStage = function () {
        this.removeMsResponseListen();
    };
    uiLobby.prototype.init = function () {
        this.createRoom.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCreateRoomClick, this);
        this.random.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRandomMatch, this);
        this.joinRoom.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onJoinRoomMatch, this);
        this.exit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.exitRoom, this);
        this.rank.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRankClick, this);
        this.inviteFriends.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onInviteFriends, this);
        this.btnClose = new eui.Image;
        this.btnClose.x = 50;
        this.btnClose.y = 100;
        this.btnClose.source = RES.getRes("btn-back_png");
        // this.btnClose.icon = "resource/btn-back.png";
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeRank, this);
        if (egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME) {
            var platform_1 = window.platform;
            // 加载资源
            platform_1.openDataContext.postMessage({
                command: 'loadRes'
            });
        }
    };
    uiLobby.prototype.addMsResponseListen = function () {
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp, this);
    };
    uiLobby.prototype.removeMsResponseListen = function () {
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp, this);
    };
    uiLobby.prototype.exitRoom = function () {
        mvs.MsEngine.getInstance.logOut();
        ContextManager.Instance.uiBack();
    };
    uiLobby.prototype.onCreateRoomClick = function () {
        ContextManager.Instance.showDialog(UIType.createRoom);
    };
    uiLobby.prototype.onRandomMatch = function () {
        ContextManager.Instance.showUI(UIType.matchBoard);
    };
    uiLobby.prototype.onJoinRoomMatch = function () {
        ContextManager.Instance.showDialog(UIType.roomList);
    };
    uiLobby.prototype.onRankClick = function () {
        var platform = window.platform;
        if (egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME) {
            if (!this.isRankClick) {
                //处理遮罩，避免开放数据域事件影响主域。
                this.rankingListMask = new egret.Shape();
                this.rankingListMask.graphics.beginFill(0x000000, 1);
                this.rankingListMask.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
                this.rankingListMask.graphics.endFill();
                this.rankingListMask.alpha = 0.5;
                this.rankingListMask.touchEnabled = true;
                this.addChild(this.rankingListMask);
                //简单实现，打开这关闭使用一个按钮。
                // this.addChild(this.btnClose);
                //主要示例代码开始
                this.bitmap = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
                this.addChild(this.bitmap);
                this.addChild(this.btnClose);
                //主域向子域发送自定义消息
                platform.openDataContext.postMessage({
                    isDisplay: this.isRankClick,
                    text: 'hello',
                    year: (new Date()).getFullYear(),
                    command: "open"
                });
                //主要示例代码结束            
                this.isRankClick = true;
            }
        }
    };
    uiLobby.prototype.closeRank = function () {
        var platform = window.platform;
        if (this.isRankClick) {
            this.removeChild(this.btnClose);
            this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
            this.rankingListMask.parent && this.rankingListMask.parent.removeChild(this.rankingListMask);
            this.isRankClick = false;
            platform.openDataContext.postMessage({
                isDisplay: this.isRankClick,
                text: 'hello',
                year: (new Date()).getFullYear(),
                command: "close"
            });
        }
    };
    uiLobby.prototype.onInviteFriends = function () {
        window.platform.shareAppMessage().then(function (res) {
            console.log('分享成功回调', res);
        }, function (err) {
            console.log('分享失败回调', err);
        });
    };
    uiLobby.prototype.onErrorRsp = function (ev) {
        var data = ev.data;
        var errorCode = data.errCode;
        if (errorCode == 1001) {
            var tip = new uiTip("网络断开连接");
            this.addChild(tip);
            setTimeout(function () {
                mvs.MsEngine.getInstance.logOut();
                ContextManager.Instance.backSpecifiedUI(UIType.loginBoard);
            }, 5000);
        }
    };
    return uiLobby;
}(BaseView));
__reflect(uiLobby.prototype, "uiLobby");
var uiLogin = (function (_super) {
    __extends(uiLogin, _super);
    function uiLogin() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        _this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, _this.RemoveFromStage, _this);
        return _this;
    }
    uiLogin.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    uiLogin.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    uiLogin.prototype.addToStage = function () {
        this.addMsResponseListen();
    };
    uiLogin.prototype.RemoveFromStage = function () {
        this.removeMsResponseListen();
    };
    uiLogin.prototype.init = function () {
        this.start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartClick, this);
        mvs.MsEngine.getInstance.init(GameData.CHANNEL, GameData.DEFAULT_ENV, GameData.gameID);
    };
    uiLogin.prototype.addMsResponseListen = function () {
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_REGISTERUSER_RSP, this.registResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LOGIN_RSP, this.loginResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_INIT_RSP, this.initResponse, this);
    };
    uiLogin.prototype.removeMsResponseListen = function () {
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_REGISTERUSER_RSP, this.registResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LOGIN_RSP, this.loginResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_INIT_RSP, this.initResponse, this);
    };
    uiLogin.prototype.initResponse = function (ev) {
        if (egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME) {
            this.login().catch(function (e) {
                console.log(e);
            });
        }
    };
    uiLogin.prototype.loginResponse = function (ev) {
        var login = ev.data;
        if (login.status == 200) {
            ContextManager.Instance.showUI(UIType.lobbyBoard);
        }
    };
    uiLogin.prototype.registResponse = function (ev) {
        var userInfo = ev.data;
        GameData.gameUser.id = userInfo.id;
        GameData.gameUser.token = userInfo.token;
        if (egret.Capabilities.runtimeType != egret.RuntimeType.WXGAME) {
            GameData.gameUser.name = userInfo.name;
            GameData.gameUser.avatar = userInfo.avatar;
        }
        if (userInfo.status == 0) {
            mvs.MsEngine.getInstance.login(userInfo.id, userInfo.token, GameData.gameID, GameData.appkey, GameData.secretKey);
        }
    };
    uiLogin.prototype.onStartClick = function () {
        mvs.MsEngine.getInstance.registerUser();
    };
    uiLogin.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, platform.login()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return uiLogin;
}(BaseView));
__reflect(uiLogin.prototype, "uiLogin");
var uiMatch = (function (_super) {
    __extends(uiMatch, _super);
    function uiMatch() {
        var _this = _super.call(this) || this;
        _this.gameUserList = new Array;
        _this.playerIcons = [];
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.removeFromStage, _this);
        return _this;
    }
    uiMatch.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    uiMatch.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    uiMatch.prototype.init = function () {
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
    };
    uiMatch.prototype.addToStage = function () {
        this.addMsResponseListen();
    };
    uiMatch.prototype.removeFromStage = function () {
        this.removeMsResponseListen();
    };
    uiMatch.prototype.onEnter = function (context) {
        GameData.maxPlayerNum = 2;
        var info = { "id": GameData.gameUser.id, "nickName": GameData.gameUser.name, "avatar": GameData.gameUser.avatar };
        var infostr = JSON.stringify(info);
        mvs.MsEngine.getInstance.joinRandomRoom(GameData.maxPlayerNum, infostr);
        //this.playerIcons.push(this.player1);
        this.playerIcons.push(this.player2);
        this.playerIcons.push(this.player3);
        // this.playerIcons.push(this.player4);
    };
    uiMatch.prototype.onBackClick = function () {
        mvs.MsEngine.getInstance.leaveRoom("");
    };
    uiMatch.prototype.addMsResponseListen = function () {
        //加入房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINROOM_RSP, this.joinRoomResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINROOM_NTFY, this.joinRoomNotify, this);
        //关闭房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINOVER_NTFY, this.joinOverNotify, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINOVER_RSP, this.joinOverResponse, this);
        //离开房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP, this.leaveRoomResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY, this.networkStateNotify, this);
        //踢人
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_KICKPLAYER_RSP, this.kickPlayerResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_KICKPLAYER_NTFY, this.kickPlayerNotify, this);
    };
    uiMatch.prototype.removeMsResponseListen = function () {
        //加入房间
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINROOM_RSP, this.joinRoomResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINROOM_NTFY, this.joinRoomNotify, this);
        //关闭房间
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINOVER_NTFY, this.joinOverNotify, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINOVER_RSP, this.joinOverResponse, this);
        //离开房间
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP, this.leaveRoomResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY, this.networkStateNotify, this);
        //踢人
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_KICKPLAYER_RSP, this.kickPlayerResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_KICKPLAYER_NTFY, this.kickPlayerNotify, this);
    };
    uiMatch.prototype.joinRoomResponse = function (event) {
        if (!this.parent)
            return;
        var data = event.data;
        var roomInfo = data.roomInfo;
        var roomuserInfoList = data.userList;
        if (data.status !== 200) {
            console.log("joinRoomResponse,status:" + data.status);
            return;
        }
        GameData.roomID = roomInfo.roomID;
        this.gameUserList = [];
        this.gameUserList.push({ "id": GameData.gameUser.id, "nickName": GameData.gameUser.name, "avatar": GameData.gameUser.avatar });
        for (var i = 0; i < roomuserInfoList.length; i++) {
            if (GameData.gameUser.id != roomuserInfoList[i].userID) {
                this.gameUserList.push(JSON.parse(roomuserInfoList[i].userProfile));
            }
        }
        if (this.gameUserList.length == 1) {
            GameData.isRoomOwner = true;
        }
        for (var i = 0; i < this.gameUserList.length; i++) {
            this.playerIcons[i].setData(this.gameUserList[i]);
        }
        this.gameUserList.sort(function (a, b) {
            return a.id - b.id;
        });
        GameData.playerUserProfiles = this.gameUserList;
        if (this.gameUserList.length >= 2) {
            mvs.MsEngine.getInstance.joinOver("");
        }
    };
    uiMatch.prototype.joinRoomNotify = function (ev) {
        if (!this.parent)
            return;
        var data = ev.data;
        var userProfileStr = data.userProfile;
        var userProfile = JSON.parse(userProfileStr);
        this.gameUserList.push(userProfile);
        for (var i = 0; i < this.playerIcons.length; i++) {
            this.playerIcons[i].init();
        }
        for (var i = 0; i < this.gameUserList.length; i++) {
            this.playerIcons[i].setData(this.gameUserList[i]);
        }
        this.gameUserList.sort(function (a, b) {
            return a.id - b.id;
        });
        GameData.playerUserProfiles = this.gameUserList;
    };
    uiMatch.prototype.joinOverNotify = function (ev) {
        //进入游戏界面
        ContextManager.Instance.showUI(UIType.gameBoard);
    };
    uiMatch.prototype.joinOverResponse = function (ev) {
        //进入游戏界面
        ContextManager.Instance.showUI(UIType.gameBoard);
    };
    uiMatch.prototype.leaveRoomResponse = function (ev) {
        ContextManager.Instance.uiBack();
        GameData.isRoomOwner = false;
    };
    uiMatch.prototype.leaveRoomNotify = function (ev) {
        if (!this.parent)
            return;
        var leaveRoomInfo = ev.data;
        var userID = leaveRoomInfo.userId;
        var owner = leaveRoomInfo.owner;
        var index = -1;
        for (var i = 0; i < this.gameUserList.length; i++) {
            if (this.gameUserList[i] == userID) {
                index = i;
            }
        }
        this.gameUserList.splice(index, 1);
        for (var i = 0; i < this.playerIcons.length; i++) {
            this.playerIcons[i].init();
        }
        for (var i = 0; i < this.gameUserList.length; i++) {
            this.playerIcons[i].setData(this.gameUserList[i]);
        }
        if (owner == GameData.gameUser.id) {
            GameData.isRoomOwner = true;
        }
    };
    uiMatch.prototype.kickPlayerResponse = function (ev) {
        var data = ev.data;
        var userID = data.userID;
        var owner = data.owner;
        if (owner == GameData.gameUser.id) {
            GameData.isRoomOwner = true;
        }
        var index = -1;
        for (var i = 0; i < this.gameUserList.length; i++) {
            if (this.gameUserList[i] == userID) {
                index = i;
            }
        }
        this.gameUserList.splice(index, 1);
        for (var i = 0; i < this.playerIcons.length; i++) {
            this.playerIcons[i].init();
        }
        for (var i = 0; i < this.gameUserList.length; i++) {
            this.playerIcons[i].setData(this.gameUserList[i]);
        }
        if (owner == GameData.gameUser.id) {
            GameData.isRoomOwner = true;
        }
    };
    uiMatch.prototype.kickPlayerNotify = function (ev) {
        var data = ev.data;
        var userID = data.userID;
        var owner = data.owner;
        if (owner == GameData.gameUser.id) {
            GameData.isRoomOwner = true;
        }
        var index = -1;
        for (var i = 0; i < this.gameUserList.length; i++) {
            if (this.gameUserList[i] == userID) {
                index = i;
            }
        }
        this.gameUserList.splice(index, 1);
        for (var i = 0; i < this.playerIcons.length; i++) {
            this.playerIcons[i].init();
        }
        for (var i = 0; i < this.gameUserList.length; i++) {
            this.playerIcons[i].setData(this.gameUserList[i]);
        }
        if (owner == GameData.gameUser.id) {
            GameData.isRoomOwner = true;
        }
    };
    uiMatch.prototype.onErrorRsp = function (ev) {
        var data = ev.data;
        var errorCode = data.errCode;
        if (errorCode == 1001) {
            var tip = new uiTip("网络断开连接");
            this.addChild(tip);
            setTimeout(function () {
                mvs.MsEngine.getInstance.logOut();
                ContextManager.Instance.backSpecifiedUI(UIType.loginBoard);
            }, 5000);
        }
    };
    uiMatch.prototype.networkStateNotify = function (ev) {
        var data = ev.data;
        var state = data.state;
        var userID = data.userID;
        var owner = data.owner;
        if (state == 1) {
            var tip = new uiTip("玩家" + userID + "网络断开连接");
            this.addChild(tip);
            mvs.MsEngine.getInstance.kickPlayer(userID, "");
        }
        else if (state == 3) {
            // let tip = new uiTip("玩家"+userID+"离开房间");
            // this.addChild(tip);
            // if(owner == GameData.gameUser.id)
            // {
            // 	GameData.isRoomOwner = true;
            // }
            // let index = -1;
            // for(let i=0;i<this.gameUserList.length;i++)
            // {
            // 	if(this.gameUserList[i] == userID)
            // 	{
            // 		index = i;
            // 	}
            // }
            // this.gameUserList.splice(index,1);
            // for(let i=0;i<this.playerIcons.length;i++)
            // {
            // 	this.playerIcons[i].init();
            // }
            // for(let i=0;i<this.gameUserList.length;i++)
            // {
            // 	this.playerIcons[i].setData(this.gameUserList[i]);
            // }
            // if(owner == GameData.gameUser.id)
            // {
            // 	GameData.isRoomOwner = true;
            // }
        }
    };
    return uiMatch;
}(BaseView));
__reflect(uiMatch.prototype, "uiMatch");
var uiRank = (function (_super) {
    __extends(uiRank, _super);
    function uiRank() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    uiRank.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    uiRank.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    uiRank.prototype.addToStage = function () {
        this.first.visible = false;
        this.second.visible = false;
        this.third.visible = false;
    };
    uiRank.prototype.removeFromStage = function () {
    };
    uiRank.prototype.init = function () {
        this.exit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitClick, this);
    };
    uiRank.prototype.onExitClick = function () {
        ContextManager.Instance.uiBack();
    };
    return uiRank;
}(BaseView));
__reflect(uiRank.prototype, "uiRank");
var uiResult = (function (_super) {
    __extends(uiResult, _super);
    function uiResult() {
        return _super.call(this) || this;
    }
    uiResult.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);
    };
    uiResult.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    uiResult.prototype.onEnter = function (context) {
        var friendIds = context.friendIds;
        var enemyIds = context.enemyIds;
        var friendScore = context.friendScore;
        var enemyScore = context.enemyScore;
        var friendState = context.friendState;
        var enemyState = context.enemyState;
        this.playerScore.text = friendScore + "";
        this.enemyScore.text = enemyScore + "";
        // let platform: any = window.platform;
        // //主域向子域发送自定义消息
        // platform.openDataContext.postMessage({
        // 	isDisplay: true,
        // 	text: 'hello',
        // 	year: (new Date()).getFullYear(),
        // 	command: "setUserCloudStorage"
        // });
        if (friendState == 1) {
            this.lose.visible = true;
            this.win.visible = false;
            var sound = RES.getRes("lose_mp3");
            sound.play(0, 1);
        }
        else if (enemyState == 1) {
            this.win.visible = true;
            this.lose.visible = false;
            var sound = RES.getRes("vitory_mp3");
            sound.play(0, 1);
        }
        else {
            if (friendScore >= enemyScore) {
                this.win.visible = true;
                this.lose.visible = false;
                var sound = RES.getRes("vitory_mp3");
                sound.play(0, 1);
            }
            else {
                this.lose.visible = true;
                this.win.visible = false;
                var sound = RES.getRes("lose_mp3");
                sound.play(0, 1);
            }
        }
        for (var i = 0; i < this.playerLayout.numChildren; i++) {
            this.playerLayout.getChildAt(i).visible = false;
        }
        for (var i = 0; i < friendIds.length; i++) {
            this.playerLayout.getChildAt(i).visible = true;
            this.playerLayout.getChildAt(i).setData(friendIds[i]);
        }
        for (var i = 0; i < this.playerNameLayout.numChildren; i++) {
            this.playerNameLayout.getChildAt(i).visible = false;
        }
        for (var i = 0; i < friendIds.length; i++) {
            this.playerNameLayout.getChildAt(i).visible = true;
            this.playerNameLayout.getChildAt(i).text = friendIds[i].id;
        }
        for (var i = 0; i < this.enemyLayout.numChildren; i++) {
            this.enemyLayout.getChildAt(i).visible = false;
        }
        for (var i = 0; i < enemyIds.length; i++) {
            this.enemyLayout.getChildAt(i).visible = true;
            this.enemyLayout.getChildAt(i).setData(enemyIds[i]);
        }
        for (var i = 0; i < this.enemytNameLayout.numChildren; i++) {
            this.enemytNameLayout.getChildAt(i).visible = false;
        }
        for (var i = 0; i < enemyIds.length; i++) {
            this.enemytNameLayout.getChildAt(i).visible = true;
            this.enemytNameLayout.getChildAt(i).text = enemyIds[i].id;
        }
    };
    uiResult.prototype.init = function () {
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
    };
    uiResult.prototype.onAddToStage = function () {
        //离开房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP, this.leaveRoomResponse, this);
    };
    uiResult.prototype.onRemoveFromStage = function () {
        //离开房间
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP, this.leaveRoomResponse, this);
    };
    uiResult.prototype.onBackClick = function () {
        mvs.MsEngine.getInstance.leaveRoom("");
        // ContextManager.Instance.backSpecifiedUI(UIType.lobbyBoard);
    };
    uiResult.prototype.leaveRoomResponse = function () {
        GameData.isRoomOwner = false;
        if (this.parent)
            ContextManager.Instance.backSpecifiedUI(UIType.lobbyBoard);
    };
    uiResult.prototype.leaveRoomNotify = function () {
    };
    return uiResult;
}(BaseView));
__reflect(uiResult.prototype, "uiResult");
var uiRoom = (function (_super) {
    __extends(uiRoom, _super);
    function uiRoom() {
        var _this = _super.call(this) || this;
        _this.players = [];
        _this.roomid = 0;
        _this.roomInfo = null;
        _this.ownerid = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.removeFromStage, _this);
        return _this;
    }
    uiRoom.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    uiRoom.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    uiRoom.prototype.addToStage = function () {
        this.addMsResponseListen();
        while (this.roomUserGroup.numChildren > 0) {
            this.roomUserGroup.removeChildAt(0);
        }
        this.players = [];
        for (var i = 0; i < GameData.maxPlayerNum; i++) {
            var temp = new RoomUserInfo();
            this.players.push(temp);
            this.roomUserGroup.addChild(temp);
        }
    };
    uiRoom.prototype.removeFromStage = function () {
        this.removeMsResponseListen();
    };
    uiRoom.prototype.init = function () {
        this.gamestart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gamestartClick, this);
        this.leave.addEventListener(egret.TouchEvent.TOUCH_TAP, this.leaveRoom, this);
    };
    uiRoom.prototype.addMsResponseListen = function () {
        //加入房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINROOM_RSP, this.joinRoomResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINROOM_NTFY, this.joinRoomNotify, this);
        //离开房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP, this.leaveRoomResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify, this);
        //踢人
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_KICKPLAYER_RSP, this.kickPlayerResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_KICKPLAYER_NTFY, this.kickPlayerNotify, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINOVER_RSP, this.joinOverResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINOVER_NTFY, this.joinOverNotify, this);
        //发送消息
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_SENDEVENT_NTFY, this.sendEventNotify, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY, this.networkStateNotify, this);
    };
    uiRoom.prototype.removeMsResponseListen = function () {
        //加入房间
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINROOM_RSP, this.joinRoomResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINROOM_NTFY, this.joinRoomNotify, this);
        //离开房间
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP, this.leaveRoomResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify, this);
        //踢人
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_KICKPLAYER_RSP, this.kickPlayerResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_KICKPLAYER_NTFY, this.kickPlayerNotify, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINOVER_RSP, this.joinOverResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINOVER_NTFY, this.joinOverNotify, this);
        //发送消息
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_SENDEVENT_NTFY, this.sendEventNotify, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY, this.networkStateNotify, this);
    };
    uiRoom.prototype.onEnter = function (context) {
        var createRoom = context[0];
        if (createRoom) {
            var rsp = context[1];
            this.roomid = rsp.roomID;
            this.ownerid = rsp.owner;
            GameData.isRoomOwner = true;
            this.refreshStartBtn();
            this.createRoomInit(rsp);
        }
        else {
            var roomUserInfoList = context[1];
            var roominfo = context[2];
            GameData.isRoomOwner = false;
            this.joinRoomInit(roomUserInfoList, roominfo);
            this.refreshStartBtn();
        }
    };
    uiRoom.prototype.refreshStartBtn = function () {
        if (GameData.isRoomOwner) {
            this.gamestart.visible = true;
            this.gamestartGray.visible = false;
        }
        else {
            this.gamestartGray.visible = true;
            this.gamestart.visible = false;
        }
    };
    uiRoom.prototype.createRoomInit = function (rsp) {
        this.roomid = rsp.roomID;
        this.ownerid = rsp.owner;
        this.players[0].setData(this.ownerid, this.ownerid, { "id": GameData.gameUser.id, "nickName": GameData.gameUser.name, "avatar": GameData.gameUser.avatar });
        GameData.isRoomOwner = true;
        this.refreshStartBtn();
    };
    uiRoom.prototype.joinRoomInit = function (roomUserInfoList, roomInfo) {
        roomUserInfoList.sort(function (a, b) {
            if (roomInfo.ownerId === b.userId) {
                return 1;
            }
            return 0;
        });
        roomUserInfoList.push({
            userId: GameData.gameUser.id,
            userProfile: JSON.stringify({ "id": GameData.gameUser.id, "nickName": GameData.gameUser.name, "avatar": GameData.gameUser.avatar })
        });
        this.ownerid = roomInfo.ownerId;
        for (var j = 0; j < roomUserInfoList.length; j++) {
            var userProfileStr = roomUserInfoList[j].userProfile;
            var userProfile = JSON.parse(userProfileStr);
            this.players[j].setData(roomUserInfoList[j].userId, this.ownerid, userProfile);
        }
        this.refreshStartBtn();
    };
    uiRoom.prototype.leaveRoom = function () {
        mvs.MsEngine.getInstance.leaveRoom("");
    };
    uiRoom.prototype.gamestartClick = function () {
        if (!GameData.isRoomOwner) {
            //不是房主等待房间开始
        }
        var userIds = [];
        var playerCnt = 0;
        for (var j = 0; j < this.players.length; j++) {
            if (this.players[j].userid != 0) {
                playerCnt++;
                userIds.push(this.players[j].userProfile);
            }
        }
        if (playerCnt == GameData.maxPlayerNum) {
            var result = mvs.MsEngine.getInstance.joinOver("");
            if (result !== 0) {
                console.log("关闭房间失败，错误码：", result);
            }
            GameData.playerUserProfiles = userIds;
            var value = JSON.stringify({
                action: "gamestart",
            });
            mvs.MsEngine.getInstance.sendEvent(value);
        }
        else {
            var toast = new Toast("人数不足，无法开始。", this.width, this.height);
            this.addChild(toast);
        }
    };
    uiRoom.prototype.leaveRoomResponse = function (ev) {
        if (!this.parent)
            return;
        GameData.isRoomOwner = false;
        ContextManager.Instance.uiBack();
    };
    uiRoom.prototype.leaveRoomNotify = function (ev) {
        if (!this.parent)
            return;
        var leaveRoomInfo = ev.data;
        for (var j = 0; j < this.players.length; j++) {
            if (this.players[j].userid === leaveRoomInfo.userId) {
                this.players[j].init();
                break;
            }
        }
        this.ownerid = leaveRoomInfo.owner;
        if (this.ownerid === GameData.gameUser.id) {
            GameData.isRoomOwner = true;
        }
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].userid !== 0) {
                this.players[i].setData(this.players[i].userid, this.ownerid, this.players[i].userProfile);
            }
        }
        this.refreshStartBtn();
    };
    uiRoom.prototype.kickPlayerResponse = function (ev) {
        var rsp = ev.data;
        var owner = rsp.owner;
        for (var j = 0; j < this.players.length; j++) {
            if (this.players[j].userid === rsp.userID) {
                this.players[j].init();
                break;
            }
        }
        if (GameData.gameUser.id === rsp.userID) {
            GameData.isRoomOwner = false;
            ContextManager.Instance.uiBack();
        }
        this.ownerid = owner;
        if (owner == GameData.gameUser.id) {
            GameData.isRoomOwner = true;
        }
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].userid != 0) {
                this.players[i].setData(this.players[i].userid, this.ownerid, this.players[i].userProfile);
            }
        }
        this.refreshStartBtn();
    };
    uiRoom.prototype.kickPlayerNotify = function (ev) {
        var rsp = ev.data;
        var userID = rsp.userID;
        var owner = rsp.owner;
        for (var j = 0; j < this.players.length; j++) {
            if (this.players[j].userid == rsp.userId) {
                this.players[j].init();
                break;
            }
        }
        if (GameData.gameUser.id == rsp.userId) {
            GameData.isRoomOwner = false;
            ContextManager.Instance.uiBack();
        }
        if (owner == GameData.gameUser.id) {
            GameData.isRoomOwner = true;
        }
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].userid != 0) {
                this.players[i].setData(this.players[i].userid, this.ownerid, this.players[i].userProfile);
            }
        }
        this.refreshStartBtn();
    };
    uiRoom.prototype.joinRoomResponse = function (ev) {
        if (!this.parent)
            return;
        var rsp = ev.data;
        GameData.isRoomOwner = false;
        ContextManager.Instance.uiBack();
    };
    uiRoom.prototype.joinRoomNotify = function (ev) {
        if (!this.parent)
            return;
        var roomUserInfo = ev.data;
        var userProfile = roomUserInfo.userProfile;
        var profile = JSON.parse(userProfile);
        for (var j = 0; j < this.players.length; j++) {
            if (this.players[j].userid === 0) {
                this.players[j].setData(roomUserInfo.userId, this.ownerid, profile);
                break;
            }
        }
    };
    uiRoom.prototype.joinOverResponse = function (ev) {
        if (!this.parent)
            return;
        ContextManager.Instance.showUI(UIType.gameBoard);
    };
    uiRoom.prototype.joinOverNotify = function (ev) {
    };
    uiRoom.prototype.sendEventNotify = function (event) {
        var sdnotify = event.data;
        if (sdnotify && sdnotify.cpProto) {
            if (sdnotify.cpProto.indexOf("gamestart") >= 0) {
                var userIds = [];
                for (var j = 0; j < this.players.length; j++) {
                    if (this.players[j].userid != 0) {
                        userIds.push(this.players[j].userProfile);
                    }
                }
                GameData.playerUserProfiles = userIds;
                ContextManager.Instance.showUI(UIType.gameBoard);
            }
        }
    };
    uiRoom.prototype.onErrorRsp = function (ev) {
        var data = ev.data;
        var errorCode = data.errCode;
        if (errorCode == 1001) {
            var tip = new uiTip("网络断开连接");
            this.addChild(tip);
            setTimeout(function () {
                mvs.MsEngine.getInstance.logOut();
                ContextManager.Instance.backSpecifiedUI(UIType.loginBoard);
            }, 5000);
        }
    };
    uiRoom.prototype.networkStateNotify = function (ev) {
        var data = ev.data;
        var state = data.state;
        var userID = data.userID;
        var owner = data.owner;
        if (state == 1) {
            var tip = new uiTip("玩家" + userID + "网络断开连接");
            this.addChild(tip);
            //手动踢出房间
            mvs.MsEngine.getInstance.kickPlayer(userID, "");
        }
        else if (state == 3) {
        }
    };
    return uiRoom;
}(BaseView));
__reflect(uiRoom.prototype, "uiRoom");
var uiRoomList = (function (_super) {
    __extends(uiRoomList, _super);
    function uiRoomList() {
        var _this = _super.call(this) || this;
        _this.rooms = [];
        _this.searchKeyWord = "";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.removeFromStage, _this);
        return _this;
    }
    uiRoomList.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    uiRoomList.prototype.onEnter = function (context) {
        this.getRoomList("");
    };
    uiRoomList.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    uiRoomList.prototype.addToStage = function () {
        this.rooms = [];
        this.roomIDInput.text = "";
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_GETROOMLIST_EX_RSP, this.getRoomListResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINROOM_RSP, this.joinRoomResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_GETROOMLIST_RSP, this.getRoomListExResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp, this);
        var self = this;
        this.refreshInterval = setInterval(function () {
            if (self.roomIDInput.text == "") {
                self.getRoomList("");
            }
        }, 5000);
    };
    uiRoomList.prototype.removeFromStage = function () {
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_GETROOMLIST_EX_RSP, this.getRoomListResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINROOM_RSP, this.joinRoomResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_GETROOMLIST_RSP, this.getRoomListExResponse, this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp, this);
        clearInterval(this.refreshInterval);
    };
    uiRoomList.prototype.init = function () {
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
        this.search.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSearchClick, this);
    };
    uiRoomList.prototype.getRoomListExResponse = function (ev) {
        var rsp = ev.data;
        while (this.roomGroup.numChildren > 0) {
            this.roomGroup.removeChildAt(0);
        }
        this.roomAttrs = rsp.roomAttrs;
        this.rooms = [];
        for (var i = 0; i < rsp.roomAttrs.length; i++) {
            var room = new RoomPrefab();
            room.msRoomAttribute = rsp.roomAttrs[i];
            this.roomGroup.addChild(room);
            this.rooms.push(room);
        }
    };
    uiRoomList.prototype.getRoomListResponse = function (ev) {
        var rsp = ev.data;
        while (this.roomGroup.numChildren > 0) {
            this.roomGroup.removeChildAt(0);
        }
        this.roomAttrs = rsp.roomAttrs;
        this.rooms = [];
        for (var i = 0; i < rsp.roomAttrs.length; i++) {
            var room = new RoomPrefab();
            room.msRoomAttribute = rsp.roomAttrs[i];
            this.roomGroup.addChild(room);
            this.rooms.push(room);
        }
        if (this.searchKeyWord != "") {
            for (var i = 0; i < this.roomGroup.numChildren; i++) {
                var room = this.roomGroup.getChildAt(i);
                if (room.roomId.text != this.roomIDInput.text) {
                    this.roomGroup.removeChild(room);
                }
            }
        }
    };
    uiRoomList.prototype.joinRoomResponse = function (ev) {
        var data = ev.data;
        var roomInfo = data.roomInfo;
        var roomuserInfoList = data.userList;
        for (var i = 0; i < this.roomAttrs.length; i++) {
            if (roomInfo.roomID === this.roomAttrs[i].roomID) {
                GameData.maxPlayerNum = this.roomAttrs[i].maxPlayer;
                break;
            }
        }
        ContextManager.Instance.showUI(UIType.roomView, [false, roomuserInfoList, roomInfo]);
    };
    uiRoomList.prototype.getRoomList = function (searchKeyword) {
        var filter = {
            maxPlayer: 0,
            mode: 0,
            canWatch: 0,
            roomProperty: "",
            full: 2,
            state: 1,
            sort: 1,
            order: 0,
            pageNo: 0,
            pageSize: 20
        };
        mvs.MsEngine.getInstance.getRoomListEx(filter);
        this.searchKeyWord = searchKeyword;
    };
    uiRoomList.prototype.onBackClick = function () {
        ContextManager.Instance.dialogBack();
    };
    uiRoomList.prototype.onSearchClick = function () {
        this.getRoomList(this.roomIDInput.text);
    };
    uiRoomList.prototype.onErrorRsp = function (ev) {
        var data = ev.data;
        var errorCode = data.errCode;
        if (errorCode == 1001) {
            var tip = new uiTip("网络断开连接");
            this.addChild(tip);
            setTimeout(function () {
                mvs.MsEngine.getInstance.logOut();
                ContextManager.Instance.backSpecifiedUI(UIType.loginBoard);
            }, 5000);
        }
    };
    return uiRoomList;
}(BaseView));
__reflect(uiRoomList.prototype, "uiRoomList");
var uiTip = (function (_super) {
    __extends(uiTip, _super);
    function uiTip(value) {
        var _this = _super.call(this) || this;
        _this.tipStr = value;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    uiTip.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    uiTip.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    uiTip.prototype.addToStage = function () {
        this.tip.text = this.tipStr;
        var self = this;
        setTimeout(function () {
            self.parent.removeChild(self);
        }, 3000);
    };
    return uiTip;
}(eui.Component));
__reflect(uiTip.prototype, "uiTip", ["eui.UIComponent", "egret.DisplayObject"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var ContextManager = (function () {
    function ContextManager() {
        this.uilist = new Array();
        this.dialogList = new Array();
    }
    Object.defineProperty(ContextManager, "Instance", {
        get: function () {
            if (!ContextManager._instance) {
                ContextManager._instance = new ContextManager();
            }
            return ContextManager._instance;
        },
        enumerable: true,
        configurable: true
    });
    ContextManager.prototype.init = function (stage) {
        this.stage = stage;
        this.showUI(UIType.loginBoard);
    };
    ContextManager.prototype.showUI = function (type, context) {
        if (context === void 0) { context = null; }
        this.uiPush(type, context);
    };
    ContextManager.prototype.showDialog = function (type, context) {
        if (context === void 0) { context = null; }
        if (this.currentUI == null)
            return;
        this.dialogPush(type, this.currentUI, context);
    };
    ContextManager.prototype.uiBack = function () {
        if (this.currentUI == null)
            return;
        this.uiPop();
    };
    ContextManager.prototype.uiBackMain = function () {
        while (this.uilist.length > 0) {
            var item = this.uilist.pop();
            if (this.stage.contains(item))
                this.stage.removeChild(item);
        }
        this.uiPush(UIType.loginBoard);
    };
    ContextManager.prototype.backSpecifiedUI = function (type) {
        this.uiBackMain();
        this.uiPush(type);
    };
    ContextManager.prototype.dialogBack = function () {
        this.dialogPop();
    };
    ContextManager.prototype.BackSpecifiedDialog = function (type) {
        while (this.dialogList.length > 0) {
            var item = this.dialogList.pop();
            if (this.currentUI.contains(item)) {
                item.onPause();
                this.currentUI.removeChild(item);
            }
        }
        this.showDialog(type);
    };
    ContextManager.prototype.uiPush = function (type, context) {
        if (context === void 0) { context = null; }
        while (this.dialogList.length) {
            var item = this.dialogList.pop();
            if (this.currentUI.contains(item)) {
                item.onPause();
                this.currentUI.removeChild(item);
            }
        }
        if (this.uilist.length > 0) {
            var lastView = this.uilist[this.uilist.length - 1];
            lastView.onPause();
            this.stage.removeChild(lastView);
        }
        var currentView = UIManager.getInstance().getSingleUI(type);
        this.stage.addChild(currentView);
        this.uilist.push(currentView);
        currentView.onEnter(context);
        this.currentUI = currentView;
    };
    ContextManager.prototype.uiPop = function () {
        if (this.uilist.length > 0) {
            var currentView = this.uilist.pop();
            this.stage.removeChild(currentView);
            currentView.onExit();
            currentView = this.uilist[this.uilist.length - 1];
            this.stage.addChild(currentView);
            currentView.onResume();
            this.currentUI = currentView;
        }
    };
    ContextManager.prototype.dialogPush = function (type, stage, context) {
        if (this.dialogList.length > 0) {
            var lastView = this.dialogList[this.dialogList.length - 1];
            lastView.onPause();
            stage.removeChild(lastView);
        }
        var currentView = UIManager.getInstance().getSingleUI(type);
        stage.addChild(currentView);
        this.dialogList.push(currentView);
        currentView.onEnter(context);
    };
    ContextManager.prototype.dialogPop = function () {
        if (this.dialogList.length > 0) {
            var currentView = this.dialogList.pop();
            this.currentUI.removeChild(currentView);
            currentView.onExit();
        }
        if (this.dialogList.length > 0) {
            var currentView = this.dialogList[this.uilist.length - 1];
            this.currentUI.addChild(currentView);
            currentView.onResume();
        }
    };
    return ContextManager;
}());
__reflect(ContextManager.prototype, "ContextManager");
var UIManager = (function () {
    function UIManager() {
        this.uilist = new Object();
    }
    UIManager.getInstance = function () {
        if (!UIManager._instance) {
            UIManager._instance = new UIManager();
        }
        return UIManager._instance;
    };
    UIManager.prototype.getSingleUI = function (type) {
        var value = this.uilist[type];
        var ui;
        if (value != null || value != undefined) {
            ui = this.uilist[type];
        }
        else {
            ui = this.createSingleUI(type);
            this.uilist[type] = ui;
        }
        return ui;
    };
    UIManager.prototype.createSingleUI = function (type) {
        switch (type) {
            case UIType.createRoom:
                return new uiCreateRoom();
            case UIType.exit:
                return new uiExit();
            case UIType.gameBoard:
                return new uiGame();
            case UIType.lobbyBoard:
                return new uiLobby();
            case UIType.loginBoard:
                return new uiLogin();
            case UIType.matchBoard:
                return new uiMatch();
            case UIType.rankBoard:
                return new uiRank();
            case UIType.roomList:
                return new uiRoomList();
            case UIType.roomView:
                return new uiRoom();
            case UIType.gameOver:
                return new uiResult();
        }
    };
    return UIManager;
}());
__reflect(UIManager.prototype, "UIManager");
var UIType;
(function (UIType) {
    //登录界面
    UIType[UIType["loginBoard"] = 0] = "loginBoard";
    //大厅界面
    UIType[UIType["lobbyBoard"] = 1] = "lobbyBoard";
    //匹配界面
    UIType[UIType["matchBoard"] = 2] = "matchBoard";
    //游戏界面
    UIType[UIType["gameBoard"] = 3] = "gameBoard";
    //排行榜
    UIType[UIType["rankBoard"] = 4] = "rankBoard";
    //房间列表
    UIType[UIType["roomList"] = 5] = "roomList";
    //退出界面
    UIType[UIType["exit"] = 6] = "exit";
    //创建房间
    UIType[UIType["createRoom"] = 7] = "createRoom";
    //房间界面
    UIType[UIType["roomView"] = 8] = "roomView";
    //结束
    UIType[UIType["gameOver"] = 9] = "gameOver";
})(UIType || (UIType = {}));
/**
 * MD5加密
 */
var MD5 = (function () {
    function MD5() {
        this.hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase        */
        this.b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */
    }
    /*
    * These are the privates you'll usually want to call
    * They take string arguments and return either hex or base-64 encoded strings
    */
    MD5.prototype.hex_md5 = function (s) { return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(s))); }; //这个函数就行了，  
    MD5.prototype.b64_md5 = function (s) { return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(s))); };
    MD5.prototype.any_md5 = function (s, e) { return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(s)), e); };
    MD5.prototype.hex_hmac_md5 = function (k, d) { return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d))); };
    MD5.prototype.b64_hmac_md5 = function (k, d) { return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d))); };
    MD5.prototype.any_hmac_md5 = function (k, d, e) { return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)), e); };
    /*
    * Perform a simple self-test to see if the VM is working
    */
    MD5.prototype.md5_vm_test = function () {
        return this.hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72";
    };
    /*
    * Calculate the MD5 of a raw string
    */
    MD5.prototype.rstr_md5 = function (s) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(s), s.length * 8));
    };
    /*
    * Calculate the HMAC-MD5, of a key and some data (raw strings)
    */
    MD5.prototype.rstr_hmac_md5 = function (key, data) {
        var bkey = this.rstr2binl(key);
        if (bkey.length > 16)
            bkey = this.binl_md5(bkey, key.length * 8);
        var ipad = Array(16), opad = Array(16);
        for (var i = 0; i < 16; i++) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        var hash = this.binl_md5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);
        return this.binl2rstr(this.binl_md5(opad.concat(hash), 512 + 128));
    };
    /*
    * Convert a raw string to a hex string
    */
    MD5.prototype.rstr2hex = function (input) {
        try {
            this.hexcase;
        }
        catch (e) {
            this.hexcase = 0;
        }
        var hex_tab = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var output = "";
        var x;
        for (var i = 0; i < input.length; i++) {
            x = input.charCodeAt(i);
            output += hex_tab.charAt((x >>> 4) & 0x0F)
                + hex_tab.charAt(x & 0x0F);
        }
        return output;
    };
    /*
    * Convert a raw string to a base-64 string
    */
    MD5.prototype.rstr2b64 = function (input) {
        try {
            this.b64pad;
        }
        catch (e) {
            this.b64pad = '';
        }
        var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var output = "";
        var len = input.length;
        for (var i = 0; i < len; i += 3) {
            var triplet = (input.charCodeAt(i) << 16)
                | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0)
                | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
            for (var j = 0; j < 4; j++) {
                if (i * 8 + j * 6 > input.length * 8)
                    output += this.b64pad;
                else
                    output += tab.charAt((triplet >>> 6 * (3 - j)) & 0x3F);
            }
        }
        return output;
    };
    /*
    * Convert a raw string to an arbitrary string encoding
    */
    MD5.prototype.rstr2any = function (input, encoding) {
        var divisor = encoding.length;
        var i, j, q, x, quotient;
        /* Convert to an array of 16-bit big-endian values, forming the dividend */
        var dividend = Array(Math.ceil(input.length / 2));
        for (i = 0; i < dividend.length; i++) {
            dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
        }
        /*
        * Repeatedly perform a long division. The binary array forms the dividend,
        * the length of the encoding is the divisor. Once computed, the quotient
        * forms the dividend for the next step. All remainders are stored for later
        * use.
        */
        var full_length = Math.ceil(input.length * 8 /
            (Math.log(encoding.length) / Math.log(2)));
        var remainders = Array(full_length);
        for (j = 0; j < full_length; j++) {
            quotient = Array();
            x = 0;
            for (i = 0; i < dividend.length; i++) {
                x = (x << 16) + dividend[i];
                q = Math.floor(x / divisor);
                x -= q * divisor;
                if (quotient.length > 0 || q > 0)
                    quotient[quotient.length] = q;
            }
            remainders[j] = x;
            dividend = quotient;
        }
        /* Convert the remainders to the output string */
        var output = "";
        for (i = remainders.length - 1; i >= 0; i--)
            output += encoding.charAt(remainders[i]);
        return output;
    };
    /*
    * Encode a string as utf-8.
    * For efficiency, this assumes the input is valid utf-16.
    */
    MD5.prototype.str2rstr_utf8 = function (input) {
        var output = "";
        var i = -1;
        var x, y;
        while (++i < input.length) {
            /* Decode utf-16 surrogate pairs */
            x = input.charCodeAt(i);
            y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
            if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
                x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
                i++;
            }
            /* Encode output as utf-8 */
            if (x <= 0x7F)
                output += String.fromCharCode(x);
            else if (x <= 0x7FF)
                output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F), 0x80 | (x & 0x3F));
            else if (x <= 0xFFFF)
                output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
            else if (x <= 0x1FFFFF)
                output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07), 0x80 | ((x >>> 12) & 0x3F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
        }
        return output;
    };
    /*
    * Encode a string as utf-16
    */
    MD5.prototype.str2rstr_utf16le = function (input) {
        var output = "";
        for (var i = 0; i < input.length; i++)
            output += String.fromCharCode(input.charCodeAt(i) & 0xFF, (input.charCodeAt(i) >>> 8) & 0xFF);
        return output;
    };
    MD5.prototype.str2rstr_utf16be = function (input) {
        var output = "";
        for (var i = 0; i < input.length; i++)
            output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF, input.charCodeAt(i) & 0xFF);
        return output;
    };
    /*
    * Convert a raw string to an array of little-endian words
    * Characters >255 have their high-byte silently ignored.
    */
    MD5.prototype.rstr2binl = function (input) {
        var output = Array(input.length >> 2);
        for (var i = 0; i < output.length; i++)
            output[i] = 0;
        for (var i = 0; i < input.length * 8; i += 8)
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
        return output;
    };
    /*
    * Convert an array of little-endian words to a string
    */
    MD5.prototype.binl2rstr = function (input) {
        var output = "";
        for (var i = 0; i < input.length * 32; i += 8)
            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
        return output;
    };
    /*
    * Calculate the MD5 of an array of little-endian words, and a bit length.
    */
    MD5.prototype.binl_md5 = function (x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;
            a = this.md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = this.md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = this.md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = this.md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = this.safe_add(a, olda);
            b = this.safe_add(b, oldb);
            c = this.safe_add(c, oldc);
            d = this.safe_add(d, oldd);
        }
        return [a, b, c, d];
    };
    /*
    * These privates implement the four basic operations the algorithm uses.
    */
    MD5.prototype.md5_cmn = function (q, a, b, x, s, t) {
        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b);
    };
    MD5.prototype.md5_ff = function (a, b, c, d, x, s, t) {
        return this.md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    };
    MD5.prototype.md5_gg = function (a, b, c, d, x, s, t) {
        return this.md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    };
    MD5.prototype.md5_hh = function (a, b, c, d, x, s, t) {
        return this.md5_cmn(b ^ c ^ d, a, b, x, s, t);
    };
    MD5.prototype.md5_ii = function (a, b, c, d, x, s, t) {
        return this.md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    };
    /*
    * Add integers, wrapping at 2^32. This uses 16-bit operations internally
    * to work around bugs in some JS interpreters.
    */
    MD5.prototype.safe_add = function (x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    };
    /*
    * Bitwise rotate a 32-bit number to the left.
    */
    MD5.prototype.bit_rol = function (num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    };
    return MD5;
}());
__reflect(MD5.prototype, "MD5");
var Toast = (function (_super) {
    __extends(Toast, _super);
    function Toast(msg, w, h) {
        var _this = _super.call(this) || this;
        console.log("Toast:", msg);
        var bg = new egret.Bitmap(Toast._txtrToastBg);
        _this.x = w * .5;
        _this.y = h * .85;
        _this.addChild(bg);
        bg.$anchorOffsetX = bg.width / 2;
        // bg.$anchorOffsetY = bg.height/2;
        var tx = new egret.TextField;
        tx.multiline = true;
        tx.size = 30;
        tx.bold = true;
        tx.textColor = 0xFFFFFF;
        tx.stroke = 6;
        tx.strokeColor = 0;
        tx.text = msg;
        tx.fontFamily = "微软雅黑";
        tx.textAlign = egret.HorizontalAlign.CENTER;
        tx.width = w * 1.0;
        tx.x = bg.x;
        tx.y = bg.y + tx.size / 10;
        tx.anchorOffsetX = tx.width / 2;
        _this.addChild(tx);
        bg.height = 12 + tx.height;
        _this.alpha = 0;
        egret.Tween.get(_this)
            .to({ alpha: 1 }, 800, egret.Ease.quintOut)
            .wait(1600)
            .to({ alpha: 0 }, 1200, egret.Ease.quintIn).call(function () {
            if (_this.parent) {
                _this.parent.removeChild(_this);
            }
        });
        return _this;
    }
    Toast.init = function (cont, txtrToastBg) {
        console.log("Toast.init", txtrToastBg);
        this._cont = cont;
        this._txtrToastBg = txtrToastBg;
    };
    Toast.initRes = function (cont, img) {
        console.log("Toast.init", img);
        this._cont = cont;
        var loader = new egret.ImageLoader();
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, function (event) {
            var loader = event.target;
            //获取加载到的纹理对象
            var bitmapData = loader.data;
            //创建纹理对象
            var texture = new egret.Texture();
            texture.bitmapData = bitmapData;
            this._txtrToastBg = texture;
            //创建 Bitmap 进行显示
            // this.addChild(new egret.Bitmap(texture));
        }, this);
        //开始加载
        loader.load(img);
    };
    Toast.show = function (msg) {
        if (this._cont) {
            var toast = new Toast(msg, this._cont.stage.stageWidth, this._cont.stage.stageHeight);
            this._cont.addChild(toast);
        }
    };
    return Toast;
}(egret.DisplayObjectContainer));
__reflect(Toast.prototype, "Toast");
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
;window.Main = Main;