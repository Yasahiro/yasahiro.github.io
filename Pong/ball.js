var Ball = pc.createScript('ball');
var launched = false;
var loc;
var offer = 0;
var debounce = 0;
var increased_speed = 0;
var point1 = false;
var point2 = false;
var stimer = 0;
// initialize code called once per entity
Ball.prototype.initialize = function() {
    
	
	
    this.entity.collision.on('collisionstart', this.onCollisionStart, this);
    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
	
};

// update code called every frame
Ball.prototype.update = function(dt) {
	
    loc = this.entity.getPosition();
    offer = loc.y;
    this.app.fire('ball:giveLocation', offer);
    
    if(loc.x > 9 && point1 === false)
        {
            point1 = true;

        }
    if(loc.x < -9 && point2 === false)
        {
            point2 = true;

        }
    if(this.app.keyboard.wasPressed(pc.KEY_SPACE) && launched === false)
        {
			console.log("Go");
            this.entity.rigidbody.applyImpulse(-2,0,0);
            launched = true;
			
        }
    if(point1 === true)
        {
            stimer++;
            if(stimer > 20)
                {
                    stimer = 0;
                    point1 = false;
                    this.app.fire('ball:p2goal');
             
            this.entity.rigidbody.teleport(0,0,0,0,0,0);
            this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO;
            launched = false;
                }
        }
    
        if(point2 === true)
        {
            stimer++;
            if(stimer > 20)
                {
                    stimer = 0;
                    point2 = false;
                                this.app.fire('ball:p1goal');
             
            this.entity.rigidbody.teleport(0,0,0,0,0,0);
            this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO;
            launched = false;
                }
        }
			
};

Ball.prototype.onCollisionStart = function (result) {
    if (result.other.rigidbody) {
  
            this.app.on("p1paddle:giveLoc", function(padloc) {                
                if((loc.x >= -7.2 && loc.x <= -6.9) && (loc.y <= (padloc+1) && loc.y >= (padloc+0.2)))
                    {
                        console.log("UP");
                        debounce = 2;
                        increased_speed = 0.2;

                    } else if((loc.x >= -7.2 && loc.x <= -6.9) && (loc.y >= (padloc-1) && loc.y <= (padloc-0.2)))
                    {
                        console.log("DOWN");
                        debounce = -2;
                       increased_speed = 0.2;
                        
                    } else if(loc.x >= -7.2 && loc.x <= -6.9) {
                             increased_speed = 0.2;
                             }
                
            });
        
        this.entity.rigidbody.applyImpulse(increased_speed,debounce,0);
        debounce = 0;
        increased_speed = 0;
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// Ball.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/