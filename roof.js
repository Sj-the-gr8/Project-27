class roof  {
    constructor(x,y)  {
        this.width=200;
        this.height=20;
        this.body=Matter.Bodies.rectangle(x,y,this.width,this.height,{isStatic:true});
        Matter.World.add(myWorld,this.body);
    }
    display()  {
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}