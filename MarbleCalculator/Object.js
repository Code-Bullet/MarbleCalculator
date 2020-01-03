class Object {
  constructor(x, y, isFlipped, type) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.solids = [];
    this.startingMarbles = [];
    this.looseRects = [];
    this.isFlipped = isFlipped;
    this.selected = false;
    this.upperHeight = upperHeight;
    this.addParts(isFlipped);
    this.minX = 1000000;
    this.minY = 1000000;
    this.maxX = -1000000;
    this.maxY = -1000000;
    this.setBoundingBox();
    this.removedSolids = [];

  }

  show() {
    if(this.selected) {
      rectMode(CORNERS);
      fill(255, 255, 0, 100);
      rect(this.minX * zoom - cameraX, this.minY * zoom - cameraY, this.maxX * zoom - cameraX, this.maxY * zoom - cameraY);
    }
    for(var i = 0; i < this.solids.length; i++) {
      this.solids[i].show();
    }
    for(var i = 0; i < this.looseRects.length; i++) {
      this.looseRects[i].show();
    }
    for(var i = 0; i < this.startingMarbles.length; i++) {
      this.startingMarbles[i].show();
    }

  }
  reset() {
    for(var i = 0; i < this.looseRects.length; i++) {
      this.looseRects[i].reset();
    }
    for(var i = 0; i < this.startingMarbles.length; i++) {
      this.startingMarbles[i].reset();
    }

  }


  removeFromWorld() {

    while(this.solids.length > 0) {
      this.solids.pop().removeFromWorld();
    }
    while(this.looseRects.length > 0) {
      this.looseRects.pop().removeFromWorld();
    }
    while(this.startingMarbles.length > 0) {
      this.startingMarbles.pop().removeFromWorld();
    }
  }

  setBoundingBox() {
    for(var i = 0; i < this.solids.length; i++) {
      this.minX = this.min(this.solids[i].x1, this.minX, this.solids[i].x2);
      this.minY = this.min(this.solids[i].y1, this.minY, this.solids[i].y2);
      this.maxX = this.max(this.solids[i].x1, this.maxX, this.solids[i].x2);
      this.maxY = this.max(this.solids[i].y1, this.maxY, this.solids[i].y2);
    }

  }

  min(a, b, c) {
    if(a < b && a < c) {
      return a;
    }
    if(b < c) {
      return b;
    }
    return c;
  }
  max(a, b, c) {
    if(a > b && a > c) {
      return a;
    }
    if(b > c) {
      return b;
    }
    return c;
  }
  print() {
    if(this.type == "Upper") {
      print("upperHeight = " + this.upperHeight + ";");
    }
    print("objects.push(new Object(this.x + " + this.x + ",this.y + " + this.y + "," + this.isFlipped + ", \"" + this.type + "\"));");

    for(var i = 0; i < this.removedSolids.length; i++) {
      print("objects[objects.length -1].solids[" + this.removedSolids[i] + "].removeFromWorld();");
      print("objects[objects.length -1].solids.splice(" + this.removedSolids[i] + ", 1);");
      print("objects[objects.length-1].removedSolids.push(" + this.removedSolids[i] + ");");
    }
  }
  addParts(isFlipped) {
    var flipper;
    if(isFlipped) {
      flipper = -1;
    } else {
      flipper = 1;
    }

    switch(this.type) {
      case "OR Gate":
        this.solids.push(new Solid(this.x + flipper * 14, this.y + 56, this.x + flipper * 14, this.y + 204, 10));
        this.solids.push(new Solid(this.x + flipper * 49, this.y + 56, this.x + flipper * 49, this.y + 173, 10));
        this.solids.push(new Solid(this.x + flipper * 86, this.y + 53, this.x + flipper * 86, this.y + 178, 10));
        this.solids.push(new Solid(this.x + flipper * 13, this.y + 202, this.x + flipper * 130, this.y + 294, 10));
        this.solids.push(new Solid(this.x + flipper * 86, this.y + 176, this.x + flipper * 145, this.y + 245, 10));
        this.solids.push(new Solid(this.x + flipper * 129, this.y + 293, this.x + flipper * 208, this.y + 294, 10));
        this.solids.push(new Solid(this.x + flipper * 142, this.y + 244, this.x + flipper * 208, this.y + 246, 10));
        this.solids.push(new Solid(this.x + flipper * 205, this.y + 298, this.x + flipper * 205, this.y + 282, 10));
        this.solids.push(new Solid(this.x + flipper * 205, this.y + 241, this.x + flipper * 205, this.y + 272, 10));
        this.solids.push(new Solid(this.x + flipper * 204, this.y + 296, this.x + flipper * 246, this.y + 292, 10));
        this.solids.push(new Solid(this.x + flipper * 224, this.y + 301, this.x + flipper * 224, this.y + 288, 10));
        this.solids.push(new Solid(this.x + flipper * 241, this.y + 290, this.x + flipper * 244, this.y + 369, 10));
        this.solids.push(new Solid(this.x + flipper * 269, this.y + 240, this.x + flipper * 278, this.y + 370, 10));
        this.solids.push(new Solid(this.x + flipper * 208, this.y + 244, this.x + flipper * 268, this.y + 244, 10));
        this.startingMarbles.push(new StartingMarble(this.x + flipper * 233, this.y + 277, 20));
        this.looseRects.push(new LooseRect(this.x + flipper * 188, this.y + 268, this.x + flipper * 224, this.y + 268, 10));
        break;

      case "AND Gate":
        this.solids.push(new Solid(this.x + flipper * 19, this.y + 32, this.x + flipper * 19, this.y + 124, 10));
        this.solids.push(new Solid(this.x + flipper * 19, this.y + 122, this.x + flipper * 19, this.y + 206, 10));
        this.solids.push(new Solid(this.x + flipper * 19, this.y + 204, this.x + flipper * 104, this.y + 294, 10));
        this.solids.push(new Solid(this.x + flipper * 104, this.y + 294, this.x + flipper * 196, this.y + 296, 10));
        this.solids.push(new Solid(this.x + flipper * 195, this.y + 301, this.x + flipper * 195, this.y + 286, 20));
        this.solids.push(new Solid(this.x + flipper * 202, this.y + 296, this.x + flipper * 267, this.y + 297, 10));
        this.solids.push(new Solid(this.x + flipper * 220, this.y + 297, this.x + flipper * 220, this.y + 289, 10));
        this.solids.push(new Solid(this.x + flipper * 236, this.y + 296, this.x + flipper * 236, this.y + 289, 10));
        this.solids.push(new Solid(this.x + flipper * 208, this.y + 294, this.x + flipper * 207, this.y + 286, 7));
        this.solids.push(new Solid(this.x + flipper * 211, this.y + 296, this.x + flipper * 211, this.y + 286, 7));
        this.solids.push(new Solid(this.x + flipper * 50, this.y + 34, this.x + flipper * 52, this.y + 149, 7));
        this.solids.push(new Solid(this.x + flipper * 196, this.y + 252, this.x + flipper * 196, this.y + 276, 10));
        this.solids.push(new Solid(this.x + flipper * 52, this.y + 145, this.x + flipper * 127, this.y + 248, 10));
        this.solids.push(new Solid(this.x + flipper * 127, this.y + 248, this.x + flipper * 222, this.y + 252, 10));
        this.solids.push(new Solid(this.x + flipper * 240, this.y + 252, this.x + flipper * 282, this.y + 253, 10));
        this.solids.push(new Solid(this.x + flipper * 236, this.y + 234, this.x + flipper * 236, this.y + 269, 10));
        this.solids.push(new Solid(this.x + flipper * 64, this.y + 160, this.x + flipper * 219, this.y + 222, 10));
        this.solids.push(new Solid(this.x + flipper * 90, this.y + 33, this.x + flipper * 94, this.y + 132, 10));
        this.solids.push(new Solid(this.x + flipper * 94, this.y + 132, this.x + flipper * 231, this.y + 188, 10));
        this.solids.push(new Solid(this.x + flipper * 219, this.y + 252, this.x + flipper * 220, this.y + 272, 1));
        this.solids.push(new Solid(this.x + flipper * 234, this.y + 234, this.x + flipper * 287, this.y + 254, 8));
        this.solids.push(new Solid(this.x + flipper * 206, this.y + 270, this.x + flipper * 206, this.y + 253, 8));
        this.solids.push(new Solid(this.x + flipper * 194, this.y + 269, this.x + flipper * 210, this.y + 272, 8));
        this.solids.push(new Solid(this.x + flipper * 228, this.y + 185, this.x + flipper * 347, this.y + 250, 8));
        this.solids.push(new Solid(this.x + flipper * 263, this.y + 296, this.x + flipper * 268, this.y + 332, 8));
        this.solids.push(new Solid(this.x + flipper * 268, this.y + 330, this.x + flipper * 318, this.y + 317, 8));
        this.solids.push(new Solid(this.x + flipper * 318, this.y + 317, this.x + flipper * 284, this.y + 253, 8));
        this.solids.push(new Solid(this.x + flipper * 316, this.y + 314, this.x + flipper * 319, this.y + 374, 8));
        this.solids.push(new Solid(this.x + flipper * 348, this.y + 252, this.x + flipper * 359, this.y + 377, 8));
        this.startingMarbles.push(new StartingMarble(this.x + flipper * 228, this.y + 276, 20));
        this.looseRects.push(new LooseRect(this.x + flipper * 180, this.y + 281, this.x + flipper * 211, this.y + 281, 10));
        this.looseRects.push(new LooseRect(this.x + flipper * 215, this.y + 286, this.x + flipper * 214, this.y + 262, 7));
        this.looseRects.push(new LooseRect(this.x + flipper * 228, this.y + 268, this.x + flipper * 227, this.y + 206, 10));

        break;
      case "NOT Gate":
        this.solids.push(new Solid(this.x + flipper * 70, this.y + 83, this.x + flipper * 72, this.y + 122, 10));
        this.solids.push(new Solid(this.x + flipper * 70, this.y + 126, this.x + flipper * 314, this.y + 140, 10));
        this.solids.push(new Solid(this.x + flipper * 366, this.y + 103, this.x + flipper * 368, this.y + 175, 10));
        this.solids.push(new Solid(this.x + flipper * 369, this.y + 171, this.x + flipper * 88, this.y + 186, 10));
        this.solids.push(new Solid(this.x + flipper * 56, this.y + 158, this.x + flipper * 57, this.y + 223, 10));
        this.solids.push(new Solid(this.x + flipper * 57, this.y + 218, this.x + flipper * 357, this.y + 227, 10));
        this.solids.push(new Solid(this.x + flipper * 388, this.y + 201, this.x + flipper * 388, this.y + 278, 10));
        this.solids.push(new Solid(this.x + flipper * 389, this.y + 261, this.x + flipper * 72, this.y + 276, 10));
        this.solids.push(new Solid(this.x + flipper * 34, this.y + 246, this.x + flipper * 38, this.y + 316, 10));
        this.solids.push(new Solid(this.x + flipper * 34, this.y + 314, this.x + flipper * 198, this.y + 353, 10));
        this.solids.push(new Solid(this.x + flipper * 198, this.y + 353, this.x + flipper * 198, this.y + 376, 10));
        this.solids.push(new Solid(this.x + flipper * 197, this.y + 424, this.x + flipper * 197, this.y + 392, 10));
        this.solids.push(new Solid(this.x + flipper * 186, this.y + 422, this.x + flipper * 186, this.y + 393, 10));
        this.solids.push(new Solid(this.x + flipper * 186, this.y + 422, this.x + flipper * 186, this.y + 392, 27));
        this.solids.push(new Solid(this.x + flipper * 194, this.y + 349, this.x + flipper * 195, this.y + 382, 17));
        this.solids.push(new Solid(this.x + flipper * 6, this.y + 405, this.x + flipper * 184, this.y + 408, 10));
        this.solids.push(new Solid(this.x + flipper * 84, this.y + 404, this.x + flipper * -8, this.y + 341, 10));
        this.solids.push(new Solid(this.x + flipper * 235, this.y + 422, this.x + flipper * 235, this.y + 318, 10));
        this.solids.push(new Solid(this.x + flipper * 2, this.y + 349, this.x + flipper * 0, this.y + 49, 10));
        this.solids.push(new Solid(this.x + flipper * 34, this.y + 320, this.x + flipper * 37, this.y + 46, 10));
        this.solids.push(new Solid(this.x + flipper * 2, this.y + 310, this.x + flipper * 17, this.y + 364, 10));
        this.solids.push(new Solid(this.x + flipper * 37, this.y + 309, this.x + flipper * 170, this.y + 317, 10));
        this.solids.push(new Solid(this.x + flipper * 206, this.y + 289, this.x + flipper * 206, this.y + 321, 10));
        this.solids.push(new Solid(this.x + flipper * 200, this.y + 317, this.x + flipper * 201, this.y + 288, 10));
        this.solids.push(new Solid(this.x + flipper * 190, this.y + 294, this.x + flipper * 189, this.y + 281, 10));
        this.solids.push(new Solid(this.x + flipper * 196, this.y + 317, this.x + flipper * 196, this.y + 304, 10));
        // this.startingMarbles.push(new StartingMarble(this.x + flipper * 85, this.y + 104, 20));
        this.looseRects.push(new LooseRect(this.x + flipper * 202, this.y + 386, this.x + flipper * 151, this.y + 386, 8));
        break;
      case "XOR Gate":
        this.solids.push(new Solid(this.x + flipper * 366, this.y + 487, this.x + flipper * 368, this.y + 526, 10));
        this.solids.push(new Solid(this.x + flipper * 366, this.y + 530, this.x + flipper * 610, this.y + 544, 10));
        this.solids.push(new Solid(this.x + flipper * 662, this.y + 507, this.x + flipper * 664, this.y + 579, 10));
        this.solids.push(new Solid(this.x + flipper * 665, this.y + 575, this.x + flipper * 384, this.y + 590, 10));
        this.solids.push(new Solid(this.x + flipper * 352, this.y + 562, this.x + flipper * 353, this.y + 627, 10));
        this.solids.push(new Solid(this.x + flipper * 353, this.y + 622, this.x + flipper * 653, this.y + 631, 10));
        this.solids.push(new Solid(this.x + flipper * 684, this.y + 605, this.x + flipper * 684, this.y + 682, 10));
        this.solids.push(new Solid(this.x + flipper * 685, this.y + 665, this.x + flipper * 368, this.y + 680, 10));
        this.solids.push(new Solid(this.x + flipper * 330, this.y + 650, this.x + flipper * 334, this.y + 720, 10));
        this.solids.push(new Solid(this.x + flipper * 330, this.y + 718, this.x + flipper * 494, this.y + 757, 10));
        this.solids.push(new Solid(this.x + flipper * 494, this.y + 757, this.x + flipper * 494, this.y + 780, 10));
        this.solids.push(new Solid(this.x + flipper * 493, this.y + 828, this.x + flipper * 493, this.y + 796, 10));
        this.solids.push(new Solid(this.x + flipper * 482, this.y + 826, this.x + flipper * 482, this.y + 797, 10));
        this.solids.push(new Solid(this.x + flipper * 482, this.y + 826, this.x + flipper * 482, this.y + 796, 27));
        this.solids.push(new Solid(this.x + flipper * 490, this.y + 753, this.x + flipper * 491, this.y + 786, 17));
        this.solids.push(new Solid(this.x + flipper * 302, this.y + 809, this.x + flipper * 480, this.y + 812, 10));
        this.solids.push(new Solid(this.x + flipper * 380, this.y + 808, this.x + flipper * 288, this.y + 745, 10));
        this.solids.push(new Solid(this.x + flipper * 531, this.y + 826, this.x + flipper * 531, this.y + 722, 10));
        this.solids.push(new Solid(this.x + flipper * 298, this.y + 753, this.x + flipper * 296, this.y + 453, 10));
        this.solids.push(new Solid(this.x + flipper * 330, this.y + 724, this.x + flipper * 333, this.y + 450, 10));
        this.solids.push(new Solid(this.x + flipper * 298, this.y + 714, this.x + flipper * 313, this.y + 768, 10));
        this.solids.push(new Solid(this.x + flipper * 333, this.y + 713, this.x + flipper * 466, this.y + 721, 10));
        this.solids.push(new Solid(this.x + flipper * 502, this.y + 693, this.x + flipper * 502, this.y + 725, 10));
        this.solids.push(new Solid(this.x + flipper * 496, this.y + 721, this.x + flipper * 497, this.y + 692, 10));
        this.solids.push(new Solid(this.x + flipper * 486, this.y + 698, this.x + flipper * 485, this.y + 685, 10));
        this.solids.push(new Solid(this.x + flipper * 492, this.y + 721, this.x + flipper * 492, this.y + 708, 10));
        this.solids.push(new Solid(this.x + flipper * 1044, this.y + 480, this.x + flipper * 1042, this.y + 519, 10));
        this.solids.push(new Solid(this.x + flipper * 1044, this.y + 523, this.x + flipper * 800, this.y + 537, 10));
        this.solids.push(new Solid(this.x + flipper * 748, this.y + 500, this.x + flipper * 746, this.y + 572, 10));
        this.solids.push(new Solid(this.x + flipper * 745, this.y + 568, this.x + flipper * 1026, this.y + 583, 10));
        this.solids.push(new Solid(this.x + flipper * 1058, this.y + 555, this.x + flipper * 1057, this.y + 620, 10));
        this.solids.push(new Solid(this.x + flipper * 1057, this.y + 615, this.x + flipper * 757, this.y + 624, 10));
        this.solids.push(new Solid(this.x + flipper * 726, this.y + 598, this.x + flipper * 726, this.y + 675, 10));
        this.solids.push(new Solid(this.x + flipper * 725, this.y + 658, this.x + flipper * 1042, this.y + 673, 10));
        this.solids.push(new Solid(this.x + flipper * 1080, this.y + 643, this.x + flipper * 1076, this.y + 713, 10));
        this.solids.push(new Solid(this.x + flipper * 1080, this.y + 711, this.x + flipper * 916, this.y + 750, 10));
        this.solids.push(new Solid(this.x + flipper * 916, this.y + 750, this.x + flipper * 916, this.y + 773, 10));
        this.solids.push(new Solid(this.x + flipper * 917, this.y + 821, this.x + flipper * 917, this.y + 789, 10));
        this.solids.push(new Solid(this.x + flipper * 928, this.y + 819, this.x + flipper * 928, this.y + 790, 10));
        this.solids.push(new Solid(this.x + flipper * 928, this.y + 819, this.x + flipper * 928, this.y + 789, 27));
        this.solids.push(new Solid(this.x + flipper * 920, this.y + 746, this.x + flipper * 919, this.y + 779, 17));
        this.solids.push(new Solid(this.x + flipper * 1108, this.y + 802, this.x + flipper * 930, this.y + 805, 10));
        this.solids.push(new Solid(this.x + flipper * 1030, this.y + 801, this.x + flipper * 1122, this.y + 738, 10));
        this.solids.push(new Solid(this.x + flipper * 879, this.y + 819, this.x + flipper * 879, this.y + 715, 10));
        this.solids.push(new Solid(this.x + flipper * 1112, this.y + 746, this.x + flipper * 1114, this.y + 446, 10));
        this.solids.push(new Solid(this.x + flipper * 1080, this.y + 717, this.x + flipper * 1077, this.y + 443, 10));
        this.solids.push(new Solid(this.x + flipper * 1112, this.y + 707, this.x + flipper * 1097, this.y + 761, 10));
        this.solids.push(new Solid(this.x + flipper * 1077, this.y + 706, this.x + flipper * 944, this.y + 714, 10));
        this.solids.push(new Solid(this.x + flipper * 908, this.y + 686, this.x + flipper * 908, this.y + 718, 10));
        this.solids.push(new Solid(this.x + flipper * 914, this.y + 714, this.x + flipper * 913, this.y + 685, 10));
        this.solids.push(new Solid(this.x + flipper * 924, this.y + 691, this.x + flipper * 925, this.y + 678, 10));
        this.solids.push(new Solid(this.x + flipper * 918, this.y + 714, this.x + flipper * 918, this.y + 701, 10));
        this.solids.push(new Solid(this.x + flipper * 489, this.y + 826, this.x + flipper * 507, this.y + 888, 10));
        this.solids.push(new Solid(this.x + flipper * 507, this.y + 888, this.x + flipper * 687, this.y + 963, 10));
        this.solids.push(new Solid(this.x + flipper * 743, this.y + 959, this.x + flipper * 918, this.y + 892, 10));
        this.solids.push(new Solid(this.x + flipper * 918, this.y + 892, this.x + flipper * 918, this.y + 810, 10));
        this.solids.push(new Solid(this.x + flipper * 683, this.y + 957, this.x + flipper * 685, this.y + 1001, 10));
        this.solids.push(new Solid(this.x + flipper * 738, this.y + 957, this.x + flipper * 736, this.y + 999, 10));
        this.solids.push(new Solid(this.x + flipper * 615, this.y + -4, this.x + flipper * 607, this.y + 112, 10));
        this.solids.push(new Solid(this.x + flipper * 607, this.y + 104, this.x + flipper * 575, this.y + 172, 10));
        this.solids.push(new Solid(this.x + flipper * 581, this.y + 160, this.x + flipper * 504, this.y + 185, 10));
        this.solids.push(new Solid(this.x + flipper * 495, this.y + 238, this.x + flipper * 388, this.y + 220, 10));
        this.solids.push(new Solid(this.x + flipper * 388, this.y + 220, this.x + flipper * 388, this.y + 206, 10));
        this.solids.push(new Solid(this.x + flipper * 391, this.y + 222, this.x + flipper * 340, this.y + 222, 10));
        this.solids.push(new Solid(this.x + flipper * 376, this.y + 224, this.x + flipper * 376, this.y + 216, 10));
        this.solids.push(new Solid(this.x + flipper * 359, this.y + 220, this.x + flipper * 359, this.y + 216, 10));
        this.solids.push(new Solid(this.x + flipper * 570, this.y + -16, this.x + flipper * 559, this.y + 88, 10));
        this.solids.push(new Solid(this.x + flipper * 562, this.y + 86, this.x + flipper * 541, this.y + 126, 10));
        this.solids.push(new Solid(this.x + flipper * 541, this.y + 126, this.x + flipper * 319, this.y + 140, 10));
        this.solids.push(new Solid(this.x + flipper * 319, this.y + 142, this.x + flipper * 288, this.y + 196, 10));
        this.solids.push(new Solid(this.x + flipper * 290, this.y + 193, this.x + flipper * 284, this.y + 260, 10));
        this.solids.push(new Solid(this.x + flipper * 343, this.y + 222, this.x + flipper * 341, this.y + 264, 10));
        this.solids.push(new Solid(this.x + flipper * 489, this.y + 238, this.x + flipper * 516, this.y + 260, 10));
        this.solids.push(new Solid(this.x + flipper * 512, this.y + 260, this.x + flipper * 558, this.y + 291, 10));
        this.solids.push(new Solid(this.x + flipper * 656, this.y + 436, this.x + flipper * 758, this.y + 436, 10));
        this.solids.push(new Solid(this.x + flipper * 754, this.y + 436, this.x + flipper * 1000, this.y + 463, 10));
        this.solids.push(new Solid(this.x + flipper * 1043, this.y + 480, this.x + flipper * 1074, this.y + 445, 10));
        this.solids.push(new Solid(this.x + flipper * 656, this.y + 436, this.x + flipper * 394, this.y + 465, 10));
        this.solids.push(new Solid(this.x + flipper * 367, this.y + 491, this.x + flipper * 332, this.y + 451, 10));
        this.solids.push(new Solid(this.x + flipper * 686, this.y + 2, this.x + flipper * 694, this.y + 118, 10));
        this.solids.push(new Solid(this.x + flipper * 694, this.y + 110, this.x + flipper * 726, this.y + 178, 10));
        this.solids.push(new Solid(this.x + flipper * 720, this.y + 166, this.x + flipper * 797, this.y + 191, 10));
        this.solids.push(new Solid(this.x + flipper * 806, this.y + 244, this.x + flipper * 913, this.y + 226, 10));
        this.solids.push(new Solid(this.x + flipper * 913, this.y + 226, this.x + flipper * 913, this.y + 212, 10));
        this.solids.push(new Solid(this.x + flipper * 910, this.y + 228, this.x + flipper * 961, this.y + 228, 10));
        this.solids.push(new Solid(this.x + flipper * 925, this.y + 230, this.x + flipper * 925, this.y + 222, 10));
        this.solids.push(new Solid(this.x + flipper * 942, this.y + 226, this.x + flipper * 942, this.y + 222, 10));
        this.solids.push(new Solid(this.x + flipper * 731, this.y + -10, this.x + flipper * 742, this.y + 94, 10));
        this.solids.push(new Solid(this.x + flipper * 739, this.y + 92, this.x + flipper * 760, this.y + 132, 10));
        this.solids.push(new Solid(this.x + flipper * 760, this.y + 132, this.x + flipper * 982, this.y + 146, 10));
        this.solids.push(new Solid(this.x + flipper * 982, this.y + 148, this.x + flipper * 1013, this.y + 202, 10));
        this.solids.push(new Solid(this.x + flipper * 1011, this.y + 199, this.x + flipper * 1017, this.y + 266, 10));
        this.solids.push(new Solid(this.x + flipper * 958, this.y + 228, this.x + flipper * 960, this.y + 270, 10));
        this.solids.push(new Solid(this.x + flipper * 807, this.y + 243, this.x + flipper * 769, this.y + 272, 10));
        this.solids.push(new Solid(this.x + flipper * 956, this.y + 265, this.x + flipper * 1076, this.y + 447, 10));
        this.solids.push(new Solid(this.x + flipper * 1016, this.y + 258, this.x + flipper * 1118, this.y + 452, 10));
        this.solids.push(new Solid(this.x + flipper * 285, this.y + 256, this.x + flipper * 296, this.y + 460, 10));
        this.solids.push(new Solid(this.x + flipper * 332, this.y + 456, this.x + flipper * 343, this.y + 256, 10));
        this.solids.push(new Solid(this.x + flipper * 556, this.y + 287, this.x + flipper * 596, this.y + 293, 10));
        this.solids.push(new Solid(this.x + flipper * 772, this.y + 269, this.x + flipper * 752, this.y + 278, 10));
        this.startingMarbles.push(new StartingMarble(this.x + flipper * 368, this.y + 206, 20));
        this.startingMarbles.push(new StartingMarble(this.x + flipper * 933, this.y + 212, 20));
        this.looseRects.push(new LooseRect(this.x + flipper * 498, this.y + 790, this.x + flipper * 447, this.y + 790, 8));
        this.looseRects.push(new LooseRect(this.x + flipper * 912, this.y + 783, this.x + flipper * 963, this.y + 783, 8));
        this.looseRects.push(new LooseRect(this.x + flipper * 399, this.y + 201, this.x + flipper * 376, this.y + 201, 10));
        this.looseRects.push(new LooseRect(this.x + flipper * 902, this.y + 207, this.x + flipper * 925, this.y + 207, 10));
        break;
      case "Duplicator":
        this.solids.push(new Solid(this.x + flipper * 57, this.y + 84, this.x + flipper * 65, this.y + 200, 10));
        this.solids.push(new Solid(this.x + flipper * 65, this.y + 192, this.x + flipper * 97, this.y + 260, 10));
        this.solids.push(new Solid(this.x + flipper * 91, this.y + 248, this.x + flipper * 168, this.y + 273, 10));
        this.solids.push(new Solid(this.x + flipper * 177, this.y + 326, this.x + flipper * 284, this.y + 308, 10));
        this.solids.push(new Solid(this.x + flipper * 284, this.y + 308, this.x + flipper * 284, this.y + 294, 10));
        this.solids.push(new Solid(this.x + flipper * 281, this.y + 310, this.x + flipper * 332, this.y + 310, 10));
        this.solids.push(new Solid(this.x + flipper * 296, this.y + 312, this.x + flipper * 296, this.y + 304, 10));
        this.solids.push(new Solid(this.x + flipper * 313, this.y + 308, this.x + flipper * 313, this.y + 304, 10));
        this.solids.push(new Solid(this.x + flipper * 102, this.y + 72, this.x + flipper * 113, this.y + 176, 10));
        this.solids.push(new Solid(this.x + flipper * 110, this.y + 174, this.x + flipper * 131, this.y + 214, 10));
        this.solids.push(new Solid(this.x + flipper * 131, this.y + 214, this.x + flipper * 353, this.y + 228, 10));
        this.solids.push(new Solid(this.x + flipper * 353, this.y + 230, this.x + flipper * 384, this.y + 284, 10));
        this.solids.push(new Solid(this.x + flipper * 382, this.y + 281, this.x + flipper * 388, this.y + 348, 10));
        this.solids.push(new Solid(this.x + flipper * 329, this.y + 310, this.x + flipper * 331, this.y + 352, 10));
        this.solids.push(new Solid(this.x + flipper * 174, this.y + 323, this.x + flipper * 176, this.y + 368, 10));
        this.solids.push(new Solid(this.x + flipper * 164, this.y + 272, this.x + flipper * 105, this.y + 305, 10));
        this.solids.push(new Solid(this.x + flipper * 105, this.y + 305, this.x + flipper * 116, this.y + 366, 10));
        this.startingMarbles.push(new StartingMarble(this.x + flipper * 304, this.y + 294, 20));
        this.looseRects.push(new LooseRect(this.x + flipper * 273, this.y + 289, this.x + flipper * 296, this.y + 289, 10));
        break;
      case "Upper":
        this.solids.push(new Solid(this.x + flipper * 240, this.y + upperHeight + 578, this.x + flipper * 385, this.y + upperHeight + 578, 10));
        this.solids.push(new Solid(this.x + flipper * 382, this.y + upperHeight + 581, this.x + flipper * 382, this.y + upperHeight + 569, 10));
        this.solids.push(new Solid(this.x + flipper * 380, this.y + upperHeight + 580, this.x + flipper * 456, this.y + upperHeight + 578, 10));
        this.solids.push(new Solid(this.x + flipper * 410, this.y + upperHeight + 580, this.x + flipper * 410, this.y + upperHeight + 570, 10));
        this.solids.push(new Solid(this.x + flipper * 425, this.y + upperHeight + 577, this.x + flipper * 425, this.y + upperHeight + 570, 10));
        this.solids.push(new Solid(this.x + flipper * 374, this.y + upperHeight + 585, this.x + flipper * 374, this.y + upperHeight + 569, 10));
        this.solids.push(new Solid(this.x + flipper * 405, this.y + upperHeight + 514, this.x + flipper * 405, this.y + upperHeight + 460, 10));
        this.solids.push(new Solid(this.x + flipper * 426, this.y + upperHeight + 510, this.x + flipper * 426, this.y + upperHeight + 460, 10));
        this.solids.push(new Solid(this.x + flipper * 409, this.y + 316, this.x + flipper * 409, this.y + 251, 13));
        this.solids.push(new Solid(this.x + flipper * 432, this.y + 319, this.x + flipper * 432, this.y + 251, 13));
        this.solids.push(new Solid(this.x + flipper * 410, this.y + 216, this.x + flipper * 326, this.y + 184, 10));
        this.solids.push(new Solid(this.x + flipper * 328, this.y + 183, this.x + flipper * 342, this.y + 154, 10));
        this.solids.push(new Solid(this.x + flipper * 342, this.y + 154, this.x + flipper * 425, this.y + 191, 10));
        this.solids.push(new Solid(this.x + flipper * 429, this.y + 239, this.x + flipper * 530, this.y + 271, 10));
        this.solids.push(new Solid(this.x + flipper * 445, this.y + 192, this.x + flipper * 540, this.y + 244, 10));
        this.solids.push(new Solid(this.x + flipper * 421, this.y + 187, this.x + flipper * 453, this.y + 194, 10));
        this.solids.push(new Solid(this.x + flipper * 322, this.y + upperHeight + 577, this.x + flipper * 260, this.y + upperHeight + 566, 10));
        this.solids.push(new Solid(this.x + flipper * 270, this.y + upperHeight + 569, this.x + flipper * 220, this.y + upperHeight + 533, 10));
        this.solids.push(new Solid(this.x + flipper * 226, this.y + upperHeight + 538, this.x + flipper * 196, this.y + upperHeight + 457, 10));
        this.solids.push(new Solid(this.x + flipper * 201, this.y + upperHeight + 466, this.x + flipper * 196, this.y + upperHeight + 334, 10));
        this.solids.push(new Solid(this.x + flipper * 230, this.y + upperHeight + 326, this.x + flipper * 240, this.y + upperHeight + 460, 10));
        this.solids.push(new Solid(this.x + flipper * 240, this.y + upperHeight + 460, this.x + flipper * 272, this.y + upperHeight + 522, 10));
        this.solids.push(new Solid(this.x + flipper * 272, this.y + upperHeight + 522, this.x + flipper * 366, this.y + upperHeight + 537, 10));
        this.solids.push(new Solid(this.x + flipper * 358, this.y + upperHeight + 536, this.x + flipper * 405, this.y + upperHeight + 536, 10));
        this.solids.push(new Solid(this.x + flipper * 405, this.y + upperHeight + 536, this.x + flipper * 404, this.y + upperHeight + 506, 10));
        this.solids.push(new Solid(this.x + flipper * 217, this.y + upperHeight + 518, this.x + flipper * 242, this.y + upperHeight + 555, 10));
        this.solids.push(new Solid(this.x + flipper * 250, this.y + upperHeight + 558, this.x + flipper * 293, this.y + upperHeight + 575, 10));
        this.startingMarbles.push(new StartingMarble(this.x + flipper * 418, this.y + upperHeight + 561.33349609375, 20));
        this.startingMarbles.push(new StartingMarble(this.x + flipper * 403.3333435058594, this.y + 196.66666793823242, 20));
        this.looseRects.push(new LooseRect(this.x + flipper * 416, this.y + upperHeight + 544, this.x + flipper * 421, this.y + 199, 10, 0.1));
        this.looseRects.push(new LooseRect(this.x + flipper * 356, this.y + upperHeight + 563, this.x + flipper * 408, this.y + upperHeight + 560, 10));
        break;
      case "Crossover":
        this.solids.push(new Solid(this.x + flipper * -351 + 300, this.y + -415 + 300, this.x + flipper * -351 + 300, this.y + -339 + 300, 10));
        this.solids.push(new Solid(this.x + flipper * -351 + 300, this.y + -340 + 300, this.x + flipper * -327 + 300, this.y + -314 + 300, 10));
        this.solids.push(new Solid(this.x + flipper * -329 + 300, this.y + -317 + 300, this.x + flipper * -285 + 300, this.y + -298 + 300, 10));
        this.solids.push(new Solid(this.x + flipper * -289 + 300, this.y + -300 + 300, this.x + flipper * -265 + 300, this.y + -299 + 300, 10));
        this.solids.push(new Solid(this.x + flipper * -317 + 300, this.y + -414 + 300, this.x + flipper * -315 + 300, this.y + -354 + 300, 10));
        this.solids.push(new Solid(this.x + flipper * -316 + 300, this.y + -354 + 300, this.x + flipper * -288 + 300, this.y + -333 + 300, 10));
        this.solids.push(new Solid(this.x + flipper * -288 + 300, this.y + -333 + 300, this.x + flipper * -256 + 300, this.y + -331 + 300, 10));
        this.solids.push(new Solid(this.x + flipper * -232 + 300, this.y + -288 + 300, this.x + flipper * -184 + 300, this.y + -273 + 300, 10));
        this.solids.push(new Solid(this.x + flipper * -216 + 300, this.y + -336 + 300, this.x + flipper * -172 + 300, this.y + -312 + 300, 10));
        this.solids.push(new Solid(this.x + flipper * -260 + 300, this.y + -332 + 300, this.x + flipper * -248 + 300, this.y + -360 + 300, 10));
        this.solids.push(new Solid(this.x + flipper * -215 + 300, this.y + -332 + 300, this.x + flipper * -205 + 300, this.y + -352 + 300, 10));
        this.solids.push(new Solid(this.x + flipper * -268 + 300, this.y + -302 + 300, this.x + flipper * -276 + 300, this.y + -276 + 300, 10));
        this.solids.push(new Solid(this.x + flipper * -231 + 300, this.y + -292 + 300, this.x + flipper * -238 + 300, this.y + -268 + 300, 10));
        this.solids.push(new Solid(this.x + flipper * -251 + 300, this.y + -351 + 300, this.x + flipper * -234 + 300, this.y + -379 + 300, 10));
        this.solids.push(new Solid(this.x + flipper * -220 + 300, this.y + -332 + 300, this.x + flipper * -202 + 300, this.y + -366 + 300, 10));
        break;
      case "Half Adder":
        break;


    }



  }

}
