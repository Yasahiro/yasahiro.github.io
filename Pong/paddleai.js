var Paddleai = pc.createScript('paddleai');
var paddleloc = 0;
var aiy = 0;
var pady = 0;
var difficulty = 0.5;
var aispeed = 0.05;

// initialize code called once per entity
Paddleai.prototype.initialize = function() {


};

// update code called every frame
Paddleai.prototype.update = function(dt) {
difficulty = window.gamedifficulty;
    if(difficulty < 0.5)
        {
            aispeed = 0.1;
        } else
            {
                aispeed = 0.05;
            }
    paddleloc = this.entity.getPosition();
    pady = paddleloc.y;

    this.app.on("ball:giveLocation", function(bally) {
        
                if(pady-difficulty > bally)
                    {
                        aiy= -aispeed;
                    } else if(pady+difficulty < bally)
                  {
                        aiy = aispeed;
                    } else if((pady-0.1 < bally) && (pady+0.1 > bally))
                        {
                            aiy = 0;
                        }
    });

    
    pady += aiy;
       if(pady > 2.75)
        {
            pady = 2.75;
        } else if(pady < -2.75)
            {
                pady = -2.75;
            }
    this.entity.setPosition(7.375,pady,0);
};

// swap method called for script hot-reloading
// inherit your script state here
// Paddleai.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/