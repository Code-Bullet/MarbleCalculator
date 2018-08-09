class Marble {
  constructor(x, y, diam) {

    var options = {
      friction: 0,
      restitution: 0.2

    }
    this.x = x;
    this.y = y;
    this.diameter = diam;

    this.body = Bodies.circle(x, y, this.diameter / 2.0, options);
    this.zoomedPosition;
    World.add(world, this.body);
    this.selected = false;

  }


  show() {
    fill(204, 0, 0);
    if(this.selected) {
      fill(255, 255, 0);
    }
    noStroke();
    this.zoomedPosition = createVector(this.body.position.x, this.body.position.y);
    this.zoomedPosition.mult(zoom);
    ellipse((this.zoomedPosition.x - cameraX), (this.zoomedPosition.y - cameraY), this.diameter * zoom);
  }

  removeFromWorld() {

    World.remove(world, this.body);
  }



}
