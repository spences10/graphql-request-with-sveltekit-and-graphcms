import { GraphQLClient } from 'graphql-request'
const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_API
const SECRET_TOKEN = import.meta.env.VITE_SECRET_TOKEN

export const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: { Authorization: `Bearer ${SECRET_TOKEN}` },
})
