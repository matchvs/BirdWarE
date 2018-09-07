var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ContextManager = (function () {
    function ContextManager() {
        this.uilist = new Array();
        this.dialogList = new Array();
    }
    Object.defineProperty(ContextManager, "Instance", {
        get: function () {
            if (!ContextManager._instance) {
                ContextManager._instance = new ContextManager();
            }
            return ContextManager._instance;
        },
        enumerable: true,
        configurable: true
    });
    ContextManager.prototype.init = function (stage) {
        this.stage = stage;
        this.showUI(UIType.loginBoard);
    };
    ContextManager.prototype.showUI = function (type, context) {
        if (context === void 0) { context = null; }
        this.uiPush(type, context);
    };
    ContextManager.prototype.showDialog = function (type, context) {
        if (context === void 0) { context = null; }
        if (this.currentUI == null)
            return;
        this.dialogPush(type, this.currentUI, context);
    };
    ContextManager.prototype.uiBack = function () {
        if (this.currentUI == null)
            return;
        this.uiPop();
    };
    ContextManager.prototype.uiBackMain = function () {
        while (this.uilist.length > 0) {
            var item = this.uilist.pop();
            if (this.stage.contains(item))
                this.stage.removeChild(item);
        }
        this.uiPush(UIType.loginBoard);
    };
    ContextManager.prototype.backSpecifiedUI = function (type) {
        this.uiBackMain();
        this.uiPush(type);
    };
    ContextManager.prototype.dialogBack = function () {
        this.dialogPop();
    };
    ContextManager.prototype.BackSpecifiedDialog = function (type) {
        while (this.dialogList.length > 0) {
            var item = this.dialogList.pop();
            if (this.currentUI.contains(item)) {
                item.onPause();
                this.currentUI.removeChild(item);
            }
        }
        this.showDialog(type);
    };
    ContextManager.prototype.uiPush = function (type, context) {
        if (context === void 0) { context = null; }
        while (this.dialogList.length) {
            var item = this.dialogList.pop();
            if (this.currentUI.contains(item)) {
                item.onPause();
                this.currentUI.removeChild(item);
            }
        }
        if (this.uilist.length > 0) {
            var lastView = this.uilist[this.uilist.length - 1];
            lastView.onPause();
            this.stage.removeChild(lastView);
        }
        var currentView = UIManager.getInstance().getSingleUI(type);
        this.stage.addChild(currentView);
        this.uilist.push(currentView);
        currentView.onEnter(context);
        this.currentUI = currentView;
    };
    ContextManager.prototype.uiPop = function () {
        if (this.uilist.length > 0) {
            var currentView = this.uilist.pop();
            this.stage.removeChild(currentView);
            currentView.onExit();
            currentView = this.uilist[this.uilist.length - 1];
            this.stage.addChild(currentView);
            currentView.onResume();
            this.currentUI = currentView;
        }
    };
    ContextManager.prototype.dialogPush = function (type, stage, context) {
        if (this.dialogList.length > 0) {
            var lastView = this.dialogList[this.dialogList.length - 1];
            lastView.onPause();
            stage.removeChild(lastView);
        }
        var currentView = UIManager.getInstance().getSingleUI(type);
        stage.addChild(currentView);
        this.dialogList.push(currentView);
        currentView.onEnter(context);
    };
    ContextManager.prototype.dialogPop = function () {
        if (this.dialogList.length > 0) {
            var currentView = this.dialogList.pop();
            this.currentUI.removeChild(currentView);
            currentView.onExit();
        }
        if (this.dialogList.length > 0) {
            var currentView = this.dialogList[this.uilist.length - 1];
            this.currentUI.addChild(currentView);
            currentView.onResume();
        }
    };
    return ContextManager;
}());
__reflect(ContextManager.prototype, "ContextManager");
//# sourceMappingURL=ContextManager.js.map