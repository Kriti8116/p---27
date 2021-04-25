class Bob 
{
	constructor(x,y){
    this.diameter= diameter
	
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2			
			}
            this.body=Bodies.circle(x,y,20,options); // determining the shape of the body
            diameter=40;
            World.add(world,this.body); // adding the body to the world
            
      }
      display(){
          var pose= this.body.position
          var angle= this.body.angle
          push();
          translate(pose.x,pose.y)
          rotate(angle)

          fill("purple")
          
          
          
          
        pop()
      }
  }