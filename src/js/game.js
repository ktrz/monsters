class Game {
	constructor(n, m) {
		this.board = new Board(n, m);
		this.graphics = new Graphics('board');
		this.monsters = [];
		this.interval = 500;
		var availableMonsterFactories = [
			function () {
				return new RoundMonster();
			},
			function () {
				return new SquareMonster();
			}
		];
		this.monstersFactoryGenerator = elementRandomGenerator(availableMonsterFactories);
	}


	start() {
		this.createMonster();
		this.createMonster();
		this.createMonster();
		this.createMonster();
		var that = this;
		this.intervalHandler = setInterval(function() {
			that.updateGame();
		}, this.interval);
	}

	updateGame() {
		this.updateMonsters();
		this.graphics.draw(this.board, this.monsters);
	}

	updateMonsters() {
		var that = this;
		this.monsters.forEach(function(gameMonster) {
			var diff = gameMonster.move();
			that.board.adjustPosition(gameMonster.position);
		})
	}

	createMonster() {
		var monster = this.monstersFactoryGenerator.next().value();
		var gameMonster = new GameMonster(monster, {
			x: 0,
			y: 0
		});
		this.monsters.push(gameMonster);
	}
}