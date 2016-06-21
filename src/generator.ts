export function* elementRandomGenerator(elements) {
	var indexGenerator:any = randomGenerator(0, elements.length-1);
	while (true) {
		yield elements[indexGenerator.next().value];
	}
}

function* randomGenerator(beg, end) {
	while (true) {
		var diff = end - beg;
		yield Math.floor((Math.random() * diff) + beg);
	}
}