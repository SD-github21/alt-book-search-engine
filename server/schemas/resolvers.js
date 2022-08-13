const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {

        me: async (parent, args) => {
            const userData = await User.findOne({ })
            .select('-_v -password')
            .populate('savedBooks');

            return userData;
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            return user;

        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('You entered incorrect credentials!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('You entered incorrect credentials!');
            }

            return user;

        }
    }
};

module.exports = resolvers;