import scenarios from '../data/date-data.js';

const section = document.querySelector('section');
const h2 = document.createElement('h2');
h2.textContent = scenarios[0].title;

section.appendChild(h2);

const h3 = document.createElement('h3');
h3.textContent = scenarios[0].description;
section.appendChild(h3);

const ul = document.createElement('ul');
section.appendChild(ul);

scenarios[0].dinnerChoices.forEach(dinnerChoice => {
    
    const li = document.createElement('li');
    const link = document.createElement('a');
    
    li.appendChild(link);
    const ifStatement = dinnerChoice.id; 
    
    if (ifStatement === 'nothing') {
        link.textContent = dinnerChoice.description;
        link.href = `../end-date/index.html`;

    } else {
        link.textContent = dinnerChoice.description;
        link.href = `../next/?id=${dinnerChoice.next}`;
    }

    ul.append(li);
    
});

