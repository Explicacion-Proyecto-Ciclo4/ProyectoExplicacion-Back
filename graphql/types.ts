import { gql } from 'apollo-server-express';

const typeDefs = gql`
   
   type User {
      _id: ID!
      name: String!
      lastName: String!
      email: String!
      document: String!
      role: Enum_Rol
      status: Enum_EstadoProyecto
   }
   type Project {
      _id: ID
      name: String!
      budget: Float!
      startDate: Date!
      finishDate: Date
      projectStatus: Enum_EstadoProyecto
      projectPhase: Enum_EstadoProyecto
      leader: User!
   }
   type Query {
      Users: [User]
      User(_id: ID!): User
      Projects: [Project]
   }
   type Mutation {
      createUser(
         name: String!
         lastName: String!
         email: String!
         document: String!
         role: Enum_Rol
         status: Enum_EstadoProyecto
      ): User
      updateUser(
         name: String!
         lastName: String!
         email: String!
         document: String!
         role: Enum_Rol
         status: Enum_EstadoProyecto
      ): User
      deleteUser(id: ID!): User
   }
`;

export default typeDefs;