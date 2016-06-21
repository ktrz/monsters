import {GameMonster, MoveDirection} from "./gameMonster";
export class Graphics {
	boardDiv;
	constructor(divId) {
		this.boardDiv = $('#' + divId);
	}

	draw(board, monsters) {
		this.boardDiv.html('');
		for (var i = 0; i < board.n; i++) {
			this.drawRow(board, i);
		}
		this.drawMonsters(monsters);
	}

	drawMonsters(monsters:GameMonster[]) {
		var that = this;
		monsters.forEach(function (gameMonster) {
			that.boardDiv
				.find('#row' + gameMonster.position.x)
				.find('.field:nth-child(' + (gameMonster.position.y + 1) + ')')
				.append($('<div>', {
					class: 'monster monster-' + gameMonster.monster.type
				}).addClass('move-' + MoveDirection[gameMonster.moveDirection].toLowerCase()));
		})
	}

	drawRow(board, rowNr) {
		var row = $('<div>', {
			id: ('row' + rowNr),
			class: "row"
		});
		row.appendTo(this.boardDiv);
		this.drawFields(board, row);
	}

	drawFields(board, row) {
		for (var i = 0; i < board.m; i++) {
			var field = $('<div class="field">');
			row.append(field);
		}
	}
}