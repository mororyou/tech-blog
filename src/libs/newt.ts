import { createClient } from 'newt-client-js'

export const client = createClient({
  spaceUid: process.env.NEWT_API_SPACE_UID as string,
  token: process.env.NEWT_API_TOKEN as string,
  apiType: process.env.NEWT_API_TYPE as 'cdn' | 'api',
})
