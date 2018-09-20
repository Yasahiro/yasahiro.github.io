var ButtonStateBack = pc.createScript('buttonStateBack');



// initialize code called once per entity
ButtonStateBack.prototype.initialize = function() {
    
    this.originalTexture = this.entity.element.textureAsset;
    this.entity.element.on('mousedown', this.onPress, this);
    this.entity.element.on('mouseup', this.onRelease, this);
};

// update code called every frame
ButtonStateBack.prototype.update = function(dt) {
};


ButtonStateBack.prototype.onPress = function (event) { 
    



    this.app.root.findByName('Easy').enabled = false;
	    this.app.root.findByName('Medium').enabled = false;
		    this.app.root.findByName('Hard').enabled = false;
    this.app.root.findByName('Intro').enabled = true;
    this.app.root.findByName('Victory').enabled = false;
    this.app.root.findByName('Game_Over').enabled = false;
    this.app.root.findByName('Back').enabled = false;
	this.app.root.findByName('Back1').enabled = false;
	this.app.root.findByName('Back2').enabled = false;
    this.app.root.findByName('Legend').enabled = false;
     this.app.root.findByName('Button').enabled = true;
    this.app.root.findByName('HowToPlay').enabled = true;
};

// swap method called for script hot-reloading
// inherit your script state here
// ButtonStateBack.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/