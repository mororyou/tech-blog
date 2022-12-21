import H2Title from '../components/h2title'
import NewArticles from './newArticles'
import PopularArticles from './popularArticles'
import PickupCategories from './pickupCategories'

const Page = () => {
  return (
    <div className="mx-auto mb-8 flex w-11/12 flex-col md:mb-16 md:w-8/12">
      <H2Title span="新着" engSpan="new" />
      {/* @ts-ignore */}
      <NewArticles />

      <H2Title span="人気" engSpan="popularity" />
      {/* @ts-ignore */}
      <PopularArticles />

      <H2Title span="ピックアップ" engSpan={'pickup'} />
      {/* @ts-ignore */}
      <PickupCategories />
    </div>
  )
}

export default Page
