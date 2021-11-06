
/*
Fibonacci pres Rekurzi
if (typeof num !== 'number' || isNaN(num) || num < 1 || num > 30) {
    console.log('wrong number')
    return null // ostereni zadani spravneho parametru
}
const vypocet = function(num) {
    if (num === 1) {
        return 0
    }
    if (num === 2) {
        return 1
    }
    return vypocet(num - 1) + vypocet(num - 2)
}

console.log(vypocet(10));

*/

/*
Fibonacci pres cyklus

const vypocetFor = function(num) {
    if (num === 1) {
        return 0
    }
    if (num === 2) {
        return 1
    }

    let num1 = 0
    let num2 = 1
    let sum
    for (let i = 2; i < num; i++) {
        sum = num1 + num2
        num1 = num2
        num2 = sum
    }
    return sum
}
*/
















const obj1 = {
    name: 'Karel',
    age: 30,
    gender: 'chlapec',
    dog: {
        name:'Rex',
        breed: 'labrador',
        age: 5,
    }
}

const obj2 = {
    name: 'Jana',
    age: 35,
    gender: 'devce',
    dog: {
        name: 'Alik',
        breed: 'kokr',
        age: 3,
    }
}

const obj3 = {
    name: 'Honza',
    age: 23,
    gender: 'chlapec',
    dog: {
        name: 'Rex',
        breed: 'pudl',
        age: 5,
    }
}





const predstavOsobu = function(obj) {
    /* */
    const properties = ['name', 'dog', 'gender']
    properties.forEach(function(property){
        if(!(property in obj)) {
            console.log('spatny parametr');
        }
    })


    if (!('name' in obj) || !('gender' in obj) || !('dog' in obj) || !('breed' in obj) || !('name' in obj.dog)) {
        console.log('spatny parametr');
        return
    }



    let output = ''
    output += 'Jemnuji se ' + obj.name
    output += ', jsem'
    output += obj.gender === 'devce' ? 'slusne ' : 'slusny '
    output += (obj.gender === 'devce' || obj.gender === 'chlapec') ? obj.gender : 'clovek'
    output += '. Muj pes se jmenuje '
    output += obj.dog.name
    output += ' a je to '
    output += obj.dog.breed

    console.log(output);
}

predstavOsobu(obj1)
predstavOsobu(obj2)
predstavOsobu(obj3)























