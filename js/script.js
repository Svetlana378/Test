/****
1. Программа хранит в двух переменных курс доллара и евро. В первой переменной у вас 
хранится стоимость одного евро в рублях, во второй - стоимость одного доллара в рублях. 
Вы спрашиваете у пользователя, сколько рублей он хочет сконвертировать, получаете это 
число и считаете. Результат надо вывести на страницу с помощью alert.
****/

/*
let kursDollar = 76;
let kursEuro = 90;
let sumDollars = 0, 
    sumEuro = 0;

let sumRubles = Number(prompt("Введите сумму в рублях:"));

alert(sumRubles.toString());

if(sumRubles.toString()!== "NaN") {

    sumDollars = (sumRubles / kursDollar).toFixed(2);
    sumEuro = (sumRubles / kursEuro).toFixed(2);

    alert(`Сумма в рублях ${sumRubles} в долларах = ${sumDollars},\nв евро = ${sumEuro}`);
}
else {
    alert("Введите число!");
}

*/




/*****
2. Пользователь вводит длину оснований трапеции (a и b), а также высоту трапеции h. 
Программа выводит сообщение: «Площадь трапеции будет равна <значение>». Площадь 
вычисляется по формуле ((a + b) / 2) * h, где a, b - основания, h - высота.
 *****/

/*
let a; // длина основания трапеции
let b; // длина основания трапеции
let h; // высота трапеции
let S; // площадь трапеции

a = +prompt("Длина основания (а) трапеции", 10);
b = +prompt("Длина основания (b) трапеции", 7);
h = +prompt("Высота (h) трапеции", 5);

S = ((a + b) / 2) * h;

alert(`Площадь трапеции = ${S} кв.м.`)
*/



/***
3. Пользователь вводит сумму вклада и процент, который будет начисляться ежегодно. Отобразить размер вклада поочередно на ближайшие 5 лет.
***/
/*
let deposit;
let procent;
let oneYearDeposit;
let profit;

deposit = +prompt('Введите сумму вклада, в руб.');
procent = +prompt('Введите сумму процента по вкладу, в %');

let i, a;
for (i = 2016; i <= 2021;i++){
    for (a = 1; a <= 5; a++){
        oneYearDeposit = deposit + (deposit * procent / 100);
    }
alert(`Размер вашего вклада с учетом процентов за ${i} год составит ${oneYearDeposit} руб.`)}
*/


/***
4. Запросить у пользователя ввод числа и сохранить это число в переменную a.Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
***/

/*
let a =prompt("Введите число от 1 до 10:");

if (a == 10) {
    alert("Верно!");
} 
else {
    alert("Неверно!");
}
*/


/*** 
5. Выведите столбец чисел от 1 до 50.
***/

/*
for(let i = 1; i <= 50; i++) {
    console.log(`${i}\n`);
}
*/



/****
 6. Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
 ****/


 // let a = 10;
 // let b = 3;

 // console.log(`Остаток от деления a на b = ${a % b}`);





 /*** 
 7.С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.
 ***/

 /*
let MAXLENGHTSTR = 50;
let str ="";
let symbol = "*";

let lenghtStr = Number (prompt("Длина строки:"));

if (lenghtStr.toString() != "NaN") {
    if (lenghtStr > 0 && lenghtStr <= MAXLENGHTSTR) {

        let answerUser = confirm("Заполнять цифрами?");

        switch(answerUser) {
            case true: for (let i = 1; i <= lenghtStr; i++) {
                         str += i;
                        }
                        break;
            case false: symbol = prompt("Укажите символ для заполнения строки:");
                        if (symbol.length == 1) {
                            // for (let i = 1; i <= lenghtStr; i++) {
                            //     str += i;
                            //     }
                        }
                        else {
                            alert("Ошибка!!! Введите один символ!");
                        }
                        break;
        }
    }
    else if(lenghtStr == "") {
        alert("Ошибка!!! Длина строки не должна быть пустой!");
    }
    else {
         alert (`Ошибка!!! Длина строки должна быть > 0 и <= ${MAXLENGHTSTR}`);
    } 
}
else {
   alert("Ошибка!!! Длина строки должна быть числом");
}
*/



/****
8. Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.
****/

// let str = "Привет друзья!";
// let resultStr = "";
// for(let i = 0; i < str.length; i++) {
//     if(i == str.length - 1) {
//         resultStr += str[i];
//     }
//     else {
//         resultStr += str[i] + "\n";
//     }
// }
// alert(resultStr);

/*** 
9. Дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо вывести на экран фразу 'Привет, мир!'.
***/

// Первый вариант

// let mas = ["Привет, ", "мир", "!"];
// alert(mas[0] + mas[1] + mas[mas.length - 1]);

// Второй вариант

// let mas = ["Привет, ", "мир", "!"];
// let str = "";
// for (let i = 0; i < mas.length; i++){
//     str += mas[i]
// }
// alert(str);

// Третий вариант

// let mas = ["Привет, ", "мир", "!"];
// let str = "";
// let lenghtStr = "0";

// for (let index in mas) {
//     str += mas[index];
//     lenghtStr++;
// }

// alert(str + `\nДлина массива: ${lenghtStr}`);

/** 
10. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
***/

// let massLet = ['a', 'b', 'c'];
// let massNum = [1, 2, 3];

// for (let i = 0; i < massNum.length; i++) {

//     massLet[massLet.length] = massNum[i];

// }
// console.dir(massLet);

let month = "";
let numberDate;
let dayWeek = "";

let date = new Date();

let arrayDays = {
    0: "воскресенье",
    1: "понедельник",
    2: "вторник",
    3: "среда",
    4: "четверг",
    5: "пятница",
    6: "суббота"
}

let arrayMonth = {
    0: "январь",
    1: "февраль",
    2: "март",
    3: "апрель",
    4: "май",
    5: "июнь",
    6: "июль",
    7: "август",
    8: "сентябрь",
    9: "октябрь",
    10: "ноябрь",
    11: "декабрь"
}

for (let index in arrayDays) {
    if(date.getDay() == index) {
        dayWeek = arrayDays[index];
    }
}

for (let index in arrayMonth) {
    if(date.getMonth() == index) {
        month = arrayMonth[index];
    }
}

console.log(`Сегодня - ${month}, ${date.getDate()}, (${dayWeek})`);