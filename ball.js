class ball{
    constructor(x,y,scale,options){
        this.scale = scale;
        this.ballObject = Bodies.circle(x,y,scale,options);
        World.add(world,this.ballObject);
    }

    display(){
        push();
        translate(this.ballObject.position.x, this.ballObject.position.y);
        rotate(this.ballObject.angle);
        circle(this.ballObject.position.x,this.ballObject.position.y,this.scale * 3);
        pop();
    }
}
