import { DocumentNode } from 'graphql'
import { initUrqlClient } from 'next-urql'
import { Client, OperationResult } from 'urql'

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT!

export function urqlClient(): Promise<Client> {
  return new Promise((resolve, reject) => {
    const client = initUrqlClient(
      {
        url: GRAPHQL_ENDPOINT,
      },
      false,
    )
    if (!client) {
      reject(Error('Failed to init initUrqlClient.'))
    } else {
      resolve(client)
    }
  })
}

export async function urqlQuery(
  documentNode: DocumentNode,
  // TODO: もっと詳しく型宣言したい
  args?: object,
): Promise<OperationResult> {
  // TODO: エラーハンドリングを行う
  const client = await urqlClient()
  const result = await client.query(documentNode, args).toPromise()

  return result
}
