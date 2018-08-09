
class BaseView extends eui.Component implements eui.UIComponent  {
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public onEnter(context:any):void
	{
		
	}

	public onExit():void
	{

	}

	public onResume():void
	{

	}

	public onPause():void
	{

	}
}