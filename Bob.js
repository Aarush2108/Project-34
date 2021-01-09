class Pendulum {
constructor(x,y,color){
    var options={
       // isStatic: false,
        restitution: 1,
        friction: 0,
        frictionAir: 0.0,
        slop: 1,
        inertia: Infinity
    };
   this.body = Bodies.rectangle(x,y,20,20,options)
   this.color = color
   World.add(world,this.body)
}
display(){
    var angle= this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle)
    ellipseMode(RADIUS);
    fill(this.color);
    ellipse(0,0,20,20);
    pop();
}
}