
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * Level_01.
 */
function Level_01() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level_01_proto = Object.create(Phaser.State.prototype);
Level_01.prototype = Level_01_proto;
Level_01.prototype.constructor = Level_01;

Level_01.prototype.init = function () {
	
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	
};

Level_01.prototype.preload = function () {
	
	this.load.pack('level', 'assets/pack.json');
	
};

Level_01.prototype.create = function () {
	this.add.sprite(503, 389, 'krzeslo', 0);
	
	this.add.sprite(545, 355, 'krzeslo1', 0);
	
	this.add.sprite(505, 330, 'krzeslo2_17x28', 0);
	
	var _krzeslo2 = this.add.sprite(479, 355, 'krzeslo1', 0);
	_krzeslo2.scale.setTo(-1.0, 1.0);
	
	this.add.sprite(479, 346, 'stol', 0);
	
	this.add.sprite(316, 388, 'krzeslo', 0);
	
	this.add.sprite(358, 354, 'krzeslo1', 0);
	
	this.add.sprite(318, 329, 'krzeslo2_17x28', 0);
	
	var _krzeslo5 = this.add.sprite(292, 354, 'krzeslo1', 0);
	_krzeslo5.scale.setTo(-1.0, 1.0);
	
	this.add.sprite(292, 345, 'stol', 0);
	
	this.add.sprite(315, 268, 'krzeslo', 0);
	
	this.add.sprite(357, 234, 'krzeslo1', 0);
	
	this.add.sprite(317, 209, 'krzeslo2_17x28', 0);
	
	var _krzeslo8 = this.add.sprite(291, 234, 'krzeslo1', 0);
	_krzeslo8.scale.setTo(-1.0, 1.0);
	
	this.add.sprite(291, 225, 'stol', 0);
	
	this.add.sprite(498, 272, 'krzeslo', 0);
	
	this.add.sprite(540, 238, 'krzeslo1', 0);
	
	this.add.sprite(500, 213, 'krzeslo2_17x28', 0);
	
	var _krzeslo11 = this.add.sprite(474, 238, 'krzeslo1', 0);
	_krzeslo11.scale.setTo(-1.0, 1.0);
	
	this.add.sprite(474, 229, 'stol', 0);
	
	
	this.time.events.add(Phaser.Timer.SECOND * 1, this.add_ninja_f, this);
	
};

/* --- end generated code --- */
// -- user code here --

Level.prototype.update = function () {
	
	Level_01.prototype.add_ninja_f();

};


Level_01.prototype.add_ninja_f = function add_ninja_f() {
	var _ninja_f = this.add.sprite(0, 0, 'ninja_f', 10);
	_ninja_f.animations.add('walk_right', [3, 4, 5], 4, true);
	_ninja_f.animations.add('walk_left', [9, 10, 11], 4, true);
	_ninja_f.animations.add('walk_up', [0, 1, 2], 4, true);
	_ninja_f.animations.add('walk_down', [6, 7, 8], 4, true);
	this.fninja_f = _ninja_f;
};