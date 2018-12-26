// Import npm modules and std library dependencies
const mongoose = require('mongoose');
const assert = require('assert');

const url = process.env.MONGODB_URI || process.env.MONGODB_TEST_URI;
mongoose.Promise = global.Promise;

// Connect to the database
mongoose.connect(url,
    { useNewUrlParser: true },
    (err, db) => {
        assert.equal(null, err);
        // eslint-disable-next-line
        console.log('successfully connected to the database');
    });

// Setup mongoose debug handling
// eslint-disable-next-line
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error'));
mongoose.set('debug', true);

module.exports = mongoose.connection;
