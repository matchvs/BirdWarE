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
//# sourceMappingURL=uiExit.js.map