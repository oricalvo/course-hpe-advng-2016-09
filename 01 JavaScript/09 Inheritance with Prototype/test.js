
var pt1 = new PointEx(5, 10, 20);
var pt2 = new PointEx(10, 20, 40);

pt1.dump();
pt2.dump();

console.log(pt1 instanceof PointEx);
console.log(pt1 instanceof Point);
console.log(pt1 instanceof Object);
