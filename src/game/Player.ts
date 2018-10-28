class Player extends eui.Component implements  eui.UIComponent {
	public playerfly:eui.Group;
	public playerdead:eui.Group;
	public playerchicken:eui.Group;
	public shieldSp:eui.Image;
	public arrow:eui.Image;
	public smoke:eui.Image;
	public firepoint:eui.Image;

	public constructor() {
		super();
	}

	private camp:Camp;
	private gravity = 1500;
	private currentSpeed = 0;
	private flySpeed = 600;
	private ceilY = 430;
	private groundY = -580;
	private profile;
	private userId;
	private isShield = false;
	private isTrack = false;
	private isDied = false;
	private beChicken = false;

	private fly:egret.tween.TweenGroup;
	private dead:egret.tween.TweenGroup;
	private chicken:egret.tween.TweenGroup;
	
	public set Camp(val)
	{
		this.camp = val;
	}

	public get Camp()
	{
		return this.camp;
	}

	public set Profile(val)
	{
		this.profile = val;
	}

	public get Profile()
	{
		return this.profile;
	}

	public set UserId(val)
	{
		this.userId = val;
	}

	public get UserId()
	{
		return this.userId;
	}

	public get IsTrack()
	{
		return this.isTrack;
	}

	public get IsShield()
	{
		return this.isShield;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}

	private timeOnEnterFrame:number = 0;
	private addToStage()
	{
		this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
		this.timeOnEnterFrame = egret.getTimer();
	}
	
	public init()
	{
		this.gravity = 1500;
		this.currentSpeed = 0;
		this.flySpeed = -600;
		this.ceilY = 0;
		this.groundY = 1200;
		this.isShield = false;
		this.isTrack = false;
		this.isDied = false;
		this.beChicken = false;

		this.playerfly.alpha = 1;
		this.playerdead.alpha = 0;
		this.playerchicken.alpha = 0;
		this.shieldSp.alpha = 0;
		this.smoke.alpha = 0;
	}

	private onEnterFrame(e:egret.Event)
	{
		var now = egret.getTimer();
		var time = this.timeOnEnterFrame;
		var pass = now - time;
		var dt = pass/1000;
		this.currentSpeed += dt * this.gravity;
		this.y += dt*this.currentSpeed;
		if(this.y>this.groundY)
		{
			this.y = this.groundY;
			if(this.isDied && !this.beChicken)
			{
				this.beChicken = true;
				//this.chicken.play(0);
				this.playerfly.alpha = 0;
				this.playerdead.alpha = 0;
				this.playerchicken.alpha = 1;
				this.smoke.alpha = 0;
			}
		}
		if(this.y < this.ceilY)
		{
			this.y = this.ceilY;
			this.currentSpeed = 0;
		}
		this.timeOnEnterFrame = egret.getTimer();
	}

	private setShield(active)
	{
		this.shieldSp.alpha = 1;
		this.isShield = active;
		this.shieldSp.visible = active;
	}

	private setTrack(active)
	{
		this.isTrack = active;
	}

	public getItem(itemType)
	{
		let jsonValue = JSON.stringify({
			action:"playerGetItem",
			itemType:itemType,
			playerId:this.userId
		});
		mvs.MsEngine.getInstance.sendEventEx(0,jsonValue,0,GameData.playerUserIds);
	}

	public getItemNotify(info)
	{
		var itemType = info.itemType;
		switch(itemType)
		{
			case ItemType.shield:
				this.setShield(true);
			break;
			case ItemType.track:
				this.setTrack(true);
			break;
		}
	}

	private removeItem(itemType)
	{
		let jsonValue = JSON.stringify({
			action:"playerRemoveItemEvent",
			itemType:itemType
		});
		mvs.MsEngine.getInstance.sendEvent(jsonValue);
	}

	private removeItemNotify(cpProto)
	{
		var info = JSON.parse(cpProto);
		var itemType = info.itemType;
		switch(itemType)
		{
			case ItemType.shield:
				this.setShield(false);
			break;
			case ItemType.track:
				this.setTrack(false);
			break;
		}
	}

	private hurt(murderId)
	{
		let jsonValue = JSON.stringify({
			action:"playerHurt",
			playerId:this.userId,
			murderId:murderId
		});
		mvs.MsEngine.getInstance.sendEventEx(0,jsonValue,0,GameData.playerUserIds);
	}

	public hurtNotify(murderId)
	{
		if(this.isShield)
		{
			this.setShield(false);
			return false;
		}else{
			if(this.isDied)
			 	return false;
			this.playerDead(murderId);
			return true;
		}
	}

	private playerDead(murderId)
	{
		if(this.isDied)
			return;
		this.isDied = true;

		this.shieldSp.visible = false;
		this.playerfly.alpha = 0;
		this.playerdead.alpha = 1;
		this.playerchicken.alpha = 0;
		this.smoke.alpha = 1;
		this.currentSpeed = -1000;
		if(Math.abs(this.y - this.groundY) < 5)
		{
			if(this.isDied && !this.beChicken)
			{
				this.beChicken = true;
				let self = this;
				setTimeout(function() {
					//self.chicken.play(0);
					self.playerfly.alpha = 0;
					self.playerdead.alpha = 0;
					self.playerchicken.alpha = 1;
					self.smoke.alpha = 0;
				}, 1000);
			}
		}
	}

	private flyNotify()
	{
		if(this.isDied)
		{
			return;
		}
		this.currentSpeed = this.flySpeed;
		this.fly.play(0);
	}

	private fireNotify()
	{
		if(this.isDied)
		{
			return;
		}
		var friendBullet = new FriendBullet();
		friendBullet.x = this.firepoint.x;
		friendBullet.y = this.firepoint.y;
		this.parent.addChild(friendBullet);
	}
}

enum Camp
{
	friend,
	enemy,
	none
}
window["Player"] = Player