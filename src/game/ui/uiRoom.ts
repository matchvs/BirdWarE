class uiRoom extends BaseView {
	public leave:eui.Group;
	public gamestart:eui.Group;
	public gamestartGray:eui.Group;
	public roomUserGroup:eui.Group;

	private players = [];
	private roomid = 0;
	private roomInfo = null;
	private ownerid = 0;

	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeFromStage,this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}

	private addToStage()
	{
		this.addMsResponseListen();
		
		while(this.roomUserGroup.numChildren > 0)
		{
			this.roomUserGroup.removeChildAt(0);
		}
		this.players = [];
		for(let i=0;i<GameData.maxPlayerNum;i++)
		{
			var temp:RoomUserInfo = new RoomUserInfo();
			this.players.push(temp);
			this.roomUserGroup.addChild(temp);
		}
	}

	private removeFromStage()
	{
		this.removeMsResponseListen();
	}

	private init()
	{
		this.gamestart.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gamestartClick,this);
		this.leave.addEventListener(egret.TouchEvent.TOUCH_TAP,this.leaveRoom,this);
	}

	private addMsResponseListen(){
		 //加入房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINROOM_RSP, this.joinRoomResponse,this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINROOM_NTFY, this.joinRoomNotify,this);

        //离开房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP, this.leaveRoomResponse,this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify,this);

        //踢人
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_KICKPLAYER_RSP, this.kickPlayerResponse,this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_KICKPLAYER_NTFY, this.kickPlayerNotify,this);

		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINOVER_RSP, this.joinOverResponse,this);
		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINOVER_NTFY, this.joinOverNotify,this);

		//发送消息
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_SENDEVENT_NTFY, this.sendEventNotify,this);

	    mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp,this);

		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY,this.networkStateNotify,this);
    }

	private removeMsResponseListen(){
		 //加入房间
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINROOM_RSP, this.joinRoomResponse,this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINROOM_NTFY, this.joinRoomNotify,this);

        //离开房间
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP, this.leaveRoomResponse,this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify,this);

        //踢人
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_KICKPLAYER_RSP, this.kickPlayerResponse,this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_KICKPLAYER_NTFY, this.kickPlayerNotify,this);

		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINOVER_RSP, this.joinOverResponse,this);
		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINOVER_NTFY, this.joinOverNotify,this);

		//发送消息
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_SENDEVENT_NTFY, this.sendEventNotify,this);

		 mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp,this);

		 mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY,this.networkStateNotify,this);
	}

	public onEnter(context:any):void
	{
		let createRoom:boolean = context[0];
		if(createRoom)
		{
			let rsp = context[1];
			this.roomid = rsp.roomID;
			this.ownerid = rsp.owner;
			GameData.isRoomOwner = true;
			this.refreshStartBtn();
			this.createRoomInit(rsp);
		}else{
			let roomUserInfoList = context[1];
			let roominfo = context[2];
			GameData.isRoomOwner = false;
			this.joinRoomInit(roomUserInfoList,roominfo);
			this.refreshStartBtn();
		}
	}
	
	private refreshStartBtn()
	{
		if(GameData.isRoomOwner)
		{
			this.gamestart.visible = true;
			this.gamestartGray.visible = false;
		}else 
		{
			this.gamestartGray.visible = true;
			this.gamestart.visible = false;
		}
	}

	private createRoomInit(rsp)
	{
		this.roomid = rsp.roomID;
		this.ownerid = rsp.owner;
		this.players[0].setData(this.ownerid,this.ownerid,{"id":GameData.gameUser.id,"nickName":GameData.gameUser.name,"avatar":GameData.gameUser.avatar});
		GameData.isRoomOwner = true;
		this.refreshStartBtn();
	}

	private joinRoomInit(roomUserInfoList, roomInfo)
	{
		 roomUserInfoList.sort(function(a, b) {
            if (roomInfo.ownerId === b.userId) {
                return 1;
            }
            return 0;
        });

		roomUserInfoList.push({
			userId: GameData.gameUser.id,
						userProfile: JSON.stringify({"id":GameData.gameUser.id,"nickName":GameData.gameUser.name,"avatar":GameData.gameUser.avatar})
		})
		
        this.ownerid = roomInfo.ownerId;
        for (var j = 0; j < roomUserInfoList.length; j++) {
			let userProfileStr = roomUserInfoList[j].userProfile;
			let userProfile = JSON.parse(userProfileStr);
            this.players[j].setData(roomUserInfoList[j].userId, this.ownerid,userProfile);
        }
        this.refreshStartBtn();
	}

	private leaveRoom()
	{
		mvs.MsEngine.getInstance.leaveRoom("");
	}

	private gamestartClick()
	{
		if(!GameData.isRoomOwner)
		{
			//不是房主等待房间开始
		}
		var userIds = [];
		var playerCnt = 0;
		for (var j = 0; j < this.players.length; j++) {
            if (this.players[j].userid != 0) {
                playerCnt++;
                userIds.push(this.players[j].userProfile);
            }
        }

		if (playerCnt == GameData.maxPlayerNum) {
            var result = mvs.MsEngine.getInstance.joinOver("");
            if (result !== 0) {
                console.log("关闭房间失败，错误码：", result);
            }

            GameData.playerUserProfiles = userIds;

			let value = JSON.stringify({
				action:"gamestart",
			})
			mvs.MsEngine.getInstance.sendEvent(value);
        } else {
			var toast = new Toast("人数不足，无法开始。",this.width,this.height);
			this.addChild(toast);
        }
	}
	private leaveRoomResponse(ev:egret.Event)
	{
		if(!this.parent)
			return;
		GameData.isRoomOwner = false;
		ContextManager.Instance.uiBack();
	}

	private leaveRoomNotify(ev:egret.Event)
	{
		if(!this.parent)
			return;
		let leaveRoomInfo = ev.data;
		for (var j = 0; j < this.players.length; j++) {
            if (this.players[j].userid === leaveRoomInfo.userId) {
                this.players[j].init();
                break;
            }
        }
        this.ownerid = leaveRoomInfo.owner;
        if (this.ownerid === GameData.gameUser.id) {
            GameData.isRoomOwner = true;
        }
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].userid != 0) {
                this.players[i].setData(this.players[i].userid, this.ownerid,this.players[i].userProfile);
            }
        }
        this.refreshStartBtn();
	}

	private kickPlayerResponse(ev:egret.Event)
	{
		let rsp = ev.data;
		let owner = rsp.owner;
		for (var j = 0; j < this.players.length; j++) {
            if (this.players[j].userid === rsp.userID) {
                this.players[j].init();
                break;
            }
        }
        if (GameData.gameUser.id === rsp.userID) {
            GameData.isRoomOwner = false;
			ContextManager.Instance.uiBack();
        }

		this.ownerid = owner;
		if(owner == GameData.gameUser.id)
		{
			GameData.isRoomOwner = true;
		}

		for (var i = 0; i < this.players.length; i++) {
			if (this.players[i].userid != 0) {
				this.players[i].setData(this.players[i].userid, this.ownerid,this.players[i].userProfile);
			}
		}
      	this.refreshStartBtn();
	}

	private kickPlayerNotify(ev:egret.Event)
	{
		let rsp = ev.data;
		let userID = rsp.userID;
		let owner = rsp.owner;
		for (var j = 0; j < this.players.length; j++) {
            if (this.players[j].userid == rsp.userId) {
                this.players[j].init();
                break;
            }
        }
        if (GameData.gameUser.id == rsp.userId) {
            GameData.isRoomOwner = false;
			ContextManager.Instance.uiBack();
        }

		if(owner == GameData.gameUser.id)
		{
			GameData.isRoomOwner = true;
		}

		for (var i = 0; i < this.players.length; i++) {
			if (this.players[i].userid != 0) {
				this.players[i].setData(this.players[i].userid, this.ownerid,this.players[i].userProfile);
			}
		}
      	  this.refreshStartBtn();
	}

	private joinRoomResponse(ev:egret.Event)
	{
		if(!this.parent)
			return;
		let rsp = ev.data;
		GameData.isRoomOwner = false;
		ContextManager.Instance.uiBack();
	}

	private joinRoomNotify(ev:egret.Event)
	{
		if(!this.parent)
			return;
		let roomUserInfo = ev.data;
		let userProfile = roomUserInfo.userProfile;
		let profile = JSON.parse(userProfile);
		 for (var j = 0; j < this.players.length; j++) {
            if (this.players[j].userid == 0) {
                this.players[j].setData(roomUserInfo.userId, this.ownerid,profile);
                break;
            }
        }
	}

	private joinOverResponse(ev:egret.Event)
	{
		if(!this.parent)
			return;
		ContextManager.Instance.showUI(UIType.gameBoard);
	}

	private joinOverNotify(ev:egret.Event)
	{

	}

	private sendEventNotify(event:egret.Event)
	{
		let sdnotify = event.data;
		if(sdnotify && sdnotify.cpProto){
			if(sdnotify.cpProto.indexOf("gamestart") >= 0)
			{
				var userIds = [];
				for (var j = 0; j < this.players.length; j++) {
					if (this.players[j].userid != 0) {
						userIds.push(this.players[j].userProfile);
					}
				}
				GameData.playerUserProfiles = userIds;
				ContextManager.Instance.showUI(UIType.gameBoard);
			}
		}
	}

	private onErrorRsp(ev:egret.Event)
	{
		let data = ev.data;
		let errorCode = data.errCode;
		if(errorCode == 1001)
		{
			let tip = new uiTip("网络断开连接");
			this.addChild(tip);
			setTimeout(function() {
				mvs.MsEngine.getInstance.logOut();
				ContextManager.Instance.backSpecifiedUI(UIType.loginBoard);
			}, 5000);
		}
	}

	private networkStateNotify(ev:egret.Event)
	{
		let data = ev.data;
		let state = data.state;
		let userID = data.userID;
		let owner = data.owner;
		if(state == 1)
		{
			let tip = new uiTip("玩家"+userID+"网络断开连接");
			this.addChild(tip);

			//手动踢出房间
			mvs.MsEngine.getInstance.kickPlayer(userID,"");
		}else if(state == 3)
		{
		}
	}
}