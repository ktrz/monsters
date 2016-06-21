export class Board {
	n:number;
	m:number;
	constructor(n:number,m:number) {
		this.n = n;
		this.m = m;
	}

	adjustPosition (position) {
		if(position.x < 0) {
			position.x = this.n-1;
		}
		if(position.x >= this.n) {
			position.x = 0;
		}
		if(position.y < 0) {
			position.y += this.m;
		}
		if(position.y >= this.m) {
			position.y -= this.m;
		}
		return position;
	}
}