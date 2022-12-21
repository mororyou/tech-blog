export type Article = {
  _id: string
  _sys: Object
  title: string
  description: string
  thumbnail: {
    altText: string
    description: string
    fileName: string
    fileSize: number
    fileType: string
    height: number
    metadata: Object
    src: string
    title: string
    width: number
  }
  content: string
  categories: Array<[]>
  release_flg: boolean
  release_date: string
  popular_flg: boolean
}
