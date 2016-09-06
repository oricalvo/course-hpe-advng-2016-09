"use strict";

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    dump() {
        console.log(this.x + ", " + this.y);
    }
    
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}
