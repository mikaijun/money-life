import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type CommentDto = {
  __typename?: 'CommentDto'
  content: Scalars['String']
  createdAt: Scalars['DateTime']
  deletedAt?: Maybe<Scalars['DateTime']>
  id: Scalars['Int']
  postId: Scalars['Int']
  updatedAt: Scalars['DateTime']
  userId: Scalars['Int']
}

export type CommentSaveDto = {
  content: Scalars['String']
  deletedAt?: InputMaybe<Scalars['DateTime']>
  id?: InputMaybe<Scalars['Float']>
  postId: Scalars['Float']
  userId: Scalars['Float']
}

export type Mutation = {
  __typename?: 'Mutation'
  saveComment: CommentDto
  savePost: PostDto
}

export type MutationSaveCommentArgs = {
  input: CommentSaveDto
}

export type MutationSavePostArgs = {
  input: PostSaveDto
}

export type PostDto = {
  __typename?: 'PostDto'
  content: Scalars['String']
  createdAt: Scalars['DateTime']
  deletedAt?: Maybe<Scalars['DateTime']>
  id: Scalars['Int']
  publishAt?: Maybe<Scalars['DateTime']>
  title: Scalars['String']
  updatedAt: Scalars['DateTime']
  userId: Scalars['Int']
}

export type PostSaveDto = {
  content: Scalars['String']
  deletedAt?: InputMaybe<Scalars['DateTime']>
  id?: InputMaybe<Scalars['Float']>
  isDraft?: InputMaybe<Scalars['Boolean']>
  title: Scalars['String']
  userId: Scalars['Float']
}

export type Query = {
  __typename?: 'Query'
  comment: Array<CommentDto>
  post?: Maybe<PostDto>
  posts?: Maybe<Array<PostDto>>
}

export type QueryCommentArgs = {
  postId: Scalars['Int']
}

export type QueryPostArgs = {
  id: Scalars['Int']
}

export type PostIndexPageQueryVariables = Exact<{ [key: string]: never }>

export type PostIndexPageQuery = {
  __typename?: 'Query'
  posts?: Array<{ __typename?: 'PostDto'; id: number; title: string }> | null
}

export type PostShowPageQueryVariables = Exact<{
  id: Scalars['Int']
}>

export type PostShowPageQuery = {
  __typename?: 'Query'
  post?: {
    __typename?: 'PostDto'
    id: number
    title: string
    userId: number
    content: string
    publishAt?: any | null
    createdAt: any
    deletedAt?: any | null
    updatedAt: any
  } | null
}

export const PostIndexPageDocument = gql`
  query PostIndexPage {
    posts {
      id
      title
    }
  }
`

export function usePostIndexPageQuery(
  options?: Omit<Urql.UseQueryArgs<PostIndexPageQueryVariables>, 'query'>,
) {
  return Urql.useQuery<PostIndexPageQuery, PostIndexPageQueryVariables>({
    query: PostIndexPageDocument,
    ...options,
  })
}
export const PostShowPageDocument = gql`
  query PostShowPage($id: Int!) {
    post(id: $id) {
      id
      title
      userId
      content
      publishAt
      createdAt
      deletedAt
      updatedAt
    }
  }
`

export function usePostShowPageQuery(
  options: Omit<Urql.UseQueryArgs<PostShowPageQueryVariables>, 'query'>,
) {
  return Urql.useQuery<PostShowPageQuery, PostShowPageQueryVariables>({
    query: PostShowPageDocument,
    ...options,
  })
}
