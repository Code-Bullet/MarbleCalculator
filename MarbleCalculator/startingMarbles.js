class StartingMarble {
  constructor(x, y, diam) {

    this.options = {
      friction: 0,
      restitution: 0.2

    }
    this.startingX = x;
    this.startingY = y;
    this.diameter = diam;
    this.zoomedPosition;

    this.body = Bodies.circle(x, y, this.diameter / 2.0, this.options);
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
    // ellipse(this.body.position.x - cameraX, this.body.position.y - cameraY, this.diameter);

  }

  removeFromWorld() {
    World.remove(world, this.body);
  }

  reset() {
    this.removeFromWorld();
    this.body = Bodies.circle(this.startingX, this.startingY, this.diameter /
      2.0, this.options);
    World.add(world, this.body);


  }

}
