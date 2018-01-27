
// -- user code here --

var score;
var cash;
var maxCash = 200;
var cashUI;
var cashLine

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * Level.
 */
function Level() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level_proto = Object.create(Phaser.State.prototype);
Level.prototype = Level_proto;
Level.prototype.constructor = Level;

Level.prototype.init = function () {
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.stage.backgroundColor = '#bfbfbf';
	
	cash = 40;
	
};

Level.prototype.preload = function () {
	
	this.load.pack('level', 'assets/pack.json');
	
	this.load.bitmapFont('nesfont', 'assets/fonts/nesfont.png', 'assets/fonts/nesfont.xml');
	
};

Level.prototype.create = function () {
	var _add_router = this.add.button(735, 162, 'socials', Level.prototype.addRouter, this, null, 'addthis.png', null, null);
	
	// public fields
	
	this.fAdd_router = _add_router;
	this.add.sprite(0, 0, 'cashBar');
	var gfx = this.add.graphics(10,20);
	gfx.lineStyle(20, 0x7FFF00, 0.8);
	cashLine = gfx.lineTo(40,0);
	cashUI = this.add.bitmapText(46, 14, 'nesfont',cash + "/" + maxCash,64);
	
};

/* --- end generated code --- */
// -- user code here --


Level.prototype.update = function () {
	
	if (typeof this.fwifi !== 'undefined' && this.fwifi.input.isDragged) {
		Level.prototype.SpriteDraged(this.fwifi);
	}
    if(Math.random()*20>16 &&cash<maxCash)
		cash+=1;


    var line = cash/maxCash*400;
    cashLine.width=line;
    console.log(cashLine);
    cashUI.setText(cash + "/" + maxCash);
};

Level.prototype.addRouter = function () {
	if (cash < 19) {
		return false;
	}
	cash -= 20;
	var _wifi = this.add.sprite(0, 0, 'wifi');
	_wifi.inputEnabled = true;
	_wifi.input.enableDrag();
	this.fwifi = _wifi;
};

Level.prototype.SpriteDraged = function (dragedObj) {
	//puste pod wyłączenie i włączenie wifi 
}