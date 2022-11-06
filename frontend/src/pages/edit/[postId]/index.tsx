import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'

import { PostShowPageDocument } from '../../../graphql/generated.graphql'
import { urqlQuery } from '../../../graphql/urql-client'

type Props = {
  post: {
    id: number
    title: string
    userId: number
    content: string
    publishAt: Date
    createdAt: Date
    deletedAt: Date
    updatedAt: Date
  }
}

const Edit: NextPage<Props> = (props) => {
  return (
    <div>
      <h1>編集ページ</h1>
      <h2>タイトル: {props.post.title}</h2>
      {/* TODO: 作者名を出したい */}
      <h3>作者: {props.post.userId}</h3>
      <h3>内容: {props.post.content}</h3>
      {/* TODO: 日時を整形したい */}
      <h4>公開日時: {props.post.publishAt}</h4>
      <h4>更新日時: {props.post.updatedAt}</h4>
      <Link href={`/edit/${props.post}`}>編集する</Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // TODO: できればreturnもany以外の型を宣言したい
  const result = await urqlQuery(PostShowPageDocument, { id: 1 })

  return {
    props: {
      post: result.data.post,
    },
  }
}

export default Edit
