class Solid {
  constructor(x1, y1, x2, y2, thickness) {
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.center = createVector((x1 + x2) / 2, (y1 + y2) / 2);
    this.width = dist(x1, y1, x2, y2);
    this.height = thickness;
    this.rotation = atan((y2 - y1) / (x2 - x1));
    this.selected = false;
    this.zoomedPosition;
    var options = {
      isStatic: true,
      angle: this.rotation,
      friction: 0.01,
      restitution: 0.1
    }
    this.body = Bodies.rectangle(this.center.x, this.center.y, this.width,
      this.height,
      options);


    World.add(world, this.body);
  }

  show() {
    noStroke();
    push();
    this.zoomedPosition = createVector(this.body.position.x, this.body.position.y);
    this.zoomedPosition.mult(zoom);
    translate(this.zoomedPosition.x - cameraX, this.zoomedPosition.y - cameraY);
    rotate(this.body.angle);
    fill(40);
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

}
