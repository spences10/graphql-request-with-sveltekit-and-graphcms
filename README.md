# GraphQL Request with SvelteKit and GraphCMS

Created with `npm init svelte@next`

Uses SvelteKit endpoints to keep credentials on the server:

```js
import { GraphQLClient } from 'graphql-request'
const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_API
const SECRET_TOKEN = import.meta.env.VITE_SECRET_TOKEN

export const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: { Authorization: `Bearer ${SECRET_TOKEN}` },
})
```

The `SECRET_TOKEN` is from Vite but used in a SvelteKit endpoint so
not exposed on the client.
