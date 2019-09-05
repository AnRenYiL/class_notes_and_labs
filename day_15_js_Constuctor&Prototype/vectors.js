class Vector {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    plus(vec) {
        return new Vector(this.x + vec.x, this.y + vec.y, this.z + vec.z);
    }
    minus(vec) {
        return new Vector(this.x - vec.x, this.y - vec.y, this.z - vec.z);
    }
    magnitude() {
        return Math.sqrt((Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)));
    }
}
let v1 = new Vector(4, 4, 0);
let v2 = new Vector(1, 2, 2);

console.log(v1.plus(v2));
// returns Vector {x: 5, y: 6, z: 2}
console.log(v2.plus(v1));
// returns Vector {x: 5, y: 6, z: 2}
console.log(v1.minus(v2));
// returns Vector {x: 3, y: 2, z: -2}
console.log(v2.minus(v1));
// returns Vector {x: -3, y: -2, z: 2}

console.log(v1.magnitude());
// returns 5.656854249492381
console.log(v2.magnitude());
// returns 3