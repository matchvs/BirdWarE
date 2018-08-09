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
var uiResult = (function (_super) {
    __extends(uiResult, _super);
    function uiResult() {
        return _super.call(this) || this;
    }
    uiResult.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    };
    uiResult.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    uiResult.prototype.onEnter = function (context) {
        var friendIds = context.friendIds;
        var enemyIds = context.enemyIds;
        var friendScore = context.friendScore;
        var enemyScore = context.enemyScore;
        this.playerScore.text = friendScore + "";
        this.enemyScore.text = enemyScore + "";
        if (friendScore > enemyScore) {
            this.win.visible = true;
            this.lose.visible = false;
            var sound = RES.getRes("vitory_mp3");
            sound.play(0, 1);
        }
        else {
            this.lose.visible = true;
            this.win.visible = false;
            var sound = RES.getRes("lose_mp3");
            sound.play(0, 1);
        }
        for (var i = 0; i < this.playerLayout.numChildren; i++) {
            this.playerLayout.getChildAt(i).visible = false;
        }
        for (var i = 0; i < friendIds.length; i++) {
            this.playerLayout.getChildAt(i).visible = true;
            this.playerLayout.getChildAt(i).setData("");
        }
        for (var i = 0; i < this.enemyLayout.numChildren; i++) {
            this.enemyLayout.getChildAt(i).visible = false;
        }
        for (var i = 0; i < enemyIds.length; i++) {
            this.enemyLayout.getChildAt(i).visible = true;
            this.enemyLayout.getChildAt(i).setData("");
        }
    };
    uiResult.prototype.init = function () {
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
    };
    uiResult.prototype.onAddToStage = function () {
        //离开房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP, this.leaveRoomResponse, this);
    };
    uiResult.prototype.onBackClick = function () {
        mvs.MsEngine.getInstance.leaveRoom("");
        ContextManager.Instance.backSpecifiedUI(UIType.lobbyBoard);
    };
    uiResult.prototype.leaveRoomResponse = function () {
        if (this.parent)
            ContextManager.Instance.backSpecifiedUI(UIType.lobbyBoard);
    };
    uiResult.prototype.leaveRoomNotify = function () {
    };
    return uiResult;
}(BaseView));
__reflect(uiResult.prototype, "uiResult");
//# sourceMappingURL=uiResult.js.map