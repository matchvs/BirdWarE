class UIManager {
	private uilist:Object = new Object();
	private static _instance:UIManager;
	public static getInstance()
	{
		if(!UIManager._instance)
		{
			UIManager._instance = new UIManager();
		}
		return UIManager._instance;
	}

	public getSingleUI(type:UIType)
	{
		let value = this.uilist[type];
		let ui;
		if(value != null || value != undefined)
		{
			 ui = this.uilist[type];
		}else {
			ui = this.createSingleUI(type);
			this.uilist[type] = ui;
		}
		return ui;
	}

	private createSingleUI(type:UIType)
	{
		switch(type)
		{
			case UIType.createRoom:
				return new uiCreateRoom();
			case UIType.exit:
				return new uiExit();
			case UIType.gameBoard:
				return new uiGame();
			case UIType.lobbyBoard:
				return new uiLobby();
			case UIType.loginBoard:
				return new uiLogin();
			case UIType.matchBoard:	
				return new uiMatch();
			case UIType.rankBoard:
				return new uiRank();
			case UIType.roomList:
				return new uiRoomList();
			case UIType.roomView:
				return new uiRoom();
			case UIType.gameOver:
				return new uiResult();
		}
	}
}