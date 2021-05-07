class SuperMan {
    constructor(x , y ,width, height,angle) 
    {
      var options = 
      {
        isStatic:true,
        restitution:0.5
      }
      this.body = Bodies.rectangle(x, y, width , height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("superman.jpg")
      Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
     
    
      
      
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      
    }
  };