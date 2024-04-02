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
        //   login: async (parent, { email, password }) => {
        //     const user = await User.findOne({ email });
      
        //     if (!user) {
        //       throw AuthenticationError;
        //     }
      
        //     const correctPw = await user.isCorrectPassword(password);
      
        //     if (!correctPw) {
        //       throw AuthenticationError;
        //     }
      
        //     const token = signToken(user);
      
        //     return { token, user };
        //   },
        //   deleteUser: async (parent, { userId, blogPost, comment }, context) => {
        //     if(context.user) {
        //         const user = await User.findOneAndDelete({
        //             _id: userId,
        //         });
        //         await User.findOneAndUpdate(
        //             {$pull: { blogPost: blogPost._id, comment: comment._id}},
        //         );
        //         return user;
        //     }
        //     throw AuthenticationError;
        //   },

        //   addPost: async (parent, { blogText }, context) => {
        //     if (context.user) {
        //       const post = await BlogPost.create({
        //         blogTitle,
        //         blogText,
        //        blogAuthor: context.user.username,
        //       });
      
        //       await User.findOneAndUpdate(
        //         { _id: context.user._id },
        //         { $addToSet: { blogPost: post._id } }
        //       );
      
        //       return post;
        //     }
        //     throw AuthenticationError;
        //     ('You need to be logged in!');
        //   },
        //   addComment: async (parent, { blogPostId, commentText }, context) => {
        //     if (context.user) {
        //       return BlogPost.findOneAndUpdate(
        //         { _id: blogPostId },
        //         {
        //           $addToSet: {
        //             comments: { commentText, commentAuthor: context.user.username },
        //           },
        //         },
        //         {
        //           new: true,
        //           runValidators: true,
        //         }
        //       );
        //     }
        //     throw AuthenticationError;
        //   },
        //   removeBlog: async (parent, { blogPostId }, context) => {
        //     if (context.user) {
        //       const post = await BlogPostt.findOneAndDelete({
        //         _id: blogPostId,
        //         blogAuthor: context.user.username,
        //       });
      
        //       await User.findOneAndUpdate(
        //         { _id: context.user._id },
        //         { $pull: { post: post._id } }
        //       );
      
        //       return post;
        //     }
        //     throw AuthenticationError;
        //   },
        //   removeComment: async (parent, {blogPostId, commentId }, context) => {
        //     if (context.user) {
        //       return BlogPost.findOneAndUpdate(
        //         { _id: blogPostId },
        //         {
        //           $pull: {
        //             comments: {
        //               _id: commentId,
        //               commentAuthor: context.user.username,
        //             },
        //           },
        //         },
        //         { new: true }
        //       );
        //     }
        //     throw AuthenticationError;
        //   },
        },
    };

    module.exports = resolvers;