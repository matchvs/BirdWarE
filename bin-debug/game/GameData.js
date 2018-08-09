var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    GameData.configEnvir = function (channel, isdebug) {
        GameData.CHANNEL = channel;
        GameData.DEFAULT_ENV = isdebug ? GameData.ENVIRONMENT.dev : GameData.ENVIRONMENT.pro;
        if (channel === "MatchVS") {
            GameData.gameID = 201150;
            GameData.appkey = "0db8550d9bd345da82b852564f59d2e6";
            GameData.secretKey = "15bf7e1bc2454d21b071d67f568e257c";
        }
        if (channel === "MatchVS-Test") {
            GameData.gameID = 201170;
            GameData.appkey = "a5b937f29a4c480bb6946093105c0565";
            GameData.secretKey = "a8c5c84afde44136a5eea6f0ac09887c";
        }
        if (channel === "MatchVS-Test1") {
            GameData.gameID = 201078;
            GameData.appkey = "938e1ee0db444a079fe0695598677ba0";
            GameData.secretKey = "9b11e0eca09141a1961d49d6b6028075";
        }
    };
    /**
     * 获取绑定openID地址
     */
    GameData.getBindOpenIDAddr = function (channel, platform) {
        if (channel == "MatchVS" || channel == "Matchvs") {
            if (platform == "release") {
                return "http://vsuser.matchvs.com/wc6/thirdBind.do?";
            }
            else if (platform == "alpha") {
                return "http://alphavsuser.matchvs.com/wc6/thirdBind.do?";
            }
        }
        else if (channel == "MatchVS-Test1") {
            if (platform == "release") {
                return "http://zwuser.matchvs.com/wc6/thirdBind.do?";
            }
            else if (platform == "alpha") {
                return "http://alphazwuser.matchvs.com/wc6/thirdBind.do?";
            }
        }
    };
    /**
     * 获取签名
     */
    GameData.getSign = function (params) {
        var str = GameData.appkey + "&" + params + "&" + GameData.secretKey;
        var md5Str = new MD5().hex_md5(str);
        return md5Str;
    };
    GameData.CHANNEL = "MatchVS";
    GameData.DEFAULT_ENV = "alpha";
    GameData.ENVIRONMENT = { "dev": "alpha", "pro": "release" };
    GameData.gameID = 201330; //200757;
    GameData.appkey = "7c7b185482d8444bb98bc93c7a65daaa"; //6783e7d174ef41b98a91957c561cf305
    GameData.secretKey = "f469fb05eee9488bb32adfd85e4ca370"; //da47754579fa47e4affab5785451622c
    GameData.gameUser = new GameUser();
    GameData.playerUserIds = [];
    GameData.matchType = 0; //匹配类型
    GameData.randomMatch = 1; //随机匹配
    GameData.specialMatch = 2; //指定房间号匹配
    GameData.tagsMatch = 3; //指定属性匹配
    GameData.maxPlayerNum = 4;
    GameData.isRoomOwner = false;
    GameData.gameStartEvent = "gameStart";
    GameData.playerPositionEvent = "playerPosition";
    GameData.reconnectStartEvent = "gameReconnectStart";
    GameData.newStarEvent = "newStar";
    GameData.changeStarEvent = "changeStar";
    GameData.gameReadyEvent = "gameReady";
    GameData.reconnectReadyEvent = "gamaeReconnectReady";
    GameData.events = {};
    GameData.syncFrame = false;
    GameData.isGameOver = false;
    GameData.starPositionX = 0;
    GameData.starPositionY = 0;
    GameData.frameRate = 5;
    GameData.defaultHeight = 400;
    GameData.roomID = "";
    GameData.intervalList = []; //定时器列表
    GameData.number1 = "";
    GameData.number2 = "";
    GameData.number3 = "";
    GameData.playerTime = 180;
    GameData.roomPropertyType = { "mapA": "mapA", "mapB": "mapB" };
    GameData.roomPropertyValue = "mapA";
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map