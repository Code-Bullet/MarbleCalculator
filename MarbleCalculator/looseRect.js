class LooseRect {
  constructor(x1, y1, x2, y2, thickness, mass = 1) {
    this.startingX1 = x1;
    this.startingX2 = x2;
    this.startingY1 = y1;
    this.startingY2 = y2;
    this.center = createVector((x1 + x2) / 2, (y1 + y2) / 2);
    this.width = dist(x1, y1, x2, y2);
    this.height = thickness;
    this.rotation = atan((y2 - y1) / (x2 - x1));
    this.mass = mass;
    this.selected = false;
    this.zoomedPosition;
    if(mass == 1) {
      var options = {
        angle: this.rotation,
        friction: 0.01,
        restitution: 0.1
      }
    } else {
      var options = {
        angle: this.rotation,
        friction: 0.01,
        restitution: 0.1,
        mass: this.mass
      }
    }
    this.body = Bodies.rectangle(this.center.x, this.center.y, this.width, this.height, options);


    World.add(world, this.body);
  }

  show() {
    noStroke();
    push();
    this.zoomedPosition = createVector(this.body.position.x, this.body.position.y);
    this.zoomedPosition.mult(zoom);
    translate(this.zoomedPosition.x - cameraX, this.zoomedPosition.y - cameraY);
    rotate(this.body.angle);
    fill(255, 50, 255);
    if(this.selected) {
      fill(255, 255, 0);
    }
    rectMode(CENTER);
    rect(0, 0, this.width * zoom, this.height * zoom);

    pop();



  }


  removeFromWorld() {
    World.remove(world, this.body);
  }

  reset() {
    this.removeFromWorld();

    this.center = createVector((this.startingX1 + this.startingX2) / 2, (this.startingY1 + this.startingY2) / 2);

    this.rotation = atan((this.startingY2 - this.startingY1) / (this.startingX2 - this.startingX1));
    if(this.mass == 1) {
      var options = {
        angle: this.rotation,
        friction: 0.01,
        restitution: 0.1
      }
    } else {
      var options = {
        angle: this.rotation,
        friction: 0.01,
        restitution: 0.1,
        mass: this.mass
      }
    }
    this.body = Bodies.rectangle(this.center.x, this.center.y, this.width, this.height,
      options);


    World.add(world, this.body);
    // this = new LooseRect(startingX1, startingY1, startingX2, startingY2, 10);
    // this.body = Bodies.rect(this.startingX, this.startingY, this.diameter /
    //   2.0, this.options);
    // World.add(this.world, this.body);


  }



}
