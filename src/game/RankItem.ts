class RankItem extends eui.Component implements  eui.UIComponent {
	public rank_cnt:eui.Label;
	public rank_name:eui.Label;
	public rank_score:eui.Label;

	private rank_cnt_Str:string;
	private rank_name_Str:string;
	private rank_score_Str:string;

	public constructor(rank_cnt,rank_name,rank_score) {
		super();
		this.rank_cnt_Str = rank_cnt;
		this.rank_name_Str = rank_name;
		this.rank_score_Str = rank_score;
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
	
	private addToStage()
	{
		this.rank_cnt.text = this.rank_cnt_Str;
		this.rank_name.text = this.rank_name_Str;
		this.rank_score.text = this.rank_score_Str;
	}
}
window["RankItem"] = RankItem