class Bullet extends eui.Component implements  eui.UIComponent {
	protected speed = 0;
	protected speedY =0;
	protected rotationValue = 0;

	private playerId;
	public set PlayerId(val)
	{
		this.playerId = val;
	}
	public get PlayerId()
	{
		return this.playerId;
	}

	private players=[];
	public set Players(val)
	{
		this.players = val;
	}
	public get Players()
	{
		return this.players;
	}

	private isTrack = false;

	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
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
	
	private timeOnEnterFrame:number = 0;
	private onAddToStage()
	{
		this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
		this.timeOnEnterFrame = egret.getTimer();
	}

	private init()
	{
		this.rotation = 0;
		var player = this.getplayById(this.playerId);
		this.isTrack = player.IsTrack;
	}

	private onEnterFrame(e:egret.Event)
	{
		var now = egret.getTimer();
		var time = this.timeOnEnterFrame;
		var pass = now - time;
		var dt = pass/1000;
		var player = this.getplayById(this.playerId);
		if(this.isTrack && this.players)
		{
			var targetPlayer = null;
			var playerScript = null;
			var minDistance = Number.MAX_VALUE;
			for(var i=0;i<this.players.length;i++)
			{
				playerScript = this.players[i];
				if(playerScript && playerScript.Camp != player.Camp)
				{
					var dis = distance(playerScript,player);
					if(dis < minDistance)
					{
						minDistance = dis;
						targetPlayer = this.players[i];
					}
				}
			}
			if(targetPlayer)
			{
				var angle;
				if(playerScript.camp == Camp.enemy)
				{
					this.rotation = 30;
				}else if(playerScript.camp == Camp.friend)
				{
					this.rotation = 150;
				}
				if(Math.abs(this.y - targetPlayer.y) > 1)
				{
					if(this.y < targetPlayer.y)
					{
						// this.speedY += Math.abs(this.speed * dt);
						this.speedY += Math.abs(dt*0.5);
					}else{
						// this.speedY -= Math.abs(this.speed * dt);
						this.speedY -= Math.abs(dt*0.5);
					}
					this.y = this.y + this.speedY * dt;
				}
				this.x = this.x + this.speed * dt;
			}else{
				this.x = this.x + this.speed * dt;
			}
		}else{
			this.x = this.x + this.speed * dt;
		}
	}

	private getplayById(playerid)
	{
		var player;
		for(let i=0;i<this.players.length;i++)
		{
			if(this.players[i].UserId == playerid)
			{
				player = this.players[i]
			}
		}
		return player;
	}
}
window["Bullet"] = Bullet