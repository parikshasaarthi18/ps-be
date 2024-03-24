const Post = require("./models/post.model");
const Users = require("./models/user.model");

const resolvers = {
    Query: {
        hello: () => {
            return "Hello Express JS!!";
        },
        getAllPosts: async () => {
            return await Post.find();
        },
        getPostById: async (parent, {id}, context, info) => {
            return await Post.findById(id);
        },
        getAllUsers: async () => {
            return await Post.find()
        }
    },

    Mutation: {
        createPost: async (parent, args, context, info) => {
            // const { title, description } = args;
            const post = new Post(args.post);
            console.log("resp", args, post);
            await post.save();
            return post;
        },
        createUsers: async (parent, args, context, info) => {
            const {name, age} = args;
            const user = new Users({name, age});
            await user.save();
            return user;
        }
    }
};

module.exports = resolvers;
