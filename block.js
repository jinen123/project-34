class Block {
    constructor(x , y ,width, height) 
    {
      var options = 
      {
        isStatic:false,
        friction : 2.0,
        density : 5.0

      }
      this.body = Bodies.rectangle(x, y, width , height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
     
      rectMode(CENTER);
      fill("brown")
      
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      
    }
  };  