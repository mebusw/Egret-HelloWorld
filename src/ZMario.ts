class ZMario extends egret.DisplayObjectContainer {

	public constructor() {
        super();
		this.placeSprites();
	}	

    private txt:egret.TextField;
    private imgs:egret.SpriteSheet;
    private mario1:egret.Bitmap;

    private placeSprites():void {
    	this.imgs = RES.getRes("marios");


        this.placeMario();
        this.placeBricks();
        for (var i = 0; i < 4; i++) {
        	var randX = Math.floor(Math.random() * 80);
	        this.placeMush(randX, i * 100);
        }
        this.drawGround();
        this.drawText();
    }

    private placeMario() {        
        this.mario1 = new egret.Bitmap();
        this.mario1.texture = this.imgs.getTexture("mario1");
        this.mario1.x = 0;
        this.mario1.y = 400;
        this.mario1.scaleX = 0.5;
        this.mario1.scaleY = 0.5;
        this.addChild(this.mario1);

        // this.mario1.touchEnabled = true;
        this.touchEnabled = true;
        // this.mario1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);

    }

    private onTouchTap( evt:egret.TouchEvent )
    {
        // this.txt.text += "\n容器冒泡侦听\n---------";
        console.log(evt);
        console.log(evt.target);

        if (evt.localX < this.stage.stageWidth / 2) {
        	this.mario1.x -= 50;

    	} else {
        	this.mario1.x += 50;

    	}
    }

    private placeBricks():void {
        var brick1 = new egret.Bitmap();
        brick1.texture = this.imgs.getTexture("brick1");
        brick1.x = 0;
        brick1.scaleX = 0.5;
        brick1.scaleY = 0.5;
        this.addChild(brick1);

        var brick2 = new egret.Bitmap();
        brick2.texture = this.imgs.getTexture("brick2");
        brick2.x = 420;
        brick2.scaleX = 0.5;
        brick2.scaleY = 0.5;
        this.addChild(brick2);

    }

    private placeMush(x:number, y:number):void {        
        var mush1:egret.Bitmap = new egret.Bitmap();
        mush1.texture = this.imgs.getTexture("mush1");
        mush1.x = x;
        mush1.y = y;
        mush1.scaleX = 0.5;
        mush1.scaleY = 0.5;
        this.addChild(mush1);


        var tw = egret.Tween.get(mush1, {loop:true})
        		.to({"x":400}, 2000).to({"x":x}, 2000);
    }

    private drawText():void
    {
        this.txt = new egret.TextField();
        this.txt.size = 12;
        this.txt.x = 250;
        this.txt.y = 520;
        this.txt.width = 200;
        this.txt.height = 200;
        this.txt.strokeColor = 0x0000ff;
        this.txt.stroke = 3;
        this.txt.italic = true;
        this.txt.text = "左右点击来移动玛丽";
        this.addChild( this.txt );
    }

    private drawGround():void {
		var shp:egret.Shape = new egret.Shape();
		shp.x = 0;
		shp.y = 520;
		shp.graphics.lineStyle( 5, 0x00ff00 );
		shp.graphics.beginFill( 0xff0000, 1);
		shp.graphics.drawRect( 0, 0, 480, 30 );
		shp.graphics.endFill();
		this.addChild( shp );    	
    }

}