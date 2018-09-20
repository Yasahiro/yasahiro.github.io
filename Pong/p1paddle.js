var P1paddle = pc.createScript('p1paddle');
var y = 0;
var accely = 0;

// initialize code called once per entity
P1paddle.prototype.initialize = function() {
    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
	    this.entity.collision.on('collisionstart', this.onCollisionStart, this);
};

// update code called every frame
P1paddle.prototype.update = function(dt) {

    
    if(this.app.keyboard.isPressed(pc.KEY_W))
        {
            accely += 0.02;
        } else if(this.app.keyboard.isPressed(pc.KEY_S))
            {
               accely -= 0.02;
            }       else  if(accely > 0 || accely < 0)
                {
                accely = accely * 0.5;
                 }
    
    if(accely > 0.2)
        {
            accely = 0.2;
        } else if (accely < -0.2)
            {
                accely = -0.2;
            }
    
    y = y + accely;
    
    if(y > 2.75)
        {
            y = 2.75;
            accely = 0;
        } else if(y < -2.75)
            {
                y = -2.75;
                accely = 0;
            }
    
    this.entity.setPosition(-7.375,y,0);
    

};

P1paddle.prototype.onCollisionStart = function (result) {
    if (result.other.rigidbody) {
        this.app.fire("p1paddle:giveLoc",y);  
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// P1paddle.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/