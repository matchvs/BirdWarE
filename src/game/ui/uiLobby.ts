class uiLobby extends BaseView{
	public username:eui.Label;
	public random:eui.Group;
	public createRoom:eui.Group;
	public joinRoom:eui.Group;
	public exit:eui.Image;

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
		this.username.text = GameData.gameUser.id.toString();
		this.addMsResponseListen();
	}

	private removeFromStage()
	{
		this.removeMsResponseListen();
	}

	private init()
	{
		this.createRoom.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCreateRoomClick,this);
		this.random.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onRandomMatch,this);
		this.joinRoom.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onJoinRoomMatch,this);
		this.exit.addEventListener(egret.TouchEvent.TOUCH_TAP,this.exitRoom,this);
	}

	private addMsResponseListen(){
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp,this);
    }

	private removeMsResponseListen()
	{
		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_ERROR_RSP,this.onErrorRsp,this);
	}

	private exitRoom()
	{
		mvs.MsEngine.getInstance.logOut();
		ContextManager.Instance.uiBack();
	}

	private onCreateRoomClick()
	{
		ContextManager.Instance.showDialog(UIType.createRoom);
	}

	private onRandomMatch()
	{
		ContextManager.Instance.showUI(UIType.matchBoard);
	}

	private onJoinRoomMatch()
	{
		ContextManager.Instance.showDialog(UIType.roomList);
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