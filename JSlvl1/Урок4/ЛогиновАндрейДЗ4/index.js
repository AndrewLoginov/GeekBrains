function foo(a) {

    let work = a;

    function f(b) {
        b===undefined ? work *= 1: work *= b ;
        return f;
    }

    f.toString = function() {
        return work;
    };

    return f;
}
console.log( foo(5)(2)() );//10
console.log( foo(5)() ); //5
console.log( foo(2)(1)(3)(4) ()  );//24
console.log( foo(2)(1)()(4)   );//8