import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'

import { PostIndexPageDocument } from '../graphql/generated.graphql'
import { urqlQuery } from '../graphql/urql-client'

type Props = {
  posts: {
    id: string
    title: string
  }[]
}

const Home: NextPage<Props> = (props) => {
  return (
    <div>
      <h1>トップページ</h1>
      <div>
        {props.posts.map((post) => (
          <div key={post.id}>
            <Link href={`/show/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // TODO: できればreturnもany以外の型を宣言したい
  const result = await urqlQuery(PostIndexPageDocument)

  return {
    props: {
      posts: result.data.posts,
    },
  }
}

export default Home
