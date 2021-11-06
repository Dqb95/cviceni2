




const data = [
    {jmeno: 'Karel', age: 22, gender: 'chlapec' },
    {jmeno: 'Jana', age: 25, gender: 'devce' },
    {jmeno: 'Honza', age: 22, gender: 'nevim' },
]

// jmeno: .... vek: ..... gender: ...

data.forEach(function(clovek){
    console.log('jmeno' + clovek.jmeno, 'vek: ' + clovek.age + ', gender: ' + clovek.gender);
})