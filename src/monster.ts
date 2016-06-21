export class Monster {
	lives;
	name;
	force;
	type;
	constructor(name, type, lives, force) {
		this.lives = lives;
		this.name = name;
		this.force = force;
		this.type = type;
	}

	move() {
		return {
			x: 0,
			y: 0
		}
	}
}