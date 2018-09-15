class uiGame extends BaseView {
	public playerIcon1:playerIcon;
	public playerIcon2:playerIcon;
	public enemyIcon1:playerIcon;
	public enemyIcon2:playerIcon;
	public time:eui.Label;
	public exit:eui.Image;
	public roundCntLb:eui.Label;
	public playerHeart:eui.Group;
	public enemyHeart:eui.Group;

	public clock:egret.tween.TweenGroup;

	public hit:egret.tween.TweenGroup;
	public hitby:egret.tween.TweenGroup;
	public gameoverAni:egret.tween.TweenGroup;
	public rope:egret.tween.TweenGroup;
	public roundLb:egret.tween.TweenGroup;
	public ready:egret.tween.TweenGroup;
	public timeoverTween:egret.tween.TweenGroup;

	private players;
	private gameover = false;
	private gamestart = false;
	private enemyHeartNum = 3;
	private friendHeartNum = 3;

	public hitByGroup:eui.Group;
	public hitgroup:eui.Group;
	public gameoverGroup:eui.Group;
	public readyGroup:eui.Group;
	public timeoverGroup:eui.Group;

	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addMsResponseListen,this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeFromStage,this);
		this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
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
		this.addMsResponseListen();
	}

	private removeFromStage()
	{
		this.removeMsResponseListen();
	}

	private init()
	{
		this.exit.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onExitClick,this);
	}

	public onEnter(context:any):void
	{
		this.updateinfo();
	}

	private updateinfo()
	{
		this.curRound = 1;
		this.friendHeartNum = 3;
		this.enemyHeartNum = 3;

		for(let i=0;i<this.playerHeart.numChildren;i++)
		{
			this.playerHeart.getChildAt(i).visible = true;
		}
		for(let i=0;i<this.enemyHeart.numChildren;i++)
		{
			this.enemyHeart.getChildAt(i).visible = true
		}

		if(GameData.maxPlayerNum == 2)
		{
			this.playerIcon1.visible = false;
			this.enemyIcon1.visible = false;
			this.playerIcon2.visible = true;
			this.playerIcon2.setData(GameData.playerUserIds[0]);
			this.enemyIcon2.visible = true;
			this.enemyIcon2.setData(GameData.playerUserIds[1]);
		}else{
			this.playerIcon1.visible = true;
			this.playerIcon1.setData(GameData.playerUserIds[0]);
			this.playerIcon2.visible = true;
			this.playerIcon2.setData(GameData.playerUserIds[1]);
			this.enemyIcon1.visible = true;
			this.enemyIcon1.setData(GameData.playerUserIds[2]);
			this.enemyIcon2.visible = true;
			this.enemyIcon2.setData(GameData.playerUserIds[3]);
		}
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchEvent,this);	

		this.gamestart = false;
		this.gameover = false;
		let self = this;
		this.roundStart();
	}

	private friendIds = [];
	private enemyIds = [];
	private initPlayers()
	{
		this.friendIds = [];
		this.enemyIds = [];
		//分组
		for(let i=0;i<GameData.playerUserIds.length;i++)
		{
			if(i<GameData.playerUserIds.length/2)
			{
				this.friendIds.push(GameData.playerUserIds[i]);
			}else{
				this.enemyIds.push(GameData.playerUserIds[i]);
			}
		}
		var team = [GameData.gameUser.id];
		if(this.friendIds.indexOf(GameData.gameUser.id) != -1)
		{
			for(let i=0;i<this.friendIds.length;i++)
			{
				if(this.friendIds[i] != GameData.gameUser.id)
				{
					team.push(this.friendIds[i]);
				}
			}
			for(let i=0;i<this.enemyIds.length;i++)
			{
				team.push(this.enemyIds[i]);
			}
		}else{
			for(let i=0;i<this.enemyIds.length;i++)
			{
				if(this.enemyIds[i] != GameData.gameUser.id)
				{
					team.push(this.enemyIds[i]);
				}
			}
			for(let i=0;i<this.friendIds.length;i++)
			{
				team.push(this.friendIds[i]);
			}
		}
		GameData.playerUserIds = team;
		var playerScript = null;
		if(this.players && this.players.length > 0)
		{
			var campFlg = GameData.playerUserIds.length / 2;
			for(var j=0;j<this.players.length;j++)
			{
				playerScript = this.players[j];
				if(playerScript)
				{
					playerScript.init();
					if(j<campFlg)
					{
						if(j<1)
						{
							playerScript.x = -15;
							playerScript.y = 1150;
						}else{
							playerScript.x = 165;
							playerScript.y = 1200;
						}
					}else{
						if(i<campFlg+1)
						{
							playerScript.x = 380;
							playerScript.y = 1200;
						}else{
							playerScript.x = 550;
							playerScript.y = 1200;
						}
					}
				}
			}
		}else 
		{
			var player = null;
			this.players = [];
			var campFlg = GameData.playerUserIds.length / 2;
			for(var i=0;i<GameData.playerUserIds.length;i++)
			{
				if(i<campFlg)
				{
					if(i<1)
					{
						player = new Player1();
						player.x = -15;
						player.y = 1150;
					}else{
						player = new Player2();
						player.x = 165;
						player.y = 1200;
					}
					player.Camp = Camp.friend;
				}else{
					if(i<campFlg + 1)
					{
						player = new Enemy1();
						player.x = 550;
						player.y = 1200;
					}else{
						player = new Enemy2();
						player.x = 380;
						player.y = 1200;
					}
					player.Camp = Camp.enemy;
				}
				this.addChild(player);				
				player.UserId = GameData.playerUserIds[i];
				this.players.push(player);
			}
		}
	}

	public checkIsRoundOver()
	{
		var enemyDiedCnt = 0;
		var friendDiedCnt = 0;
		for(var i=0;i<this.players.length;i++)
		{
			var playerScript = this.players[i];
			if(playerScript && playerScript.isDied)
			{
				if(playerScript.camp == Camp.friend)
				{
					friendDiedCnt ++;
				}else{
					enemyDiedCnt ++;
				}
			}
		}
		if(enemyDiedCnt >= this.players.length /2|| friendDiedCnt >= this.players.length/2)
		{
			return true;
		}
		return false;
	}

	private addMsResponseListen(){
        //发送消息
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_SENDEVENT_NTFY, this.sendEventNotify,this);
        //离开房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify,this);
		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP,this.leaveRoomResponse,this);
    }

	private removeMsResponseListen()
	{
		//发送消息
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_SENDEVENT_NTFY, this.sendEventNotify,this);
        //离开房间
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify,this);
		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP,this.leaveRoomResponse,this);
	}
	
	private leaveRoomNotify(ev:egret.Event) {
		let leaveRoom = ev.data;
		let userid = leaveRoom.userId;
		if(userid != GameData.gameUser.id)
		{
			if(!this.gameover){
				let friends = this.friendIds.filter(function(x){
					return x == userid;
				});
				let tip:uiTip;
				if(friends.length > 0)
				{
					tip = new uiTip("队友离开了游戏");
				}else{
					tip = new uiTip("对手离开了游戏");
				}
				this.addChild(tip);
			}
		}
	}

	private items;
	private friendBullets = [];
	private enemyBullets = [];
	private sendEventNotify(event:egret.Event) {
		let sdNotify = event.data;
		if(sdNotify && sdNotify.cpProto)
		{
			if(sdNotify.cpProto.indexOf("fly") >= 0)
			{
				let id = sdNotify.srcUserId;
				let player = this.getPlayerById(id);
				player.flyNotify();
				var sound:egret.Sound = RES.getRes("jump_mp3");
  				sound.play(0,1);
			}else if(sdNotify.cpProto.indexOf("fireEvent") >= 0)
			{
				var info = JSON.parse(sdNotify.cpProto);
				var data = info.data;
				for(var i=0;i<data.length;i++)
				{
					var playerId = data[i].playerID;
					var offset = data[i].offset;
					
					var player = this.getPlayerById(playerId);
					var pos = player.localToGlobal(player.firepoint.x,player.firepoint.y);
					var bulletX = pos.x - 20;
					var bulletY = pos.y + offset;
					var bullet;
					if(player.camp == Camp.enemy)
					{
						bullet = new EnemyBullet();
						this.enemyBullets.push(bullet);
					}else{
						bullet = new FriendBullet();
						this.friendBullets.push(bullet);
					}
					bullet.x = bulletX;
					bullet.y = bulletY;
					bullet.PlayerId = playerId;
					bullet.Players = this.players;
					this.addChild(bullet);
				}
			}else if(sdNotify.cpProto.indexOf("newItem") >= 0)
			{
				if(this.items && this.items.parent) this.removeChild(this.items);
				var info = JSON.parse(sdNotify.cpProto);
				var index = info.itemIndex;
				var position = info.position;
				let item;
				if(index < 50)
				{
					item = new Shield();
				}else{
					item = new Track();
				}
				item.x = 330;
				item.y = position;
				this.items = item;
				this.addChild(item);
			}else if(sdNotify.cpProto.indexOf("playerGetItem") >= 0)
			{
				var info = JSON.parse(sdNotify.cpProto);
				var userID = info.playerId;
				var player = this.getPlayerById(userID);
				player.getItemNotify(info);
			}else if(sdNotify.cpProto.indexOf("timeOver") >= 0)
			{
				this.gamestart = false;
				for(let i=0;i<this.players.length;i++)
				{
					var player = this.players[i];
					if(player)
					{
						player.playerDead(-1);
					}
				}
				this.timeoverTween.play(0);
				this.roundOver(Camp.none);
			}else if(sdNotify.cpProto.indexOf("roundStart") >= 0)
			{
				this.roundStart();
			}else if(sdNotify.cpProto.indexOf("playerHurt") >= 0)
			{
				var info = JSON.parse(sdNotify.cpProto);
				var playerID = info.playerId;
				var murderId = info.murderId;
				var camp = Camp.none;
				let die = false;
				for(let i=0;i<this.players.length;i++)
				{
					var player = this.players[i];
					if(player.UserId == playerID)
					{
						camp = player.Camp;
						die = player.hurtNotify(murderId);
					}
				}
				if(murderId == GameData.gameUser.id)
				{
					if(die)
					{
						this.hit.play(0);
						var sound:egret.Sound = RES.getRes("hit_mp3");
						sound.play(0,1);
					}
				}else if(playerID == GameData.gameUser.id && murderId)
				{
					if(die)
					{
						this.hitby.play(0);
						var sound:egret.Sound = RES.getRes("behit_mp3");
						sound.play(0,1);
					}
				}
				if(die) this.roundOver(camp);
			}
		}
	}

	private leaveRoomResponse()
	{
		ContextManager.Instance.backSpecifiedUI(UIType.lobbyBoard);
	}

	private onExitClick()
	{
		ContextManager.Instance.showDialog(UIType.exit);
	}

	private countDownInterval;
	private roundSeconds = 30;
	private countDown()
	{
		if(!this.gamestart)
			return;
		let self = this;
		if(this.countDownInterval != null) clearInterval(this.countDownInterval);
		let times = this.roundSeconds;
		this.time.text = times.toString();
		this.countDownInterval = setInterval(function(){
			times--;
			if(times<0)
			{
				clearInterval(self.countDownInterval);
				if(GameData.isRoomOwner)
				{
					self.timeOverMsg();
				}
			}
			else if(!self.gamestart)
			{
				clearInterval(self.countDownInterval);
			}
			else{
				self.time.text = times.toString();
			}
			if(times == 10)
			{
				self.clock.play(0)
			}
		},1000);
	}
	
	public playerDead(data)
	{
		if(data.murderId == GameData.gameUser.id)
		{
			this.hit.play(0);
		}else if(data.Id == GameData.gameUser.id && data.murderId)
		{
			this.hitby.play(0);
		}

		for(var i=0;i<this.players.length;i++)
		{
			if(this.players[i].userid == data.id)
			{
				this.players[i].playerDead(data.murderId);
			}
		}
	}

	public gameOver()
	{
		this.gameoverAni.play(0);
		var sound:egret.Sound = RES.getRes("gameover_mp3");
  		sound.play(0,1);
		clearInterval(this.countDownInterval);
	}

	public timeOver()
	{
		//Todo
	}

	private timeOverMsg()
	{
		var msg = JSON.stringify({
			action:"timeOver"
		});
		mvs.MsEngine.getInstance.sendEventEx(0,msg,0,GameData.playerUserIds);
	}

	private curRound = 1;
	public roundStart()
	{
		this.time.text = 30 + "";		
		var curRound = this.curRound;
		this.roundCntLb.text = curRound.toString();
		this.roundLb.play(0);
		this.rope.play(0);
		this.ready.play(0);
		var sound:egret.Sound = RES.getRes("readygo_mp3");
  		sound.play(0,1);
		if(this.items && this.items.parent) 
		{
			this.removeChild(this.items)
			this.items = null;
		}
		let self = this;
		setTimeout(function() {
			self.gamestart = true;
			self.scheuleFire();
			self.scheduleSpawItem();
			self.countDown();			
		}, 3000);	
		this.initPlayers();

		this.hitByGroup.alpha = 0;
		this.hitgroup.alpha = 0;
		this.gameoverGroup.alpha = 0;
		this.readyGroup.alpha = 0;
		this.timeoverGroup.alpha = 0;
	}

	public roundOver(loseCamp:Camp)
	{
		this.gamestart = false;
		let self = this;		
		this.curRound ++;
		switch(loseCamp)
		{
			case Camp.friend:
				this.friendHeartNum --;
			break;
			case Camp.enemy:
				this.enemyHeartNum --;
			break;
			case Camp.none:
				this.friendHeartNum--;
				this.enemyHeartNum --;
			break;
		}

		for(var i=0;i<this.playerHeart.numChildren;i++)
		{
			if(i<this.friendHeartNum)
			{
				this.playerHeart.getChildAt(i).visible = true;
			}else{
				this.playerHeart.getChildAt(i).visible = false;
			}
		}

		for(var i=0;i<this.enemyHeart.numChildren;i++)
		{
			if(i<this.enemyHeartNum)
			{
				this.enemyHeart.getChildAt(i).visible = true;
			}else{
				this.enemyHeart.getChildAt(i).visible = false;
			}
		}

		if(this.enemyHeartNum <= 0|| this.friendHeartNum <= 0)
		{
			this.gamestart = false;
			var loseCamp:Camp = Camp.none;
			if(this.enemyHeartNum <= 0 && this.friendHeartNum <= 0)
			{
				loseCamp = Camp.none;
			}else if(this.enemyHeartNum <= 0)
			{
				loseCamp = Camp.enemy;
			}else if(this.friendHeartNum <= 0)
			{
				loseCamp = Camp.friend;
			}
			this.gameover = true;
			this.gameoverAni.play(0);
			var sound:egret.Sound = RES.getRes("gameover_mp3");
  			sound.play(0,1);
			setTimeout(function() {
				var data = {
					friendIds:self.friendIds,
					enemyIds:self.enemyIds,
					friendScore:3-self.enemyHeartNum,
					enemyScore:3-self.friendHeartNum
				}
				ContextManager.Instance.showUI(UIType.gameOver,data)
			}, 2000);
		}else if(GameData.isRoomOwner)
		{
			setTimeout(function() {
				var msg = JSON.stringify({
					action:"roundStart"
				});
				mvs.MsEngine.getInstance.sendEventEx(0,msg,0,GameData.playerUserIds);
			}, 3000);
		}
		clearInterval(this.countDownInterval);
	}

	private onTouchEvent()
	{
		if(!this.gamestart)
		{
			return;
		}
		let message = JSON.stringify({
			action:"fly"
		});
		mvs.MsEngine.getInstance.sendEventEx(0,message,0,GameData.playerUserIds)
	}

	private getPlayerById(id:number):any
	{
		var player = null;
		for(var i=0;i<this.players.length;i++)
		{
			if(this.players[i].UserId == id)
			{
				player = this.players[i]
			}
		}
		return player;
	}

	private scheduleFire;
	private scheuleFire()
	{
		while(this.friendBullets.length > 0)
		{
			this.removeChild(this.friendBullets[0]);
			this.friendBullets.splice(0,1);
		}

		while(this.enemyBullets.length > 0)
		{
			this.removeChild(this.enemyBullets[0]);
			this.enemyBullets.splice(0,1);
		}

		let self = this;
		if(GameData.isRoomOwner)
		{
			clearInterval(this.scheduleFire);
			this.scheduleFire = setInterval(function(){
				var bulletCnt = self.curRound > 3 ? 3:self.curRound;
				if(!self.gamestart)
				{
					clearInterval(self.scheduleFire);
					return;
				}
				var data = [];
				for(let i=0;i<self.players.length;i++)
				{
					var player = self.players[i];
					if(player)
					{
						for(let j=0;j<bulletCnt;j++)
						{
							var offset = (j-bulletCnt/2) * 40;
							//var pos = player.localToGlobal(player.firepoint.x,player.firepoint.y);
							data.push({playerID:player.userId,offset:offset});
						}
					}
				}
				var msg = JSON.stringify({
					action:"fireEvent",
					data:data
				})
				mvs.MsEngine.getInstance.sendEventEx(0,msg,0,GameData.playerUserIds);
			},1500);
		}
	}

	private scheduleItemSpaw;
	private scheduleSpawItem()
	{
		if(this.items && this.items.parent) 
		{
			this.removeChild(this.items);
			this.items = null;
		}	
		let self = this;
		if(GameData.isRoomOwner)
		{
			clearInterval(this.scheduleItemSpaw);
			this.scheduleItemSpaw = setInterval(function(){
				if(!self.gamestart)
				{
					clearInterval(self.scheduleItemSpaw);
					return;
				}

				var index = randomNum(0,100);
				var y = randomNum(400,1025);
				var msg = JSON.stringify({
					action:"newItem",
					itemIndex:index,
					position:y
				});
				mvs.MsEngine.getInstance.sendEventEx(0,msg,0,GameData.playerUserIds);
			},5000);
			
		}
	}

	private onEnterFrame(e:egret.Event)
	{
		if(!this.gamestart)
			return;
		//检测子弹
		for(let i=0;i<this.friendBullets.length;i++)
		{
			for(let j=0;j<this.enemyBullets.length;j++)
			{
				var enter = hitTestPosition(this.friendBullets[i],this.enemyBullets[j]);
				if(enter)
				{
					if(this.friendBullets[i].parent)
					{
						this.removeChild(this.friendBullets[i]);
						this.friendBullets.splice(i,1);
					}
					if(this.enemyBullets[j].parent)
					{
						this.removeChild(this.enemyBullets[j]);
						this.enemyBullets.splice(j,1);
					}
					return;
				}
			}
		}
		 //检查小鸟	
		 for(let i=0;i<this.friendBullets.length;i++)
		 {
			 for(let j=0;j<this.players.length;j++)
			 {
				 var player = this.players[j]
				 var bullet = this.friendBullets[i];
				var enter = hitTestPosition(bullet,player);
				if(enter)
				{
					var playerId = bullet.PlayerId;
					var bulletPlayer = this.getPlayerById(playerId);
					if(bulletPlayer.UserId != player.UserId && bulletPlayer.Camp != player.Camp)
					{
						if(GameData.isRoomOwner)
						{
							player.hurt(bulletPlayer.UserId);
						}
						this.removeChild(this.friendBullets[i]);
						this.friendBullets.splice(i,1);
					}
					return;
				}
			 }
		 }
		 for(let i=0;i<this.enemyBullets.length;i++)
		 {
			 for(let j=0;j<this.players.length;j++)
			 {
				 var player = this.players[j]
				 var bullet = this.enemyBullets[i];
				var enter = hitTestPosition(bullet,player);
				if(enter)
				{
					var playerId = bullet.PlayerId;
					var bulletPlayer = this.getPlayerById(playerId);
					if(bulletPlayer.UserId != player.UserId && bulletPlayer.Camp != player.Camp)
					{
						if(GameData.isRoomOwner)
						{
							player.hurt(bulletPlayer.UserId);
						}
						if(this.enemyBullets[i].parent)
						{
							this.removeChild(this.enemyBullets[i]);
							this.enemyBullets.splice(i,1);
						}
					}
					return;
				}
			 }
		 }
		//检查buff	
		for(let i=0;i<this.friendBullets.length;i++)
		{
			if(!this.items) return;
			var item = this.items;
			var bullet = this.friendBullets[i];
			var enter = hitTestPosition(bullet,item);
			if(enter)
			{
				var playerId = bullet.PlayerId;
				var player = this.getPlayerById(playerId);
				var type = item.ItemType;
				player.getItem(type);
				this.removeChild(this.items);
				this.items = null;
				if(this.friendBullets[i].parent) 
				{
					var sound:egret.Sound = RES.getRes("tool_mp3");
  					sound.play(0,1);
					this.removeChild(this.friendBullets[i]);
					this.friendBullets.splice(i,1);
				}
				return;	
			}
		}
		for(let i=0;i<this.enemyBullets.length;i++)
		{
			if(!this.items) return;
			var item = this.items;
			var bullet = this.enemyBullets[i];
			var enter = hitTestPosition(bullet,item);
			if(enter)
			{
				var playerId = bullet.PlayerId;
				var player = this.getPlayerById(playerId);
				var type = item.ItemType;
				player.getItem(type);
				this.removeChild(this.items);
				this.items = null;
				if(this.enemyBullets[i].parent) 
				{
					var sound:egret.Sound = RES.getRes("tool_mp3");
  					sound.play(0,1);
					this.removeChild(this.enemyBullets[i]);
					this.enemyBullets.splice(i,1);
				}	
				return;
			}
		}
	}
}