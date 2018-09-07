class ContextManager {
	private uilist :Array<BaseView> = new Array();
	private dialogList: Array<BaseView> = new Array();
	private static _instance : ContextManager;
	private stage:eui.UILayer;
	private currentUI:egret.DisplayObjectContainer;

	public static get Instance()
	{
		if(!ContextManager._instance)
		{
			ContextManager._instance = new ContextManager();
		}
		return ContextManager._instance;
	}

	public constructor() {
	}

	public init(stage:eui.UILayer):void
	{
		this.stage = stage;
		this.showUI(UIType.loginBoard);
	}

	public showUI(type:UIType,context:any = null):void
	{
		this.uiPush(type,context);
	}

	public showDialog(type:UIType,context:any = null):void
	{
		if(this.currentUI == null) return;
		this.dialogPush(type,this.currentUI,context);
	}

	public uiBack():void
	{
		if(this.currentUI == null) 
			return;
		this.uiPop();
	}

	public uiBackMain():void
	{
		while(this.uilist.length > 0)
		{
			let item = this.uilist.pop();
			if(this.stage.contains(item))
				this.stage.removeChild(item);
		}
		this.uiPush(UIType.loginBoard)
	}

	public backSpecifiedUI(type:UIType)
	{
		this.uiBackMain();
		this.uiPush(type);
	}

	public dialogBack():void
	{
		this.dialogPop();
	}

	public BackSpecifiedDialog(type:UIType):void
	{
		while(this.dialogList.length > 0)
		{
			let item = this.dialogList.pop();
			if(this.currentUI.contains(item))
			{
				item.onPause();
				this.currentUI.removeChild(item);
			}
		}
		this.showDialog(type);
	}

	private uiPush(type:UIType,context:any = null):void
	{
		while(this.dialogList.length)
		{
			let item = this.dialogList.pop();
			if(this.currentUI.contains(item))
			{
				item.onPause();
				this.currentUI.removeChild(item);
			}
		}
		if(this.uilist.length > 0)
		{
			let lastView = this.uilist[this.uilist.length - 1];
			lastView.onPause();
			this.stage.removeChild(lastView);
		}
		let currentView = UIManager.getInstance().getSingleUI(type);
		this.stage.addChild(currentView);
		this.uilist.push(currentView);
		currentView.onEnter(context);

		this.currentUI = currentView;
	}

	private uiPop():void
	{
		if(this.uilist.length > 0)
		{
			let currentView = this.uilist.pop();
			this.stage.removeChild(currentView);
			currentView.onExit();

			currentView = this.uilist[this.uilist.length - 1];
			this.stage.addChild(currentView);
			currentView.onResume();

			this.currentUI = currentView;
		}
	}

	private dialogPush(type:UIType,stage:egret.DisplayObjectContainer,context:any) : void
	{
		if(this.dialogList.length > 0)
		{
			let lastView = this.dialogList[this.dialogList.length - 1];
			lastView.onPause();
			stage.removeChild(lastView);
		}
		let currentView = UIManager.getInstance().getSingleUI(type);
		stage.addChild(currentView);
		this.dialogList.push(currentView);
		currentView.onEnter(context);
	}

	private dialogPop():void
	{
		if(this.dialogList.length > 0)
		{
			let currentView = this.dialogList.pop();
			this.currentUI.removeChild(currentView);
			currentView.onExit();
		}

		if(this.dialogList.length > 0)
		{
			let currentView = this.dialogList[this.uilist.length - 1];
			this.currentUI.addChild(currentView);
			currentView.onResume();
		}
	}
}