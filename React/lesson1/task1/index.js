function loop(callback=null, times=0) {
    try {
        if ((typeof times !== "number") || (times<0)){
            throw new SyntaxError('Ошибка числа');
        }
        if (typeof callback === "function") {
            for (let i=0; i < times; i++){
                callback();
            }
        } else {
            throw new SyntaxError('Ошибка функции');
        }
    }
    catch (e) {
        console.error(e.message);
    }
}
function helloWorld() {
    console.log('Привет');
}



