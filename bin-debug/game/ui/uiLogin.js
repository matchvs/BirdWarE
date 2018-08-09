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
var uiLogin = (function (_super) {
    __extends(uiLogin, _super);
    function uiLogin() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    uiLogin.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    uiLogin.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    uiLogin.prototype.addToStage = function () {
        this.addMsResponseListen();
    };
    uiLogin.prototype.init = function () {
        this.start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartClick, this);
    };
    uiLogin.prototype.addMsResponseListen = function () {
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_REGISTERUSER_RSP, this.registResponse, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LOGIN_RSP, this.loginResponse, this);
    };
    uiLogin.prototype.loginResponse = function (ev) {
        var login = ev.data;
        if (login.status == 200) {
            ContextManager.Instance.showUI(UIType.lobbyBoard);
        }
    };
    uiLogin.prototype.registResponse = function (ev) {
        var userInfo = ev.data;
        GameData.gameUser.id = userInfo.id;
        GameData.gameUser.name = userInfo.name;
        GameData.gameUser.avatar = userInfo.avatar;
        GameData.gameUser.token = userInfo.token;
        if (userInfo.status == 0) {
            mvs.MsEngine.getInstance.login(userInfo.id, userInfo.token, GameData.gameID, GameData.appkey, GameData.secretKey);
        }
    };
    uiLogin.prototype.onStartClick = function () {
        mvs.MsEngine.getInstance.registerUser();
    };
    return uiLogin;
}(BaseView));
__reflect(uiLogin.prototype, "uiLogin");
//# sourceMappingURL=uiLogin.js.map