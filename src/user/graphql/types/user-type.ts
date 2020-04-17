import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
} from 'graphql'

const GraphQLUser = new GraphQLObjectType({
  name: 'User',
  description: 'User info',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLID),
      description: 'User Id',
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
      description: 'User Name',
    },
    token: {
      type: GraphQLNonNull(GraphQLString),
      description: 'User Token',
    },
  },
})

export default GraphQLUser
