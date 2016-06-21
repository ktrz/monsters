import {Board} from "./board";
import {Graphics} from "./graphics";
import {RoundMonster} from './roundMonster';
import {GameMonster} from "./gameMonster";
import {SquareMonster} from "./squareMonster";

export class Game {

	board:Board;
	graphics;
	monsters:GameMonster[];
	interval:number;
	intervalHandler;

	constructor(n, m) {
		this.board = new Board(n, m);
		this.graphics = new Graphics('board');
		this.monsters = [];
		this.interval = 500;
	}

	start() {
		this.createMonster();
		this.createMonster();
		this.createMonster();
		this.createMonster();
		this.createMonster();
		this.createSquareMonster();
		var that = this;
		this.intervalHandler = setInterval(function () {
			that.updateGame();
		}, this.interval);
	}

	updateGame() {
		this.updateMonsters();
		this.redraw();
	}

	private redraw() {
		this.graphics.draw(this.board, this.monsters);
	}

	updateMonsters() {
		var that = this;
		this.monsters.forEach(function (gameMonster) {
			gameMonster.move();
			that.board.adjustPosition(gameMonster.position);
		})
	}

	createMonster() {
		var monster = new RoundMonster();
		var gameMonster = new GameMonster(monster, {
			x: 0,
			y: 0
		});
		this.monsters.push(gameMonster);
	}

	createSquareMonster() {
		var monster = new SquareMonster();
		var gameMonster = new GameMonster(monster, {
			x: 0,
			y: 0
		});
		this.monsters.push(gameMonster);
	}
}