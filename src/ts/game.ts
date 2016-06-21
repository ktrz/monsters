import {Board} from "./board";
import {Graphics} from "./graphics";
import {RoundMonster} from './roundMonster';
import {GameMonster} from "./gameMonster";
import {SquareMonster} from "./squareMonster";
import {elementRandomGenerator} from "./generator";
import {Monster} from "./monster";

export class Game {

	board:Board;
	graphics;
	monsters:GameMonster[];
	interval:number;
	intervalHandler;
	monstersFactoryGenerator:Iterator<MonsterFactory>;

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
		this.createMonster();
		var that = this;
		this.intervalHandler = setInterval(function () {
			that.updateGame();
		}, this.interval);
	}

	updateGame() {
		this.updateMonsters();
		this.redraw();
	}

	updateMonsters() {
		var that = this;
		this.monsters.forEach(function (gameMonster) {
			gameMonster.move();
			that.board.adjustPosition(gameMonster.position);
		})
	}

	createMonster() {
		var monster = (<MonsterFactory>this.monstersFactoryGenerator.next().value)(this);
		var gameMonster = new GameMonster(monster, {
			x: 0,
			y: 0
		});
		this.monsters.push(gameMonster);
	}

	private redraw() {
		this.graphics.draw(this.board, this.monsters);
	}
}

interface MonsterFactory {
	():Monster;
}