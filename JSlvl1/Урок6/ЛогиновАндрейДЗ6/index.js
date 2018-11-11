function Bird( name ) {
    this.name = name;
    this.points = 0;
    this.wasEaten = false;
}
const boo1 = new Bird('Bird1');
const boo2 = new Bird('Bird2');
const boo3 = new Bird('Bird3');
const boo4 = new Bird('Bird4');
const boo5 = new Bird('Bird5');
const boo6 = new Bird('Bird6');
const boo7 = new Bird('Bird7');
const boo8 = new Bird('Bird8');
const boo9 = new Bird('Bird9');
const boo10 = new Bird('Bird10');
let arr = [boo1,boo2,boo3,boo4,boo5,boo6,boo7,boo8,boo9,boo10];
let count=arr.length;
    while ( count>1) {
        // Выбираем рандомно птицу, которую сьедят, изменяем значение wasEaten и удаляем из масива
     let die = Math.floor(Math.random()*count);
        arr[die].wasEaten=true;
         arr.splice(die,1);
        count-=1;
        // Выбираем рандомно птицу, которая будет кушать , учитывая что массив стал меньше
        let eat = Math.floor(Math.random()*count);
        arr[eat].points+=1;
    }
    // Выводим птицу победителя
    for (Bird of arr) {
        if (Bird.hasOwnProperty('name')){
            console.log('Птица ' + Bird.name + ' осталась живой');
        }
    }
console.log(boo1);
console.log(boo2);
console.log(boo3);
console.log(boo4);
console.log(boo5);
console.log(boo6);
console.log(boo7);
console.log(boo8);
console.log(boo9);
console.log(boo10);