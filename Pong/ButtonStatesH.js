var ButtonStatesh = pc.createScript('buttonStatesh');


// initialize code called once per entity
ButtonStatesh.prototype.initialize = function() {
    
    this.originalTexture = this.entity.element.textureAsset;
    this.entity.element.on('mousedown', this.onPress, this);
    this.entity.element.on('mouseup', this.onRelease, this);
};

// update code called every frame
ButtonStatesh.prototype.update = function(dt) {

};


ButtonStatesh.prototype.onPress = function (event) { 
    
                window.gamedifficulty = 0.2;
        
                console.log(window.gamedifficulty);
    this.app.root.findByName('Easy').enabled = false;
	    this.app.root.findByName('Medium').enabled = false;
		    this.app.root.findByName('Hard').enabled = false;
         this.app.root.findByName('Intro').enabled = false;
        this.app.root.findByName('Game').enabled = true;
        this.app.root.findByName('Back').enabled = false;

};

// swap method called for script hot-reloading
// inherit your script state here
// ButtonStates.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/