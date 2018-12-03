class uiMatch extends BaseView {
	public player1:playerIcon;
	public player2:playerIcon;
	public player3:playerIcon;
	public player4:playerIcon;
	public back:eui.Group;
	
	private gameUserList = new Array;
	private playerIcons = [];

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
	
	private init()
	{
		this.back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBackClick,this);
	}

	private addToStage()
	{
		this.addMsResponseListen();
	}

	private removeFromStage()
	{
		this.removeMsResponseListen();
	}

	public onEnter(context:any):void
	{
		GameData.maxPlayerNum = 2;
		let info = {"id":GameData.gameUser.id,"nickName":GameData.gameUser.name,"avatar":GameData.gameUser.avatar};
		let infostr = JSON.stringify(info);
		mvs.MsEngine.getInstance.joinRandomRoom(GameData.maxPlayerNum,infostr);
		//this.playerIcons.push(this.player1);
		this.playerIcons.push(this.player2);
		this.playerIcons.push(this.player3);
		// this.playerIcons.push(this.player4);
	}

	private onBackClick()
	{
		mvs.MsEngine.getInstance.leaveRoom("");
	}

	private addMsResponseListen(){
        //加入房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINROOM_RSP, this.joinRoomResponse,this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINROOM_NTFY, this.joinRoomNotify,this);

        //关闭房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINOVER_NTFY, this.joinOverNotify,this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINOVER_RSP, this.joinOverResponse,this);

        //离开房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP, this.leaveRoomResponse,this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify,this);

		 mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp,this);
		 mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY,this.networkStateNotify,this);

		  //踢人
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_KICKPLAYER_RSP, this.kickPlayerResponse,this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_KICKPLAYER_NTFY, this.kickPlayerNotify,this);
    }

	private removeMsResponseListen()
	{
		  //加入房间
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINROOM_RSP, this.joinRoomResponse,this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINROOM_NTFY, this.joinRoomNotify,this);

        //关闭房间
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINOVER_NTFY, this.joinOverNotify,this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINOVER_RSP, this.joinOverResponse,this);

        //离开房间
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP, this.leaveRoomResponse,this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify,this);

		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp,this);
		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY,this.networkStateNotify,this);

		 //踢人
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_KICKPLAYER_RSP, this.kickPlayerResponse,this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_KICKPLAYER_NTFY, this.kickPlayerNotify,this);
	}

	private joinRoomResponse(event:egret.Event) {
		if(!this.parent)
			return;
		let data = event.data;
		let roomInfo = data.roomInfo;
		let roomuserInfoList = data.userList;
        if (data.status !== 200) {
            console.log("joinRoomResponse,status:" + data.status);
            return;
        }
		GameData.roomID = roomInfo.roomID;
		this.gameUserList = [];
		this.gameUserList.push({"id":GameData.gameUser.id,"nickName":GameData.gameUser.name,"avatar":GameData.gameUser.avatar});

		for(let i=0;i<roomuserInfoList.length;i++)
		{
			if(GameData.gameUser.id != roomuserInfoList[i].userID)
			{
				this.gameUserList.push(JSON.parse(roomuserInfoList[i].userProfile));
			}
		}

		if(this.gameUserList.length == 1)
		{
			GameData.isRoomOwner = true;
		}

		for(let i=0;i<this.gameUserList.length;i++)
		{
			this.playerIcons[i].setData(this.gameUserList[i]);
		}

		this.gameUserList.sort(function(a,b){
			return a.id - b.id;
		})

		GameData.playerUserProfiles = this.gameUserList;
		if(this.gameUserList.length >= 2)
		{
			mvs.MsEngine.getInstance.joinOver("");
		}
	}

	private joinRoomNotify(ev:egret.Event) {
		if(!this.parent)
			return;
		let data = ev.data;
		let userProfileStr = data.userProfile;
		let userProfile = JSON.parse(userProfileStr);
		this.gameUserList.push(userProfile);
		for(let i=0;i<this.playerIcons.length;i++)
		{
			this.playerIcons[i].init();
		}
		for(let i=0;i<this.gameUserList.length;i++)
		{
			this.playerIcons[i].setData(this.gameUserList[i]);
		}
		this.gameUserList.sort(function(a,b){
			return a.id-b.id;
		});
		GameData.playerUserProfiles = this.gameUserList;
	}

	private joinOverNotify(ev:egret.Event) {
		//进入游戏界面
		ContextManager.Instance.showUI(UIType.gameBoard);
	}

	private joinOverResponse(ev:egret.Event) {
		//进入游戏界面
		ContextManager.Instance.showUI(UIType.gameBoard);
	}
	
	private leaveRoomResponse(ev:egret.Event) {
		ContextManager.Instance.uiBack();
		GameData.isRoomOwner = false;
	}

	private leaveRoomNotify(ev:egret.Event) {
		if(!this.parent)
			return;
		let leaveRoomInfo = ev.data;
		let userID = leaveRoomInfo.userId;
		let owner = leaveRoomInfo.owner;
		let index = -1;
		for(let i=0;i<this.gameUserList.length;i++)
		{
			if(this.gameUserList[i] == userID)
			{
				index = i;
			}
		}
		this.gameUserList.splice(index,1);
		for(let i=0;i<this.playerIcons.length;i++)
		{
			this.playerIcons[i].init();
		}
		for(let i=0;i<this.gameUserList.length;i++)
		{
			this.playerIcons[i].setData(this.gameUserList[i]);
		}
		if(owner == GameData.gameUser.id)
		{
			GameData.isRoomOwner = true;
		}
	}

	private kickPlayerResponse(ev:egret.Event)
	{
		let data = ev.data;
		let userID = data.userID;
		let owner = data.owner;

		if(owner == GameData.gameUser.id)
		{
			GameData.isRoomOwner = true;
		}

		let index = -1;
		for(let i=0;i<this.gameUserList.length;i++)
		{
			if(this.gameUserList[i] == userID)
			{
				index = i;
			}
		}
		this.gameUserList.splice(index,1);
		for(let i=0;i<this.playerIcons.length;i++)
		{
			this.playerIcons[i].init();
		}
		for(let i=0;i<this.gameUserList.length;i++)
		{
			this.playerIcons[i].setData(this.gameUserList[i]);
		}
		if(owner == GameData.gameUser.id)
		{
			GameData.isRoomOwner = true;
		}
	}

	private kickPlayerNotify(ev:egret.Event)
	{
		let data = ev.data;
		let userID = data.userID;
		let owner = data.owner;

		if(owner == GameData.gameUser.id)
		{
			GameData.isRoomOwner = true;
		}

		let index = -1;
		for(let i=0;i<this.gameUserList.length;i++)
		{
			if(this.gameUserList[i] == userID)
			{
				index = i;
			}
		}
		this.gameUserList.splice(index,1);
		for(let i=0;i<this.playerIcons.length;i++)
		{
			this.playerIcons[i].init();
		}
		for(let i=0;i<this.gameUserList.length;i++)
		{
			this.playerIcons[i].setData(this.gameUserList[i]);
		}
		if(owner == GameData.gameUser.id)
		{
			GameData.isRoomOwner = true;
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
		
			// let tip = new uiTip("玩家"+userID+"网络断开连接");
			// this.addChild(tip);
			mvs.MsEngine.getInstance.kickPlayer(userID,"");
		}else if(state == 3)
		{
			// let tip = new uiTip("玩家"+userID+"离开房间");
			// this.addChild(tip);

			// if(owner == GameData.gameUser.id)
			// {
			// 	GameData.isRoomOwner = true;
			// }

			// let index = -1;
			// for(let i=0;i<this.gameUserList.length;i++)
			// {
			// 	if(this.gameUserList[i] == userID)
			// 	{
			// 		index = i;
			// 	}
			// }
			// this.gameUserList.splice(index,1);
			// for(let i=0;i<this.playerIcons.length;i++)
			// {
			// 	this.playerIcons[i].init();
			// }
			// for(let i=0;i<this.gameUserList.length;i++)
			// {
			// 	this.playerIcons[i].setData(this.gameUserList[i]);
			// }
			// if(owner == GameData.gameUser.id)
			// {
			// 	GameData.isRoomOwner = true;
			// }
		}
	}
}