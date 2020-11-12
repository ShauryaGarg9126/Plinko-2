class Plinko
{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution:1,
			friction:0,
			}
		this.x=x;
		this.y=y;
		this.r=10;
		
		this.body=Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			
			var angle = this.body.angle;
			push();
			translate(pos.x, pos.y);
			
			rotate(angle);
			fill(255,0,255);
			ellipseMode(RADIUS)
			
			ellipse(0,0,this.r,this.r);
		
			pop()
			
	}

}
