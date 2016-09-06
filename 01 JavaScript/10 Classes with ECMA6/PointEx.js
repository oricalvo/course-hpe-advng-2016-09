"use strict";

class PointEx extends Point {
    constructor(x, y, z) {
        super(x, y);

        this.z = z;
    }

    private dump() {
        super.dump();
        console.log(this.z);
    }
}

function showPoint(pt: Point) {
}
