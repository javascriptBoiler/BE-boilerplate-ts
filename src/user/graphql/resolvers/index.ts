import { UserResolver } from './user-resolver'
const {
  rootResolver, login, list, byID
} = UserResolver

export = {
  root: rootResolver,
  login,
  list,
  byID,
};
