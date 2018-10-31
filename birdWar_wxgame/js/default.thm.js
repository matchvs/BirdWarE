var egret = window.egret;window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","uiLogin":"resource/eui_skins/uiLogin.exml","uiLobby":"resource/eui_skins/uiLobby.exml","uiMatch":"resource/eui_skins/uiMatch.exml","playerIcon":"resource/eui_skins/playerIcon.exml","uiCreateRoom":"resource/eui_skins/uiCreateRoom.exml","uiRoom":"resource/eui_skins/uiRoom.exml","RoomUserInfo":"resource/eui_skins/RoomUserInfo.exml","uiRoomList":"resource/eui_skins/uiRoomList.exml","RoomPrefab":"resource/eui_skins/RoomPrefab.exml","uiGame":"resource/eui_skins/uiGame.exml","uiExit":"resource/eui_skins/uiExit.exml","uiResult":"resource/eui_skins/uiResult.exml","Player1":"resource/eui_skins/Player1.exml","Player2":"resource/eui_skins/Player2.exml","Enemy1":"resource/eui_skins/Enemy1.exml","Enemy2":"resource/eui_skins/Enemy2.exml","Shield":"resource/eui_skins/Shield.exml","Track":"resource/eui_skins/Track.exml","FriendBullet":"resource/eui_skins/FriendBullet.exml","EnemyBullet":"resource/eui_skins/EnemyBullet.exml","uiTip":"resource/eui_skins/uiTip.exml","uiRank":"resource/eui_skins/uiRank.exml","RankItem":"resource/eui_skins/RankItem.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Enemy1.exml'] = window.Enemy1Skin = (function (_super) {
	__extends(Enemy1Skin, _super);
	function Enemy1Skin() {
		_super.call(this);
		this.skinParts = ["fly","dead","chicken","image","image0","image1","playerfly","image2","playerdead","image3","playerchicken","shieldSp","smoke","firepoint"];
		
		this.height = 152;
		this.width = 184;
		this.fly_i();
		this.dead_i();
		this.chicken_i();
		this.elementsContent = [this.playerfly_i(),this.playerdead_i(),this.playerchicken_i(),this.shieldSp_i(),this.smoke_i(),this.firepoint_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, ["playerfly"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, ["playerdead"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, ["playerchicken"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, ["smoke"],[0],this._TweenItem7,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, ["playerfly"],[0],this._TweenItem8,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, ["playerdead"],[0],this._TweenItem9,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, ["playerchicken"],[0],this._TweenItem10,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, ["smoke"],[0],this._TweenItem11,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"alpha");
		eui.Binding.$bindProperties(this, ["playerfly"],[0],this._TweenItem12,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, ["playerdead"],[0],this._TweenItem13,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object18,"alpha");
		eui.Binding.$bindProperties(this, ["playerchicken"],[0],this._TweenItem14,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object19,"alpha");
		eui.Binding.$bindProperties(this, ["smoke"],[0],this._TweenItem15,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object20,"alpha");
	}
	var _proto = Enemy1Skin.prototype;

	_proto.fly_i = function () {
		var t = new egret.tween.TweenGroup();
		this.fly = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i(),this._TweenItem6_i(),this._TweenItem7_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._Wait1_i(),this._Set2_i(),this._Wait2_i(),this._Set3_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set4_i(),this._Wait3_i(),this._Set5_i(),this._Wait4_i(),this._Set6_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set7_i(),this._Wait5_i(),this._Set8_i(),this._Wait6_i(),this._Set9_i()];
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set10_i()];
		return t;
	};
	_proto._Set10_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set11_i()];
		return t;
	};
	_proto._Set11_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set12_i()];
		return t;
	};
	_proto._Set12_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._TweenItem7_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem7 = t;
		t.paths = [this._Set13_i()];
		return t;
	};
	_proto._Set13_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto.dead_i = function () {
		var t = new egret.tween.TweenGroup();
		this.dead = t;
		t.items = [this._TweenItem8_i(),this._TweenItem9_i(),this._TweenItem10_i(),this._TweenItem11_i()];
		return t;
	};
	_proto._TweenItem8_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem8 = t;
		t.paths = [this._Set14_i()];
		return t;
	};
	_proto._Set14_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._TweenItem9_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem9 = t;
		t.paths = [this._Set15_i()];
		return t;
	};
	_proto._Set15_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._TweenItem10_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem10 = t;
		t.paths = [this._Set16_i()];
		return t;
	};
	_proto._Set16_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._TweenItem11_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem11 = t;
		t.paths = [this._Set17_i()];
		return t;
	};
	_proto._Set17_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto.chicken_i = function () {
		var t = new egret.tween.TweenGroup();
		this.chicken = t;
		t.items = [this._TweenItem12_i(),this._TweenItem13_i(),this._TweenItem14_i(),this._TweenItem15_i()];
		return t;
	};
	_proto._TweenItem12_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem12 = t;
		t.paths = [this._Set18_i()];
		return t;
	};
	_proto._Set18_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._TweenItem13_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem13 = t;
		t.paths = [this._Set19_i()];
		return t;
	};
	_proto._Set19_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._TweenItem14_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem14 = t;
		t.paths = [this._Set20_i()];
		return t;
	};
	_proto._Set20_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto._TweenItem15_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem15 = t;
		t.paths = [this._Set21_i()];
		return t;
	};
	_proto._Set21_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto.playerfly_i = function () {
		var t = new eui.Group();
		this.playerfly = t;
		t.scaleX = -1;
		t.x = 184;
		t.y = 2;
		t.elementsContent = [this.image_i(),this.image0_i(),this.image1_i()];
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.source = "lan1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.source = "lan2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.alpha = 0;
		t.source = "lan3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.playerdead_i = function () {
		var t = new eui.Group();
		this.playerdead = t;
		t.scaleX = -1;
		t.x = 184;
		t.y = 2;
		t.elementsContent = [this.image2_i()];
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.source = "explosionChicken_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.playerchicken_i = function () {
		var t = new eui.Group();
		this.playerchicken = t;
		t.scaleX = -1;
		t.x = 183;
		t.y = 2;
		t.elementsContent = [this.image3_i()];
		return t;
	};
	_proto.image3_i = function () {
		var t = new eui.Image();
		this.image3 = t;
		t.source = "shaoji_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shieldSp_i = function () {
		var t = new eui.Image();
		this.shieldSp = t;
		t.source = "dunpaizhao_png";
		t.x = 53;
		t.y = -1;
		return t;
	};
	_proto.smoke_i = function () {
		var t = new eui.Image();
		this.smoke = t;
		t.alpha = 0;
		t.source = "smoke_png";
		t.x = -21;
		t.y = -24;
		return t;
	};
	_proto.firepoint_i = function () {
		var t = new eui.Image();
		this.firepoint = t;
		t.alpha = 0;
		t.height = 20;
		t.width = 20;
		t.x = 15;
		t.y = 65.7;
		return t;
	};
	return Enemy1Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Enemy2.exml'] = window.Enemy2Skin = (function (_super) {
	__extends(Enemy2Skin, _super);
	function Enemy2Skin() {
		_super.call(this);
		this.skinParts = ["fly","dead","chicken","image","image0","image1","playerfly","image2","playerdead","image3","playerchicken","shieldSp","smoke","firepoint"];
		
		this.height = 152;
		this.width = 184;
		this.fly_i();
		this.dead_i();
		this.chicken_i();
		this.elementsContent = [this.playerfly_i(),this.playerdead_i(),this.playerchicken_i(),this.shieldSp_i(),this.smoke_i(),this.firepoint_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, ["playerfly"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, ["playerdead"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, ["playerchicken"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, ["smoke"],[0],this._TweenItem7,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, ["playerfly"],[0],this._TweenItem8,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, ["playerdead"],[0],this._TweenItem9,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, ["playerchicken"],[0],this._TweenItem10,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, ["smoke"],[0],this._TweenItem11,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"alpha");
		eui.Binding.$bindProperties(this, ["playerfly"],[0],this._TweenItem12,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, ["playerdead"],[0],this._TweenItem13,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object18,"alpha");
		eui.Binding.$bindProperties(this, ["playerchicken"],[0],this._TweenItem14,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object19,"alpha");
		eui.Binding.$bindProperties(this, ["smoke"],[0],this._TweenItem15,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object20,"alpha");
	}
	var _proto = Enemy2Skin.prototype;

	_proto.fly_i = function () {
		var t = new egret.tween.TweenGroup();
		this.fly = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i(),this._TweenItem6_i(),this._TweenItem7_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._Wait1_i(),this._Set2_i(),this._Wait2_i(),this._Set3_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set4_i(),this._Wait3_i(),this._Set5_i(),this._Wait4_i(),this._Set6_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set7_i(),this._Wait5_i(),this._Set8_i(),this._Wait6_i(),this._Set9_i()];
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set10_i()];
		return t;
	};
	_proto._Set10_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set11_i()];
		return t;
	};
	_proto._Set11_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set12_i()];
		return t;
	};
	_proto._Set12_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._TweenItem7_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem7 = t;
		t.paths = [this._Set13_i()];
		return t;
	};
	_proto._Set13_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto.dead_i = function () {
		var t = new egret.tween.TweenGroup();
		this.dead = t;
		t.items = [this._TweenItem8_i(),this._TweenItem9_i(),this._TweenItem10_i(),this._TweenItem11_i()];
		return t;
	};
	_proto._TweenItem8_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem8 = t;
		t.paths = [this._Set14_i()];
		return t;
	};
	_proto._Set14_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._TweenItem9_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem9 = t;
		t.paths = [this._Set15_i()];
		return t;
	};
	_proto._Set15_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._TweenItem10_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem10 = t;
		t.paths = [this._Set16_i()];
		return t;
	};
	_proto._Set16_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._TweenItem11_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem11 = t;
		t.paths = [this._Set17_i()];
		return t;
	};
	_proto._Set17_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto.chicken_i = function () {
		var t = new egret.tween.TweenGroup();
		this.chicken = t;
		t.items = [this._TweenItem12_i(),this._TweenItem13_i(),this._TweenItem14_i(),this._TweenItem15_i()];
		return t;
	};
	_proto._TweenItem12_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem12 = t;
		t.paths = [this._Set18_i()];
		return t;
	};
	_proto._Set18_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._TweenItem13_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem13 = t;
		t.paths = [this._Set19_i()];
		return t;
	};
	_proto._Set19_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._TweenItem14_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem14 = t;
		t.paths = [this._Set20_i()];
		return t;
	};
	_proto._Set20_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto._TweenItem15_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem15 = t;
		t.paths = [this._Set21_i()];
		return t;
	};
	_proto._Set21_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto.playerfly_i = function () {
		var t = new eui.Group();
		this.playerfly = t;
		t.scaleX = -1;
		t.x = 184;
		t.y = 2;
		t.elementsContent = [this.image_i(),this.image0_i(),this.image1_i()];
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.source = "shenlan1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.source = "shenlan2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.alpha = 0;
		t.source = "shenlan3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.playerdead_i = function () {
		var t = new eui.Group();
		this.playerdead = t;
		t.scaleX = -1;
		t.x = 184;
		t.y = 2;
		t.elementsContent = [this.image2_i()];
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.source = "explosionChicken_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.playerchicken_i = function () {
		var t = new eui.Group();
		this.playerchicken = t;
		t.scaleX = -1;
		t.x = 183;
		t.y = -4;
		t.elementsContent = [this.image3_i()];
		return t;
	};
	_proto.image3_i = function () {
		var t = new eui.Image();
		this.image3 = t;
		t.source = "shaoji_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shieldSp_i = function () {
		var t = new eui.Image();
		this.shieldSp = t;
		t.source = "dunpaizhao_png";
		t.x = 53;
		t.y = -1;
		return t;
	};
	_proto.smoke_i = function () {
		var t = new eui.Image();
		this.smoke = t;
		t.alpha = 0;
		t.source = "smoke_png";
		t.x = -21;
		t.y = -24;
		return t;
	};
	_proto.firepoint_i = function () {
		var t = new eui.Image();
		this.firepoint = t;
		t.alpha = 0;
		t.height = 20;
		t.width = 20;
		t.x = 15;
		t.y = 65.7;
		return t;
	};
	return Enemy2Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/EnemyBullet.exml'] = window.EnemyBulletSkin = (function (_super) {
	__extends(EnemyBulletSkin, _super);
	function EnemyBulletSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 36;
		this.width = 76;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = EnemyBulletSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 78;
		t.anchorOffsetY = 16;
		t.scaleX = -1;
		t.source = "lanfangzidan_png";
		t.x = 0;
		t.y = 16;
		return t;
	};
	return EnemyBulletSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/FriendBullet.exml'] = window.FriendBulletSkin = (function (_super) {
	__extends(FriendBulletSkin, _super);
	function FriendBulletSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 37;
		this.width = 83;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = FriendBulletSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "zidan_png";
		t.x = 4;
		t.y = 4;
		return t;
	};
	return FriendBulletSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Player1.exml'] = window.Player1Skin = (function (_super) {
	__extends(Player1Skin, _super);
	function Player1Skin() {
		_super.call(this);
		this.skinParts = ["fly","dead","chicken","image","image0","image1","playerfly","image2","playerdead","image3","playerchicken","shieldSp","arrow","smoke","firepoint"];
		
		this.height = 166;
		this.width = 255;
		this.fly_i();
		this.dead_i();
		this.chicken_i();
		this.elementsContent = [this.playerfly_i(),this.playerdead_i(),this.playerchicken_i(),this.shieldSp_i(),this.arrow_i(),this.smoke_i(),this.firepoint_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, ["playerfly"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, ["playerdead"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, ["playerchicken"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, ["smoke"],[0],this._TweenItem7,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, ["playerfly"],[0],this._TweenItem8,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, ["playerdead"],[0],this._TweenItem9,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"alpha");
		eui.Binding.$bindProperties(this, ["playerchicken"],[0],this._TweenItem10,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object18,"alpha");
		eui.Binding.$bindProperties(this, ["smoke"],[0],this._TweenItem11,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object19,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object20,"alpha");
		eui.Binding.$bindProperties(this, ["playerfly"],[0],this._TweenItem12,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object21,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object22,"alpha");
		eui.Binding.$bindProperties(this, ["playerdead"],[0],this._TweenItem13,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object23,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object24,"alpha");
		eui.Binding.$bindProperties(this, ["playerchicken"],[0],this._TweenItem14,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object25,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object26,"alpha");
		eui.Binding.$bindProperties(this, ["smoke"],[0],this._TweenItem15,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object27,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object28,"alpha");
	}
	var _proto = Player1Skin.prototype;

	_proto.fly_i = function () {
		var t = new egret.tween.TweenGroup();
		this.fly = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i(),this._TweenItem6_i(),this._TweenItem7_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._Wait1_i(),this._Set2_i(),this._Wait2_i(),this._Set3_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set4_i(),this._Wait3_i(),this._Set5_i(),this._Wait4_i(),this._Set6_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set7_i(),this._Wait5_i(),this._Set8_i(),this._Wait6_i(),this._Set9_i()];
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set10_i()];
		return t;
	};
	_proto._Set10_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set11_i()];
		return t;
	};
	_proto._Set11_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set12_i()];
		return t;
	};
	_proto._Set12_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._TweenItem7_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem7 = t;
		t.paths = [this._Set13_i()];
		return t;
	};
	_proto._Set13_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto.dead_i = function () {
		var t = new egret.tween.TweenGroup();
		this.dead = t;
		t.items = [this._TweenItem8_i(),this._TweenItem9_i(),this._TweenItem10_i(),this._TweenItem11_i()];
		return t;
	};
	_proto._TweenItem8_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem8 = t;
		t.paths = [this._Set14_i(),this._Wait7_i(),this._Set15_i()];
		return t;
	};
	_proto._Set14_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._Wait7_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set15_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._TweenItem9_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem9 = t;
		t.paths = [this._Set16_i(),this._Wait8_i(),this._Set17_i()];
		return t;
	};
	_proto._Set16_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._Wait8_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set17_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._TweenItem10_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem10 = t;
		t.paths = [this._Set18_i(),this._Wait9_i(),this._Set19_i()];
		return t;
	};
	_proto._Set18_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._Wait9_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set19_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._TweenItem11_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem11 = t;
		t.paths = [this._Set20_i(),this._Wait10_i(),this._Set21_i()];
		return t;
	};
	_proto._Set20_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto._Wait10_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set21_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto.chicken_i = function () {
		var t = new egret.tween.TweenGroup();
		this.chicken = t;
		t.items = [this._TweenItem12_i(),this._TweenItem13_i(),this._TweenItem14_i(),this._TweenItem15_i()];
		return t;
	};
	_proto._TweenItem12_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem12 = t;
		t.paths = [this._Set22_i(),this._Wait11_i(),this._Set23_i()];
		return t;
	};
	_proto._Set22_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object21_i();
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		this._Object21 = t;
		return t;
	};
	_proto._Wait11_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set23_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object22_i();
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		this._Object22 = t;
		return t;
	};
	_proto._TweenItem13_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem13 = t;
		t.paths = [this._Set24_i(),this._Wait12_i(),this._Set25_i()];
		return t;
	};
	_proto._Set24_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object23_i();
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		this._Object23 = t;
		return t;
	};
	_proto._Wait12_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set25_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object24_i();
		return t;
	};
	_proto._Object24_i = function () {
		var t = {};
		this._Object24 = t;
		return t;
	};
	_proto._TweenItem14_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem14 = t;
		t.paths = [this._Set26_i(),this._Wait13_i(),this._Set27_i()];
		return t;
	};
	_proto._Set26_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object25_i();
		return t;
	};
	_proto._Object25_i = function () {
		var t = {};
		this._Object25 = t;
		return t;
	};
	_proto._Wait13_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set27_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object26_i();
		return t;
	};
	_proto._Object26_i = function () {
		var t = {};
		this._Object26 = t;
		return t;
	};
	_proto._TweenItem15_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem15 = t;
		t.paths = [this._Set28_i(),this._Wait14_i(),this._Set29_i()];
		return t;
	};
	_proto._Set28_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object27_i();
		return t;
	};
	_proto._Object27_i = function () {
		var t = {};
		this._Object27 = t;
		return t;
	};
	_proto._Wait14_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set29_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object28_i();
		return t;
	};
	_proto._Object28_i = function () {
		var t = {};
		this._Object28 = t;
		return t;
	};
	_proto.playerfly_i = function () {
		var t = new eui.Group();
		this.playerfly = t;
		t.x = 40;
		t.y = 14;
		t.elementsContent = [this.image_i(),this.image0_i(),this.image1_i()];
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.source = "cheng1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.source = "cheng2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.alpha = 0;
		t.source = "cheng3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.playerdead_i = function () {
		var t = new eui.Group();
		this.playerdead = t;
		t.x = 40;
		t.y = 14;
		t.elementsContent = [this.image2_i()];
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.source = "explosionChicken_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.playerchicken_i = function () {
		var t = new eui.Group();
		this.playerchicken = t;
		t.x = 40;
		t.y = -2;
		t.elementsContent = [this.image3_i()];
		return t;
	};
	_proto.image3_i = function () {
		var t = new eui.Image();
		this.image3 = t;
		t.source = "shaoji_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shieldSp_i = function () {
		var t = new eui.Image();
		this.shieldSp = t;
		t.source = "dunpaizhao_png";
		t.x = 38;
		t.y = 17;
		return t;
	};
	_proto.arrow_i = function () {
		var t = new eui.Image();
		this.arrow = t;
		t.source = "jiantou_png";
		t.x = 167;
		t.y = -5.5;
		return t;
	};
	_proto.smoke_i = function () {
		var t = new eui.Image();
		this.smoke = t;
		t.alpha = 0;
		t.source = "smoke_png";
		t.x = 1;
		t.y = -7;
		return t;
	};
	_proto.firepoint_i = function () {
		var t = new eui.Image();
		this.firepoint = t;
		t.height = 20;
		t.width = 20;
		t.x = 175;
		t.y = 67.7;
		return t;
	};
	return Player1Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Player2.exml'] = window.Player2Skin = (function (_super) {
	__extends(Player2Skin, _super);
	function Player2Skin() {
		_super.call(this);
		this.skinParts = ["fly","dead","chicken","image","image0","image1","playerfly","image2","playerdead","image3","playerchicken","shieldSp","smoke","firepoint"];
		
		this.height = 177;
		this.width = 180;
		this.fly_i();
		this.dead_i();
		this.chicken_i();
		this.elementsContent = [this.playerfly_i(),this.playerdead_i(),this.playerchicken_i(),this.shieldSp_i(),this.smoke_i(),this.firepoint_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, ["playerfly"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, ["playerdead"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, ["playerchicken"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, ["smoke"],[0],this._TweenItem7,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, ["playerfly"],[0],this._TweenItem8,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, ["playerdead"],[0],this._TweenItem9,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, ["playerchicken"],[0],this._TweenItem10,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, ["smoke"],[0],this._TweenItem11,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"alpha");
		eui.Binding.$bindProperties(this, ["playerfly"],[0],this._TweenItem12,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, ["playerdead"],[0],this._TweenItem13,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object18,"alpha");
		eui.Binding.$bindProperties(this, ["playerchicken"],[0],this._TweenItem14,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object19,"alpha");
		eui.Binding.$bindProperties(this, ["smoke"],[0],this._TweenItem15,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object20,"alpha");
	}
	var _proto = Player2Skin.prototype;

	_proto.fly_i = function () {
		var t = new egret.tween.TweenGroup();
		this.fly = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i(),this._TweenItem6_i(),this._TweenItem7_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._Wait1_i(),this._Set2_i(),this._Wait2_i(),this._Set3_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set4_i(),this._Wait3_i(),this._Set5_i(),this._Wait4_i(),this._Set6_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set7_i(),this._Wait5_i(),this._Set8_i(),this._Wait6_i(),this._Set9_i()];
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set10_i()];
		return t;
	};
	_proto._Set10_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set11_i()];
		return t;
	};
	_proto._Set11_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set12_i()];
		return t;
	};
	_proto._Set12_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._TweenItem7_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem7 = t;
		t.paths = [this._Set13_i()];
		return t;
	};
	_proto._Set13_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto.dead_i = function () {
		var t = new egret.tween.TweenGroup();
		this.dead = t;
		t.items = [this._TweenItem8_i(),this._TweenItem9_i(),this._TweenItem10_i(),this._TweenItem11_i()];
		return t;
	};
	_proto._TweenItem8_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem8 = t;
		t.paths = [this._Set14_i()];
		return t;
	};
	_proto._Set14_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._TweenItem9_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem9 = t;
		t.paths = [this._Set15_i()];
		return t;
	};
	_proto._Set15_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._TweenItem10_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem10 = t;
		t.paths = [this._Set16_i()];
		return t;
	};
	_proto._Set16_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._TweenItem11_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem11 = t;
		t.paths = [this._Set17_i()];
		return t;
	};
	_proto._Set17_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto.chicken_i = function () {
		var t = new egret.tween.TweenGroup();
		this.chicken = t;
		t.items = [this._TweenItem12_i(),this._TweenItem13_i(),this._TweenItem14_i(),this._TweenItem15_i()];
		return t;
	};
	_proto._TweenItem12_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem12 = t;
		t.paths = [this._Set18_i()];
		return t;
	};
	_proto._Set18_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._TweenItem13_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem13 = t;
		t.paths = [this._Set19_i()];
		return t;
	};
	_proto._Set19_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._TweenItem14_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem14 = t;
		t.paths = [this._Set20_i()];
		return t;
	};
	_proto._Set20_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto._TweenItem15_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem15 = t;
		t.paths = [this._Set21_i()];
		return t;
	};
	_proto._Set21_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto.playerfly_i = function () {
		var t = new eui.Group();
		this.playerfly = t;
		t.x = 1;
		t.y = 1;
		t.elementsContent = [this.image_i(),this.image0_i(),this.image1_i()];
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.source = "huang1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.source = "huang2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.alpha = 0;
		t.source = "huang3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.playerdead_i = function () {
		var t = new eui.Group();
		this.playerdead = t;
		t.x = 1;
		t.y = 1;
		t.elementsContent = [this.image2_i()];
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.source = "explosionChicken_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.playerchicken_i = function () {
		var t = new eui.Group();
		this.playerchicken = t;
		t.x = 1;
		t.y = -6;
		t.elementsContent = [this.image3_i()];
		return t;
	};
	_proto.image3_i = function () {
		var t = new eui.Image();
		this.image3 = t;
		t.source = "shaoji_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shieldSp_i = function () {
		var t = new eui.Image();
		this.shieldSp = t;
		t.source = "dunpaizhao_png";
		t.x = 17;
		t.y = 14;
		return t;
	};
	_proto.smoke_i = function () {
		var t = new eui.Image();
		this.smoke = t;
		t.source = "smoke_png";
		t.x = -13;
		t.y = -5;
		return t;
	};
	_proto.firepoint_i = function () {
		var t = new eui.Image();
		this.firepoint = t;
		t.height = 20;
		t.width = 20;
		t.x = 127;
		t.y = 64.7;
		return t;
	};
	return Player2Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/playerIcon.exml'] = window.playerIconSkin = (function (_super) {
	__extends(playerIconSkin, _super);
	function playerIconSkin() {
		_super.call(this);
		this.skinParts = ["avatarMask","player"];
		
		this.height = 98;
		this.width = 95;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = playerIconSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.avatarMask_i(),this.player_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "play-user2_png";
		t.x = -3.03;
		t.y = -3.03;
		return t;
	};
	_proto.avatarMask_i = function () {
		var t = new eui.Image();
		this.avatarMask = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.source = "yuan_png";
		t.width = 188;
		t.x = 0;
		t.y = 0.67;
		return t;
	};
	_proto.player_i = function () {
		var t = new eui.Image();
		this.player = t;
		t.height = 170;
		t.source = "def-use_png";
		t.width = 170;
		t.x = 5.26;
		t.y = 11.32;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "play-user1_png";
		t.x = -1;
		t.y = -2;
		return t;
	};
	return playerIconSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RankItem.exml'] = window.RankItemSkin = (function (_super) {
	__extends(RankItemSkin, _super);
	function RankItemSkin() {
		_super.call(this);
		this.skinParts = ["rank_cnt","rank_name","rank_score"];
		
		this.height = 102;
		this.width = 722;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Image4_i(),this.rank_cnt_i(),this.rank_name_i(),this.rank_score_i()];
	}
	var _proto = RankItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ver-rank-bg2_png";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 113;
		t.y = -2;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 74;
		t.source = "def-use_png";
		t.width = 74;
		t.x = 13;
		t.y = 14;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "rank-num2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "rank-num_png";
		t.x = 26;
		t.y = 25;
		return t;
	};
	_proto.rank_cnt_i = function () {
		var t = new eui.Label();
		this.rank_cnt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.size = 36;
		t.stroke = 1;
		t.strokeColor = 0x000000;
		t.text = "4";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 49;
		t.x = 26;
		t.y = 25;
		return t;
	};
	_proto.rank_name_i = function () {
		var t = new eui.Label();
		this.rank_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.size = 40;
		t.stroke = 1;
		t.text = "昵称";
		t.verticalAlign = "middle";
		t.width = 168;
		t.x = 254;
		t.y = 24;
		return t;
	};
	_proto.rank_score_i = function () {
		var t = new eui.Label();
		this.rank_score = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xff0000;
		t.height = 55;
		t.size = 40;
		t.stroke = 1;
		t.strokeColor = 0x3409f9;
		t.text = "6666";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 168;
		t.x = 522;
		t.y = 24;
		return t;
	};
	return RankItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RoomPrefab.exml'] = window.RoomPrefabSkin = (function (_super) {
	__extends(RoomPrefabSkin, _super);
	function RoomPrefabSkin() {
		_super.call(this);
		this.skinParts = ["roomId","roomname","roomItem"];
		
		this.height = 174;
		this.width = 136;
		this.elementsContent = [this.roomItem_i()];
	}
	var _proto = RoomPrefabSkin.prototype;

	_proto.roomItem_i = function () {
		var t = new eui.Group();
		this.roomItem = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.roomId_i(),this.roomname_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "room_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "bar-user3.1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.roomId_i = function () {
		var t = new eui.Label();
		this.roomId = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 14.58;
		t.size = 10;
		t.text = "100010000000000";
		t.textAlign = "center";
		t.textColor = 0x070707;
		t.verticalAlign = "middle";
		t.width = 127.03;
		t.x = 4;
		t.y = 116;
		return t;
	};
	_proto.roomname_i = function () {
		var t = new eui.Label();
		this.roomname = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = false;
		t.height = 26.58;
		t.size = 13;
		t.text = "默认";
		t.textAlign = "center";
		t.textColor = 0x070707;
		t.verticalAlign = "middle";
		t.width = 127.03;
		t.x = 4;
		t.y = 139;
		return t;
	};
	return RoomPrefabSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RoomUserInfo.exml'] = window.RoomUserInfoSkin = (function (_super) {
	__extends(RoomUserInfoSkin, _super);
	function RoomUserInfoSkin() {
		_super.call(this);
		this.skinParts = ["avatarMask","avatar","username","common","default","type1","type2","type3","kick"];
		
		this.height = 208;
		this.width = 155;
		this.elementsContent = [this._Group1_i(),this.kick_i()];
	}
	var _proto = RoomUserInfoSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 68.5;
		t.anchorOffsetY = 93;
		t.x = 72.5;
		t.y = 108;
		t.elementsContent = [this.common_i(),this.default_i(),this.type1_i(),this.type2_i(),this.type3_i()];
		return t;
	};
	_proto.common_i = function () {
		var t = new eui.Group();
		this.common = t;
		t.x = 4.02;
		t.y = 3.35;
		t.elementsContent = [this.avatarMask_i(),this.avatar_i(),this._Image1_i(),this.username_i()];
		return t;
	};
	_proto.avatarMask_i = function () {
		var t = new eui.Image();
		this.avatarMask = t;
		t.fillMode = "scale";
		t.source = "def-user-squ_png";
		return t;
	};
	_proto.avatar_i = function () {
		var t = new eui.Image();
		this.avatar = t;
		t.fillMode = "scale";
		t.height = 125;
		t.source = "def-user-squ_png";
		t.width = 125;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "";
		t.width = 125;
		t.x = 0;
		t.y = 100;
		return t;
	};
	_proto.username_i = function () {
		var t = new eui.Label();
		this.username = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21.33;
		t.size = 15;
		t.text = "226300";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 121.6;
		t.x = 2.97;
		t.y = 103.17;
		return t;
	};
	_proto.default_i = function () {
		var t = new eui.Group();
		this.default = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 123.2;
		t.source = "";
		t.width = 124;
		t.x = 6.61;
		t.y = 5.3;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "bar-user2.2_png";
		t.x = -0.17;
		t.y = 147;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "bar-user2.1_png";
		t.y = -1;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "";
		t.width = 125;
		t.x = 6.11;
		t.y = 102.85;
		return t;
	};
	_proto.type1_i = function () {
		var t = new eui.Group();
		this.type1 = t;
		t.x = 1;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Label1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "bar-user1.2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "bar-user1.1_png";
		t.x = 1.67;
		t.y = 146.35;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "房主";
		t.x = 54.19;
		t.y = 155.85;
		return t;
	};
	_proto.type2_i = function () {
		var t = new eui.Group();
		this.type2 = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Label2_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "bar-user2.1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "bar-user2.2_png";
		t.x = 1.67;
		t.y = 146.35;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "路人";
		t.x = 51.19;
		t.y = 155.85;
		return t;
	};
	_proto.type3_i = function () {
		var t = new eui.Group();
		this.type3 = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._Label3_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "bar-user3.1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "bar-user3.3_png";
		t.x = 1.67;
		t.y = 146.35;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "我";
		t.x = 58.5;
		t.y = 155.85;
		return t;
	};
	_proto.kick_i = function () {
		var t = new eui.Image();
		this.kick = t;
		t.source = "kick_png";
		t.x = 124.02;
		t.y = 1.35;
		return t;
	};
	return RoomUserInfoSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Shield.exml'] = window.ShieldSkin = (function (_super) {
	__extends(ShieldSkin, _super);
	function ShieldSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 85;
		this.width = 82;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = ShieldSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "dunpaiqiu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ShieldSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Track.exml'] = window.TrackSkin = (function (_super) {
	__extends(TrackSkin, _super);
	function TrackSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 82;
		this.width = 79;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = TrackSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "daodanqiu_png";
		t.x = 1;
		return t;
	};
	return TrackSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiCreateRoom.exml'] = window.uiCreateRoomSkin = (function (_super) {
	__extends(uiCreateRoomSkin, _super);
	function uiCreateRoomSkin() {
		_super.call(this);
		this.skinParts = ["plus","sub","roomName","playerNum","create","back"];
		
		this.height = 1344;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.plus_i(),this.sub_i(),this._Image3_i(),this.roomName_i(),this._Image4_i(),this.playerNum_i(),this.create_i(),this.back_i()];
	}
	var _proto = uiCreateRoomSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1344;
		t.source = "home-bg_png";
		t.width = 750;
		t.x = -1;
		t.y = 2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "cpm-logo2_png";
		t.x = 62.5;
		t.y = 384.5;
		return t;
	};
	_proto.plus_i = function () {
		var t = new eui.Image();
		this.plus = t;
		t.source = "icon-plus_png";
		t.x = 561;
		t.y = 634;
		return t;
	};
	_proto.sub_i = function () {
		var t = new eui.Image();
		this.sub = t;
		t.source = "minus_png";
		t.x = 347;
		t.y = 653;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "room-kuang2_png";
		t.x = 327;
		t.y = 770;
		return t;
	};
	_proto.roomName_i = function () {
		var t = new eui.TextInput();
		this.roomName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.prompt = "输入房间名字";
		t.rotation = 0.85;
		t.width = 228;
		t.x = 335;
		t.y = 778;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "room-kuang2_1_png";
		t.x = 449;
		t.y = 632;
		return t;
	};
	_proto.playerNum_i = function () {
		var t = new eui.Label();
		this.playerNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50.67;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x020202;
		t.verticalAlign = "middle";
		t.width = 45.34;
		t.x = 454.33;
		t.y = 639.33;
		return t;
	};
	_proto.create_i = function () {
		var t = new eui.Group();
		this.create = t;
		t.x = 262;
		t.y = 931.5;
		t.elementsContent = [this._Image5_i(),this._Label1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 75;
		t.source = "dating-btn_png";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.27;
		t.size = 32;
		t.text = "创建";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 113.39;
		t.x = 34;
		t.y = 6.5;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Image();
		this.back = t;
		t.source = "close_png";
		t.x = 610.5;
		t.y = 501.61;
		return t;
	};
	return uiCreateRoomSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiExit.exml'] = window.uiExitSkin = (function (_super) {
	__extends(uiExitSkin, _super);
	function uiExitSkin() {
		_super.call(this);
		this.skinParts = ["quit","back"];
		
		this.height = 1344;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.quit_i(),this._Label2_i(),this.back_i()];
	}
	var _proto = uiExitSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1351;
		t.source = "border_png";
		t.width = 741;
		t.x = 8;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "kuang_png";
		t.x = 63.5;
		t.y = 400.5;
		return t;
	};
	_proto.quit_i = function () {
		var t = new eui.Group();
		this.quit = t;
		t.x = 245;
		t.y = 828;
		t.elementsContent = [this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "home-btn5_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.size = 36;
		t.text = "退出";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 186;
		t.x = 37;
		t.y = 4;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 134;
		t.size = 36;
		t.text = "是否退出游戏？";
		t.textAlign = "center";
		t.textColor = 0x070707;
		t.verticalAlign = "middle";
		t.width = 302;
		t.x = 228;
		t.y = 652;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Image();
		this.back = t;
		t.source = "close_png";
		t.x = 611.5;
		t.y = 504;
		return t;
	};
	return uiExitSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiGame.exml'] = window.uiGameSkin = (function (_super) {
	__extends(uiGameSkin, _super);
	function uiGameSkin() {
		_super.call(this);
		this.skinParts = ["clock","rope","roundLb","hitby","hit","gameoverAni","ready","timeoverTween","image1","image2","shijiandao","shijiandao0","image3","roundCntLb","image","image0","time","playerIcon1","playerIcon2","playerLayout","enemyIcon2","enemyIcon1","enemyLayout","playerHeart","enemyHeart","exit","image9","image4","image5","image6","image7","image8","hitByGroup","image10","image11","image12","image13","image14","image15","image17","image16","hitgroup","image18","image19","gameoverGroup","image20","image21","readyGroup","image22","image23","timeoverGroup"];
		
		this.height = 1344;
		this.width = 750;
		this.clock_i();
		this.rope_i();
		this.roundLb_i();
		this.hitby_i();
		this.hit_i();
		this.gameoverAni_i();
		this.ready_i();
		this.timeoverTween_i();
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Group1_i(),this._Image4_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this.playerLayout_i(),this.enemyLayout_i(),this.playerHeart_i(),this.enemyHeart_i(),this.exit_i(),this.hitByGroup_i(),this.hitgroup_i(),this.gameoverGroup_i(),this.readyGroup_i(),this.timeoverGroup_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object13,"scaleX");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object13,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"scaleY");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object15,"scaleX");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object15,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"scaleY");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object17,"scaleX");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object17,"scaleY");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [800],[],this._Object18,"height");
		eui.Binding.$bindProperties(this, [0],[],this._Object19,"height");
		eui.Binding.$bindProperties(this, ["image2"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object20,"height");
		eui.Binding.$bindProperties(this, [6.5],[],this._Object20,"x");
		eui.Binding.$bindProperties(this, [2141.57],[],this._Object20,"y");
		eui.Binding.$bindProperties(this, ["image3"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object21,"alpha");
		eui.Binding.$bindProperties(this, ["roundCntLb"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object22,"alpha");
		eui.Binding.$bindProperties(this, ["image4"],[0],this._TweenItem7,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object23,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object24,"alpha");
		eui.Binding.$bindProperties(this, ["image5"],[0],this._TweenItem8,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object25,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object26,"alpha");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object27,"scaleX");
		eui.Binding.$bindProperties(this, [13.39],[],this._Object27,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object28,"alpha");
		eui.Binding.$bindProperties(this, ["image6"],[0],this._TweenItem9,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object29,"alpha");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object30,"scaleX");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object30,"scaleY");
		eui.Binding.$bindProperties(this, [9.39],[],this._Object30,"x");
		eui.Binding.$bindProperties(this, [22.51],[],this._Object30,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object31,"alpha");
		eui.Binding.$bindProperties(this, ["image7"],[0],this._TweenItem10,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object32,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object33,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object34,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object35,"alpha");
		eui.Binding.$bindProperties(this, ["image8"],[0],this._TweenItem11,"target");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object36,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object36,"scaleY");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object37,"scaleX");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object37,"scaleY");
		eui.Binding.$bindProperties(this, [-40],[],this._Object37,"x");
		eui.Binding.$bindProperties(this, [54],[],this._Object37,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object38,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object38,"scaleY");
		eui.Binding.$bindProperties(this, [-24],[],this._Object38,"x");
		eui.Binding.$bindProperties(this, [60],[],this._Object38,"y");
		eui.Binding.$bindProperties(this, ["image9"],[0],this._TweenItem12,"target");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object39,"alpha");
		eui.Binding.$bindProperties(this, [2.5],[],this._Object39,"scaleX");
		eui.Binding.$bindProperties(this, [2.5],[],this._Object39,"scaleY");
		eui.Binding.$bindProperties(this, [-193],[],this._Object39,"x");
		eui.Binding.$bindProperties(this, [4],[],this._Object39,"y");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object40,"scaleX");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object40,"scaleY");
		eui.Binding.$bindProperties(this, [-41],[],this._Object40,"x");
		eui.Binding.$bindProperties(this, [52],[],this._Object40,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object41,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object41,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object41,"scaleY");
		eui.Binding.$bindProperties(this, [-23],[],this._Object41,"x");
		eui.Binding.$bindProperties(this, [60],[],this._Object41,"y");
		eui.Binding.$bindProperties(this, ["hitByGroup"],[0],this._TweenItem13,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object42,"alpha");
		eui.Binding.$bindProperties(this, ["hitgroup"],[0],this._TweenItem14,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object43,"alpha");
		eui.Binding.$bindProperties(this, ["gameoverGroup"],[0],this._TweenItem15,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object44,"alpha");
		eui.Binding.$bindProperties(this, ["readyGroup"],[0],this._TweenItem16,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object45,"alpha");
		eui.Binding.$bindProperties(this, ["timeoverGroup"],[0],this._TweenItem17,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object46,"alpha");
		eui.Binding.$bindProperties(this, ["image10"],[0],this._TweenItem18,"target");
		eui.Binding.$bindProperties(this, [0.3],[],this._Object47,"scaleX");
		eui.Binding.$bindProperties(this, [0.3],[],this._Object47,"scaleY");
		eui.Binding.$bindProperties(this, [360],[],this._Object48,"rotation");
		eui.Binding.$bindProperties(this, [1],[],this._Object48,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object48,"scaleY");
		eui.Binding.$bindProperties(this, ["image11"],[0],this._TweenItem19,"target");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object49,"alpha");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object49,"scaleX");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object49,"scaleY");
		eui.Binding.$bindProperties(this, [94],[],this._Object49,"x");
		eui.Binding.$bindProperties(this, [92],[],this._Object49,"y");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object50,"alpha");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object50,"scaleX");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object50,"scaleY");
		eui.Binding.$bindProperties(this, [151.07],[],this._Object50,"x");
		eui.Binding.$bindProperties(this, [169.89],[],this._Object50,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object51,"alpha");
		eui.Binding.$bindProperties(this, [137.07],[],this._Object51,"x");
		eui.Binding.$bindProperties(this, [142.89],[],this._Object51,"y");
		eui.Binding.$bindProperties(this, ["image12"],[0],this._TweenItem20,"target");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object52,"alpha");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object52,"scaleX");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object52,"scaleY");
		eui.Binding.$bindProperties(this, [94],[],this._Object52,"x");
		eui.Binding.$bindProperties(this, [94],[],this._Object52,"y");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object53,"alpha");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object53,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object53,"scaleY");
		eui.Binding.$bindProperties(this, [-66],[],this._Object53,"x");
		eui.Binding.$bindProperties(this, [-24],[],this._Object53,"y");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object54,"alpha");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object54,"scaleX");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object54,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object55,"alpha");
		eui.Binding.$bindProperties(this, [-43.2],[],this._Object55,"x");
		eui.Binding.$bindProperties(this, [-13.36],[],this._Object55,"y");
		eui.Binding.$bindProperties(this, ["image13"],[0],this._TweenItem21,"target");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object56,"alpha");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object56,"scaleX");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object56,"scaleY");
		eui.Binding.$bindProperties(this, [92],[],this._Object56,"x");
		eui.Binding.$bindProperties(this, [92],[],this._Object56,"y");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object57,"alpha");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object57,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object57,"scaleY");
		eui.Binding.$bindProperties(this, [208],[],this._Object57,"x");
		eui.Binding.$bindProperties(this, [-20],[],this._Object57,"y");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object58,"alpha");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object58,"scaleX");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object58,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object59,"alpha");
		eui.Binding.$bindProperties(this, [200.4],[],this._Object59,"x");
		eui.Binding.$bindProperties(this, [-1.76],[],this._Object59,"y");
		eui.Binding.$bindProperties(this, ["image14"],[0],this._TweenItem22,"target");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object60,"alpha");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object60,"scaleX");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object60,"scaleY");
		eui.Binding.$bindProperties(this, [92],[],this._Object60,"x");
		eui.Binding.$bindProperties(this, [92],[],this._Object60,"y");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object61,"alpha");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object61,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object61,"scaleY");
		eui.Binding.$bindProperties(this, [-1.51],[],this._Object61,"x");
		eui.Binding.$bindProperties(this, [151.52],[],this._Object61,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object62,"alpha");
		eui.Binding.$bindProperties(this, [9.09],[],this._Object62,"x");
		eui.Binding.$bindProperties(this, [128.79],[],this._Object62,"y");
		eui.Binding.$bindProperties(this, ["image15"],[0],this._TweenItem23,"target");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object63,"alpha");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object63,"scaleX");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object63,"scaleY");
		eui.Binding.$bindProperties(this, [92],[],this._Object63,"x");
		eui.Binding.$bindProperties(this, [92],[],this._Object63,"y");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object64,"alpha");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object64,"scaleX");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object64,"scaleY");
		eui.Binding.$bindProperties(this, [48.66],[],this._Object64,"x");
		eui.Binding.$bindProperties(this, [-5.91],[],this._Object64,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object65,"alpha");
		eui.Binding.$bindProperties(this, [63.83],[],this._Object65,"x");
		eui.Binding.$bindProperties(this, [13.81],[],this._Object65,"y");
		eui.Binding.$bindProperties(this, ["image16"],[0],this._TweenItem24,"target");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object66,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object66,"scaleY");
		eui.Binding.$bindProperties(this, [-10],[],this._Object66,"x");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object67,"scaleX");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object67,"scaleY");
		eui.Binding.$bindProperties(this, [-58],[],this._Object67,"x");
		eui.Binding.$bindProperties(this, [49],[],this._Object67,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object68,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object68,"scaleY");
		eui.Binding.$bindProperties(this, [-29],[],this._Object68,"x");
		eui.Binding.$bindProperties(this, [61],[],this._Object68,"y");
		eui.Binding.$bindProperties(this, ["image17"],[0],this._TweenItem25,"target");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object69,"alpha");
		eui.Binding.$bindProperties(this, [2.5],[],this._Object69,"scaleX");
		eui.Binding.$bindProperties(this, [2.5],[],this._Object69,"scaleY");
		eui.Binding.$bindProperties(this, [-226],[],this._Object69,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object69,"y");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object70,"scaleX");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object70,"scaleY");
		eui.Binding.$bindProperties(this, [-44],[],this._Object70,"x");
		eui.Binding.$bindProperties(this, [48],[],this._Object70,"y");
		eui.Binding.$bindProperties(this, [1.75],[],this._Object71,"scaleX");
		eui.Binding.$bindProperties(this, [1.75],[],this._Object71,"scaleY");
		eui.Binding.$bindProperties(this, [-124],[],this._Object71,"x");
		eui.Binding.$bindProperties(this, [28],[],this._Object71,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object72,"alpha");
		eui.Binding.$bindProperties(this, [2.5],[],this._Object72,"scaleX");
		eui.Binding.$bindProperties(this, [2.5],[],this._Object72,"scaleY");
		eui.Binding.$bindProperties(this, [-227],[],this._Object72,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object72,"y");
		eui.Binding.$bindProperties(this, ["hitgroup"],[0],this._TweenItem26,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object73,"alpha");
		eui.Binding.$bindProperties(this, ["hitByGroup"],[0],this._TweenItem27,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object74,"alpha");
		eui.Binding.$bindProperties(this, ["gameoverGroup"],[0],this._TweenItem28,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object75,"alpha");
		eui.Binding.$bindProperties(this, ["readyGroup"],[0],this._TweenItem29,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object76,"alpha");
		eui.Binding.$bindProperties(this, ["timeoverGroup"],[0],this._TweenItem30,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object77,"alpha");
		eui.Binding.$bindProperties(this, ["image18"],[0],this._TweenItem31,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object78,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object79,"alpha");
		eui.Binding.$bindProperties(this, [72],[],this._Object79,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object80,"alpha");
		eui.Binding.$bindProperties(this, [2],[],this._Object80,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object80,"scaleY");
		eui.Binding.$bindProperties(this, [-268.3],[],this._Object80,"x");
		eui.Binding.$bindProperties(this, [48],[],this._Object80,"y");
		eui.Binding.$bindProperties(this, ["image19"],[0],this._TweenItem32,"target");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object81,"alpha");
		eui.Binding.$bindProperties(this, [744.7],[],this._Object81,"x");
		eui.Binding.$bindProperties(this, [1],[],this._Object82,"alpha");
		eui.Binding.$bindProperties(this, [297],[],this._Object82,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object83,"rotation");
		eui.Binding.$bindProperties(this, [-75.5],[],this._Object83,"x");
		eui.Binding.$bindProperties(this, [52],[],this._Object83,"y");
		eui.Binding.$bindProperties(this, [-10],[],this._Object84,"rotation");
		eui.Binding.$bindProperties(this, [108],[],this._Object84,"y");
		eui.Binding.$bindProperties(this, [10],[],this._Object85,"rotation");
		eui.Binding.$bindProperties(this, [48],[],this._Object85,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object86,"rotation");
		eui.Binding.$bindProperties(this, [76],[],this._Object86,"y");
		eui.Binding.$bindProperties(this, [10],[],this._Object87,"rotation");
		eui.Binding.$bindProperties(this, [44],[],this._Object87,"y");
		eui.Binding.$bindProperties(this, [-10],[],this._Object88,"rotation");
		eui.Binding.$bindProperties(this, [96],[],this._Object88,"y");
		eui.Binding.$bindProperties(this, [10],[],this._Object89,"rotation");
		eui.Binding.$bindProperties(this, [52],[],this._Object89,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object90,"rotation");
		eui.Binding.$bindProperties(this, [72],[],this._Object90,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object91,"alpha");
		eui.Binding.$bindProperties(this, ["hitByGroup"],[0],this._TweenItem33,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object92,"alpha");
		eui.Binding.$bindProperties(this, ["hitgroup"],[0],this._TweenItem34,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object93,"alpha");
		eui.Binding.$bindProperties(this, ["gameoverGroup"],[0],this._TweenItem35,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object94,"alpha");
		eui.Binding.$bindProperties(this, ["readyGroup"],[0],this._TweenItem36,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object95,"alpha");
		eui.Binding.$bindProperties(this, ["timeoverGroup"],[0],this._TweenItem37,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object96,"alpha");
		eui.Binding.$bindProperties(this, ["image20"],[0],this._TweenItem38,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object97,"alpha");
		eui.Binding.$bindProperties(this, [-529],[],this._Object97,"x");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object98,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object98,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object98,"scaleY");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object99,"alpha");
		eui.Binding.$bindProperties(this, [-17],[],this._Object99,"x");
		eui.Binding.$bindProperties(this, [1],[],this._Object100,"alpha");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object100,"scaleX");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object100,"scaleY");
		eui.Binding.$bindProperties(this, [-37],[],this._Object100,"x");
		eui.Binding.$bindProperties(this, [36],[],this._Object100,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object101,"alpha");
		eui.Binding.$bindProperties(this, [3],[],this._Object101,"scaleX");
		eui.Binding.$bindProperties(this, [3],[],this._Object101,"scaleY");
		eui.Binding.$bindProperties(this, [-181],[],this._Object101,"x");
		eui.Binding.$bindProperties(this, [-32],[],this._Object101,"y");
		eui.Binding.$bindProperties(this, ["image21"],[0],this._TweenItem39,"target");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object102,"scaleX");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object102,"scaleY");
		eui.Binding.$bindProperties(this, [64],[],this._Object102,"x");
		eui.Binding.$bindProperties(this, [88],[],this._Object102,"y");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object103,"scaleX");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object103,"scaleY");
		eui.Binding.$bindProperties(this, [-56],[],this._Object103,"x");
		eui.Binding.$bindProperties(this, [40],[],this._Object103,"y");
		eui.Binding.$bindProperties(this, [0.9],[],this._Object104,"scaleX");
		eui.Binding.$bindProperties(this, [0.9],[],this._Object104,"scaleY");
		eui.Binding.$bindProperties(this, [-28],[],this._Object104,"x");
		eui.Binding.$bindProperties(this, [52],[],this._Object104,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object105,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object105,"scaleY");
		eui.Binding.$bindProperties(this, [-40],[],this._Object105,"x");
		eui.Binding.$bindProperties(this, [44],[],this._Object105,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object106,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object106,"scaleY");
		eui.Binding.$bindProperties(this, [0.3],[],this._Object107,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object108,"alpha");
		eui.Binding.$bindProperties(this, [3.5],[],this._Object108,"scaleX");
		eui.Binding.$bindProperties(this, [3.5],[],this._Object108,"scaleY");
		eui.Binding.$bindProperties(this, [-397],[],this._Object108,"x");
		eui.Binding.$bindProperties(this, [-83],[],this._Object108,"y");
		eui.Binding.$bindProperties(this, ["readyGroup"],[0],this._TweenItem40,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object109,"alpha");
		eui.Binding.$bindProperties(this, ["hitByGroup"],[0],this._TweenItem41,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object110,"alpha");
		eui.Binding.$bindProperties(this, ["gameoverGroup"],[0],this._TweenItem42,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object111,"alpha");
		eui.Binding.$bindProperties(this, ["timeoverGroup"],[0],this._TweenItem43,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object112,"alpha");
		eui.Binding.$bindProperties(this, ["image22"],[0],this._TweenItem44,"target");
		eui.Binding.$bindProperties(this, [-200],[],this._Object113,"x");
		eui.Binding.$bindProperties(this, [50],[],this._Object113,"y");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object114,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object115,"alpha");
		eui.Binding.$bindProperties(this, [2],[],this._Object115,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object115,"scaleY");
		eui.Binding.$bindProperties(this, [-502],[],this._Object115,"x");
		eui.Binding.$bindProperties(this, ["image23"],[0],this._TweenItem45,"target");
		eui.Binding.$bindProperties(this, [2],[],this._Object116,"rotation");
		eui.Binding.$bindProperties(this, [1],[],this._Object117,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object117,"rotation");
		eui.Binding.$bindProperties(this, [-138],[],this._Object117,"x");
		eui.Binding.$bindProperties(this, [-203],[],this._Object118,"x");
		eui.Binding.$bindProperties(this, [-10],[],this._Object119,"rotation");
		eui.Binding.$bindProperties(this, [130],[],this._Object119,"y");
		eui.Binding.$bindProperties(this, [10],[],this._Object120,"rotation");
		eui.Binding.$bindProperties(this, [36],[],this._Object120,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object121,"rotation");
		eui.Binding.$bindProperties(this, [10],[],this._Object122,"rotation");
		eui.Binding.$bindProperties(this, [5],[],this._Object122,"y");
		eui.Binding.$bindProperties(this, [-10],[],this._Object123,"rotation");
		eui.Binding.$bindProperties(this, [117],[],this._Object123,"y");
		eui.Binding.$bindProperties(this, [10],[],this._Object124,"rotation");
		eui.Binding.$bindProperties(this, [18],[],this._Object124,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object125,"rotation");
		eui.Binding.$bindProperties(this, [61],[],this._Object125,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object126,"alpha");
		eui.Binding.$bindProperties(this, ["timeoverGroup"],[0],this._TweenItem46,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object127,"alpha");
		eui.Binding.$bindProperties(this, ["readyGroup"],[0],this._TweenItem47,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object128,"alpha");
		eui.Binding.$bindProperties(this, ["gameoverGroup"],[0],this._TweenItem48,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object129,"alpha");
		eui.Binding.$bindProperties(this, ["hitgroup"],[0],this._TweenItem49,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object130,"alpha");
		eui.Binding.$bindProperties(this, ["hitByGroup"],[0],this._TweenItem50,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object131,"alpha");
	}
	var _proto = uiGameSkin.prototype;

	_proto.clock_i = function () {
		var t = new egret.tween.TweenGroup();
		this.clock = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i(),this._To7_i(),this._To8_i(),this._To9_i(),this._To10_i(),this._To11_i(),this._To12_i(),this._To13_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Wait1_i(),this._Set2_i(),this._To14_i(),this._Wait2_i(),this._Set3_i(),this._To15_i(),this._Wait3_i(),this._Set4_i(),this._Wait4_i(),this._Set5_i()];
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 7000;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 500;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To15_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1000;
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 450;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto.rope_i = function () {
		var t = new egret.tween.TweenGroup();
		this.rope = t;
		t.items = [this._TweenItem3_i(),this._TweenItem4_i()];
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set6_i(),this._To16_i()];
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._To16_i = function () {
		var t = new egret.tween.To();
		t.duration = 2250;
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set7_i(),this._To17_i()];
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To17_i = function () {
		var t = new egret.tween.To();
		t.duration = 2250;
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto.roundLb_i = function () {
		var t = new egret.tween.TweenGroup();
		this.roundLb = t;
		t.items = [this._TweenItem5_i(),this._TweenItem6_i()];
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set8_i(),this._Wait5_i(),this._Set9_i(),this._To18_i()];
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2250;
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To18_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object21_i();
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		this._Object21 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set10_i(),this._Wait6_i(),this._Set11_i(),this._To19_i()];
		return t;
	};
	_proto._Set10_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2250;
		return t;
	};
	_proto._Set11_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To19_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object22_i();
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		this._Object22 = t;
		return t;
	};
	_proto.hitby_i = function () {
		var t = new egret.tween.TweenGroup();
		this.hitby = t;
		t.items = [this._TweenItem7_i(),this._TweenItem8_i(),this._TweenItem9_i(),this._TweenItem10_i(),this._TweenItem11_i(),this._TweenItem12_i(),this._TweenItem13_i(),this._TweenItem14_i(),this._TweenItem15_i(),this._TweenItem16_i(),this._TweenItem17_i()];
		return t;
	};
	_proto._TweenItem7_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem7 = t;
		t.paths = [this._Set12_i(),this._To20_i(),this._To21_i()];
		return t;
	};
	_proto._Set12_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object23_i();
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		this._Object23 = t;
		return t;
	};
	_proto._To20_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		return t;
	};
	_proto._To21_i = function () {
		var t = new egret.tween.To();
		t.duration = 1750;
		t.props = this._Object24_i();
		return t;
	};
	_proto._Object24_i = function () {
		var t = {};
		this._Object24 = t;
		return t;
	};
	_proto._TweenItem8_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem8 = t;
		t.paths = [this._Set13_i(),this._To22_i(),this._To23_i(),this._To24_i()];
		return t;
	};
	_proto._Set13_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object25_i();
		return t;
	};
	_proto._Object25_i = function () {
		var t = {};
		this._Object25 = t;
		return t;
	};
	_proto._To22_i = function () {
		var t = new egret.tween.To();
		t.duration = 1250;
		t.props = this._Object26_i();
		return t;
	};
	_proto._Object26_i = function () {
		var t = {};
		this._Object26 = t;
		return t;
	};
	_proto._To23_i = function () {
		var t = new egret.tween.To();
		t.duration = 1500;
		t.props = this._Object27_i();
		return t;
	};
	_proto._Object27_i = function () {
		var t = {};
		this._Object27 = t;
		return t;
	};
	_proto._To24_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object28_i();
		return t;
	};
	_proto._Object28_i = function () {
		var t = {};
		this._Object28 = t;
		return t;
	};
	_proto._TweenItem9_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem9 = t;
		t.paths = [this._Set14_i(),this._To25_i(),this._To26_i(),this._To27_i()];
		return t;
	};
	_proto._Set14_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object29_i();
		return t;
	};
	_proto._Object29_i = function () {
		var t = {};
		this._Object29 = t;
		return t;
	};
	_proto._To25_i = function () {
		var t = new egret.tween.To();
		t.duration = 1450;
		t.props = this._Object30_i();
		return t;
	};
	_proto._Object30_i = function () {
		var t = {};
		this._Object30 = t;
		return t;
	};
	_proto._To26_i = function () {
		var t = new egret.tween.To();
		t.duration = 1500;
		return t;
	};
	_proto._To27_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object31_i();
		return t;
	};
	_proto._Object31_i = function () {
		var t = {};
		this._Object31 = t;
		return t;
	};
	_proto._TweenItem10_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem10 = t;
		t.paths = [this._Set15_i(),this._To28_i(),this._To29_i(),this._To30_i()];
		return t;
	};
	_proto._Set15_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object32_i();
		return t;
	};
	_proto._Object32_i = function () {
		var t = {};
		this._Object32 = t;
		return t;
	};
	_proto._To28_i = function () {
		var t = new egret.tween.To();
		t.duration = 1650;
		t.props = this._Object33_i();
		return t;
	};
	_proto._Object33_i = function () {
		var t = {};
		this._Object33 = t;
		return t;
	};
	_proto._To29_i = function () {
		var t = new egret.tween.To();
		t.duration = 1500;
		t.props = this._Object34_i();
		return t;
	};
	_proto._Object34_i = function () {
		var t = {};
		this._Object34 = t;
		return t;
	};
	_proto._To30_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object35_i();
		return t;
	};
	_proto._Object35_i = function () {
		var t = {};
		this._Object35 = t;
		return t;
	};
	_proto._TweenItem11_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem11 = t;
		t.paths = [this._Set16_i(),this._To31_i(),this._To32_i()];
		return t;
	};
	_proto._Set16_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object36_i();
		return t;
	};
	_proto._Object36_i = function () {
		var t = {};
		this._Object36 = t;
		return t;
	};
	_proto._To31_i = function () {
		var t = new egret.tween.To();
		t.duration = 2000;
		t.props = this._Object37_i();
		return t;
	};
	_proto._Object37_i = function () {
		var t = {};
		this._Object37 = t;
		return t;
	};
	_proto._To32_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.props = this._Object38_i();
		return t;
	};
	_proto._Object38_i = function () {
		var t = {};
		this._Object38 = t;
		return t;
	};
	_proto._TweenItem12_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem12 = t;
		t.paths = [this._Set17_i(),this._To33_i(),this._To34_i()];
		return t;
	};
	_proto._Set17_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object39_i();
		return t;
	};
	_proto._Object39_i = function () {
		var t = {};
		this._Object39 = t;
		return t;
	};
	_proto._To33_i = function () {
		var t = new egret.tween.To();
		t.duration = 2000;
		t.props = this._Object40_i();
		return t;
	};
	_proto._Object40_i = function () {
		var t = {};
		this._Object40 = t;
		return t;
	};
	_proto._To34_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.props = this._Object41_i();
		return t;
	};
	_proto._Object41_i = function () {
		var t = {};
		this._Object41 = t;
		return t;
	};
	_proto._TweenItem13_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem13 = t;
		t.paths = [this._Set18_i()];
		return t;
	};
	_proto._Set18_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object42_i();
		return t;
	};
	_proto._Object42_i = function () {
		var t = {};
		this._Object42 = t;
		return t;
	};
	_proto._TweenItem14_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem14 = t;
		t.paths = [this._Set19_i()];
		return t;
	};
	_proto._Set19_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object43_i();
		return t;
	};
	_proto._Object43_i = function () {
		var t = {};
		this._Object43 = t;
		return t;
	};
	_proto._TweenItem15_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem15 = t;
		t.paths = [this._Set20_i()];
		return t;
	};
	_proto._Set20_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object44_i();
		return t;
	};
	_proto._Object44_i = function () {
		var t = {};
		this._Object44 = t;
		return t;
	};
	_proto._TweenItem16_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem16 = t;
		t.paths = [this._Set21_i()];
		return t;
	};
	_proto._Set21_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object45_i();
		return t;
	};
	_proto._Object45_i = function () {
		var t = {};
		this._Object45 = t;
		return t;
	};
	_proto._TweenItem17_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem17 = t;
		t.paths = [this._Set22_i()];
		return t;
	};
	_proto._Set22_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object46_i();
		return t;
	};
	_proto._Object46_i = function () {
		var t = {};
		this._Object46 = t;
		return t;
	};
	_proto.hit_i = function () {
		var t = new egret.tween.TweenGroup();
		this.hit = t;
		t.items = [this._TweenItem18_i(),this._TweenItem19_i(),this._TweenItem20_i(),this._TweenItem21_i(),this._TweenItem22_i(),this._TweenItem23_i(),this._TweenItem24_i(),this._TweenItem25_i(),this._TweenItem26_i(),this._TweenItem27_i(),this._TweenItem28_i(),this._TweenItem29_i(),this._TweenItem30_i()];
		return t;
	};
	_proto._TweenItem18_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem18 = t;
		t.paths = [this._Set23_i(),this._To35_i()];
		return t;
	};
	_proto._Set23_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object47_i();
		return t;
	};
	_proto._Object47_i = function () {
		var t = {};
		this._Object47 = t;
		return t;
	};
	_proto._To35_i = function () {
		var t = new egret.tween.To();
		t.duration = 2250;
		t.props = this._Object48_i();
		return t;
	};
	_proto._Object48_i = function () {
		var t = {};
		this._Object48 = t;
		return t;
	};
	_proto._TweenItem19_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem19 = t;
		t.paths = [this._Set24_i(),this._To36_i(),this._To37_i()];
		return t;
	};
	_proto._Set24_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object49_i();
		return t;
	};
	_proto._Object49_i = function () {
		var t = {};
		this._Object49 = t;
		return t;
	};
	_proto._To36_i = function () {
		var t = new egret.tween.To();
		t.duration = 1600;
		t.props = this._Object50_i();
		return t;
	};
	_proto._Object50_i = function () {
		var t = {};
		this._Object50 = t;
		return t;
	};
	_proto._To37_i = function () {
		var t = new egret.tween.To();
		t.duration = 650;
		t.props = this._Object51_i();
		return t;
	};
	_proto._Object51_i = function () {
		var t = {};
		this._Object51 = t;
		return t;
	};
	_proto._TweenItem20_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem20 = t;
		t.paths = [this._Set25_i(),this._To38_i(),this._To39_i(),this._To40_i()];
		return t;
	};
	_proto._Set25_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object52_i();
		return t;
	};
	_proto._Object52_i = function () {
		var t = {};
		this._Object52 = t;
		return t;
	};
	_proto._To38_i = function () {
		var t = new egret.tween.To();
		t.duration = 1250;
		t.props = this._Object53_i();
		return t;
	};
	_proto._Object53_i = function () {
		var t = {};
		this._Object53 = t;
		return t;
	};
	_proto._To39_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object54_i();
		return t;
	};
	_proto._Object54_i = function () {
		var t = {};
		this._Object54 = t;
		return t;
	};
	_proto._To40_i = function () {
		var t = new egret.tween.To();
		t.duration = 650;
		t.props = this._Object55_i();
		return t;
	};
	_proto._Object55_i = function () {
		var t = {};
		this._Object55 = t;
		return t;
	};
	_proto._TweenItem21_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem21 = t;
		t.paths = [this._Set26_i(),this._To41_i(),this._To42_i(),this._To43_i()];
		return t;
	};
	_proto._Set26_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object56_i();
		return t;
	};
	_proto._Object56_i = function () {
		var t = {};
		this._Object56 = t;
		return t;
	};
	_proto._To41_i = function () {
		var t = new egret.tween.To();
		t.duration = 1350;
		t.props = this._Object57_i();
		return t;
	};
	_proto._Object57_i = function () {
		var t = {};
		this._Object57 = t;
		return t;
	};
	_proto._To42_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object58_i();
		return t;
	};
	_proto._Object58_i = function () {
		var t = {};
		this._Object58 = t;
		return t;
	};
	_proto._To43_i = function () {
		var t = new egret.tween.To();
		t.duration = 650;
		t.props = this._Object59_i();
		return t;
	};
	_proto._Object59_i = function () {
		var t = {};
		this._Object59 = t;
		return t;
	};
	_proto._TweenItem22_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem22 = t;
		t.paths = [this._Set27_i(),this._To44_i(),this._To45_i()];
		return t;
	};
	_proto._Set27_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object60_i();
		return t;
	};
	_proto._Object60_i = function () {
		var t = {};
		this._Object60 = t;
		return t;
	};
	_proto._To44_i = function () {
		var t = new egret.tween.To();
		t.duration = 1500;
		t.props = this._Object61_i();
		return t;
	};
	_proto._Object61_i = function () {
		var t = {};
		this._Object61 = t;
		return t;
	};
	_proto._To45_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.props = this._Object62_i();
		return t;
	};
	_proto._Object62_i = function () {
		var t = {};
		this._Object62 = t;
		return t;
	};
	_proto._TweenItem23_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem23 = t;
		t.paths = [this._Set28_i(),this._To46_i(),this._To47_i()];
		return t;
	};
	_proto._Set28_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object63_i();
		return t;
	};
	_proto._Object63_i = function () {
		var t = {};
		this._Object63 = t;
		return t;
	};
	_proto._To46_i = function () {
		var t = new egret.tween.To();
		t.duration = 1450;
		t.props = this._Object64_i();
		return t;
	};
	_proto._Object64_i = function () {
		var t = {};
		this._Object64 = t;
		return t;
	};
	_proto._To47_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object65_i();
		return t;
	};
	_proto._Object65_i = function () {
		var t = {};
		this._Object65 = t;
		return t;
	};
	_proto._TweenItem24_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem24 = t;
		t.paths = [this._Set29_i(),this._To48_i(),this._To49_i()];
		return t;
	};
	_proto._Set29_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object66_i();
		return t;
	};
	_proto._Object66_i = function () {
		var t = {};
		this._Object66 = t;
		return t;
	};
	_proto._To48_i = function () {
		var t = new egret.tween.To();
		t.duration = 1350;
		t.props = this._Object67_i();
		return t;
	};
	_proto._Object67_i = function () {
		var t = {};
		this._Object67 = t;
		return t;
	};
	_proto._To49_i = function () {
		var t = new egret.tween.To();
		t.duration = 900;
		t.props = this._Object68_i();
		return t;
	};
	_proto._Object68_i = function () {
		var t = {};
		this._Object68 = t;
		return t;
	};
	_proto._TweenItem25_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem25 = t;
		t.paths = [this._Set30_i(),this._To50_i(),this._To51_i(),this._To52_i()];
		return t;
	};
	_proto._Set30_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object69_i();
		return t;
	};
	_proto._Object69_i = function () {
		var t = {};
		this._Object69 = t;
		return t;
	};
	_proto._To50_i = function () {
		var t = new egret.tween.To();
		t.duration = 1250;
		t.props = this._Object70_i();
		return t;
	};
	_proto._Object70_i = function () {
		var t = {};
		this._Object70 = t;
		return t;
	};
	_proto._To51_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object71_i();
		return t;
	};
	_proto._Object71_i = function () {
		var t = {};
		this._Object71 = t;
		return t;
	};
	_proto._To52_i = function () {
		var t = new egret.tween.To();
		t.duration = 900;
		t.props = this._Object72_i();
		return t;
	};
	_proto._Object72_i = function () {
		var t = {};
		this._Object72 = t;
		return t;
	};
	_proto._TweenItem26_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem26 = t;
		t.paths = [this._Set31_i()];
		return t;
	};
	_proto._Set31_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object73_i();
		return t;
	};
	_proto._Object73_i = function () {
		var t = {};
		this._Object73 = t;
		return t;
	};
	_proto._TweenItem27_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem27 = t;
		t.paths = [this._Set32_i()];
		return t;
	};
	_proto._Set32_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object74_i();
		return t;
	};
	_proto._Object74_i = function () {
		var t = {};
		this._Object74 = t;
		return t;
	};
	_proto._TweenItem28_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem28 = t;
		t.paths = [this._Set33_i()];
		return t;
	};
	_proto._Set33_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object75_i();
		return t;
	};
	_proto._Object75_i = function () {
		var t = {};
		this._Object75 = t;
		return t;
	};
	_proto._TweenItem29_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem29 = t;
		t.paths = [this._Set34_i()];
		return t;
	};
	_proto._Set34_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object76_i();
		return t;
	};
	_proto._Object76_i = function () {
		var t = {};
		this._Object76 = t;
		return t;
	};
	_proto._TweenItem30_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem30 = t;
		t.paths = [this._Set35_i()];
		return t;
	};
	_proto._Set35_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object77_i();
		return t;
	};
	_proto._Object77_i = function () {
		var t = {};
		this._Object77 = t;
		return t;
	};
	_proto.gameoverAni_i = function () {
		var t = new egret.tween.TweenGroup();
		this.gameoverAni = t;
		t.items = [this._TweenItem31_i(),this._TweenItem32_i(),this._TweenItem33_i(),this._TweenItem34_i(),this._TweenItem35_i(),this._TweenItem36_i(),this._TweenItem37_i()];
		return t;
	};
	_proto._TweenItem31_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem31 = t;
		t.paths = [this._Set36_i(),this._Wait7_i(),this._Set37_i(),this._To53_i()];
		return t;
	};
	_proto._Set36_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object78_i();
		return t;
	};
	_proto._Object78_i = function () {
		var t = {};
		this._Object78 = t;
		return t;
	};
	_proto._Wait7_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1850;
		return t;
	};
	_proto._Set37_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object79_i();
		return t;
	};
	_proto._Object79_i = function () {
		var t = {};
		this._Object79 = t;
		return t;
	};
	_proto._To53_i = function () {
		var t = new egret.tween.To();
		t.duration = 1150;
		t.props = this._Object80_i();
		return t;
	};
	_proto._Object80_i = function () {
		var t = {};
		this._Object80 = t;
		return t;
	};
	_proto._TweenItem32_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem32 = t;
		t.paths = [this._Set38_i(),this._To54_i(),this._To55_i(),this._To56_i(),this._To57_i(),this._To58_i(),this._To59_i(),this._To60_i(),this._To61_i(),this._To62_i(),this._To63_i()];
		return t;
	};
	_proto._Set38_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object81_i();
		return t;
	};
	_proto._Object81_i = function () {
		var t = {};
		this._Object81 = t;
		return t;
	};
	_proto._To54_i = function () {
		var t = new egret.tween.To();
		t.duration = 450;
		t.props = this._Object82_i();
		return t;
	};
	_proto._Object82_i = function () {
		var t = {};
		this._Object82 = t;
		return t;
	};
	_proto._To55_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object83_i();
		return t;
	};
	_proto._Object83_i = function () {
		var t = {};
		this._Object83 = t;
		return t;
	};
	_proto._To56_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object84_i();
		return t;
	};
	_proto._Object84_i = function () {
		var t = {};
		this._Object84 = t;
		return t;
	};
	_proto._To57_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object85_i();
		return t;
	};
	_proto._Object85_i = function () {
		var t = {};
		this._Object85 = t;
		return t;
	};
	_proto._To58_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object86_i();
		return t;
	};
	_proto._Object86_i = function () {
		var t = {};
		this._Object86 = t;
		return t;
	};
	_proto._To59_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object87_i();
		return t;
	};
	_proto._Object87_i = function () {
		var t = {};
		this._Object87 = t;
		return t;
	};
	_proto._To60_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object88_i();
		return t;
	};
	_proto._Object88_i = function () {
		var t = {};
		this._Object88 = t;
		return t;
	};
	_proto._To61_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object89_i();
		return t;
	};
	_proto._Object89_i = function () {
		var t = {};
		this._Object89 = t;
		return t;
	};
	_proto._To62_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object90_i();
		return t;
	};
	_proto._Object90_i = function () {
		var t = {};
		this._Object90 = t;
		return t;
	};
	_proto._To63_i = function () {
		var t = new egret.tween.To();
		t.duration = 900;
		t.props = this._Object91_i();
		return t;
	};
	_proto._Object91_i = function () {
		var t = {};
		this._Object91 = t;
		return t;
	};
	_proto._TweenItem33_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem33 = t;
		t.paths = [this._Set39_i()];
		return t;
	};
	_proto._Set39_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object92_i();
		return t;
	};
	_proto._Object92_i = function () {
		var t = {};
		this._Object92 = t;
		return t;
	};
	_proto._TweenItem34_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem34 = t;
		t.paths = [this._Set40_i()];
		return t;
	};
	_proto._Set40_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object93_i();
		return t;
	};
	_proto._Object93_i = function () {
		var t = {};
		this._Object93 = t;
		return t;
	};
	_proto._TweenItem35_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem35 = t;
		t.paths = [this._Set41_i()];
		return t;
	};
	_proto._Set41_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object94_i();
		return t;
	};
	_proto._Object94_i = function () {
		var t = {};
		this._Object94 = t;
		return t;
	};
	_proto._TweenItem36_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem36 = t;
		t.paths = [this._Set42_i()];
		return t;
	};
	_proto._Set42_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object95_i();
		return t;
	};
	_proto._Object95_i = function () {
		var t = {};
		this._Object95 = t;
		return t;
	};
	_proto._TweenItem37_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem37 = t;
		t.paths = [this._Set43_i()];
		return t;
	};
	_proto._Set43_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object96_i();
		return t;
	};
	_proto._Object96_i = function () {
		var t = {};
		this._Object96 = t;
		return t;
	};
	_proto.ready_i = function () {
		var t = new egret.tween.TweenGroup();
		this.ready = t;
		t.items = [this._TweenItem38_i(),this._TweenItem39_i(),this._TweenItem40_i(),this._TweenItem41_i(),this._TweenItem42_i(),this._TweenItem43_i()];
		return t;
	};
	_proto._TweenItem38_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem38 = t;
		t.paths = [this._Set44_i(),this._Wait8_i(),this._Set45_i(),this._To64_i(),this._To65_i(),this._To66_i()];
		return t;
	};
	_proto._Set44_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object97_i();
		return t;
	};
	_proto._Object97_i = function () {
		var t = {};
		this._Object97 = t;
		return t;
	};
	_proto._Wait8_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1050;
		return t;
	};
	_proto._Set45_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object98_i();
		return t;
	};
	_proto._Object98_i = function () {
		var t = {};
		this._Object98 = t;
		return t;
	};
	_proto._To64_i = function () {
		var t = new egret.tween.To();
		t.duration = 850;
		t.props = this._Object99_i();
		return t;
	};
	_proto._Object99_i = function () {
		var t = {};
		this._Object99 = t;
		return t;
	};
	_proto._To65_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object100_i();
		return t;
	};
	_proto._Object100_i = function () {
		var t = {};
		this._Object100 = t;
		return t;
	};
	_proto._To66_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object101_i();
		return t;
	};
	_proto._Object101_i = function () {
		var t = {};
		this._Object101 = t;
		return t;
	};
	_proto._TweenItem39_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem39 = t;
		t.paths = [this._Set46_i(),this._To67_i(),this._To68_i(),this._To69_i(),this._To70_i(),this._To71_i(),this._To72_i()];
		return t;
	};
	_proto._Set46_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object102_i();
		return t;
	};
	_proto._Object102_i = function () {
		var t = {};
		this._Object102 = t;
		return t;
	};
	_proto._To67_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object103_i();
		return t;
	};
	_proto._Object103_i = function () {
		var t = {};
		this._Object103 = t;
		return t;
	};
	_proto._To68_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object104_i();
		return t;
	};
	_proto._Object104_i = function () {
		var t = {};
		this._Object104 = t;
		return t;
	};
	_proto._To69_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object105_i();
		return t;
	};
	_proto._Object105_i = function () {
		var t = {};
		this._Object105 = t;
		return t;
	};
	_proto._To70_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object106_i();
		return t;
	};
	_proto._Object106_i = function () {
		var t = {};
		this._Object106 = t;
		return t;
	};
	_proto._To71_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object107_i();
		return t;
	};
	_proto._Object107_i = function () {
		var t = {};
		this._Object107 = t;
		return t;
	};
	_proto._To72_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.props = this._Object108_i();
		return t;
	};
	_proto._Object108_i = function () {
		var t = {};
		this._Object108 = t;
		return t;
	};
	_proto._TweenItem40_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem40 = t;
		t.paths = [this._Set47_i()];
		return t;
	};
	_proto._Set47_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object109_i();
		return t;
	};
	_proto._Object109_i = function () {
		var t = {};
		this._Object109 = t;
		return t;
	};
	_proto._TweenItem41_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem41 = t;
		t.paths = [this._Set48_i()];
		return t;
	};
	_proto._Set48_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object110_i();
		return t;
	};
	_proto._Object110_i = function () {
		var t = {};
		this._Object110 = t;
		return t;
	};
	_proto._TweenItem42_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem42 = t;
		t.paths = [this._Set49_i()];
		return t;
	};
	_proto._Set49_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object111_i();
		return t;
	};
	_proto._Object111_i = function () {
		var t = {};
		this._Object111 = t;
		return t;
	};
	_proto._TweenItem43_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem43 = t;
		t.paths = [this._Set50_i()];
		return t;
	};
	_proto._Set50_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object112_i();
		return t;
	};
	_proto._Object112_i = function () {
		var t = {};
		this._Object112 = t;
		return t;
	};
	_proto.timeoverTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.timeoverTween = t;
		t.items = [this._TweenItem44_i(),this._TweenItem45_i(),this._TweenItem46_i(),this._TweenItem47_i(),this._TweenItem48_i(),this._TweenItem49_i(),this._TweenItem50_i()];
		return t;
	};
	_proto._TweenItem44_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem44 = t;
		t.paths = [this._Set51_i(),this._To73_i(),this._To74_i(),this._To75_i()];
		return t;
	};
	_proto._Set51_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object113_i();
		return t;
	};
	_proto._Object113_i = function () {
		var t = {};
		this._Object113 = t;
		return t;
	};
	_proto._To73_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		return t;
	};
	_proto._To74_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object114_i();
		return t;
	};
	_proto._Object114_i = function () {
		var t = {};
		this._Object114 = t;
		return t;
	};
	_proto._To75_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object115_i();
		return t;
	};
	_proto._Object115_i = function () {
		var t = {};
		this._Object115 = t;
		return t;
	};
	_proto._TweenItem45_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem45 = t;
		t.paths = [this._Wait9_i(),this._Set52_i(),this._To76_i(),this._To77_i(),this._Wait10_i(),this._Set53_i(),this._Wait11_i(),this._Set54_i(),this._To78_i(),this._To79_i(),this._To80_i(),this._To81_i(),this._To82_i(),this._To83_i()];
		return t;
	};
	_proto._Wait9_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set52_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object116_i();
		return t;
	};
	_proto._Object116_i = function () {
		var t = {};
		this._Object116 = t;
		return t;
	};
	_proto._To76_i = function () {
		var t = new egret.tween.To();
		t.duration = 300;
		t.props = this._Object117_i();
		return t;
	};
	_proto._Object117_i = function () {
		var t = {};
		this._Object117 = t;
		return t;
	};
	_proto._To77_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object118_i();
		return t;
	};
	_proto._Object118_i = function () {
		var t = {};
		this._Object118 = t;
		return t;
	};
	_proto._Wait10_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set53_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object119_i();
		return t;
	};
	_proto._Object119_i = function () {
		var t = {};
		this._Object119 = t;
		return t;
	};
	_proto._Wait11_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set54_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object120_i();
		return t;
	};
	_proto._Object120_i = function () {
		var t = {};
		this._Object120 = t;
		return t;
	};
	_proto._To78_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object121_i();
		return t;
	};
	_proto._Object121_i = function () {
		var t = {};
		this._Object121 = t;
		return t;
	};
	_proto._To79_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object122_i();
		return t;
	};
	_proto._Object122_i = function () {
		var t = {};
		this._Object122 = t;
		return t;
	};
	_proto._To80_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object123_i();
		return t;
	};
	_proto._Object123_i = function () {
		var t = {};
		this._Object123 = t;
		return t;
	};
	_proto._To81_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object124_i();
		return t;
	};
	_proto._Object124_i = function () {
		var t = {};
		this._Object124 = t;
		return t;
	};
	_proto._To82_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object125_i();
		return t;
	};
	_proto._Object125_i = function () {
		var t = {};
		this._Object125 = t;
		return t;
	};
	_proto._To83_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object126_i();
		return t;
	};
	_proto._Object126_i = function () {
		var t = {};
		this._Object126 = t;
		return t;
	};
	_proto._TweenItem46_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem46 = t;
		t.paths = [this._Set55_i()];
		return t;
	};
	_proto._Set55_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object127_i();
		return t;
	};
	_proto._Object127_i = function () {
		var t = {};
		this._Object127 = t;
		return t;
	};
	_proto._TweenItem47_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem47 = t;
		t.paths = [this._Set56_i()];
		return t;
	};
	_proto._Set56_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object128_i();
		return t;
	};
	_proto._Object128_i = function () {
		var t = {};
		this._Object128 = t;
		return t;
	};
	_proto._TweenItem48_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem48 = t;
		t.paths = [this._Set57_i()];
		return t;
	};
	_proto._Set57_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object129_i();
		return t;
	};
	_proto._Object129_i = function () {
		var t = {};
		this._Object129 = t;
		return t;
	};
	_proto._TweenItem49_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem49 = t;
		t.paths = [this._Set58_i()];
		return t;
	};
	_proto._Set58_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object130_i();
		return t;
	};
	_proto._Object130_i = function () {
		var t = {};
		this._Object130 = t;
		return t;
	};
	_proto._TweenItem50_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem50 = t;
		t.paths = [this._Set59_i()];
		return t;
	};
	_proto._Set59_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object131_i();
		return t;
	};
	_proto._Object131_i = function () {
		var t = {};
		this._Object131 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1344;
		t.source = "beijing_png";
		t.width = 750;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "shuiyin_png";
		t.x = 228.5;
		t.y = 1250;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "tianhuaban_png";
		t.x = 15;
		t.y = 86;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 368.5;
		t.y = 0;
		t.elementsContent = [this.image1_i(),this.image2_i()];
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.height = 800;
		t.source = "shengziyijie_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.anchorOffsetX = 6.5;
		t.anchorOffsetY = 800;
		t.height = 800;
		t.source = "shengziyijie_png";
		t.x = 6.5;
		t.y = 1445.45;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "shuangrenmianban_png";
		t.x = 15;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 71;
		t.y = 376;
		t.elementsContent = [this.shijiandao_i(),this.shijiandao0_i()];
		return t;
	};
	_proto.shijiandao_i = function () {
		var t = new eui.Image();
		this.shijiandao = t;
		t.source = "shijiandao_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shijiandao0_i = function () {
		var t = new eui.Image();
		this.shijiandao0 = t;
		t.source = "shijiandao_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 221.7;
		t.y = 257.35;
		t.elementsContent = [this.image3_i(),this.roundCntLb_i()];
		return t;
	};
	_proto.image3_i = function () {
		var t = new eui.Image();
		this.image3 = t;
		t.source = "huiheban_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.roundCntLb_i = function () {
		var t = new eui.Label();
		this.roundCntLb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "FangSong";
		t.height = 56;
		t.size = 42;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x018a0c;
		t.verticalAlign = "middle";
		t.width = 40;
		t.x = 106.3;
		t.y = 46;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 333.36;
		t.y = 45.36;
		t.elementsContent = [this.image_i(),this.image0_i(),this._Image5_i(),this.time_i()];
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.source = "clockLight_png";
		t.x = 0;
		t.y = 1.52;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.anchorOffsetX = 31.5;
		t.anchorOffsetY = 31.5;
		t.source = "clock_png";
		t.x = 40.12;
		t.y = 40.64;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "clock_png";
		t.x = 9.62;
		t.y = 8.14;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.anchorOffsetX = 61.46;
		t.anchorOffsetY = 10;
		t.size = 20;
		t.text = "60";
		t.textAlign = "center";
		t.textColor = 0x020202;
		t.verticalAlign = "middle";
		t.width = 29.5;
		t.x = 88.63;
		t.y = 44.03;
		return t;
	};
	_proto.playerLayout_i = function () {
		var t = new eui.Group();
		this.playerLayout = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63.64;
		t.width = 153.03;
		t.x = 65;
		t.y = 56.2;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.playerIcon1_i(),this.playerIcon2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "right";
		return t;
	};
	_proto.playerIcon1_i = function () {
		var t = new playerIcon();
		this.playerIcon1 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 9;
		t.y = 12;
		return t;
	};
	_proto.playerIcon2_i = function () {
		var t = new playerIcon();
		this.playerIcon2 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 19;
		t.y = 22;
		return t;
	};
	_proto.enemyLayout_i = function () {
		var t = new eui.Group();
		this.enemyLayout = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63.64;
		t.width = 153.03;
		t.x = 541.24;
		t.y = 58.6;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.enemyIcon2_i(),this.enemyIcon1_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.enemyIcon2_i = function () {
		var t = new playerIcon();
		this.enemyIcon2 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 9;
		t.y = 12;
		return t;
	};
	_proto.enemyIcon1_i = function () {
		var t = new playerIcon();
		this.enemyIcon1 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 19;
		t.y = 22;
		return t;
	};
	_proto.playerHeart_i = function () {
		var t = new eui.Group();
		this.playerHeart = t;
		t.x = 237.21;
		t.y = 79.9;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "xin_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "xin_png";
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "xin_png";
		t.x = 71.79;
		t.y = 0.1;
		return t;
	};
	_proto.enemyHeart_i = function () {
		var t = new eui.Group();
		this.enemyHeart = t;
		t.x = 407.21;
		t.y = 79.9;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "xin_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "xin_png";
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "xin_png";
		t.x = 71.79;
		t.y = 0.1;
		return t;
	};
	_proto.exit_i = function () {
		var t = new eui.Image();
		this.exit = t;
		t.source = "exit_png";
		t.x = 39;
		t.y = 184;
		return t;
	};
	_proto.hitByGroup_i = function () {
		var t = new eui.Group();
		this.hitByGroup = t;
		t.height = 200;
		t.width = 200;
		t.x = 274;
		t.y = 368;
		t.elementsContent = [this.image9_i(),this.image4_i(),this.image5_i(),this.image6_i(),this.image7_i(),this.image8_i()];
		return t;
	};
	_proto.image9_i = function () {
		var t = new eui.Image();
		this.image9 = t;
		t.source = "hitby_png";
		t.x = -15;
		t.y = 70;
		return t;
	};
	_proto.image4_i = function () {
		var t = new eui.Image();
		this.image4 = t;
		t.source = "boom1_png";
		t.x = 47.39;
		t.y = 44.51;
		return t;
	};
	_proto.image5_i = function () {
		var t = new eui.Image();
		this.image5 = t;
		t.source = "boom2_png";
		t.x = 31.39;
		t.y = 26.51;
		return t;
	};
	_proto.image6_i = function () {
		var t = new eui.Image();
		this.image6 = t;
		t.source = "boom3_png";
		t.x = 31.39;
		t.y = 28.51;
		return t;
	};
	_proto.image7_i = function () {
		var t = new eui.Image();
		this.image7 = t;
		t.source = "boom5_png";
		t.x = -6.61;
		t.y = 14.51;
		return t;
	};
	_proto.image8_i = function () {
		var t = new eui.Image();
		this.image8 = t;
		t.source = "hitby_png";
		t.x = -15;
		t.y = 70;
		return t;
	};
	_proto.hitgroup_i = function () {
		var t = new eui.Group();
		this.hitgroup = t;
		t.height = 200;
		t.width = 200;
		t.x = 274;
		t.y = 366;
		t.elementsContent = [this.image10_i(),this.image11_i(),this.image12_i(),this.image13_i(),this.image14_i(),this.image15_i(),this.image17_i(),this.image16_i()];
		return t;
	};
	_proto.image10_i = function () {
		var t = new eui.Image();
		this.image10 = t;
		t.anchorOffsetX = 220.5;
		t.anchorOffsetY = 216.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guangxiao_png";
		t.x = 100.5;
		t.y = 108.5;
		return t;
	};
	_proto.image11_i = function () {
		var t = new eui.Image();
		this.image11 = t;
		t.source = "star_png";
		t.x = 60;
		t.y = 64;
		return t;
	};
	_proto.image12_i = function () {
		var t = new eui.Image();
		this.image12 = t;
		t.source = "star_png";
		t.x = 60;
		t.y = 64;
		return t;
	};
	_proto.image13_i = function () {
		var t = new eui.Image();
		this.image13 = t;
		t.source = "star_png";
		t.x = 60;
		t.y = 64;
		return t;
	};
	_proto.image14_i = function () {
		var t = new eui.Image();
		this.image14 = t;
		t.source = "star_png";
		t.x = 60;
		t.y = 64;
		return t;
	};
	_proto.image15_i = function () {
		var t = new eui.Image();
		this.image15 = t;
		t.source = "star_png";
		t.x = 60;
		t.y = 64;
		return t;
	};
	_proto.image17_i = function () {
		var t = new eui.Image();
		this.image17 = t;
		t.source = "jizhong_png";
		t.x = -30;
		t.y = 64;
		return t;
	};
	_proto.image16_i = function () {
		var t = new eui.Image();
		this.image16 = t;
		t.source = "jizhong_png";
		t.x = -30;
		t.y = 64;
		return t;
	};
	_proto.gameoverGroup_i = function () {
		var t = new eui.Group();
		this.gameoverGroup = t;
		t.height = 200;
		t.width = 200;
		t.x = 276;
		t.y = 362;
		t.elementsContent = [this.image18_i(),this.image19_i()];
		return t;
	};
	_proto.image18_i = function () {
		var t = new eui.Image();
		this.image18 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gameov_png";
		t.x = -80.3;
		t.y = 52;
		return t;
	};
	_proto.image19_i = function () {
		var t = new eui.Image();
		this.image19 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gameov_png";
		t.x = -78.3;
		t.y = 54;
		return t;
	};
	_proto.readyGroup_i = function () {
		var t = new eui.Group();
		this.readyGroup = t;
		t.height = 200;
		t.width = 200;
		t.x = 276;
		t.y = 364;
		t.elementsContent = [this.image20_i(),this.image21_i()];
		return t;
	};
	_proto.image20_i = function () {
		var t = new eui.Image();
		this.image20 = t;
		t.source = "go_png";
		t.y = 52;
		return t;
	};
	_proto.image21_i = function () {
		var t = new eui.Image();
		this.image21 = t;
		t.source = "ready_png";
		t.x = -32;
		t.y = 40;
		return t;
	};
	_proto.timeoverGroup_i = function () {
		var t = new eui.Group();
		this.timeoverGroup = t;
		t.height = 200;
		t.width = 200;
		t.x = 272;
		t.y = 308;
		t.elementsContent = [this.image22_i(),this.image23_i()];
		return t;
	};
	_proto.image22_i = function () {
		var t = new eui.Image();
		this.image22 = t;
		t.alpha = 0;
		t.source = "shijiandao_png";
		t.x = 572.17;
		t.y = 30;
		return t;
	};
	_proto.image23_i = function () {
		var t = new eui.Image();
		this.image23 = t;
		t.alpha = 0.1;
		t.source = "shijiandao_png";
		t.x = 572.17;
		t.y = 30;
		return t;
	};
	return uiGameSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiLobby.exml'] = window.uiLobbySkin = (function (_super) {
	__extends(uiLobbySkin, _super);
	function uiLobbySkin() {
		_super.call(this);
		this.skinParts = ["avatarMask","avatar","username","random","createRoom","joinRoom","exit","rank","inviteFriends"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.avatarMask_i(),this.avatar_i(),this._Image2_i(),this.username_i(),this.random_i(),this.createRoom_i(),this.joinRoom_i(),this.exit_i(),this.rank_i(),this.inviteFriends_i()];
	}
	var _proto = uiLobbySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bot-bg_png";
		t.x = -4;
		t.y = 0;
		return t;
	};
	_proto.avatarMask_i = function () {
		var t = new eui.Image();
		this.avatarMask = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 151;
		t.source = "yuan_png";
		t.width = 148.67;
		t.x = 300.34;
		t.y = 283.99;
		return t;
	};
	_proto.avatar_i = function () {
		var t = new eui.Image();
		this.avatar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.blendMode = "normal";
		t.fillMode = "scale";
		t.height = 155.91;
		t.source = "def-user-squ_png";
		t.width = 158.95;
		t.x = 294.6;
		t.y = 283.41;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "handcon_png";
		t.x = 254.84;
		t.y = 210.5;
		return t;
	};
	_proto.username_i = function () {
		var t = new eui.Label();
		this.username = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72.42;
		t.size = 40;
		t.text = "玩家名称";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 192.73;
		t.x = 280.64;
		t.y = 457.44;
		return t;
	};
	_proto.random_i = function () {
		var t = new eui.Group();
		this.random = t;
		t.x = 115;
		t.y = 900;
		t.elementsContent = [this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "dating-btn_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86;
		t.size = 40;
		t.text = "随机匹配";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 230;
		t.x = 141;
		t.y = 20;
		return t;
	};
	_proto.createRoom_i = function () {
		var t = new eui.Group();
		this.createRoom = t;
		t.x = 111;
		t.y = 1006;
		t.elementsContent = [this._Image4_i(),this._Label2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "dating-btn2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 40;
		t.text = "创建房间";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 58;
		t.y = 41;
		return t;
	};
	_proto.joinRoom_i = function () {
		var t = new eui.Group();
		this.joinRoom = t;
		t.x = 375.55;
		t.y = 1003.88;
		t.elementsContent = [this._Image5_i(),this._Label3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "dating-btn2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 40;
		t.text = "加入房间";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 58;
		t.y = 41;
		return t;
	};
	_proto.exit_i = function () {
		var t = new eui.Image();
		this.exit = t;
		t.source = "btn-back_png";
		t.x = 54.07;
		t.y = 52.61;
		return t;
	};
	_proto.rank_i = function () {
		var t = new eui.Group();
		this.rank = t;
		t.x = 584;
		t.y = 52.61;
		t.elementsContent = [this._Image6_i(),this._Label4_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "rank-logo_png";
		t.x = 2.05;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.size = 28;
		t.text = "排行榜";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 113;
		t.x = 0;
		t.y = 63.39;
		return t;
	};
	_proto.inviteFriends_i = function () {
		var t = new eui.Group();
		this.inviteFriends = t;
		t.x = 275.55;
		t.y = 1185;
		t.elementsContent = [this._Image7_i(),this._Label5_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "dating-btn3_png";
		t.x = 0;
		t.y = 0.33;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.27;
		t.text = "邀请好友";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 189.15;
		t.x = 6.45;
		t.y = 0;
		return t;
	};
	return uiLobbySkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiLogin.exml'] = window.uiLoginSkin = (function (_super) {
	__extends(uiLoginSkin, _super);
	function uiLoginSkin() {
		_super.call(this);
		this.skinParts = ["start"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.start_i(),this._Image2_i()];
	}
	var _proto = uiLoginSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bot-bg_png";
		t.y = 0;
		return t;
	};
	_proto.start_i = function () {
		var t = new eui.Image();
		this.start = t;
		t.source = "startGame_png";
		t.x = 113;
		t.y = 980;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "xiaojilogo_png";
		t.x = 147;
		t.y = 192;
		return t;
	};
	return uiLoginSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiMatch.exml'] = window.uiMatchSkin = (function (_super) {
	__extends(uiMatchSkin, _super);
	function uiMatchSkin() {
		_super.call(this);
		this.skinParts = ["back","player1","player2","player3","player4"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.back_i(),this._Image4_i(),this.player1_i(),this.player2_i(),this.player3_i(),this.player4_i()];
	}
	var _proto = uiMatchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ver-con-bg_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "cpm-logo_png";
		t.x = 63.5;
		t.y = 272;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Group();
		this.back = t;
		t.x = 245;
		t.y = 888;
		t.elementsContent = [this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "home-btn5_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.size = 40;
		t.text = "取消";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 138;
		t.x = 61;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "vs_png";
		t.x = 333;
		t.y = 575.33;
		return t;
	};
	_proto.player1_i = function () {
		var t = new playerIcon();
		this.player1 = t;
		t.visible = false;
		t.x = 100;
		t.y = 552;
		return t;
	};
	_proto.player2_i = function () {
		var t = new playerIcon();
		this.player2 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.x = 164.55;
		t.y = 534.85;
		return t;
	};
	_proto.player3_i = function () {
		var t = new playerIcon();
		this.player3 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.x = 446;
		t.y = 544.91;
		return t;
	};
	_proto.player4_i = function () {
		var t = new playerIcon();
		this.player4 = t;
		t.visible = false;
		t.x = 556;
		t.y = 552;
		return t;
	};
	return uiMatchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiRank.exml'] = window.uiRankSkin = (function (_super) {
	__extends(uiRankSkin, _super);
	function uiRankSkin() {
		_super.call(this);
		this.skinParts = ["exit","firstName","firstScore","first","secondName","secondScore","second","thirdName","thirdScore","third","ranklist"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.exit_i(),this._Image3_i(),this._Label1_i(),this.first_i(),this.second_i(),this.third_i(),this._Scroller1_i()];
	}
	var _proto = uiRankSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ver-rank-bg_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "list-sign_png";
		t.x = 140;
		t.y = 52;
		return t;
	};
	_proto.exit_i = function () {
		var t = new eui.Image();
		this.exit = t;
		t.source = "btn-back_png";
		t.x = 24;
		t.y = 76;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "rank-bg2_png";
		t.x = 40;
		t.y = 222;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.size = 60;
		t.text = "全国排行榜";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 368;
		t.x = 180;
		t.y = 58;
		return t;
	};
	_proto.first_i = function () {
		var t = new eui.Group();
		this.first = t;
		t.x = 289.67;
		t.y = 254;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this.firstName_i(),this.firstScore_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 94;
		t.source = "def-use_png";
		t.width = 94;
		t.x = 37;
		t.y = 28.03;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "rank-user1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.firstName_i = function () {
		var t = new eui.Label();
		this.firstName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25.33;
		t.size = 24;
		t.text = "第一个厉害的人";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 133.67;
		t.x = 12.16;
		t.y = 191.64;
		return t;
	};
	_proto.firstScore_i = function () {
		var t = new eui.Label();
		this.firstScore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25.33;
		t.size = 24;
		t.text = "99999999999";
		t.textAlign = "center";
		t.textColor = 0xffae0f;
		t.verticalAlign = "middle";
		t.width = 133.67;
		t.x = 16.67;
		t.y = 166.31;
		return t;
	};
	_proto.second_i = function () {
		var t = new eui.Group();
		this.second = t;
		t.x = 79.69;
		t.y = 252;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this.secondName_i(),this.secondScore_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 94;
		t.source = "def-use_png";
		t.width = 94;
		t.x = 37;
		t.y = 28.03;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "rank-user3_png";
		t.x = 23.99;
		t.y = 17.34;
		return t;
	};
	_proto.secondName_i = function () {
		var t = new eui.Label();
		this.secondName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25.33;
		t.size = 24;
		t.text = "第二个厉害的人";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 133.67;
		t.x = 12.16;
		t.y = 191.64;
		return t;
	};
	_proto.secondScore_i = function () {
		var t = new eui.Label();
		this.secondScore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25.33;
		t.size = 24;
		t.text = "99999999999";
		t.textAlign = "center";
		t.textColor = 0xed4624;
		t.verticalAlign = "middle";
		t.width = 133.67;
		t.x = 16.67;
		t.y = 166.31;
		return t;
	};
	_proto.third_i = function () {
		var t = new eui.Group();
		this.third = t;
		t.x = 517.68;
		t.y = 252.69;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this.thirdName_i(),this.thirdScore_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 94;
		t.source = "def-use_png";
		t.width = 94;
		t.x = 37;
		t.y = 28.03;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "rank-user2_png";
		t.x = 20;
		t.y = 9.34;
		return t;
	};
	_proto.thirdName_i = function () {
		var t = new eui.Label();
		this.thirdName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25.33;
		t.size = 24;
		t.text = "第三个厉害的人";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 133.67;
		t.x = 12.16;
		t.y = 191.64;
		return t;
	};
	_proto.thirdScore_i = function () {
		var t = new eui.Label();
		this.thirdScore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25.33;
		t.size = 24;
		t.text = "99999999999";
		t.textAlign = "center";
		t.textColor = 0x15b3f4;
		t.verticalAlign = "middle";
		t.width = 133.67;
		t.x = 16.67;
		t.y = 166.31;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 745.45;
		t.width = 751.52;
		t.x = 3;
		t.y = 524;
		t.viewport = this.ranklist_i();
		return t;
	};
	_proto.ranklist_i = function () {
		var t = new eui.Group();
		this.ranklist = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 754.55;
		t.width = 745.45;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.paddingTop = -1;
		return t;
	};
	return uiRankSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiResult.exml'] = window.uiResultSkin = (function (_super) {
	__extends(uiResultSkin, _super);
	function uiResultSkin() {
		_super.call(this);
		this.skinParts = ["back","win","lose","playerScore","enemyScore","playerLayout","playerNameLayout","enemytNameLayout","enemyLayout"];
		
		this.height = 1344;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.back_i(),this.win_i(),this.lose_i(),this.playerScore_i(),this.enemyScore_i(),this._Label2_i(),this.playerLayout_i(),this.playerNameLayout_i(),this.enemytNameLayout_i(),this.enemyLayout_i()];
	}
	var _proto = uiResultSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ver-con-bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 786;
		t.source = "sr-con-bg3_png";
		t.width = 722;
		t.x = 14;
		t.y = 207;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sr-con-light_png";
		t.x = 91.5;
		t.y = 55;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Group();
		this.back = t;
		t.x = 244.5;
		t.y = 1146;
		t.elementsContent = [this._Image4_i(),this._Label1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "home-btn5_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.size = 36;
		t.text = "返回";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 194;
		t.x = 29.5;
		t.y = 2;
		return t;
	};
	_proto.win_i = function () {
		var t = new eui.Image();
		this.win = t;
		t.source = "sr-con-logo_png";
		t.x = 232;
		t.y = 136;
		return t;
	};
	_proto.lose_i = function () {
		var t = new eui.Image();
		this.lose = t;
		t.source = "sr-con-lose_png";
		t.x = 232;
		t.y = 140;
		return t;
	};
	_proto.playerScore_i = function () {
		var t = new eui.Label();
		this.playerScore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84.55;
		t.size = 60;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xf9b204;
		t.verticalAlign = "middle";
		t.width = 89.15;
		t.x = 251.36;
		t.y = 391;
		return t;
	};
	_proto.enemyScore_i = function () {
		var t = new eui.Label();
		this.enemyScore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84.55;
		t.size = 60;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xf9b204;
		t.verticalAlign = "middle";
		t.width = 89.15;
		t.x = 406.82;
		t.y = 388.88;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84.55;
		t.size = 60;
		t.text = ":";
		t.textAlign = "center";
		t.textColor = 0xF9B204;
		t.verticalAlign = "middle";
		t.width = 89.15;
		t.x = 325.91;
		t.y = 386.76;
		return t;
	};
	_proto.playerLayout_i = function () {
		var t = new eui.Group();
		this.playerLayout = t;
		t.anchorOffsetY = 0;
		t.height = 372.73;
		t.width = 200;
		t.x = 85;
		t.y = 494;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._playerIcon1_i(),this._playerIcon2_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._playerIcon1_i = function () {
		var t = new playerIcon();
		t.x = 73;
		t.y = 45;
		return t;
	};
	_proto._playerIcon2_i = function () {
		var t = new playerIcon();
		t.x = 83;
		t.y = 55;
		return t;
	};
	_proto.playerNameLayout_i = function () {
		var t = new eui.Group();
		this.playerNameLayout = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 372.73;
		t.width = 104;
		t.x = 241;
		t.y = 496;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.text = "3235065";
		t.textColor = 0x000000;
		t.width = 120;
		t.x = 5.94;
		t.y = 32;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.text = "320525";
		t.textColor = 0x000000;
		t.width = 120;
		t.x = 0;
		t.y = 154.37;
		return t;
	};
	_proto.enemytNameLayout_i = function () {
		var t = new eui.Group();
		this.enemytNameLayout = t;
		t.anchorOffsetY = 0;
		t.height = 372.73;
		t.width = 104;
		t.x = 422;
		t.y = 497;
		t.layout = this._BasicLayout2_i();
		t.elementsContent = [this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._BasicLayout2_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "123";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.width = 120;
		t.x = -17;
		t.y = 34.94;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "123";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.width = 120;
		t.x = -17;
		t.y = 157.31;
		return t;
	};
	_proto.enemyLayout_i = function () {
		var t = new eui.Group();
		this.enemyLayout = t;
		t.anchorOffsetY = 0;
		t.height = 372.73;
		t.width = 200;
		t.x = 486.42;
		t.y = 497.94;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this._playerIcon3_i(),this._playerIcon4_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._playerIcon3_i = function () {
		var t = new playerIcon();
		t.x = 62;
		t.y = 44;
		return t;
	};
	_proto._playerIcon4_i = function () {
		var t = new playerIcon();
		t.x = 72;
		t.y = 54;
		return t;
	};
	return uiResultSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiRoom.exml'] = window.uiRoomSkin = (function (_super) {
	__extends(uiRoomSkin, _super);
	function uiRoomSkin() {
		_super.call(this);
		this.skinParts = ["leave","gamestart","gamestartGray","roomUserGroup"];
		
		this.height = 1344;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.leave_i(),this.gamestart_i(),this.gamestartGray_i(),this._Group1_i(),this.roomUserGroup_i()];
	}
	var _proto = uiRoomSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bot-bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "ver-user-bg_png";
		t.x = 0;
		t.y = 357.5;
		return t;
	};
	_proto.leave_i = function () {
		var t = new eui.Group();
		this.leave = t;
		t.x = 48;
		t.y = 1052;
		t.elementsContent = [this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "home-btn_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.size = 40;
		t.text = "离开";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 198;
		t.x = 32;
		t.y = 12;
		return t;
	};
	_proto.gamestart_i = function () {
		var t = new eui.Group();
		this.gamestart = t;
		t.x = 406;
		t.y = 1054;
		t.elementsContent = [this._Image4_i(),this._Label2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "home-btn_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.size = 40;
		t.text = "开始游戏";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 198;
		t.x = 32;
		t.y = 12;
		return t;
	};
	_proto.gamestartGray_i = function () {
		var t = new eui.Group();
		this.gamestartGray = t;
		t.x = 406;
		t.y = 1054;
		t.elementsContent = [this._Image5_i(),this._Label3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.source = "bar-user2.2_png";
		t.width = 260;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.size = 40;
		t.text = "开始游戏";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 198;
		t.x = 32;
		t.y = 12;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 23.5;
		t.y = 276;
		t.elementsContent = [this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "icon-money_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "rome-gold_png";
		t.x = 64.5;
		t.y = 8.5;
		return t;
	};
	_proto.roomUserGroup_i = function () {
		var t = new eui.Group();
		this.roomUserGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 572;
		t.width = 724;
		t.x = 12;
		t.y = 392;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	return uiRoomSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiRoomList.exml'] = window.uiRoomListSkin = (function (_super) {
	__extends(uiRoomListSkin, _super);
	function uiRoomListSkin() {
		_super.call(this);
		this.skinParts = ["back","search","roomGroup","roomIDInput"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.back_i(),this._Label1_i(),this._Image2_i(),this.search_i(),this._Label2_i(),this._Scroller1_i(),this.roomIDInput_i()];
	}
	var _proto = uiRoomListSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ver-join-bg_png";
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Image();
		this.back = t;
		t.source = "btn-back_png";
		t.x = 46.18;
		t.y = 57.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.size = 40;
		t.text = "加入房间";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 388;
		t.x = 181;
		t.y = 68.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 210;
		t.width = 742;
		t.x = 4;
		t.y = 1002;
		return t;
	};
	_proto.search_i = function () {
		var t = new eui.Image();
		this.search = t;
		t.source = "home-btn5_png";
		t.x = 269;
		t.y = 1131;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.size = 34;
		t.text = "搜索";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 246;
		t.x = 278;
		t.y = 1136;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 674;
		t.width = 604;
		t.x = 82;
		t.y = 200;
		t.viewport = this.roomGroup_i();
		return t;
	};
	_proto.roomGroup_i = function () {
		var t = new eui.Group();
		this.roomGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 666;
		t.width = 608;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.roomIDInput_i = function () {
		var t = new eui.TextInput();
		this.roomIDInput = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.prompt = "输入房间号";
		t.width = 646;
		t.x = 52;
		t.y = 1002;
		return t;
	};
	return uiRoomListSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiTip.exml'] = window.uiTipSkin = (function (_super) {
	__extends(uiTipSkin, _super);
	function uiTipSkin() {
		_super.call(this);
		this.skinParts = ["tip"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.tip_i()];
	}
	var _proto = uiTipSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "di_png";
		t.x = 98.5;
		t.y = 501.18;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "bian_png";
		t.x = 94.11;
		t.y = 498.84;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "bian_png";
		t.x = 655.64;
		t.y = 498.21;
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Label();
		this.tip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46.67;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 484.61;
		t.x = 130.56;
		t.y = 500;
		return t;
	};
	return uiTipSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);