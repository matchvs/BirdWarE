class uiRoomList extends BaseView {
	public back:eui.Image;
	public search:eui.Image;
	public roomGroup:eui.Group;
	public roomIDInput:eui.TextInput;
	private rooms = [];
	private roomAttrs;

	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeFromStage,this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	public onEnter(context:any):void
	{
		this.getRoomList();
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}
	
	private addToStage()
	{
		this.rooms = [];
		this.roomIDInput.text = "";
		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_GETROOMLIST_EX_RSP,this.getRoomListResponse,this);
		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINROOM_RSP,this.joinRoomResponse,this);
		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_GETROOMLIST_RSP,this.getRoomListExResponse,this);

	    mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp,this);
	}

	private removeFromStage()
	{
		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_GETROOMLIST_EX_RSP,this.getRoomListResponse,this);
		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_JOINROOM_RSP,this.joinRoomResponse,this);
		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_GETROOMLIST_RSP,this.getRoomListExResponse,this);

	    mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp,this);
	}

	private init()
	{
		this.back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBackClick,this);
		this.search.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onSearchClick,this);
	}

	private getRoomListExResponse(ev:egret.Event)
	{
		let rsp:MsGetRoomListExRsp = ev.data;
		while(this.roomGroup.numChildren > 0)
		{
			this.roomGroup.removeChildAt(0);
		}
		
		this.roomAttrs = rsp.roomAttrs;

		this.rooms = [];
		for(let i=0;i<rsp.roomAttrs.length;i++)
		{
			let room = new RoomPrefab();
			room.msRoomAttribute = rsp.roomAttrs[i];
			this.roomGroup.addChild(room);

			this.rooms.push(room);
		}
	}

	private getRoomListResponse(ev:egret.Event)
	{
		let rsp:MsGetRoomListExRsp = ev.data;
		while(this.roomGroup.numChildren > 0)
		{
			this.roomGroup.removeChildAt(0);
		}
		
		this.roomAttrs = rsp.roomAttrs;

		this.rooms = [];
		for(let i=0;i<rsp.roomAttrs.length;i++)
		{
			let room = new RoomPrefab();
			room.msRoomAttribute = rsp.roomAttrs[i];
			this.roomGroup.addChild(room);

			this.rooms.push(room);
		}
	}

	private joinRoomResponse(ev:egret.Event)
	{
		let data = ev.data;
        let roomInfo = data.roomInfo;
        let roomuserInfoList = data.userList;

		for(let i=0;i<this.roomAttrs.length;i++)
		{
			 if (roomInfo.roomID === this.roomAttrs[i].roomID) {
                    GameData.maxPlayerNum = this.roomAttrs[i].maxPlayer;
                    break;
             }
		}

		ContextManager.Instance.showUI(UIType.roomView,[false,roomuserInfoList,roomInfo]);
	}

	private getRoomList()
	{
		 var filter = {
            maxPlayer: 0,
            mode: 0,
            canWatch: 0,
            roomProperty: "",
            full: 2,
            state: 1,
            sort: 1,
            order: 0,
            pageNo: 0,
            pageSize: 20
        }
        mvs.MsEngine.getInstance.getRoomListEx(filter);
	}

	private onBackClick()
	{
		ContextManager.Instance.dialogBack();
	}

	private onSearchClick()
	{
		if(this.roomIDInput.text == "")
		{
			this.getRoomList();
		}else{
			for(let i=0;i<this.roomGroup.numChildren;i++)
			{
				let room = <RoomPrefab>this.roomGroup[i]
				if(room.roomId.text == this.roomIDInput.text)
				{
					this.roomGroup.removeChild(this.roomGroup[i]);
				}
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
}