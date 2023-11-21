// let index = 0;

// while(index <= 20) {
//     if(!(index % 2)) {
//         console.log(index);
//     }
//     index++;
// }

// let day = 'Вторник'

// if (day === 'Понедельник'){
//     console.log('Пойду танцевать бачату')
// }

// switch (day){
//     case 'Понедельник':
//         console.log('Пойду танцевать бачату')
//         break;
//     case 'Вторник':
//         console.log('Учимся')
//         break;
//     case 'Среда':
//         console.log('не знаю');
//         break;

//     default:
//         console.log('Моя твоя не понимать')
//     break;
// }

// const number = prompt('Введите число от 0 до 10');



// if(number >= 0 && number <= 10 ) {
//     console.log('Вы не безнадёжный человек...')
// } else {
//     console.log('Бездарность..')
// }




// const number = +prompt('Введите число');

// console.log(isNaN(number))



// const number = +prompt('Введите число');

// if(!isNaN(number)) {
//     console.log('Вы написали число, всё окЭй')
// } else {
//     console.log('Боже мой, просили же число!')
// }

// while(isNaN (number)) {
//     const number = +prompt('Введите число')

//     if(!isNaN (number)){
//         break;

//     } else {
//         alert('Дэбил')
//     }
// }

while (true) {
    let x = +prompt('Введите число')

while(isNaN (x)){
    x = +prompt('Введите число')
    if (!isNaN (x)){
        break
    }
}

let z = prompt('Введите операцию (+, -, *, /)')

// while( z!= '+'|| z!= '-' || z!= '*' || z!= '/' ){
//     z = prompt('Введите операцию (+, -, *, /)')
//     if ( z == '+'|| z == '-' || z == '*' || z == '/' )
//         break
// }

while(![ '+','-', '*', '/' ].includes(z)){
    z = prompt('Введите операцию (+, -, *, /)')
    if ([ '+','-', '*', '/' ].includes(z)){
        break
    }
}

let y = +prompt('Введите второе число')

while(isNaN (y)){
    y = +prompt('Введите второе число')
    if (!isNaN (y)){
        break
    }
}

switch (z){
    case '+':
        // alert( x + y)
        alert(` ${x} + ${y} = ${x + y} ` )
        break;
    case '-':
        // alert( x - y)
        alert(` ${x} - ${y} = ${x - y} ` )
        break;
    case '*':
        // alert(x * y)
        alert(` ${x} * ${y} = ${x * y} ` )
        break;
    case '/':
        // alert(x / y)
        alert(` ${x} / ${y} = ${x / y} ` )
}
}

