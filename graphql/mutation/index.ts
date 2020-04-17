import { GraphQLObjectType } from 'graphql'

import user from '../../src/user/graphql'


export = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    user: {
      type: user.types.GraphQLUserMutations,
      description: 'User mutation',
      resolve: user.resolvers.root,
    },
  },
});
