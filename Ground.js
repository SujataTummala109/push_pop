class Ground{
constructor(x,y,w,h){

var options = {
isStatic : true
}
this.x = x;
this.y = y;
this.h = h;
this.w = w
this.body = Bodies.rectangle(x,y,w,h,options)
World.add(world, this.body)
rectMode(CENTER);
}

display(){
push ();
strokeWeight(5);
stroke("red");
fill("green");
rect(this.body.position.x, this.body.position.y, this.w, this.h)
pop();
}

}