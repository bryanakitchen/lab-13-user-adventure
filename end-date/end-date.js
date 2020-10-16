import scenarios from '../data/date-data.js';

const section = document.querySelector('section');
const h2 = document.createElement('h2');
h2.textContent = scenarios[5].title;

section.appendChild(h2);

const h3 = document.createElement('h3');
h3.textContent = scenarios[5].description;
section.appendChild(h3);

const ul = document.createElement('ul');
section.appendChild(ul);

scenarios[5].choices.forEach(choice => {
    
    const li = document.createElement('li');
    const link = document.createElement('a');
    
    li.appendChild(link);
    
    link.textContent = choice.description;
    link.href = '../index.html';

    ul.append(li);
    
});

