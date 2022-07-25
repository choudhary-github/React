import React from 'react'
import { useQuery } from '@tanstack/react-query'

const fetcher = url => fetch(url).then(res=>res.json())
const Post = ({postID, goBack}) => {

const { data, isLoading } = useQuery (["post", postID], () => fetcher(`https://jsonplaceholder.typicode.com/posts/${postID}`),{
  staleTime: 10000
})

  if(isLoading){
    return <p>Loading...</p>
  }
  return (
    <div>
        <a href='/#' onClick={goBack}>Go Back</a>
        <h1>{data.title}</h1>
        <h4>{data.body}</h4>
      </div>
  )
}

export default Post