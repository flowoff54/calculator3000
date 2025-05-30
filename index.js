const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.getAttribute('data-value');

        if (value === 'equal') {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = 'Erreur';
            }
            display.value = currentInput;
        } else if (value === 'AC') {
            currentInput = '';
            display.value = '';
        } else if (value === 'CE') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else {
            if (currentInput === 'Erreur') currentInput = '';
            currentInput += value;
            display.value = currentInput;
        }
    });
});