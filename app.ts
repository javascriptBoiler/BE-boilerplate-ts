import express from 'express'
import bodyParser from 'body-parser'
import graphqlHTTP from 'express-graphql'
import mongoose from 'mongoose'
import expressValidator from 'express-validator'
import cors from 'cors'

import { schema } from './graphql/schema'
import isAuth from './middleware/is-auth'
import dotENV from 'dotenv'
dotENV.config()

const app: express.Application = express()

// eslint-disable-next-line no-warning-comments
// TODO: cane add permission handle for open routes
app.use(isAuth)

app.use(cors())
app.use(bodyParser.json())
app.use(expressValidator())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    context: (): any => ({ id: 1 }),
    graphiql: true,
  })
)

mongoose.Promise = global.Promise
mongoose.set('debug', true)

mongoose
  .connect(`${process.env.MONGO_USER}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connect to the DB')
    app.listen(process.env.PORT, (res, err): any => {
      if (err) {
        console.log(`something went wrong: ${err.message}`)
      }
      console.log(`Connect to the Server on port: ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })
