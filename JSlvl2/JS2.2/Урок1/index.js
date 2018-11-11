function Container() {
    this.id='';
    this.className='';
    this.htmlCode='';
}
 Container.prototype.render = function () {
     return this.htmlCode;
 };

function Menu(myId, myClass, myItems) {
    // Записываем все с this из Container
    Container.call(this);
    this.id=myId;
    this.className=myClass;
    this.items=myItems;
}

// Копируем прототип
Menu.prototype=Object.create(Container.prototype);
// Указываем с помощью какой функции будет создаваться обьект
Menu.prototype.constructor=Menu;

Menu.prototype.render= function () {
    var result = '<ul class="'+ this.className+'" id="'+this.id+'">';
    for( var i=0; i< this.items.length; i++){
        if( this.items[i] instanceof  MenuItem) {
            result +=this.items[i].render();
        }
    }
    result +='</ul>';
    return result;
};
function MenuItem(myHref, myLabel) {
    Container.call(this);
    this.className='menu-item';
    this.href=myHref;
    this.label=myLabel;
}
MenuItem.prototype=Object.create(Container.prototype);
MenuItem.prototype.constructor=MenuItem;

MenuItem.prototype.render= function () {
    return '<li class="'+ this.className+'"><a href="'+ this.href+'">'+this.label+'</a></li>';
};

