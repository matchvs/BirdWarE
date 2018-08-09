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
var uiRoomList = (function (_super) {
    __extends(uiRoomList, _super);
    function uiRoomList() {
        var _this = _super.call(this) || this;
        _this.rooms = [];
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    uiRoomList.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    uiRoomList.prototype.onEnter = function (context) {
        this.getRoomList();
    };
    uiRoomList.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    uiRoomList.prototype.addToStage = function () {
        this.rooms = [];
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_GETROOMLIST_EX_RSP, this.getRoomListResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINROOM_RSP, this.joinRoomResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_GETROOMLIST_RSP, this.getRoomListExResponse, this);
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
    uiRoomList.prototype.getRoomList = function () {
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
    };
    uiRoomList.prototype.onBackClick = function () {
        ContextManager.Instance.dialogBack();
    };
    uiRoomList.prototype.onSearchClick = function () {
        if (this.roomIDInput.text == "") {
            this.getRoomList();
        }
        else {
            for (var i = 0; i < this.roomGroup.numChildren; i++) {
                var room = this.roomGroup[i];
                if (room.roomId.text == this.roomIDInput.text) {
                    this.roomGroup.removeChild(this.roomGroup[i]);
                }
            }
        }
    };
    return uiRoomList;
}(BaseView));
__reflect(uiRoomList.prototype, "uiRoomList");
//# sourceMappingURL=uiRoomList.js.map