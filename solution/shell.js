function drawTheGame() {
	// If you have lost, what do you do?
	if(hasLost()) {
		showGameOver();
		restartGame();
	}

	// Draw the snake
	startRedrawing();
	drawTheSnake();
	moveTheSnake();

	// Grow the snake and replace the food once you get it
	if(hasFoundFood()) {
		replaceFood();
		growSnake();
	}

	// Draw the food in its new place
	drawTheFood(); 
}
