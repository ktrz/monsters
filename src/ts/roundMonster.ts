import {Monster} from "./monster";
import {elementRandomGenerator} from "./generator";

export class RoundMonster extends Monster {
	moveGenerator:Iterator<any>;
	availableMoves:any[];
	constructor() {
		super('Round', 'round', 5, 2);
		this.availableMoves = [{
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
		this.moveGenerator = elementRandomGenerator(this.availableMoves);
	}

	move() {
		return this.moveGenerator.next().value;
	}
}

