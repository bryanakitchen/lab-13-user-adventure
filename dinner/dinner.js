import scenarios from '../data/date-data.js';
import { findById } from '../utils.js';

const section = document.querySelector('section');
const h2 = document.createElement('h2');
h2.textContent = scenarios[0].title;

section.appendChild(h2);

const h3 = document.createElement('h3');
h3.textContent = scenarios[0].description;

section.appendChild(h3);

const form = document.createElement('form');
section.appendChild(form);

scenarios[0].dinnerChoices.forEach(dinnerChoice => {
    const label = document.createElement('label');
    const span = document.createElement('span');

    // span.textContent = dinnerChoice.description;
    // const radio = document.createElement('input');
    // radio.type = 'radio';
    // radio.value = dinnerChoice.id;
    // radio.name = 'choices';

    const button = document.createElement('button');
    button.textContent = dinnerChoice.description;
    button.value = dinnerChoice.id;
    form.appendChild(button);

    label.append(span);
    // add radio

    form.appendChild(label);
    
    button.addEventListener('click', () => {
    
    });
});

// const button = document.createElement('button');
// button.textContent = 'Confirm';
// form.appendChild(button);


// const ul = document.createElement('ul');
// const li = document.createElement('li');
// const link = document.createElement('a');

// li.appendChild(link);

// link.textContent = scenario.title;
// link.href = `/quest/?id=${quest.id}`;

// ul.append(li);
