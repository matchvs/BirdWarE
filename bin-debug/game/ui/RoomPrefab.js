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
        var info = { name: GameData.gameUser.name, avatar: GameData.gameUser.avatar };
        var infostr = JSON.stringify(info);
        mvs.MsEngine.getInstance.joinRoom(this.msRoomAttribute.roomID, infostr);
    };
    return RoomPrefab;
}(eui.Component));
__reflect(RoomPrefab.prototype, "RoomPrefab", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=RoomPrefab.js.map