class ZMario extends egret.DisplayObjectContainer {

	public constructor() {
        super();
		this.placeSprites();
	}	

    private txt:egret.TextField;
    
    private placeSprites():void {
        this.placeMario();
        this.placeBricks();
        this.placeMush(200);
    }

    private placeMario() {
		var imgs:egret.SpriteSheet  = RES.getRes("marios");
        
        var mario1:egret.Bitmap = new egret.Bitmap();
        mario1.texture = imgs.getTexture("mario1");
        mario1.x = 0;
        mario1.y = 400;
        this.addChild(mario1);

        var brick1 = new egret.Bitmap();
        brick1.texture = imgs.getTexture("brick1");
        brick1.x = 0;
        this.addChild(brick1);

        var brick2 = new egret.Bitmap();
        brick2.texture = imgs.getTexture("brick2");
        brick2.x = 200;
        this.addChild(brick2);

        var change:Function = function() {
            // console.log("x=" + mario1.x);
            var tw = egret.Tween.get(mario1);
            if (mario1.x == 200) {
                mario1.texture = imgs.getTexture("mario2");
                tw.to({"x":0}, 2000);
            } else if (mario1.x == 0) {
                mario1.texture = imgs.getTexture("mario1");
                tw.to({"x":200}, 2000);
            } else {
                return;
            }

            tw.call(change, this);
        }

        change();

        mario1.touchEnabled = true;
        // this.touchEnabled = true;
        this.drawText();
        mario1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);

    }

    private placeBricks():void {
		var imgs:egret.SpriteSheet  = RES.getRes("marios");
        var brick1 = new egret.Bitmap();
        brick1.texture = imgs.getTexture("brick1");
        brick1.x = 0;
        this.addChild(brick1);

        var brick2 = new egret.Bitmap();
        brick2.texture = imgs.getTexture("brick2");
        brick2.x = 200;
        this.addChild(brick2);

    }

    private placeMush(y:number):void {
		var imgs:egret.SpriteSheet  = RES.getRes("marios");
        
        var mush1:egret.Bitmap = new egret.Bitmap();
        mush1.texture = imgs.getTexture("mush1");
        mush1.x = 0;
        mush1.y = y;
        this.addChild(mush1);


        var change:Function = function() {
            var tw = egret.Tween.get(mush1);
            if (mush1.x == 200) {
                tw.to({"x":0}, 2000);
            } else if (mush1.x == 0) {
                tw.to({"x":200}, 2000);
            } else {
                return;
            }

            tw.call(change, this);
        }

        change();

    }

    private drawText():void
    {
        this.txt = new egret.TextField();
        this.txt.size = 12;
        this.txt.x = 250;
        this.txt.width = 200;
        this.txt.height = 200;
        this.txt.text = "事件文字";
        this.addChild( this.txt );
    }

    private onTouchTap( evt:egret.TouchEvent )
    {
        this.txt.text += "\n容器冒泡侦听\n---------";
        console.log(evt);
    }

}