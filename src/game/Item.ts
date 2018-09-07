class Item extends eui.Component implements  eui.UIComponent {
	protected type :ItemType;
	public set ItemType(val)
	{
		this.type = val;
	}
	public get ItemType()
	{
		return this.type;
	}
	
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
	}
}

enum ItemType
{
	shield = 0,
	track = 1,
}