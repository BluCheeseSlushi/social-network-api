const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema({
    username:{
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.Number,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.Number,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true,
    },
    id: false
});

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;
