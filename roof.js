class Roof{
    constructor() {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(400, 200, 300,20, options);
        
        World.add(world, this.body);
      }
      display(){
              fill(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)))
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,300,20)
      }
}