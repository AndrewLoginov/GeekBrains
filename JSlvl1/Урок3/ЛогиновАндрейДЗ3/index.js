for (let n=1e4; n <= 15e4; n++) {
    let sum=(n-1)+(n-2)+(n-3);
    if ( (sum%100 === 52) && (sum.toString()[1]==="2") ) {
        console.log('Числа: ',n - 1,n - 2,n - 3);
        console.log('Cумма: ',sum);
    }
}



