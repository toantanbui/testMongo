const mongoose = require('mongoose');
const connect = require('../connectDB/connectDBMongo')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema1 = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    age: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    post: [
        {
            postName: {
                type: String
            },
            postContent: {
                type: String
            },
            time: {
                type: Date
            },
            comment: [
                {
                    fistName: {
                        type: String
                    },
                    lastName: {
                        type: String
                    },
                    content: {
                        type: String
                    },
                    time: {
                        type: Date
                    }
                }
            ]

        }
    ]


},
    { collection: 'users' },
    { timestamps: true }
)

const users = mongoose.model('users', schema1);

module.exports = {
    users: users
}