const operation = prompt('Введите операцию, которую хотели бы применить: "+", "-", "*", "/"');
const firstNumber = +prompt('Введите первое число');
const secondNumber = +prompt('Введите второе число');

if (operation == '+') {
    const result = firstNumber + secondNumber;
    alert(`${firstNumber}+${secondNumber}=${result}`);
} else if (operation == '-') {
    const result = firstNumber - secondNumber;
    alert(`${firstNumber}-${secondNumber}=${result}`);
} else if (operation == '*') {
    const result = firstNumber * secondNumber;
    alert(`${firstNumber}*${secondNumber}=${result}`);
} else {
    const result = firstNumber / secondNumber;
    alert(`${firstNumber}/${secondNumber}=${result}`);
}



