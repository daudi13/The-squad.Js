let data = [
    {
        name: ' Nicholas',
        age: 33,
        weight: '73Kgs',
        Height: '6ft 2ins'
    },

    {
        name: 'Bravin',
        age: 23,
        weight: '63Kgs',
        Height: '6ft '
    },

    {
        name: 'Amanda',
        age: 35,
        weight: '71Kgs',
        Height: '5ft 11ins'
    },

    {
        name: 'Boyce',
        age: 31,
        weight: '68Kgs',
        Height: '6ft 1ins'
    },

    {
        name: 'Hanna',
        age: 27,
        weight: '71Kgs',
        Height: '5ft 7ins'
    },

    {
        name: 'Mikey',
        age: 25,
        weight: '65Kgs',
        Height: '6ft 4ins'
    },
    
];

const info = document.querySelector('#info')

let details = data.map(function (item) {
    return '<div>' + `${item.name} is ${item.age} years old, weighs ${item.weight} and is ${item.Height}` + '</div>'
});

info.innerHTML = details.join('\n')