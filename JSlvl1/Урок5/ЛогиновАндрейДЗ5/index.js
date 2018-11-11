// {"origin":{"iata":"MOW","name":"Москва"},"destination":{"iata":"NCE","name":"Ницца"}}

//http://min-prices.aviasales.ru/calendar_preload?origin=MOW&destination=NCE&period=2018-09-01:season&one_way=true

// Получаем данные
const request=require('sync-request');
const res=request('GET','http://min-prices.aviasales.ru/calendar_preload?origin=MOW&destination=NCE&period=2018-09-01:season&one_way=true');
const obj=JSON.parse(res.getBody('utf8'));

const li = obj.best_prices;
let min = 999999;

//console.log(obj);

// Выводим минимальное колличество миллисекунд для осени
let mindate = Date.parse('2018-09-01'); // зона UTC
//console.log(mindate + 'min'); // 1535760000000(число миллисекунд)
// Выводим максимальное колличество миллисекунд для осени
let maxdate = Date.parse('2018-11-30'); // зона UTC
//console.log(maxdate + 'max'); // 1543536000000 (число миллисекунд)
// Для каждого обькта в масиве
for (let ob of li) {
    // Если имеет оба эти свойства то работаем с ними
    if ((ob.hasOwnProperty("depart_date")) & (ob.hasOwnProperty("value"))){
        // Находим даты которые подходят нам по условию
        if (( msUTC = Date.parse(ob.depart_date) > mindate) & ( msUTC = Date.parse(ob.depart_date) < maxdate)) {
            // Находим минмальную цену для этих дат
            if (min > ob.value) {
                min=ob.value;
            }
            // Можно вывести все даты , стоимость и значение в миллисекундах
            //console.log(ob.depart_date); //Все даты осенью
            //console.log(ob.value); //Цена в эти даты
            //msUTC = Date.parse(ob.depart_date); // Перевод всех дат в миллисекунды
            //console.log(msUTC); // Вывод всех дат в миллисекундах
        }
    }
}
// Находим обьект в масиве который имеет значение минимальной цены
var result = li.filter(function( obj ) {
    return obj.value === min;
});
// Выводим минимальную цену и весь обьект с этим значением
console.log('Минимальная цена ' + min);
console.log('Весь обьект с мин ценой');
console.log(result);
