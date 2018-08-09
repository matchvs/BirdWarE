var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UIManager = (function () {
    function UIManager() {
        this.uilist = new Object();
    }
    UIManager.getInstance = function () {
        if (!UIManager._instance) {
            UIManager._instance = new UIManager();
        }
        return UIManager._instance;
    };
    UIManager.prototype.getSingleUI = function (type) {
        var value = this.uilist[type];
        var ui;
        if (value != null || value != undefined) {
            ui = this.uilist[type];
        }
        else {
            ui = this.createSingleUI(type);
            this.uilist[type] = ui;
        }
        return ui;
    };
    UIManager.prototype.createSingleUI = function (type) {
        switch (type) {
            case UIType.createRoom:
                return new uiCreateRoom();
            case UIType.exit:
                return new uiExit();
            case UIType.gameBoard:
                return new uiGame();
            case UIType.lobbyBoard:
                return new uiLobby();
            case UIType.loginBoard:
                return new uiLogin();
            case UIType.matchBoard:
                return new uiMatch();
            case UIType.roomList:
                return new uiRoomList();
            case UIType.roomView:
                return new uiRoom();
            case UIType.gameOver:
                return new uiResult();
        }
    };
    return UIManager;
}());
__reflect(UIManager.prototype, "UIManager");
//# sourceMappingURL=UIManager.js.map