let currentBet = null;
let balance = 1000; // Počáteční virtuální peníze

// Zobrazí pole pro číslo, pokud je vybrána sázka na číslo
document.getElementById('bet-type').addEventListener('change', function() {
    const betType = this.value;
    const betNumberInput = document.getElementById('bet-number');
    if (betType === 'number') {
        betNumberInput.style.display = 'inline';
    } else {
        betNumberInput.style.display = 'none';
    }
});

// Funkce pro umístění sázky
function placeBet() {
    const betAmount = parseInt(document.getElementById('bet-amount').value);
    const betType = document.getElementById('bet-type').value;
    const betNumber = parseInt(document.getElementById('bet-number').value);

    if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance) {
        alert('Zadejte platnou částku sázky.');
        return;
    }

    if (betType === 'number' && (isNaN(betNumber) || betNumber < 0 || betNumber > 36)) {
        alert('Zadejte platné číslo (0 - 36).');
        return;
    }

    currentBet = {
        amount: betAmount,
        type: betType,
        number: betNumber
    };

    document.getElementById('bet-info').textContent = `Sázka: ${betAmount} na ${betType === 'number' ? číslo ${betNumber} : betType}`;
}

// Funkce pro roztočení rulety
function spinRoulette() {
    if (!currentBet) {
        alert('Nejprve umístěte sázku!');
        return;
    }

    // Náhodný výsledek rulety
    const result = Math.floor(Math.random() * 37); // Čísla 0 - 36
    const resultColor = result === 0 ? 'green' : result % 2 === 0 ? 'black' : 'red';

    document.getElementById('roulette-result').textContent = Výsledek: ${result} (${resultColor});

    // Vyhodnocení sázky
    let win = false;
    if (currentBet.type === 'number' && currentBet.number === result) {
        balance += currentBet.amount * 36; // Výhra na číslo
        win = true;
    } else if (currentBet.type === resultColor) {
        balance += currentBet.amount * 2; // Výhra na barvu
        win = true;
    } else {
        balance -= currentBet.amount; // Prohra
    }

    document.getElementById('win-loss').textContent = win ? 'Vyhráli jste!' : 'Prohráli jste!';
    document.getElementById('bet-info').textContent = Zůstatek: ${balance};
    currentBet = null;
}