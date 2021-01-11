class thread  {
    constructor(a,b)  {
        var properties={bodyA:a,pointB:b,stiffness:0.8,length:100};
        this.pointB=b;
        this.thread=c.create(properties);
        Matter.World.add(myWorld,this.thread)
    }
    display()  {
        var a=this.thread.bodyA.position;
        var b=this.pointB;
        line(a.x,a.y,b.x,b.y);
    }
}