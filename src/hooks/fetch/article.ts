import { format } from 'date-fns'
import { client } from '../../libs/newt'

const d = format(new Date(), 'yyyy-MM-dd')
const appUid = process.env.NEWT_API_APP_UID as string

// 記事一覧取得
export const getArticles = (limit: number) => {
  const response = client
    .getContents({
      appUid: appUid,
      modelUid: 'article',
      query: {
        release_date: { lte: d },
        order: ['-release_date'],
        limit: limit,
      },
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })
  return response
}

// 人気記事一覧取得
export const getPopularArticles = () => {
  const response = client
    .getContents({
      appUid: appUid,
      modelUid: 'article',
      query: {
        release_date: { lte: d },
        popular_flg: true,
        order: ['-release_date'],
        limit: 9,
      },
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })
  return response
}
