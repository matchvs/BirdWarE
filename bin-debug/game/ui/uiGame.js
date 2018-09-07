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
var uiGame = (function (_super) {
    __extends(uiGame, _super);
    function uiGame() {
        var _this = _super.call(this) || this;
        _this.gamestart = false;
        _this.enemyHeartNum = 3;
        _this.friendHeartNum = 3;
        _this.friendIds = [];
        _this.enemyIds = [];
        _this.friendBullets = [];
        _this.enemyBullets = [];
        _this.roundSeconds = 30;
        _this.curRound = 1;
        return _this;
    }
    uiGame.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    uiGame.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        //this.init();
    };
    uiGame.prototype.onEnter = function (context) {
        this.init();
    };
    uiGame.prototype.init = function () {
        this.addMsResponseListen();
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.exit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitClick, this);
        this.curRound = 1;
        this.friendHeartNum = 3;
        this.enemyHeartNum = 3;
        for (var i = 0; i < this.playerHeart.numChildren; i++) {
            this.playerHeart.getChildAt(i).visible = true;
        }
        for (var i = 0; i < this.enemyHeart.numChildren; i++) {
            this.enemyHeart.getChildAt(i).visible = true;
        }
        if (GameData.maxPlayerNum == 2) {
            this.playerIcon1.visible = false;
            this.enemyIcon1.visible = false;
            this.playerIcon2.visible = true;
            this.playerIcon2.setData(GameData.playerUserIds[0]);
            this.enemyIcon2.visible = true;
            this.enemyIcon2.setData(GameData.playerUserIds[1]);
        }
        else {
            this.playerIcon1.visible = true;
            this.playerIcon1.setData(GameData.playerUserIds[0]);
            this.playerIcon2.visible = true;
            this.playerIcon2.setData(GameData.playerUserIds[1]);
            this.enemyIcon1.visible = true;
            this.enemyIcon1.setData(GameData.playerUserIds[2]);
            this.enemyIcon2.visible = true;
            this.enemyIcon2.setData(GameData.playerUserIds[3]);
        }
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchEvent, this);
        this.gamestart = false;
        var self = this;
        this.roundStart();
    };
    uiGame.prototype.initPlayers = function () {
        this.friendIds = [];
        this.enemyIds = [];
        //分组
        for (var i_1 = 0; i_1 < GameData.playerUserIds.length; i_1++) {
            if (i_1 < GameData.playerUserIds.length / 2) {
                this.friendIds.push(GameData.playerUserIds[i_1]);
            }
            else {
                this.enemyIds.push(GameData.playerUserIds[i_1]);
            }
        }
        var team = [GameData.gameUser.id];
        if (this.friendIds.indexOf(GameData.gameUser.id) != -1) {
            for (var i_2 = 0; i_2 < this.friendIds.length; i_2++) {
                if (this.friendIds[i_2] != GameData.gameUser.id) {
                    team.push(this.friendIds[i_2]);
                }
            }
            for (var i_3 = 0; i_3 < this.enemyIds.length; i_3++) {
                team.push(this.enemyIds[i_3]);
            }
        }
        else {
            for (var i_4 = 0; i_4 < this.enemyIds.length; i_4++) {
                if (this.enemyIds[i_4] != GameData.gameUser.id) {
                    team.push(this.enemyIds[i_4]);
                }
            }
            for (var i_5 = 0; i_5 < this.friendIds.length; i_5++) {
                team.push(this.friendIds[i_5]);
            }
        }
        GameData.playerUserIds = team;
        var playerScript = null;
        if (this.players && this.players.length > 0) {
            var campFlg = GameData.playerUserIds.length / 2;
            for (var j = 0; j < this.players.length; j++) {
                playerScript = this.players[j];
                if (playerScript) {
                    playerScript.init();
                    if (j < campFlg) {
                        if (j < 1) {
                            playerScript.x = -15;
                            playerScript.y = 1150;
                        }
                        else {
                            playerScript.x = 165;
                            playerScript.y = 1200;
                        }
                    }
                    else {
                        if (i < campFlg + 1) {
                            playerScript.x = 380;
                            playerScript.y = 1200;
                        }
                        else {
                            playerScript.x = 550;
                            playerScript.y = 1200;
                        }
                    }
                }
            }
        }
        else {
            var player = null;
            this.players = [];
            var campFlg = GameData.playerUserIds.length / 2;
            for (var i = 0; i < GameData.playerUserIds.length; i++) {
                if (i < campFlg) {
                    if (i < 1) {
                        player = new Player1();
                        player.x = -15;
                        player.y = 1150;
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
                player.UserId = GameData.playerUserIds[i];
                this.players.push(player);
            }
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
    };
    uiGame.prototype.leaveRoomNotify = function (ev) {
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
                for (var i_6 = 0; i_6 < this.players.length; i_6++) {
                    var player = this.players[i_6];
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
                for (var i_7 = 0; i_7 < this.players.length; i_7++) {
                    var player = this.players[i_7];
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
        this.gameover.play(0);
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
            this.gameover.play(0);
            var sound = RES.getRes("gameover_mp3");
            sound.play(0, 1);
            setTimeout(function () {
                var data = {
                    friendIds: self.friendIds,
                    enemyIds: self.enemyIds,
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
                            data.push({ playerID: player.userId, offset: offset });
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
    return uiGame;
}(BaseView));
__reflect(uiGame.prototype, "uiGame");
//# sourceMappingURL=uiGame.js.map