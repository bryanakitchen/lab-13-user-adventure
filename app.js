import { saveUser } from './utils.js';

// import functions and grab DOM elements
const form = document.querySelector('form');

// initialize state

// set event listeners to update state and DOM

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    
    console.log(data.get('name'));
});

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];

        if (item.id === someId) {
            return item;
        }
    }
}
