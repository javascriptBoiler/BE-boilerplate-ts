import {
  GraphQLObjectType,
} from 'graphql'

import user from '../../src/user/graphql'

export const userQuery = new GraphQLObjectType({
  name: 'Query',
  fields: ():any => ({
    user: {
      type: user.types.GraphQLUserQuery,
      description: 'User Queries',
      resolve: user.resolvers.root,
    },
  }),
})
