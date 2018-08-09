class uiCreateRoom extends BaseView {
	public plus:eui.Image;
	public sub:eui.Image;
	public roomName:eui.TextInput;
	public playerNum:eui.Label;
	public create:eui.Group;
	public back:eui.Image;
	private num = 2;

	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
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
		this.num = 2;
		this.playerNum.text = this.num.toString();
	}

	private init()
	{
		this.back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBackClick,this);
		this.plus.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onPlusClick,this);
		this.sub.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onSubClick,this);
		this.create.addEventListener(egret.TouchEvent.TOUCH_TAP,this.createRoom,this);
		this.addMsResponseListen();
	}

	private addMsResponseListen(){
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_CREATEROOM_RSP, this.createRoomResponse,this);
    }

	private onBackClick()
	{
		ContextManager.Instance.dialogBack();
	}

	private  onPlusClick()
	{
		if(this.num >= 4)
		{
			this.plus.touchEnabled = false;
			this.num = 4;
		}else{
			this.num +=2;
			this.sub.touchEnabled = true;
		}
		this.playerNum.text = this.num.toString();
	}

	private onSubClick()
	{
		if(this.num <= 2)
		{
			this.sub.touchEnabled = false;
			this.num = 2;
		}else{
			this.num -= 2;
			this.plus.touchEnabled = true;
		}
		this.playerNum.text = this.num.toString();
	}

	private createRoom()
	{
		GameData.maxPlayerNum = this.num;
		let roomName = this.roomName.text;

		let create:MsCreateRoomInfo = new MsCreateRoomInfo(roomName,this.num,0,0,1,"");
		mvs.MsEngine.getInstance.createRoom(create,JSON.stringify({name:GameData.gameUser.name,avatar:GameData.gameUser.avatar}));
	}

	private createRoomResponse(ev:egret.Event)
	{
		let rsp = ev.data;
  		GameData.roomID = rsp.roomID;
		ContextManager.Instance.showUI(UIType.roomView,[true,rsp]);
	}
}