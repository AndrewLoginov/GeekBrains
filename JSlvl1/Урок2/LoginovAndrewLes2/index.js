let  fedorPoints=21;
let  petrPoints=21;
// Проверяем на победу Федора
if ((fedorPoints > petrPoints || petrPoints > 21)  && fedorPoints <= 21) {
    console.log('Федор выиграл');
    // Проверяем на победу Петю
} else if ( (petrPoints>fedorPoints || fedorPoints > 21 ) && petrPoints<=21) {
    console.log('Петр победил');
    // Проверяем на ничью
} else if ( fedorPoints===petrPoints && fedorPoints<=21 && petrPoints<=21 ) {
    console.log ('Ничья');
} else {
    // Если ни одно условие не подходит значит победителя нет
    console.log ('Победителя нет');
}

