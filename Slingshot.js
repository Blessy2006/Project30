class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB
        this.polygon = Constraint.create(options);
        World.add(world, this.polygon);
    }
    attach(body){
        this.polygon.bodyA = body;
    }
    fly(){
        this.polygon.bodyA = null;
    }

    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(polygon,polygon.position.x,polygon.position.y,40,40);
            
    }
}