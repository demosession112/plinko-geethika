class Plinko{
    constructor(x,y){
    var options={
        isStatic:true
    }
    this.r = 10;
    this.body = Bodies.circle(x, y, this.r, options);
    
    
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        ellipseMode(CENTER);
      fill("red");
      ellipse(this.x,this.y,14);
        pop();

    }
}
