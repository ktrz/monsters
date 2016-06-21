class RoundMonster extends Monster {
	constructor() {
		super('Round', 'round', 5, 2);
		var availableMoves = [{
			x: 1,
			y: 0
		}, {
			x: -1,
			y: 0
		}, {
			x: 0,
			y: 1
		}, {
			x: 0,
			y: -1
		}]
		this.moveGenerator = elementRandomGenerator(availableMoves);
	}

	move() {
		return this.moveGenerator.next().value;
	}
}