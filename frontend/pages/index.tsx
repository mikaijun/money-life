import type { GetServerSideProps, NextPage } from 'next'
import { PostIndexPageDocument } from '../src/graphql/generated.graphql'
import { urqlClient } from '../src/libs/gql-requests'

type Props = {
  posts: {
    id: string
    title: string
  }[]
}

const Home: NextPage<Props> = (props) => {
  return (
    <div>
      <main>
        <ul>
          {props.posts.map((post) => (
            <li key={post.id}>
              id: {post.id} title: {post.title}
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const client = await urqlClient()

    const result = await client.query(PostIndexPageDocument, {}).toPromise()

    return {
      props: {
        posts: result.data.posts,
      },
    }
  } catch (e) {
    console.error(e)
    return {
      notFound: true,
    }
  }
}

export default Home
