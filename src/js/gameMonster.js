class GameMonster {
	constructor(monster, position) {
		this.monster = monster;
		this.position = position;
		this.moveDirection = 'none';
	}

	move() {
		var diff = this.monster.move();
		this.position.x += diff.x;
		this.position.y += diff.y;
		this.calculateMoveDirection(diff);
	}

	calculateMoveDirection(diff) {
		if (diff.x > 0) {
			this.moveDirection = 'down';
		} else if (diff.x < 0) {
			this.moveDirection = 'up';
		} else if (diff.y > 0) {
			this.moveDirection = 'right';
		} else if (diff.y < 0) {
			this.moveDirection = 'left';
		} else {
			this.moveDirection = 'none';
		}
	}

}