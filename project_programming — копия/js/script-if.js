{
// /* нахождение минимума среди двух чисел */
// let x, y, z, min;
// x = parseInt(prompt("Введите первое число"));
// y = parseInt(prompt("Введите второе число"));
// z = parseInt(prompt("Введите третье число"));
// min = x;
// if (y<min) {
//     min = y;
// }
// if (z<min) {
//     min = z;
// }
// alert("min = " + min)
}

{
//      /*вывести нечётные числа от 0 до 10 */
//     for(let i = 1; i < 10; i = i + 2){
//         console.log(i);
//     }
}

{
//      /*найти кол-во нечётных чисел в последовательности. Последовательность чисел вводится с клавиатуры и заканчивается вводом 0  */
//     let count = 0, x;
//     x = parseInt(prompt("Введите число"));
//     while(x != 0){
//         if(x % 2 != 0) {
//             count++;
//         }
//         x = parseInt(prompt("Введите число"));
//     }
//     alert("Кол-во нечетных чисел" + count);
}

{
//     /* найти кол-во нечётных цифр в натуральном числе */
//     let count = 0, d, x;
//     x = parseInt(prompt("Введите натуральное число"));
//     while(x != 0){
//         d = x % 10;
//         if(d % 2 != 0){
//             count++;
//         }
//         x = Math.floor(x / 10);
//     }
//     alert("Кол-во нечетных чисел" + count);
}
{
//     /* 4.8. Известны два расстояния: одно в километрах, другое — в футах
// (1 фут 0,305 м ). Какое из расстояний меньше? */
// let x, y, d, min;
// x = parseFloat(prompt("Введите первое расстояние в километрах"));
// y = parseFloat(prompt("Введите второе расстояние в футах"));
// d = y * 0.305;
// min = x;
// if (d<min) {
//     min = d;
// }
// alert("min = " + min);
}
{
//     /* 4.41. Дано вещественное число x. Вычислить( )f x , если */
//     let x;
//     x = parseFloat(prompt("Введите ваш x"));
//     if (x>=0.2 && x<=0.9) {
//         alert("sin x = sin " + x);
//     }
//     else{
//         alert("f(x) = 1");
//     }
}
{
    // let n = parseInt(prompt("Введите ваш n"));
    // let sum = 0;
    // for (let i = 1; i <= n; i++) {
    //     sum += 1 / i;
    // }
    // console.log(sum);
    // alert("sum = " + sum)
}
{
    /* 5.51. Даны натуральное число n и вещественные числа1 2, , ..., .na a a Определить */
    // let n = parseInt(prompt("Введите количество чисел (n):"));

    // let sum = 0;
    // for (let i = 1; i <= n; i++) {
    //     let number = parseFloat(prompt("Введите число :" ));

    //     sum += number;
    // }

    // let mean = sum / n;

    // console.log("Среднее арифметическое: " + mean);

    // alert("Среднее арифметическое: " + mean)
}
{
    let countA = 0, countB = 0, d, x;
let a = parseInt(prompt("Введите цифру a:"));
let b = parseInt(prompt("Введите цифру b:"));
x = parseInt(prompt("Введите натуральное число:"));

while (x != 0) {
    d = x % 10;
    if (d === a) {
        countA++;
    }
    if (d === b) {
        countB++;
    }
    x = Math.floor(x / 10);
}
}
