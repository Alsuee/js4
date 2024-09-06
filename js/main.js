'use strict';


function Nunber(a, b) {
    if (a > b) {
        [a, b] = [b, a]
    }

    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            alert(i);
        }
    }
}

let a = parseInt(prompt("задание 1  Введите число а"));
let b = parseInt(prompt("Введите число b"));
Nunber(a, b);


let i = 0;
while (i < 3) {
    alert(i);
    i++;
}




function getValidNumber() {
    let number;

    while (true) {
        number = prompt("3 задание    Введите число больше 10:");

    
        if (number === null) {
            return null; 
        }

        
        number = parseInt(number);
        if (!isNaN(number) && number > 10) {
            return number; 
        }
    }
}

let result = getValidNumber();

if (result !== null) {
    alert("Вы ввели число:" + result);
} else {
    alert("Вы отменили ввод.");
}

let m = Number(prompt("задание 4  Число"));
let n = Number(prompt("Число"));

function min(m, n) {
    if (m < n) {
        return m;
    } else {
        return n;
    }
}

alert("задание 5 минимум "+min(m, n));



const ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
};

ask(
    "Задание 6 Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);


let age = Number(prompt("Задание 6 Сколько лет?"));

function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}

alert(checkAge(age))
