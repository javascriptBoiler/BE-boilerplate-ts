import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql'
import GraphQLUser from './user-type'
import userResolver from '../resolvers'


const GraphQLUserQuery = new GraphQLObjectType({
  name: 'GraphQLListUserQuery',
  fields: {

    list: {
      type: GraphQLList(GraphQLUser),
      description: 'Get Users',
      resolve: userResolver.list,
    },

    byID: {
      type: GraphQLUser,
      description: 'Get User',
      args: {
        id: {
          type: GraphQLString,
          description: 'User ID',
        },
      },
      resolve: userResolver.byID,
    },
  },
})

export default GraphQLUserQuery
