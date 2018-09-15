class uiTip extends eui.Component implements  eui.UIComponent {
	public tip:eui.Label;
	private tipStr:string;
	public constructor(value) {
		super();
		this.tipStr = value;
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
	private addToStage():void
	{
		this.tip.text = this.tipStr;
		let self = this;
		setTimeout(function() {
			self.parent.removeChild(self);
		}, 3000);
	}
}