const { User, Book } = require('../models');
 
const resolvers = {
    Query: {

        me: async (parent, args) => {
            const userData = await User.findOne({ })
            .select('-_v -password')
            .populate('savedBooks');

            return userData;
        }
    },
};

module.exports = resolvers;