class RoomPrefab extends eui.Component implements  eui.UIComponent {
	public roomItem:eui.Group;
	public roomId:eui.Label;
	public roomname:eui.Label;
	public msRoomAttribute;
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
		this.roomItem.addEventListener(egret.TouchEvent.TOUCH_TAP,this.joinRoom,this);
		this.roomId.text = this.msRoomAttribute.roomID;
		this.roomname.text = this.msRoomAttribute.roomName;
	}
	private joinRoom()
	{
		let info = {name:GameData.gameUser.name,avatar:GameData.gameUser.avatar};
		let infostr = JSON.stringify(info);
		mvs.MsEngine.getInstance.joinRoom(this.msRoomAttribute.roomID,infostr);
	}
}