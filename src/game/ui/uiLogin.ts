class uiLogin extends BaseView {
	public start:eui.Image;
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.RemoveFromStage,this);
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
	}

	private RemoveFromStage()
	{
		this.removeMsResponseListen();
	}

	private init()
	{
		this.start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStartClick,this);
		mvs.MsEngine.getInstance.init(GameData.CHANNEL, GameData.DEFAULT_ENV, GameData.gameID);
	}

	private addMsResponseListen()
	{
		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_REGISTERUSER_RSP,this.registResponse,this);
		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LOGIN_RSP,this.loginResponse,this);
		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_INIT_RSP, this.initResponse,this);
	}

	private removeMsResponseListen()
	{
		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_REGISTERUSER_RSP,this.registResponse,this);
		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LOGIN_RSP,this.loginResponse,this);
		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_INIT_RSP, this.initResponse,this);
	}

	private initResponse(ev:egret.Event)
	{
		if(egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME)
		{
			this.login().catch(e => {
				console.log(e);
			})
		}
	}

	private loginResponse(ev:egret.Event)
	{
		let login = ev.data;
		if(login.status == 200)
		{
			ContextManager.Instance.showUI(UIType.lobbyBoard);
		}
	}

	private registResponse(ev:egret.Event)
	{
		let userInfo = ev.data;
        GameData.gameUser.id = userInfo.id;
        GameData.gameUser.token = userInfo.token;
		if(egret.Capabilities.runtimeType != egret.RuntimeType.WXGAME)
		{
			GameData.gameUser.name = userInfo.name;
        	GameData.gameUser.avatar = userInfo.avatar;
		}
		if(userInfo.status == 0){
            mvs.MsEngine.getInstance.login(userInfo.id, userInfo.token, GameData.gameID,GameData.appkey, GameData.secretKey);
        }
	}

	private onStartClick()
	{
		mvs.MsEngine.getInstance.registerUser();
	}

	private async login()
	{
		await platform.login();
	}
}