export class GameMonster {
	monster;
	position;
	moveDirection:MoveDirection;

	constructor(monster, position) {
		this.monster = monster;
		this.position = position;
		this.moveDirection = MoveDirection.NONE;
	}

	move() {
		var diff = this.monster.move();
		this.position.x += diff.x;
		this.position.y += diff.y;
		this.calculateMoveDirection(diff);
	}

	private calculateMoveDirection(diff) {
		if (diff.x > 0) {
			this.moveDirection = MoveDirection.DOWN;
		} else if (diff.x < 0) {
			this.moveDirection = MoveDirection.UP;
		} else if (diff.y > 0) {
			this.moveDirection = MoveDirection.RIGHT;
		} else if (diff.y < 0) {
			this.moveDirection = MoveDirection.LEFT;
		} else {
			this.moveDirection = MoveDirection.NONE;
		}
	}

}

export enum MoveDirection {
	NONE, LEFT, RIGHT, UP, DOWN
}