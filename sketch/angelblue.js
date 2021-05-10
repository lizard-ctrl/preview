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

	ambientLight(138, 212, 255);
  
  pointLight(255, 18, 204, pos.x, pos.y, 250);
  // pointLight(pos.x/40, 2, 25, pos.x, pos.y, 900);

}

class Orbs {
	constructor() {
		this.r = (height >> 2.4) - (height >> 5);
		this.count = 62;
		this.max = 40;
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
			let prln = lerp(-1/mouseX, 1, noise(seed)*3);

			rotateY(PI * prln);
			rotateZ(PI * prln);
			translate(this.r, 3, 0);

			ellipsoid(prln * this.max, 40,40+mouseY/8);

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