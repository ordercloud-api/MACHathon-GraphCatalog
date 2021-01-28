const { gql } = require("apollo-server");

const typeDefs = gql`
  type Asset {
    id: String
    url: String
    contentType: String
    fileName: String
    size: Int
  }

  type Product {
    id: String
    name: String
    description: String
    price: Int
    quantityAvailable: Int
    images: [Asset]
  }

  type Query {
    products: [Product]!
  }
`;

module.exports = typeDefs;
