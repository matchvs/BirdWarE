class uiRank extends BaseView{
	public exit:eui.Image;

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
		this.exit.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onExitClick,this);
	}

	private onExitClick()
	{
		ContextManager.Instance.uiBack();
	}
}