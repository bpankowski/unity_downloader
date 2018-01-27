
// -- user code here --

var places = [
		{"x" : 336, "y" : 272},
		{"x" : 320, "y" : 272},
		{"x" : 320, "y" : 208},
		{"x" : 336, "y" : 208},
		{"x" : 512, "y" : 272},
		{"x" : 496, "y" : 272},
		{"x" : 496, "y" : 208},
		{"x" : 512, "y" : 208},
		{"x" : 336, "y" : 400},
		{"x" : 320, "y" : 400},
		{"x" : 320, "y" : 336},
		{"x" : 336, "y" : 336},
		{"x" : 512, "y" : 400},
		{"x" : 496, "y" : 400},
		{"x" : 496, "y" : 336},
		{"x" : 512, "y" : 336}
	];
var position;

var random_number;

var score;
var cash;
var maxCash = 200;
var cashUI;
var cashLine;



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
	
	this.sprites=[];
	cash = 40;
	
};

Level_01.prototype.preload = function () {
	
	this.load.pack('level', 'assets/pack.json');
	
	this.load.bitmapFont('nesfont', 'assets/fonts/nesfont.png', 'assets/fonts/nesfont.xml');
	
};

Level_01.prototype.create = function () {
	var _floor = this.add.tileSprite(224, 160, 800, 600, 'floor', 3);
	_floor.scale.setTo(0.5, 0.5);
	
	this.add.sprite(336, 272, 'krzeslo', 0);
	
	this.add.sprite(320, 272, 'krzeslo', 0);
	
	this.add.sprite(320, 208, 'krzeslo2_17x28', 0);
	
	this.add.sprite(336, 208, 'krzeslo2_17x28', 0);
	
	this.add.sprite(304, 224, 'stol', 0);
	
	this.add.sprite(512, 272, 'krzeslo', 0);
	
	this.add.sprite(496, 272, 'krzeslo', 0);
	
	this.add.sprite(496, 208, 'krzeslo2_17x28', 0);
	
	this.add.sprite(512, 208, 'krzeslo2_17x28', 0);
	
	this.add.sprite(480, 224, 'stol', 0);
	
	this.add.sprite(336, 400, 'krzeslo', 0);
	
	this.add.sprite(320, 400, 'krzeslo', 0);
	
	this.add.sprite(320, 336, 'krzeslo2_17x28', 0);
	
	this.add.sprite(336, 336, 'krzeslo2_17x28', 0);
	
	this.add.sprite(304, 352, 'stol', 0);
	
	this.add.sprite(512, 400, 'krzeslo', 0);
	
	this.add.sprite(496, 400, 'krzeslo', 0);
	
	this.add.sprite(496, 336, 'krzeslo2_17x28', 0);
	
	this.add.sprite(512, 336, 'krzeslo2_17x28', 0);
	
	this.add.sprite(480, 352, 'stol', 0);
	
	var _lvl_choice = this.add.sprite(-816, -288, 'lvl_choice');
	
	var __add_router = this.add.button(624, 160, 'socials', Level_01.prototype.addRouter, this, null, 'addthis.png', null, null);
	
	
	
	// public fields
	

	this.add.sprite(0, 0, 'cashBar');
	var gfx = this.add.graphics(10,20);
	gfx.lineStyle(20, 0x7FFF00, 0.8);
	cashLine = gfx.lineTo(40,0);
	cashUI = this.add.bitmapText(46, 14, 'nesfont',cash + "/" + maxCash,64);
	
	this.fLvl_choice = _lvl_choice;
	this.f_add_router = __add_router;
	this.time.events.repeat(Phaser.Timer.SECOND * 1, 6, this.add_random_people, this);
	this.add_random_people();
	if (this.sprites.length != 0) {
		game.time.events.loop(Phaser.Timer.SECOND * 2, Level_01.prototype.smoke, this);
	}
	var w = 800, h=600;
	// Create a label to use as a button
	pause_label = game.add.text(w - 80, 10, 'Pause', { font: '24px Arial', fill: '#fff' });
	pause_label.inputEnabled = true;
	pause_label.events.onInputUp.add(function () {
	    // When the paus button is pressed, we pause the game
	    game.paused = true;
	
	    // Then add the menu
	    lvl_choice = game.add.sprite(w/2, h/2, 'lvl_choice');
	    lvl_choice.anchor.setTo(0.5, 0.5);
	
	    // And a label to illustrate which menu item was chosen. (This is not necessary)
	    choiseLabel = game.add.text(w/2, h-150, 'Click outside menu to continue', { font: '30px Arial', fill: '#fff' });
	    choiseLabel.anchor.setTo(0.5, 0.5);
	});
	
	// Add a input listener that can help us return from being paused
	game.input.onDown.add(unpause, self);
	
	// And finally the method that handels the pause menu
	function unpause(event){
	    // Only act if paused
	    if(game.paused){
	        // Calculate the corners of the menu
	        var x1 = w/2 - 150/2, x2 = w/2 + 150/2,
	            y1 = h/2 - 50/2, y2 = h/2 + 50/2;
	
	        // Check if the click was inside the menu
	        if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2 ){
	            // The choicemap is an array that will help us see which item was clicked
	            var choisemap = ['one', 'two', 'three'];
	
	            // Get menu local coordinates for the click
	            var x = event.x - x1,
	                y = event.y - y1;
	
	            // Calculate the choice 
	            var choise = Math.floor(x / 50) + 3*Math.floor(y / 50);
	
	            // Display the choice
	            choiseLabel.text = 'You chose menu item: ' + choisemap[choise];
	            console.log(choise);
	            
	            if(choise == 0){
	            	game.state.start('Level_00');
	            	lvl_choice.destroy();
	                choiseLabel.destroy();
	                game.paused = false;
	            } else if (choise == 1){
	            	game.state.start('Level_01');
	            	lvl_choice.destroy();
	                choiseLabel.destroy();
	                game.paused = false;
	            } else if (choise == 2) {
	            	game.state.start('Level_02');
	            	lvl_choice.destroy();
	                choiseLabel.destroy();
	                game.paused = false;
	            }
	        }
	        else{
	            // Remove the menu and the label
	        	lvl_choice.destroy();
	            choiseLabel.destroy();
	
	            // Unpause the game
	            game.paused = false;
	        }
	    }
	}
	
	
	
};

/* --- end generated code --- */
// -- user code here --

Level_01.prototype.update = function () {
	if (typeof this.fwifi !== 'undefined' && this.fwifi.input.isDragged) {
		Level.prototype.SpriteDraged(this.fwifi);
	}
    if(Math.random()*20>16 &&cash<maxCash)
		cash+=1;


    var line = cash/maxCash*400;
    cashLine.width=line;
    cashUI.setText(cash + "/" + maxCash);
};

Level_01.prototype.add_random_people = function add_random_people() {


    this.add_sprite = function(x, y, sprite_name){
        var sprite = this.add.sprite(x, y, sprite_name , 10);
        sprite.animations.add('walk_right', [3, 4, 5], 4, true);
        sprite.animations.add('walk_left', [9, 10, 11], 4, true);
        sprite.animations.add('walk_up', [0, 1, 2], 4, true);
        sprite.animations.add('walk_down', [6, 7, 8], 4, true);
        sprite.data.id_router = null;
        sprite.data.happiness = 50;
        sprite.data.action = 100;
        this.sprites.push(sprite);
    };

	position = Math.floor(Math.random()*places.length);
	random_number = Math.floor(Math.random()*5);
	if (typeof places[0] !== 'undefined') {
		var place = places[position];
		place.x = place.x - 12;
		place.y = place.y - 16;
		var sprite_names = ["ninja_f","ninja_m","warrior_m","townfolk1_f","ranger_f","ranger_m"];
		this.add_sprite(place.x, place.y,sprite_names[random_number]);
		places.splice(position, 1);
	} else {
		console.log("added random");
	}
	
	

};

Level_01.prototype.smoke = function () {
	var _smoke_above_user = null;
	if (_smoke_above_user != null) {
		_smoke_above_user.remove(sprite, true);
	};
	random_number = Math.floor(Math.random()*this.sprites.length);
	var smoke_above = this.sprites[random_number];
	_smoke_above_user = this.add.sprite(smoke_above.position.x + 5, smoke_above.position.y - 5, "pop_up", 0);
	_smoke_above_user.animations.add('alert_smoke', [0, 1, 2, 1, 0], 5, false);
	
	_smoke_above_user.animations.play('alert_smoke', 5, false, true);
	
};

Level_01.prototype.addRouter = function () {
	if (cash < 19) {
		return false;
	}
	cash -= 20;

	var _wifi = this.add.sprite(250, 5, "wifi_z");
	_wifi.animations.add('beep', [0,1,2,3,4,5,6], 3, true);
	_wifi.animations.play('beep');
	_wifi.inputEnabled = true;
	_wifi.input.enableDrag();
	_wifi.data.level = 0;
	_wifi.data.range = 10;
	_wifi.data.transfer = 10;
	_wifi.events.onInputUp.add(Level_01.prototype.upgreade,this);

	this.fwifi = _wifi;
};

Level_01.prototype.SpriteDraged = function (dragedObj) {
	//puste pod wyłączenie i włączenie wifi 
};


Level_01.prototype.upgreade = function listener (sprite, pointer) {
	if (sprite.data.level != 4){
		switch(sprite.data.level) {
	    case 0:
	        sprite.data.level = 1;
	        sprite.data.range = 15;
	        sprite.data.transfer = 20;
	        cash -= 40;
	        break;
	    case 1:
	        sprite.data.level = 2;
	        sprite.data.range = 15;
	        sprite.data.transfer = 20;
	       	cash -= 80;
	        break;
	    case 2:
	        sprite.data.level = 3;
	        sprite.data.range = 20;
	        sprite.data.transfer = 40;
	        cash -= 120; 
	        break;
	    case 3:
	        sprite.data.level = 4;
	        sprite.data.range = 25;
	        sprite.data.transfer = 80;
	        cash -= 160;
		}
	}
};