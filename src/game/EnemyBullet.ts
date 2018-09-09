class EnemyBullet extends Bullet{
	public constructor() {
		super();
		this.speed = -10;
		this.speedY = 10;
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
window["EnemyBullet"] = EnemyBullet