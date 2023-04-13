const connection = require('../config/connection');
const User = require('../models/User');
const Thought = require('../models/Thought');

connection.on('error', (err) => err);

connection.once('open', async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = [
        {
            username: 'seed1',
            email: 'seed1@gmail.com',

        },
        {
            username: 'seed2',
            email: 'seed2@gmail.com',
        }
    ];

    const thoughts = [
        {
            thoughtText: 'This is test thought 1',
            username: users[0].username,
            userId: users[0]._id
        },
        {
            thoughtText: 'This is test thought 2',
            username: users[1].username,
            userId: users[1]._id
        }
    ];

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);


    console.log('users seeded');
    console.log('thoughts seeded');

    process.exit();
});

