

const Auto = function (znacka, rok, typ, jmeno, mesto) {
    this.znacka = znacka
    this.rok = rok
    this.typ = typ
    this.majitel = {
        jmeno: jmeno,
        mesto: mesto,
    }
    this.vypis = function () {
        let output = ''
        output += this.majitel.jmeno
        output += ' vlastni auto znacky ' + this.znacka
        output += ', ' + this.typ
        output += ', jeho bydlistem je ' + this.majitel.mesto
        console.log(output);
    }
}


let prvniAuto = new Auto('Skoda', 2018, 'Octavia', 'Karel', 'Brno')
let druhyAuto = new Auto('Ford', 2020, 'Fiesta', 'Franta', 'Praha')

prvniAuto.vypis()
druhyAuto.vypis()