const USER = 'USER';

// this function will not return anything
export function saveUser(user) {
    const myString = JSON.stringify(user);
    localStorage.setItem(USER, myString);
}

export function getUser() {
    const myKey = localStorage.getItem(USER);
    return JSON.parse(myKey);

}

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];

        if (item.id === someId) {
            return item;
        }
    }
}
