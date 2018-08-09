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
//# sourceMappingURL=BaseView.js.map