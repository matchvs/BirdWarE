class uiRank extends BaseView{
	public exit:eui.Image;
	public ranklist:eui.Group;
	public first:eui.Group;
	public firstName:eui.Label;
	public firstScore:eui.Label;
	public second:eui.Group;
	public secondName:eui.Label;
	public secondScore:eui.Label;
	public third:eui.Group;
	public thirdName:eui.Label;
	public thirdScore:eui.Label;

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
		this.first.visible = false;
		this.second.visible = false;
		this.third.visible = false;
	}

	private removeFromStage()
	{

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