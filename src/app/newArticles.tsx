import Link from 'next/link'
import { getArticles } from '../hooks/fetch/article'
import { Article } from '../types/article'

const NewArticles = async () => {
  const articles = await getArticles(12)

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

export default NewArticles
