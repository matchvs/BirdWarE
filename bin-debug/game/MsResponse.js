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
/**
 * 对 MatchvsResponse 回调接口 进行封装，使用 事件触发的机制 对消息进行处理，调用者只需要在使用的时候接受该事件消息，然后释放即可
 */
var mvs;
(function (mvs) {
    var MsResponse = (function (_super) {
        __extends(MsResponse, _super);
        function MsResponse() {
            var _this = _super.call(this) || this;
            _this._response = null; //Matchvs 引擎
            _this.registResponseCall();
            return _this;
        }
        Object.defineProperty(MsResponse, "getInstance", {
            /**
             * 获取实例
             */
            get: function () {
                if (MsResponse._instance == null) {
                    MsResponse._instance = new MsResponse();
                }
                return MsResponse._instance;
            },
            enumerable: true,
            configurable: true
        });
        MsResponse.release = function () {
            MsResponse._instance._response = null;
            MsResponse._instance = null;
        };
        /**
         * 获取引擎回调
         */
        MsResponse.prototype.getResponse = function () {
            if (this._response == null) {
                this.registResponseCall();
            }
            return this._response;
        };
        /**
         * MatchvsResponse 接口回调的重新注册
         */
        MsResponse.prototype.registResponseCall = function () {
            this._response = new MatchvsResponse();
            this._response.initResponse = this.initResponse.bind(this);
            this._response.registerUserResponse = this.registerUserResponse.bind(this);
            this._response.loginResponse = this.loginResponse.bind(this);
            this._response.joinRoomResponse = this.joinRoomResponse.bind(this);
            this._response.joinRoomNotify = this.joinRoomNotify.bind(this);
            this._response.createRoomResponse = this.createRoomResponse.bind(this);
            this._response.sendEventResponse = this.sendEventResponse.bind(this);
            this._response.sendEventNotify = this.sendEventNotify.bind(this);
            this._response.gameServerNotify = this.gameServerNotify.bind(this);
            this._response.joinOverResponse = this.joinOverResponse.bind(this);
            this._response.joinOverNotify = this.joinOverNotify.bind(this);
            this._response.leaveRoomResponse = this.leaveRoomResponse.bind(this);
            this._response.leaveRoomNotify = this.leaveRoomNotify.bind(this);
            this._response.networkStateNotify = this.networkStateNotify.bind(this);
            this._response.setFrameSyncResponse = this.setFrameSyncResponse.bind(this);
            this._response.frameUpdate = this.frameUpdate.bind(this);
            this._response.errorResponse = this.errorResponse.bind(this);
            this._response.logoutResponse = this.logOutResponse.bind(this);
            this._response.joinOpenResponse = this.joinOpenResponse.bind(this);
            this._response.joinOpenNotify = this.joinOpenNotify.bind(this);
            //踢人回调
            this._response.kickPlayerNotify = this.kickPlayerNotify.bind(this);
            this._response.kickPlayerResponse = this.kickPlayerResponse.bind(this);
            //设置房间属性回调
            this._response.setRoomPropertyNotify = this.setRoomPropertyNotify.bind(this);
            this._response.setRoomPropertyResponse = this.setRoomPropertyResponse.bind(this);
            // 获取房间详细信息回调
            this._response.getRoomDetailResponse = this.getRoomDetailResponse.bind(this);
            //获取房间列表 扩展 接口回调
            this._response.getRoomListExResponse = this.getRoomListExResponse.bind(this);
            //获取房间列表接口回调
            this._response.getRoomListResponse = this.getRoomListResponse.bind(this);
            this._response.reconnectResponse = this.reconnectResponse.bind(this);
        };
        /**
         * 初始化回调
         */
        MsResponse.prototype.initResponse = function (status) {
            console.info("initResponse status：", status);
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_INIT_RSP, false, false, { status: status }));
        };
        /**
         * 注册回调
         */
        MsResponse.prototype.registerUserResponse = function (userInfo) {
            console.info("registerUserResponse userInfo ", JSON.stringify(userInfo));
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_REGISTERUSER_RSP, false, false, userInfo));
        };
        /**
         * 登录回调
         */
        MsResponse.prototype.loginResponse = function (login) {
            console.info("[loginResponse] " + JSON.stringify(login));
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_LOGIN_RSP, false, false, login));
        };
        /**
         * 加入房间回调
         */
        MsResponse.prototype.joinRoomResponse = function (status, roomUserInfoList, roomInfo) {
            if (status == 200) {
                console.info("[joinRoomResponse] status：", status);
                var users_1 = [];
                roomUserInfoList.forEach(function (element) {
                    var usr = new MsRoomUserInfo(element.userId, element.userProfile);
                    users_1.push(usr);
                });
                this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_JOINROOM_RSP, false, false, { status: status, userList: users_1, roomInfo: roomInfo }));
                return;
            }
            console.error("[joinRoomResponse error:]", status);
            return;
        };
        /**
         * 加入房间异步回调 发送 event 事件
         */
        MsResponse.prototype.joinRoomNotify = function (roomUserInfo) {
            console.info("[joinRoomNotify] " + JSON.stringify(roomUserInfo));
            var data = {
                userId: roomUserInfo.userId,
                userProfile: roomUserInfo.userProfile
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_JOINROOM_NTFY, false, false, data));
        };
        /**
         * 创建房间回调
         */
        MsResponse.prototype.createRoomResponse = function (rsp) {
            console.info("[sendEventResponse]" + JSON.stringify(rsp));
            var data = {
                status: rsp.status,
                roomID: rsp.roomID,
                owner: rsp.owner,
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_CREATEROOM_RSP, false, false, data));
        };
        /**
         * 发送消息回调
         */
        MsResponse.prototype.sendEventResponse = function (rsp) {
            //console.info("[sendEventResponse]"+JSON.stringify(rsp));
            var data = {
                status: rsp.status,
                sequence: rsp.sequence
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_SENDEVENT_RSP, false, false, data));
        };
        /**
         * 发送消息异步回调
         */
        MsResponse.prototype.sendEventNotify = function (eventInfo) {
            //console.info("[sendEventNotify] "+JSON.stringify(eventInfo));
            var data = {
                srcUserId: eventInfo.srcUserId,
                cpProto: eventInfo.cpProto
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_SENDEVENT_NTFY, false, false, data));
        };
        /**
         * 收到 gameServe 消息回调 srcUserId = 0
         */
        MsResponse.prototype.gameServerNotify = function (eventInfo) {
            console.info("[gameServerNotify] " + JSON.stringify(eventInfo));
            var data = {
                srcUserId: eventInfo.srcUserId,
                cpProto: eventInfo.cpProto
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_GAMESERVER_NTFY, false, false, data));
        };
        /**
         * 关闭房间回调 并发送 Event 事件
         */
        MsResponse.prototype.joinOverResponse = function (rsp) {
            console.info("[joinOverResponse] " + JSON.stringify(rsp));
            var data = { status: rsp.status, cpProto: rsp.cpProto };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_JOINOVER_RSP, false, false, data));
        };
        /**
         * 关闭房间异步回调 并发送 Event 事件
         */
        MsResponse.prototype.joinOverNotify = function (Info) {
            console.info("[joinOverNotify] " + JSON.stringify(Info));
            var data = { roomID: Info.roomID, userID: Info.srcUserID, cpProto: Info.cpProto };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_JOINOVER_NTFY, false, false, data));
        };
        /**
         * 自己离开房间回调
         */
        MsResponse.prototype.leaveRoomResponse = function (rsp) {
            console.info("[leaveRoomResponse] " + JSON.stringify(rsp));
            var data = {
                roomID: rsp.roomID,
                status: rsp.status,
                userId: rsp.userId,
                cpProto: rsp.cpProto
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_LEAVEROOM_RSP, false, false, data));
        };
        /**
         * 他人离开房间回调
         */
        MsResponse.prototype.leaveRoomNotify = function (leaveRoomInfo) {
            console.info("[leaveRoomNotify] " + JSON.stringify(leaveRoomInfo));
            var data = {
                roomID: leaveRoomInfo.roomID,
                userId: leaveRoomInfo.userId,
                owner: leaveRoomInfo.owner,
                cpProto: leaveRoomInfo.cpProto
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, false, false, data));
        };
        /**
         * 其他玩家网络状态回调
         */
        MsResponse.prototype.networkStateNotify = function (netnotify) {
            console.info("[networkStateNotify] " + JSON.stringify(netnotify));
            var data = {
                roomID: netnotify.roomID,
                userID: netnotify.userID,
                owner: netnotify.owner,
                state: netnotify.state
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY, false, false, data));
        };
        /**
         * 设置帧同步回调
         */
        MsResponse.prototype.setFrameSyncResponse = function (rsp) {
            //console.info("[setFrameSyncResponse] "+JSON.stringify(rsp));
            var data = {
                mStatus: rsp.mStatus
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_SETFRAMESYNC_RSP, false, false, data));
        };
        /**
         * 更新帧数据
         */
        MsResponse.prototype.frameUpdate = function (fd) {
            //console.info("[setFrameSyncResponse] "+JSON.stringify(fd));
            var data = {
                frameIndex: fd.frameIndex,
                frameItems: fd.frameItems,
                frameWaitCount: fd.frameWaitCount,
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_FRAMEUPDATE, false, false, data));
        };
        /**
         * 有错误发生的时候 错误回调
         */
        MsResponse.prototype.errorResponse = function (errCode, errMsg) {
            console.info("[setFrameSyncResponse] errCode:" + errCode + " errMsg:" + errMsg);
            var data = {
                errCode: errCode,
                errMsg: errMsg
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_ERROR_RSP, false, false, data));
        };
        /**
         * 登出回调
         */
        MsResponse.prototype.logOutResponse = function (status) {
            console.info("[logOutResponse] status:", status);
            var data = {
                status: status
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_LOGOUT_RSP, false, false, data));
        };
        /**
         * 自己打开房间回调
         */
        MsResponse.prototype.joinOpenResponse = function (info) {
            console.info("[joinOpenResponse] info:", JSON.stringify(info));
            var data = {
                status: info.status,
                cpProto: info.cpProto,
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_JOINOPEN_RSP, false, false, data));
        };
        /**
         * 他人打开房间回调
         */
        MsResponse.prototype.joinOpenNotify = function (info) {
            console.info("[joinOpenResponse] info:", JSON.stringify(info));
            var data = {
                roomID: info.roomID,
                userID: info.userID,
                cpProto: info.cpProto,
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_JOINOPEN_RSP, false, false, data));
        };
        MsResponse.prototype.kickPlayerNotify = function (knotify) {
            console.info("[kickPlayerNotify] info:", JSON.stringify(knotify));
            var data = {
                cpProto: knotify.cpProto,
                owner: knotify.owner,
                srcUserId: knotify.srcUserId,
                userId: knotify.userId
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_KICKPLAYER_NTFY, false, false, data));
        };
        MsResponse.prototype.kickPlayerResponse = function (rsp) {
            console.info("[kickPlayerResponse] info:", JSON.stringify(rsp));
            var data = {
                owner: rsp.owner,
                userID: rsp.userID,
                status: rsp.status
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_KICKPLAYER_RSP, false, false, data));
        };
        /**
         * 设置房间属性 异步 回调
         */
        MsResponse.prototype.setRoomPropertyNotify = function (notify) {
            console.info("[setRoomPropertyNotify] info:", JSON.stringify(notify));
            var data = {
                roomID: notify.roomID,
                userID: notify.userID,
                roomProperty: notify.roomProperty
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_SETROOMPROPERTY_NTFY, false, false, data));
        };
        /**
         * 设置房间属性回调
         */
        MsResponse.prototype.setRoomPropertyResponse = function (rsp) {
            console.info("[setRoomPropertyResponse] info:", JSON.stringify(rsp));
            var data = {
                roomID: rsp.roomID,
                userID: rsp.userID,
                roomProperty: rsp.roomProperty,
                status: rsp.status
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_SETROOMPROPERTY_RSP, false, false, data));
        };
        /**
         * 获取房间详细信息回调
         */
        MsResponse.prototype.getRoomDetailResponse = function (rsp) {
            console.info("[getRoomDetailResponse] info:", JSON.stringify(rsp));
            var data = {
                canWatch: rsp.canWatch,
                createFlag: rsp.createFlag,
                maxPlayer: rsp.maxPlayer,
                mode: rsp.mode,
                owner: rsp.owner,
                roomProperty: rsp.roomProperty,
                state: rsp.state,
                status: rsp.status,
                userInfos: rsp.userInfos
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_GETROOMDETAIL_RSP, false, false, data));
        };
        /**
         * 获取房间列表 扩展接口 回调
         */
        MsResponse.prototype.getRoomListExResponse = function (rsp) {
            console.info("[getRoomListExResponse] info:", JSON.stringify(rsp));
            var data = {
                roomAttrs: rsp.roomAttrs,
                status: rsp.status,
                total: rsp.total
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_GETROOMLIST_EX_RSP, false, false, data));
        };
        /**
         * 获取房间列表接口回调(信息较少推进使用 getRoomListEx)
         */
        MsResponse.prototype.getRoomListResponse = function (status, roomInfos) {
            console.info("[getRoomListResponse] info:", status, JSON.stringify(roomInfos));
            var data = {
                status: status,
                roomInfos: roomInfos
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_GETROOMLIST_RSP, false, false, data));
        };
        /**
         * 断线重新连接回调
         */
        MsResponse.prototype.reconnectResponse = function (status, roomUserInfoList, roomInfo) {
            console.info("[reconnectResponse] info:", status);
            var data = {
                status: status,
                roomUserInfoList: roomUserInfoList,
                roomInfo: roomInfo
            };
            this.dispatchEvent(new egret.Event(mvs.MsEvent.EVENT_RECONNECT_RSP, false, false, data));
        };
        MsResponse._instance = null;
        return MsResponse;
    }(egret.EventDispatcher));
    mvs.MsResponse = MsResponse;
    __reflect(MsResponse.prototype, "mvs.MsResponse");
})(mvs || (mvs = {}));
//# sourceMappingURL=MsResponse.js.map