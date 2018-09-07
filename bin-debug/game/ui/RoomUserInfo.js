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
var RoomUserInfo = (function (_super) {
    __extends(RoomUserInfo, _super);
    function RoomUserInfo() {
        var _this = _super.call(this) || this;
        _this.userid = 0;
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
    RoomUserInfo.prototype.setData = function (userid, ownerId) {
        this.userid = userid;
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
    };
    RoomUserInfo.prototype.kickPlayer = function () {
        mvs.MsEngine.getInstance.kickPlayer(this.userid, "");
    };
    return RoomUserInfo;
}(eui.Component));
__reflect(RoomUserInfo.prototype, "RoomUserInfo", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=RoomUserInfo.js.map