class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX= offsetX
        this.offsetY= offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }


    //display(){
      //  var pointA = this.rope.body1.position;
        //var pointB = this.rope.body2.position;
        //strokeWeight(4);
        //line(pointA.x, pointA.y, pointB.x, pointB.y);
    //}
    
}