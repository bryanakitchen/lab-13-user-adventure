//if I have time, change and add
// const restaurant = 
export default [{
    id: 'dinner',
    title: 'What is the special today?',
    image: 'restaurant.jpg',
    description: `
        You join your date at the dinner table. After some small talk about the weather, the waiter comes by to ask for your order.
    `,
    dinnerChoices: [{
        id: 'spaghetti',
        description: 'Spaghetti and Meatballs',
        result: `
            Bold choice to go with your white shirt, but you're particularly confident this evening. 
        `,
        next: topic,
    }, {
        id: 'salad',
        description: 'Caesar Salad',
        result: `
            Your date makes an ill-mannered comment about your choice: 'You eat like a bird!'.
        `,
        next: topic,
    }, {
        id: 'nothing',
        description: `You're suddenly not hungry. You wonder if you have been catfished.`,
        result: `
            You send the emergency text to your friend who gives you a call telling you about how her boyfriend just broke up with her and she needs you.
        `,
        next: endDate,
    }],
}, {
    id: 'topic',
    title: 'Beat the Small Talk',
    image: 'smile.jpg',
    description: `
        Now that the menu is gone, there is nothing between you and your date. Time to talk about something other than the weather.
    `,
    topicChoices: [{
        id: 'politics',
        description: 'Politics',
        result: `
            Might as well find out now. Your date does not feel offended by the question and takes the question with grace. 
        `,
        next: dessert,
    }, {
        id: 'hobbies',
        description: 'Hobbies',
        result: `
            Your date mentions they are really into beetle fighting. Your fight or flight kicks in - time to go!
        `,
        next: endDate,
    }, {
        id: 'exes',
        description: 'Ex-Partners',
        result: `
            Your date says they've never been in a real relationship before. Maybe a red flag, but you want to see where this goes.
        `,
        next: dessert,
    }],

}, {
    id: 'dessert',
    title: 'Sweet or Sour',
    image: 'some.jpg',
    description: `
        The waiter interrupts your intense conversation and asks if you saved room for dessert
    `,
    dessertChoices: [{
        id: 'dessert',
        description: 'Order Tiramisu',
        result: `
            Spend more time getting to know your date. 
        `,
        next: goodbye,
    }, {
        id: 'full',
        description: 'No room for dessert',
        result: `
            You have no room for dessert, but might have room for your date in your life.
        `,
        next: goodbye,
    }, {
        id: 'check',
        description: `Check please!`,
        result: `
            You've had enough. Time to bolt.
        `,
        next: endDate,
    }],
}, {
    id: 'good bye',
    title: 'Time to Say Good Bye',
    image: 'standing-outside.jpg',
    description: `
        It's been an eventful evening. Now it's time for the last awkward bit... how to say good bye.
    `,
    goodbyeChoices: [{
        id: 'hug',
        description: 'Hug',
        result: `
            You had a nice time. Maybe you can still be friends. 
        `,
        next: ,
    }, {
        id: 'kiss',
        description: 'Peck on the cheek',
        result: `
            You enjoyed your time and you let your date know you would like to see them again. 
        `,
        next: ,
    }, {
        id: 'handshake',
        description: 'Handshake',
        result: `
            This felt about as fun as a business meeting.
        `,
        next: ,
    }, {
        id: 'high five',
        description: 'High Five',
        result: `
            Good job, but better luck on the next one! 
        `,
        next: ,
    }],
}, {
    id: 'end date',
    title: 'Run!',
    image: 'running.jpg',
    description: `
        You knew you shouldn't have reinstalled Tinder! Go home and finish the bottle of wine in your fridge.
    `,
}];


// const coffeeShop = {
// };

// const locations = [
//     restaurant, 
//     coffeeShop,
//     park
// ];
