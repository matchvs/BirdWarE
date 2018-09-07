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
var uiLobby = (function (_super) {
    __extends(uiLobby, _super);
    function uiLobby() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
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
        this.username.text = GameData.gameUser.id.toString();
    };
    uiLobby.prototype.init = function () {
        this.createRoom.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCreateRoomClick, this);
        this.random.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRandomMatch, this);
        this.joinRoom.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onJoinRoomMatch, this);
        this.exit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.exitRoom, this);
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
    return uiLobby;
}(BaseView));
__reflect(uiLobby.prototype, "uiLobby");
//# sourceMappingURL=uiLobby.js.map