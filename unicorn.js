class Unicorn {
   
    constructor(height) {
      this.r = 100;
      this.x = 50;
      this.y = height - this.r;
      this.vy = 0;
      this.gravity = 3;
      this.height = height;
    }
  
    jump() {
        if(this.y==this.height - this.r)
            this.vy = -45;
    }

    move() {
      if(this.y >= 0 && this.y <= this.height - this.r)  
        {  
            this.y += this.vy;
            this.vy += this.gravity;
            if(this.y>this.height - this.r)
             this.y=this.height - this.r
        }

    }
  
   
  }