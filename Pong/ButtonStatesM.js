var ButtonStatesm = pc.createScript('buttonStatesm');


// initialize code called once per entity
ButtonStatesm.prototype.initialize = function() {
    
    this.originalTexture = this.entity.element.textureAsset;
    this.entity.element.on('mousedown', this.onPress, this);
    this.entity.element.on('mouseup', this.onRelease, this);
};

// update code called every frame
ButtonStatesm.prototype.update = function(dt) {

};


ButtonStatesm.prototype.onPress = function (event) { 
    

                window.gamedifficulty = 0.5;
        
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

// swap method called for script hot-reloading
// inherit your script state here
// ButtonStatesm.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/