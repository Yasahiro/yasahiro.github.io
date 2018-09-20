var Lifep1 = pc.createScript('lifep1');
var lostLife1 = false;
var tim = 0;

// initialize code called once per entity
Lifep1.prototype.initialize = function() {
    this.entity.element.text = "3";
    
};

// update code called every frame
Lifep1.prototype.update = function(dt) {
    this.app.on("ball:p1goal", function()
                {
        lostLife1 = true;
    });
    
    if(lostLife1 === true)
        {
            this.entity.element.text = this.entity.element.text - 1;

			console.log(this.entity.element.text);
            if(this.entity.element.text === "0")
                {
                                        
                    var Lif = this.app.root.findByName('Life2');
                    this.entity.element.text = "3";
                    this.app.root.findByName('Game').enabled = false;
                    this.app.root.findByName('Game_Over').enabled = true;
                    this.app.root.findByName('Back2').enabled = true;
                            
                    
                }
            lostLife1 = false;
        }
};

// swap method called for script hot-reloading
// inherit your script state here
// Lifep1.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/