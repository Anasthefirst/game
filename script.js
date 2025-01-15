document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const message = document.getElementById('message');
    const attempts = document.getElementById('attempts');

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attemptCount = 0;

    guessButton.addEventListener('click', () => {
        const userGuess = Number(guessInput.value);
        attemptCount++;

        if (userGuess === randomNumber) {
            message.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${attemptCount} attempts.`;
            message.style.color = 'green';
            guessButton.disabled = true;
        } else if (userGuess > randomNumber) {
            message.textContent = 'Too high! Try again.';
            message.style.color = 'red';
        } else if (userGuess < randomNumber) {
            message.textContent = 'Too low! Try again.';
            message.style.color = 'red';
        }

        attempts.textContent = `Attempts: ${attemptCount}`;
    });
});
