var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameUser = (function () {
    function GameUser() {
        this.id = 0; //用户ID
        this.name = ""; //名称
        this.avatar = "http://pic.vszone.cn/upload/avatar/1464079970.png";
        this.token = ""; //校验值
        this.pValue = 0; //积分
        this.isOwner = false; //房主标记
    }
    return GameUser;
}());
__reflect(GameUser.prototype, "GameUser");
//# sourceMappingURL=GameUser.js.map