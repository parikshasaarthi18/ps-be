const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Post {
    id: ID,
    title: String,
    description: String
  }
  type Users {
    id: ID,
    name: String,
    age: Int
  }
  type Query {
    hello: String,
    getAllPosts: [Post],
    getPostById(id: ID): Post,
    getAllUsers: [Users]
  }

  input PostInput {
    title: String,
    description: String
  }

  input UserInput {
    name: String,
    age: Int
  }

  type Mutation {
    createPost(post: [PostInput]): Post,
    createUsers(users: UserInput): Users
  }
`;

module.exports = typeDefs;