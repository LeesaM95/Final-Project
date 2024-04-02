const {User, BlogPost} = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
    Query: {
        users: async () => {
            return User.find({})
        },
        // user: async (parent, {username}) => {
        //     return User.findOne({ username })
        // },
        // blogPosts: async (parent, {blogPostId}) => {
        //     const params = username ? { username } : {};
        //     return BlogPost.find(params).sort({ createdAt: -1});
        // },
        // blogPost: async (parent, {blogPostId}) => {
        //     return BlogPost.findOne({ _id: blogPostId});
        // },
        // me: async (parent, args, context) => {
        //     if (context.user) {
        //       return User.findOne({ _id: context.user._id }).populate('thoughts');
        //     }
        //     throw AuthenticationError;
        //   },

    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
          },
        login: async (parent, { email, password }) => {
          const user = await User.findOne({ email });
          if (!user) {
            throw AuthenticationError
          }
          const correctPw = await user.isCorrectPassword(password);

          if (!correctPw) {
            throw AuthenticationError
          };
          
          const token = signToken(user);
          return { token, user }
        },

        deleteUser: async (parent, { userId }) => {
          return User.findOneAndDelete({ _id: userId })
        },

        addPost: async (parent, { blogTitle, blogText, blogAuthor }) => {
          return BlogPost.create({blogTitle, blogText, blogAuthor})
        },

        addComment: async (parent, { blogPostId, commentText }) => {
          return BlogPost.findOneAndUpdate(
            {_id: blogPostId},
            {
              $addToSet: { comments: { commentText } },
            },
            {
              new: true,
              runValidators: true,
            }
          );
        },

        removePost: async (parent, { blogPostId }) => {
          return BlogPost.findOneAndDelete({ _id: blogPostId});
        },
        
        removeComment: async (parent, { blogPostId, commentId }) => {
          return BlogPost.findOneAndUpdate(
            { _id: blogPostId },
            { $pull: { comments: { _id: commentId } } },
            { new: true }
          )
        },

      },
    };

    module.exports = resolvers;