import { client } from '../../libs/newt'

const appUid = process.env.NEWT_API_APP_UID as string

export const getPickupCategories = () => {
  const res = client
    .getContents({
      appUid: appUid,
      modelUid: 'tag',
      query: {
        pickup: true,
        limit: 10,
      },
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })
  return res
}
