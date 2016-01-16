
//PUBLIC

var updateLobby = function(data) {
	if (data.started) {
		startGame(data);
		return;
	}

	$('#lobby-player-summary').text(data.players.length + ' of ' + data.maxSize + ' players');
	var nameList = '';
	data.players.forEach(function(player, index) {
		floatClass = index % 2 == 0 ? 'left' : 'right';
		nameList += '<div class="player-slot '+floatClass+'"><h2>' + player.name + '</h2></div>';
	});
	$('#lobby-players').html(nameList);
}

var showLobby = function() {
	gameOver = true;

	$('#s-signin').hide();
	$('#s-lobby').show();
	$('#s-game').hide();

	socket.emit('join room');
}

//EVENTS

socket.on('lobby game', updateLobby);

var quitGame = function() {
	emitAction('quit');
}

window.onbeforeunload = function() {
	if (!TESTING && !gameOver) {
		return "You WILL NOT be removed from the game. If you'd like to leave permanently, please quit from the menu first so your fellow players know you will not return. Thank you!"
	}
}

