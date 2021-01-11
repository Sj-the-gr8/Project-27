class ball  {
    constructor(x,y)  {
       this.radius=15; 
       var properties={restitution:0.8,density:10,friction:0.3};
       this.body=Matter.Bodies.circle(x,y,this.radius,properties);
       Matter.World.add(myWorld,this.body);
    }
    display()  {
        fill("pink");
        ellipse(this.body.position.x,this.body.position.y,this.radius*2,this.radius*2);
    }
}