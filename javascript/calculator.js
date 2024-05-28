echo "<!DOCTYPE html>
<html>
<head>
    <title>Calculator and Age</title>
</head>
<body>
    <script>
        let userNumber = parseFloat(prompt('Введите любое число:'));

        function calculator(num1, num2, operation) {
            switch (operation) {
                case 'add':
                    return num1 + num2;
                case 'subtract':
                    return num1 - num2;
                case 'multiply':
                    return num1 * num2;
                case 'divide':
                    return num1 / num2;
                default:
                    return 'Invalid operation';
            }
        }

        let num1 = parseFloat(prompt('Введите первое число:'));
        let num2 = parseFloat(prompt('Введите второе число:'));
        let operation = prompt('Введите операцию (add, subtract, multiply, divide):');
        let result = calculator(num1, num2, operation);

        alert('Результат: ' + result);

        let finalResult = parseFloat(prompt('Введите число, которое получилось после умножения задуманного числа на 2 и прибавления 7:'));
        let originalNumber = (finalResult - 7) / 2;

        alert('Вы задумали число: ' + originalNumber);

        let userName = prompt('Введите ваше имя:');
        let birthYear = parseInt(prompt('Введите ваш год рождения:'));
        let currentYear = new Date().getFullYear();
        let age = currentYear - birthYear;

        document.write(`${userName}: ${age}`);
    </script>
</body>
</html>" > index.html
