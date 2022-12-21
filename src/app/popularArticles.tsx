import Link from 'next/link'
import { getPopularArticles } from '../hooks/fetch/article'
import { Article } from '../types/article'

const PopularArticles = async () => {
  const articles = await getPopularArticles()

  return (
    <div className="grid-layout">
      {articles &&
        articles.items.map((article: Article) => {
          return (
            <Link
              href={`/article/${article._id}`}
              className="col-span-4"
              key={article._id}
            >
              <div>{article.title}</div>
            </Link>
          )
        })}
    </div>
  )
}

export default PopularArticles
