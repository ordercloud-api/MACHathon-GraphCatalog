const { gql } = require('apollo-server');

const typeDefs = gql`
    type Launch {
        id: ID!
        site: String
        mission: Mission
        rocket: Rocket
        isBooked: Boolean!
    }

    type Rocket {
        id: ID!
        name: String
        type: String
    }

    type User {
        id: ID!
        email: String!
        trips: [Launch]!
        token: String
    }

    type Mission {
        name: String
        missionPatch(size: PatchSize): String
    }

    type TripUpdateResponse {
        success: Boolean!
        message: String
        launches: [Launch]
    }

    enum PatchSize {
        SMALL
        LARGE
    }

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
        launches: [Launch]!
        launch(id: ID!): Launch
        me: User
    }

    type Mutation {
        bookTrips(launchIds: [ID]!): TripUpdateResponse!
        cancelTrip(launchId: ID!): TripUpdateResponse!
        login(email: String): User
    }
`;

module.exports = typeDefs;