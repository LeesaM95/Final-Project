const { User, BlogPost } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth')

//ad a resolver for updating pass, user, and email

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('posts')
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('posts')
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return BlogPost.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { blogPostId }) => {
      return BlogPost.findOne({ _id: blogPostId })
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('posts')
      }
      throw AuthenticationError;
    },
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

    addPost: async (parent, { title, text, author }) => {
      return BlogPost.create({ title, text, author })
    },

    addComment: async (parent, { blogPostId, text }) => {
      return BlogPost.findOneAndUpdate(
        { _id: blogPostId },
        {
          $addToSet: { comments: { text } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    removePost: async (parent, { blogPostId }) => {
      return BlogPost.findOneAndDelete({ _id: blogPostId });
    },

    removeComment: async (parent, { blogPostId, commentId }) => {
      return BlogPost.findOneAndUpdate(
        { _id: blogPostId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      )
    },

    updateUsername: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndUpdate({username: context.user.username})
      }
    },
    updateEmail: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndUpdate({email: context.user.email})
      }
    },
    updatePassword: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndUpdate({password: context.user.password})
      }
    }

  },
};

module.exports = resolvers;