class uiLobby extends BaseView{
	public username:eui.Label;
	public avatar:eui.Image;
	public avatarMask:eui.Image;
	public random:eui.Group;
	public createRoom:eui.Group;
	public joinRoom:eui.Group;
	public exit:eui.Image;
	public rank:eui.Group;
	public inviteFriends:eui.Group;

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
		this.avatar.mask = this.avatarMask
		if(egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME)
		{
			this.username.text = GameData.gameUser.name.toString();
			this.avatar.source = GameData.gameUser.avatar
		}else{
			this.username.text = GameData.gameUser.name.toString();
			this.avatar.source = GameData.gameUser.avatar
		}
		this.addMsResponseListen();
	}

	private removeFromStage()
	{
		this.removeMsResponseListen();
	}

	private btnClose:eui.Image;
	private init()
	{
		this.createRoom.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCreateRoomClick,this);
		this.random.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onRandomMatch,this);
		this.joinRoom.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onJoinRoomMatch,this);
		this.exit.addEventListener(egret.TouchEvent.TOUCH_TAP,this.exitRoom,this);
		this.rank.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onRankClick,this);
		this.inviteFriends.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onInviteFriends,this);

		this.btnClose = new eui.Image;
		this.btnClose.x = 50;
		this.btnClose.y = 100;
		this.btnClose.source = RES.getRes("btn-back_png");
		// this.btnClose.icon = "resource/btn-back.png";
		this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeRank,this);

		if(egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME)
		{
			let platform: any = window.platform;
			// 加载资源
			platform.openDataContext.postMessage({
				command:'loadRes'
			});
		}
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

 	private isRankClick:boolean = false;
    private bitmap: egret.Bitmap
	private rankingListMask: egret.Shape;
	private onRankClick()
	{
 		let platform: any = window.platform;
		if(egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME)
		{
			if (!this.isRankClick) {
				//处理遮罩，避免开放数据域事件影响主域。
				this.rankingListMask = new egret.Shape();
				this.rankingListMask.graphics.beginFill(0x000000, 1);
				this.rankingListMask.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
				this.rankingListMask.graphics.endFill();
				this.rankingListMask.alpha = 0.5;
				this.rankingListMask.touchEnabled = true;
				this.addChild(this.rankingListMask);

			

				//简单实现，打开这关闭使用一个按钮。
			// this.addChild(this.btnClose);
				//主要示例代码开始
				this.bitmap = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
				this.addChild(this.bitmap);

				this.addChild(this.btnClose);
				//主域向子域发送自定义消息
				platform.openDataContext.postMessage({
					isDisplay: this.isRankClick,
					text: 'hello',
					year: (new Date()).getFullYear(),
					command: "open"
				});
				//主要示例代码结束            
				this.isRankClick = true;
			}
		}
	}

	private closeRank()
	{
		let platform: any = window.platform;
		  if (this.isRankClick) {
			this.removeChild(this.btnClose);
            this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
            this.rankingListMask.parent && this.rankingListMask.parent.removeChild(this.rankingListMask);
            this.isRankClick = false;
            platform.openDataContext.postMessage({
                isDisplay: this.isRankClick,
                text: 'hello',
                year: (new Date()).getFullYear(),
                command: "close"
            });
        } 
	}
	private onInviteFriends()
	{
		window.platform.shareAppMessage().then((res)=>{
  			console.log('分享成功回调', res);
		},(err)=>{
		   console.log('分享失败回调', err);
		});
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