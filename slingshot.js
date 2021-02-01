class Chain{
    constructor(body1, body2 ,xOffset){
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 1,
            length: 200,
            pointB:{x:xOffset,y:0}

        }
        this.chain = Constraint.create(options);
        this.xOffset=xOffset
        World.add(world, this.chain);
    }
    
    display(){
    
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x+this.xOffset, pointB.y);
    
   }
    
}