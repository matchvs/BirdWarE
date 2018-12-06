class uiResult extends BaseView {
	public playerScore:eui.Label;
	public enemyScore:eui.Label;
	public playerLayout:eui.Group;
	public enemyLayout:eui.Group;
	public playerNameLayout:eui.Group;
	public enemytNameLayout:eui.Group;
	public win:eui.Image;
	public lose:eui.Image;


	public back:eui.Group;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemoveFromStage,this);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}
	
	public onEnter(context:any):void
	{
		let friendIds = context.friendIds;
		let enemyIds = context.enemyIds;
		let friendScore = context.friendScore;
		let enemyScore = context.enemyScore;
		let friendState = context.friendState;
		let enemyState = context.enemyState;

		this.playerScore.text = friendScore + "";
		this.enemyScore.text = enemyScore + "";

		// let platform: any = window.platform;
		// //主域向子域发送自定义消息
		// platform.openDataContext.postMessage({
		// 	isDisplay: true,
		// 	text: 'hello',
		// 	year: (new Date()).getFullYear(),
		// 	command: "setUserCloudStorage"
		// });
		if(friendState == 1)
		{
			this.lose.visible = true;
			this.win.visible = false;
			var sound:egret.Sound = RES.getRes("lose_mp3");
  			sound.play(0,1);
		}else if(enemyState == 1)
		{
			this.win.visible = true;
			this.lose.visible = false;
			var sound:egret.Sound = RES.getRes("vitory_mp3");
  			sound.play(0,1);
		}else{
			if(friendScore >= enemyScore)
			{
				this.win.visible = true;
				this.lose.visible = false;
				var sound:egret.Sound = RES.getRes("vitory_mp3");
				sound.play(0,1);
			}else{
				this.lose.visible = true;
				this.win.visible = false;
				var sound:egret.Sound = RES.getRes("lose_mp3");
				sound.play(0,1);
			}
		}

		for(let i=0;i<this.playerLayout.numChildren;i++)
		{
			this.playerLayout.getChildAt(i).visible = false;
		}
		for(let i=0;i<friendIds.length;i++)
		{
			this.playerLayout.getChildAt(i).visible = true;
			(<playerIcon>this.playerLayout.getChildAt(i)).setData(friendIds[i]);
		}
		for(let i=0;i<this.playerNameLayout.numChildren;i++)
		{
			this.playerNameLayout.getChildAt(i).visible = false;
		}
		for(let i=0;i<friendIds.length;i++)
		{
			this.playerNameLayout.getChildAt(i).visible = true;
			(<eui.Label>this.playerNameLayout.getChildAt(i)).text = friendIds[i].nickName;
		}
		for(let i=0;i<this.enemyLayout.numChildren;i++)
		{
			this.enemyLayout.getChildAt(i).visible =false;
		}
		for(let i=0;i<enemyIds.length;i++)
		{
			this.enemyLayout.getChildAt(i).visible = true;
			(<playerIcon>this.enemyLayout.getChildAt(i)).setData(enemyIds[i]);
		}
		for(let i=0;i<this.enemytNameLayout.numChildren;i++)
		{
			this.enemytNameLayout.getChildAt(i).visible = false;
		}
		for(let i=0;i<enemyIds.length;i++)
		{
			this.enemytNameLayout.getChildAt(i).visible = true;
			(<eui.Label>this.enemytNameLayout.getChildAt(i)).text = enemyIds[i].nickName;
		}
	}

	private init()
	{
		this.back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBackClick,this);
	}

	private onAddToStage()
	{
		  //离开房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify,this);
		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP,this.leaveRoomResponse,this);
	}

	private onRemoveFromStage()
	{
		//离开房间
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify,this);
		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP,this.leaveRoomResponse,this);
	}

	private onBackClick()
	{
		
		mvs.MsEngine.getInstance.leaveRoom("");
		// ContextManager.Instance.backSpecifiedUI(UIType.lobbyBoard);
	}

	private leaveRoomResponse()
	{
		GameData.isRoomOwner = false;
	 	if(this.parent)	ContextManager.Instance.backSpecifiedUI(UIType.lobbyBoard);
	}

	private leaveRoomNotify()
	{

	}
}