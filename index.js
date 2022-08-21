//Data to render
const characters = [
    {
        "id": 1,
        "name": "Rick Sanchez",
        "location": "Citadel of Ricks",
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
        "id": 2,
        "name": "Morty Smith",
        "location": "Citadel of Ricks",
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
        "id": 3,
        "name": "Summer Smith",
        "location": "Earth (Replacement Dimension)",
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
        "id": 4,
        "name": "Beth Smith",
        "location": "Earth (Replacement Dimension)",
        "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
    {
        "id": 5,
        "name": "Jerry Smith",
        "location": "Earth (Replacement Dimension)",
        "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    },
    {
        "id": 6,
        "name": "Abadango Cluster Princess",
        "type": "",
        "location": "Abadango",

        "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    },
    {
        "id": 7,
        "name": "Abradolf Lincler",
        "type": "Genetic experiment",
        "location": "Testicle Monster Dimension",

        "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
    },
    {
        "id": 8,
        "name": "Adjudicator Rick",
        "type": "",
        "location": "Citadel of Ricks",
        "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
    },
    {
        "id": 9,
        "name": "Agency Director",
        "type": "",
        "location": "Earth (Replacement Dimension)",
        "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
    },
    {
        "id": 10,
        "name": "Alan Rails",
        "type": "Superhuman (Ghost trains summoner)",
        "location": "Worldender's lair",
        "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
    },
    {
        "id": 11,
        "name": "Albert Einstein",
        "type": "",
        "location": "Earth (Replacement Dimension)",
        "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
    },
    {
        "id": 12,
        "name": "Alexander",
        "location": "Anatomy Park",

        "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
    },
    {
        "id": 13,
        "name": "Alien Googah",
        "location": "Earth (Replacement Dimension)",
        "image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
    },
    {
        "id": 14,
        "name": "Alien Morty",
        "location": "Citadel of Ricks",
        "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
    },
    {
        "id": 15,
        "name": "Alien Rick",
        "location": "Citadel of Ricks",
        "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
    },
    {
        "id": 16,
        "name": "Amish Cyborg",
        "location": "Earth (Replacement Dimension)",
        "image": "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
    },
    {
        "id": 17,
        "name": "Annie",
        "location": "Anatomy Park",
        "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
    },
    {
        "id": 18,
        "name": "Antenna Morty",
        "location": "Citadel of Ricks",
        "image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
    },
    {
        "id": 19,
        "name": "Antenna Rick",
        "location": "unknown",
        "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
    },
    {
        "id": 20,
        "name": "Ants in my Eyes Johnson",
        "location": "Interdimensional Cable",
        "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
    }
];

//On page loaded
function loadSideMenu() {
    const sideMenuList = document.querySelector('.side-menu__list');

    characters.forEach((character) => {
        const sideMenuItem = document.createElement('li');

        sideMenuItem.className = 'side-menu__item';
        sideMenuItem.innerHTML = `<a>${ character.name }</a>`;
        sideMenuList.appendChild(sideMenuItem);
    })
};

window.addEventListener('DOMContentLoaded', () => {
    loadSideMenu();
});
