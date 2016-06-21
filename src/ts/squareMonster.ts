import {Monster} from "./monster";
import {elementRandomGenerator} from "./generator";

export class SquareMonster extends Monster {
	moveGenerator:Iterator<any>;
	availableMoves:any[];
	constructor() {
		super('Square', 'square', 5, 2);
		this.availableMoves = [{
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
		this.moveGenerator = elementRandomGenerator(this.availableMoves);
	}

	move() {
		return this.moveGenerator.next().value;
	}
}

