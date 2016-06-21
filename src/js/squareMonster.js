class SquareMonster extends Monster {
	constructor() {
		super('Square', 'square', 7, 1);
		var availableMoves = [{
			x: 2,
			y: 0
		}, {
			x: -2,
			y: 0
		}, {
			x: 0,
			y: 2
		}, {
			x: 0,
			y: -2
		}]
		this.moveGenerator = elementRandomGenerator(availableMoves);
	}

	move() {
		return this.moveGenerator.next().value;
	}
}