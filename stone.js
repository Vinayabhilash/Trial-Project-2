class Stone{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
    }
    this.pointB = pointB;
    this.stone = Constraint.create(options);
    this.stone1 = loadImage("stone.png");
    World.add(world, this.stone);
    }
    display(){
        image(this.stone, 30, 60);
        if(this.stone.bodyA){   
            var pointA = this.stone.bodyA.position;
            var pointB = this.pointB;
            push();
            pop();
            }
        }
    
        fly(){
        this.stone.bodyA = null;
        }
        
}