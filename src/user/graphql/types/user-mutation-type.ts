import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql'

import GraphQLUser from './user-type'
import userResolver from '../resolvers'


const GraphQLUserMutations = new GraphQLObjectType({
  name: 'UserMutations',
  fields: {
    login: {
      type: GraphQLUser,
      resolve: userResolver.login,
      description: 'User Login',
      args: {
        name: {
          type: GraphQLNonNull(GraphQLString),
          description: 'Name Of The User',
        },
        email: {
          type: GraphQLNonNull(GraphQLString),
          description: 'Email Of The User',
        },
        password: {
          type: GraphQLNonNull(GraphQLString),
          description: 'Password Of The User',
        },
      },
    },
  },
})

export default GraphQLUserMutations
