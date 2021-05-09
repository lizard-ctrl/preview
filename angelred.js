let orbs;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	noStroke();
	orbs = new Orbs();
}

function draw() {
	background(217,0,0,0);
	orbs.render();

	let pos = createVector(mouseX - (height>>1),mouseY - (width>>1));

	ambientLight(105, 11, 16);
	pointLight(255, 20, 25, pos.x, pos.y, 100);
  

}

class Orbs {
	constructor() {
		this.r = (height >> 2.4) - (height >> 5);
		this.count = 92;
		this.max = 43;
		this.rot = createVector();

		specularMaterial(950);
	}

	update() {
		this.rot.x -= 0.1;
		this.rot.y -= 0.1;
		this.rot.z -= 0.1;
		rotateX(radians(this.rot.x));
		rotateY(radians(this.rot.y));
		rotateZ(radians(this.rot.z));

		return this;
	}

	display() {
		for (let i = 0; i < this.count; i++) {

			let seed = i;
			let prln = lerp(-1, 1, noise(seed));

			rotateY(PI * prln);
			rotateZ(PI * prln);
			translate(this.r, 0, 0);

			ellipsoid(prln * this.max, mouseX/2);

			translate(-this.r, 0, 0);
			rotateY(-(PI * prln));
			rotateZ(-(PI * prln));
		}
		return this;
	}

	render() {
		return this.update().display();
	}
}