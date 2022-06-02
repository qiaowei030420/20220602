var colors = "ff99c8-fcf6bd-d0f4de-a9def9-e4c1f9".split("-").map(a=>"#"+a)
class Ball{
	constructor(args){        //預設值
		this.r =args.r||random(200)
		this.p =args.p||{x:random(width),y:random(height)}
		this.v = {x:random(-1,1),y:random(-1,1)}
		this.color = random(colors)
		
}

draw(){  //  繪製函數
		fill(this.color)
		ellipse(this.p.x, this.p.y , this.r);
	}
	
	update(){  // 動作(移動)
		this.p.x=this.p.x+this.v.x
		this.p.y+=this.v.y
	}
	
}

var ball
var balls = []
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for(var i=0;i<100;i++){
		ball = new Ball({r:50,p:{x:width/2,y:height/2}})
		balls.push(ball)
	}
	//宣告一個圓的屬性p:位置,v:速度,r:直徑
	//ball={
		//p:{x:50,y:50},
		//v:{x:0,y:1},
		//r:100,
		//color:color(252,68,68)
	//}
}

function draw() {
	background(0);
	for(var i=0;i<balls.length;i++){
		let ball = balls[i];		
		ball.draw()	 //繪製		
		ball.update()  //動作(移動)
	}
}