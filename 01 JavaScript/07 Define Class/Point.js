function Point(x, y) {
    this.x = x;
    this.y = y;

    this.dump = function() {
    }

    function dump() {
        console.log(x +", " + y);
    }

    function move(dx, dy) {
        x+=dx;
        y+=dy;
    }

    return {
        dump: dump,
        move: move,
    }
}

var pt1 = Point(5, 10);
var pt2 = Point(10, 20);

pt1.dump();
pt2.dump();

console.log(pt1.dump == pt2.dump);