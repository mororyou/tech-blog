import Image from 'next/image'
import Link from 'next/link'
import { getPickupCategories } from '../hooks/fetch/category'
import { Category } from '../types/category'

const PickupCategories = async () => {
  const categories = await getPickupCategories()
  return (
    <div className=" mb-8 grid grid-cols-5 gap-y-4 md:mb-16 md:gap-x-8 md:gap-y-12">
      {categories &&
        categories.items.map((category: Category) => {
          return (
            <Link
              href={`/category/${category._id}/`}
              key={category._id}
              className="pickup-card"
            >
              {/* <div className="pickup-card2 flex flex-col items-center justify-center"> */}
              <div className="mx-auto flex h-full w-1/2 items-center">
                <Image
                  src={category.image}
                  alt={category.tag_name}
                  className=""
                />
              </div>
              {/* </div> */}
            </Link>
          )
        })}
    </div>
  )
}

export default PickupCategories
