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
var uiMatch = (function (_super) {
    __extends(uiMatch, _super);
    function uiMatch() {
        var _this = _super.call(this) || this;
        _this.gameUserList = new Array;
        _this.playerIcons = [];
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
        this.addMsResponseListen();
    };
    uiMatch.prototype.onEnter = function (context) {
        GameData.maxPlayerNum = 2;
        var info = { name: GameData.gameUser.name, avatar: GameData.gameUser.avatar };
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
        this.gameUserList.push(GameData.gameUser.id);
        for (var i = 0; i < roomuserInfoList.length; i++) {
            if (GameData.gameUser.id != roomuserInfoList[i].userId) {
                this.gameUserList.push(roomuserInfoList[i].userId);
            }
        }
        if (this.gameUserList.length == 1) {
            GameData.isRoomOwner = true;
        }
        for (var i = 0; i < this.gameUserList.length; i++) {
            this.playerIcons[i].setData(this.gameUserList[i]);
        }
        this.gameUserList.sort(function (a, b) {
            return a - b;
        });
        GameData.playerUserIds = this.gameUserList;
        if (this.gameUserList.length >= 2) {
            mvs.MsEngine.getInstance.joinOver("");
        }
    };
    uiMatch.prototype.joinRoomNotify = function (ev) {
        if (!this.parent)
            return;
        var data = ev.data;
        this.gameUserList.push(data.userId);
        for (var i = 0; i < this.playerIcons.length; i++) {
            this.playerIcons[i].init();
        }
        for (var i = 0; i < this.gameUserList.length; i++) {
            this.playerIcons[i].setData(this.gameUserList[i]);
        }
        this.gameUserList.sort(function (a, b) {
            return a - b;
        });
        GameData.playerUserIds = this.gameUserList;
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
    };
    uiMatch.prototype.leaveRoomNotify = function (ev) {
        if (!this.parent)
            return;
        var leaveRoomInfo = ev.data;
        var userID = leaveRoomInfo.userId;
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
        if (this.gameUserList[0] == GameData.gameUser.id) {
            GameData.isRoomOwner = true;
        }
    };
    return uiMatch;
}(BaseView));
__reflect(uiMatch.prototype, "uiMatch");
//# sourceMappingURL=uiMatch.js.map