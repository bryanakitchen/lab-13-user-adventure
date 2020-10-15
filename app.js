import { saveUser } from './utils.js';

// import functions and grab DOM elements
const form = document.querySelector('form');

// initialize state

// set event listeners to update state and DOM

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    
    const user = {
        name: data.get('name'),
        completed: {}
    };

    saveUser(user);

    window.location.href = './dinner/index.html';
});

