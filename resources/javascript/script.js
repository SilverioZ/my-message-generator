const inspiringPhrases = [
    'Believe in yourself and all that you are.',
    'Every day is a new opportunity to grow.',
    'Small steps can lead to big changes.',
    'Your attitude determines your direction.',
    'Dream big and take action today.',
    'Rise above the storm and you will find the sunshine.',
    'The only limit is the one you set for yourself.',
    'Courage starts with showing up and letting yourself be seen.',
    'Success is built on consistency and effort.',
    'Be the reason someone believes in the goodness of people.'
];

const randomMessage = () => {
    const randomIndex = Math.floor(Math.random() * inspiringPhrases.length);
    console.log(inspiringPhrases[randomIndex]);
}

randomMessage();