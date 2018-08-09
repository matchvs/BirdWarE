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
        this.init();
    };
    playerIcon.prototype.init = function () {
        this.player.visible = false;
        this.userInfo = null;
    };
    playerIcon.prototype.setData = function (userInfo) {
        this.player.visible = true;
        this.userInfo = userInfo;
    };
    return playerIcon;
}(eui.Component));
__reflect(playerIcon.prototype, "playerIcon", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=playerIcon.js.map