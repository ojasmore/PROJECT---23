class Box {
    constructor(x, y, width, height) {
      var options = {
          isStatic : true
      }
      var options2 = {
          'density':5.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options,options2);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      rectMode(CENTER);
      fill(0,255,0);
      rect(pos.x,pos.y, this.width, this.height);
    }
  }