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
var uiRoom = (function (_super) {
    __extends(uiRoom, _super);
    function uiRoom() {
        var _this = _super.call(this) || this;
        _this.players = [];
        _this.roomid = 0;
        _this.roomInfo = null;
        _this.ownerid = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    uiRoom.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    uiRoom.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    uiRoom.prototype.init = function () {
        this.gamestart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gamestartClick, this);
        this.leave.addEventListener(egret.TouchEvent.TOUCH_TAP, this.leaveRoom, this);
        this.addMsResponseListen();
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
            this.joinRoomInit(roomUserInfoList, roominfo);
            this.refreshStartBtn();
        }
    };
    uiRoom.prototype.addToStage = function () {
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
        this.players[0].setData(this.ownerid, this.ownerid);
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
            userProfile: ""
        });
        this.ownerid = roomInfo.ownerId;
        for (var j = 0; j < roomUserInfoList.length; j++) {
            this.players[j].setData(roomUserInfoList[j].userId, this.ownerid);
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
                userIds.push(this.players[j].userid);
            }
        }
        if (playerCnt === GameData.maxPlayerNum) {
            var result = mvs.MsEngine.getInstance.joinOver("");
            console.log("发出关闭房间的通知");
            if (result !== 0) {
                console.log("关闭房间失败，错误码：", result);
            }
            GameData.playerUserIds = userIds;
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
                this.players[i].setData(this.players[i].userid, this.ownerid);
            }
        }
        this.refreshStartBtn();
    };
    uiRoom.prototype.kickPlayerResponse = function (ev) {
        var rsp = ev.data;
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
    };
    uiRoom.prototype.kickPlayerNotify = function (ev) {
        var rsp = ev.data;
        for (var j = 0; j < this.players.length; j++) {
            if (this.players[j].userid === rsp.userId) {
                this.players[j].init();
                break;
            }
        }
        if (GameData.gameUser.id === rsp.userId) {
            GameData.isRoomOwner = false;
            ContextManager.Instance.uiBack();
        }
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
        for (var j = 0; j < this.players.length; j++) {
            if (this.players[j].userid === 0) {
                this.players[j].setData(roomUserInfo.userId, this.ownerid);
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
                        userIds.push(this.players[j].userid);
                    }
                }
                GameData.playerUserIds = userIds;
                ContextManager.Instance.showUI(UIType.gameBoard);
            }
        }
    };
    return uiRoom;
}(BaseView));
__reflect(uiRoom.prototype, "uiRoom");
//# sourceMappingURL=uiRoom.js.map