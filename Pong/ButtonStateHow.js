var ButtonStatesHow = pc.createScript('buttonStateHow');

// initialize code called once per entity
ButtonStatesHow.prototype.initialize = function() {
    
    this.originalTexture = this.entity.element.textureAsset;
    this.entity.element.on('mousedown', this.onPress, this);
    this.entity.element.on('mouseup', this.onRelease, this);
};

// update code called every frame
ButtonStatesHow.prototype.update = function(dt) {
};


ButtonStatesHow.prototype.onPress = function (event) { 


                
    
    this.app.root.findByName('Button').enabled = false;
    this.app.root.findByName('HowToPlay').enabled = false;
    this.app.root.findByName('Legend').enabled = true;
    this.app.root.findByName('Back').enabled = true;
            
};

// swap method called for script hot-reloading
// inherit your script state here
// ButtonStates.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/