class uiExit extends BaseView{
	public back:eui.Image;
	public quit:eui.Group;

	public constructor() {
		super();
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
		this.quit.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onLeaveGameClick,this);
	}

	private onBackClick()
	{
		ContextManager.Instance.dialogBack();
	}

	private onLeaveGameClick()
	{
		mvs.MsEngine.getInstance.leaveRoom("");
	}
}