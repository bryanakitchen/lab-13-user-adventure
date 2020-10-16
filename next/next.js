import scenarios from '../data/date-data.js';

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');

const section = document.querySelector('section');
const h2 = document.createElement('h2');
h2.textContent = scenarios[id].title;

section.appendChild(h2);

const h3 = document.createElement('h3');
h3.textContent = scenarios[id].description;
section.appendChild(h3);

const ul = document.createElement('ul');
section.appendChild(ul);

scenarios[id].choices.forEach(choice => {
    
    const li = document.createElement('li');
    const link = document.createElement('a');
    
    li.appendChild(link);
    
    if (choice.id === 'nothing') {
        link.textContent = choice.description;
        link.href = `../end-date/index.html`;

    } else if (choice.id === 'start over') {
        link.textContent = choice.description;
        link.href = `../index.html`;
    } else {
        link.textContent = choice.description;
        link.href = `/next/?id=${choice.next}`;
    }
    ul.append(li);
    
});