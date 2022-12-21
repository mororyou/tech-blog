export type Category = {
  _id: string
  _sys: Object
  title: string
  tag_name: string
  pickup: boolean
  order: number
  image: {
    _id: 'imageId'
    fileName: string
    fileSize: number
    fileType: string
    height: number
    metadata: Object
    src: string
    title: string
    width: number
  }
}
