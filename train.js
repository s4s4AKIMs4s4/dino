class Train {

    constructor(height,width) {
      this.r = 75;
      this.x = width;
      this.y = height - this.r;
    }
  
    move() {
      this.x -= 16;
    }
  
    
  
  }