let turn = 'X'; // Correctly define turn with uppercase 'X'
let square = Array(9).fill(''); // Initialize square array with empty strings

function games(id) {
    let element = document.getElementById(id);
    let title = document.querySelector('.title');

    if (element.innerHTML === '') { // Only update if the cell is empty
        element.innerHTML = turn;
        turn = turn === 'X' ? 'O' : 'X'; // Toggle turn
        title.innerHTML = `Player ${turn}'s Turn`; // Update title to show current player
        winner(); // Check for winner
    }
}

function end(num1, num2, num3) {
    let title = document.querySelector('.title');
    title.innerHTML = `Winner: ${square[num1]}`;
    document.getElementById('item' + (num1 + 1)).style.background = '#000';
    document.getElementById('item' + (num2 + 1)).style.background = '#000';
    document.getElementById('item' + (num3 + 1)).style.background = '#000';
    setTimeout(() => location.reload(), 4000); // Reload after 4 seconds
}

function winner() {
    // Update square array
    for (let i = 0; i < 9; i++) {
        square[i] = document.getElementById('item' + (i + 1)).innerHTML;
    }

    // Check for winning combinations
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const [a, b, c] of winConditions) {
        if (square[a] !== '' && square[a] === square[b] && square[b] === square[c]) {
            end(a, b, c);
            return; // Exit the function once a winner is found
        }
    }

    // Check for draw
    if (square.every(cell => cell !== '')) {
        document.querySelector('.title').innerHTML = "It's a Draw!";
        setTimeout(() => location.reload(), 4000); // Reload after 4 seconds
    }
}
