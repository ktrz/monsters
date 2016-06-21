export function* elementRandomGenerator(elements) {
	var indexGenerator:any = randomGenerator(0, elements.length-1);
	while (true) {
		var index = indexGenerator.next().value;
		yield elements[index];
	}
}

function* randomGenerator(beg, end) {
	while (true) {
		var diff = end - beg;
		yield Math.round((Math.random() * diff) + beg);
	}
}