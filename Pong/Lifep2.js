var Lifep2 = pc.createScript('lifep2');
var lostLife2 = false;
var tim = 0;

// initialize code called once per entity
Lifep2.prototype.initialize = function() {
        this.entity.element.text = "3";
};

// update code called every frame
Lifep2.prototype.update = function(dt) {
    this.app.on("ball:p2goal", function()
                {
        lostLife2 = true;
    });
    
    if(lostLife2 === true)
        {
            this.entity.element.text = this.entity.element.text--;
            if(this.entity.element.text === "0")
                {

                    var Lif = this.app.root.findByName('Life1');
                    this.entity.element.text = "3";
                    this.app.root.findByName('Game').enabled = false;
                    this.app.root.findByName('Victory').enabled = true;
                        this.app.root.findByName('Back1').enabled = true;                            
                }
            lostLife2 = false;
        }
};

// swap method called for script hot-reloading
// inherit your script state here
// Lifep2.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/