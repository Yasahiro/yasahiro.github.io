var ButtonStates = pc.createScript('buttonStates');
var isIntro = true;
var tim = 0;
// initialize code called once per entity
ButtonStates.prototype.initialize = function() {
    
    this.entity.element.on('mousedown', this.onPress, this);
    this.entity.element.on('mouseup', this.onRelease, this);
};

// update code called every frame
ButtonStates.prototype.update = function(dt) {
if(isIntro === false)
    {
        tim++;
        if(tim > 5)
            {
                isIntro = true;
                tim = 0;
                    this.app.root.findByName('Button').enabled = false;
    this.app.root.findByName('Easy').enabled = true;
	    this.app.root.findByName('Medium').enabled = true;
		    this.app.root.findByName('Hard').enabled = true;
                this.app.root.findByName('HowToPlay').enabled = false;
    this.app.root.findByName('Back').enabled = true;
                
            }
    }
};


ButtonStates.prototype.onPress = function (event) { 
            if(isIntro === true)
            {
                isIntro = false;


            }
};



// swap method called for script hot-reloading
// inherit your script state here
// ButtonStates.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/