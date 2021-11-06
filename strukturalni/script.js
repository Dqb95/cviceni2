const vypisObsah = function (obsah) {
    const el = document.querySelector('.container')
    if (!el) return;
    el.innerText = obsah;
}

const konzole = function (obsah) {
    console.log(obsah);
}


const odpocitejStart = function(x, func) {
    if (x < 1) {
        setTimeout(function() {
        func('START')
    }, 1000)
    } else {
        setTimeout(function(){
            func(x)
            odpocitejStart(x - 1, func)
        }, 1000)
    }
}

const prvni = document.getElementById('prvni')
const druhy = document.getElementById('druhy')

prvni.addEventListener('clik', function() {
    odpocitejStart(8, konzole)
})

druhy.addEventListener('clik', function() {
    odpocitejStart(8, vypisObsah)
})



































































































/*
let aaa = [1, 2, 3, 4, 5]

const vypisPole = function(pole) {
    if (pole.length === 0) {
        console.log('koncim Ahoj, uz nemam co psat');
    } else {
        console.log(pole.shift());
        vypisPole(pole)
    }
}

vypisPole(aaa)
*/

/* vypis funkce pomoci if a return

let aaa = [1, 2, 3, 4, 5]

const vypisPole = function(pole) {
    if (pole.length === 0) {
        console.log('koncim Ahoj, uz nemam co psat');
        return
    }
    console.log(pole.shift());
    vypisPole(pole)
}

vypisPole(aaa)

*/

/*
const vypisObsah = function (obsah) {
    const el = document.querySelector('.container')
    if (!el) return;
    el.innerText = obsah;
}

const sum = function (a, b, callback) {
    const result = a + b 
    callback(result)
}

const konzole = function(obsah) {
    console.log(obsah);
}

const factorial = function (x) {
    if (x === 0) return 1
    return x * factorial (x - 1)
}

let a = factorial(5)
console.log(a);
*/