// import logo from './logo.svg';
import './App.css';
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import Post from './Post';
import queryClient from './react-query-client';

const fetcher = url => fetch(url).then(res=>res.json())
function App(){

  const { isLoading, data: posts } = useQuery(['posts'], () => fetcher('https://jsonplaceholder.typicode.com/posts'),{select: result => result.slice(0,6)}) // it gives us the control to limit the no of post.
  // console.log(posts);
  const[postID,setPostID] = useState(null)

  if(isLoading){
    return <h1>Loading...</h1>
   }
  if(postID !== null){
        return <Post postID={postID} goBack={()=> setPostID(null)}/>
  }

  return(
    <div className='App'>
      {posts.map(post=>{
          const cachedPost = queryClient.getQueryData(['post', post.id])
        return <p key={post.id}>
          <a onClick={() => setPostID(post.id)} href='/#'>{post.id} - {post.title}</a>{cachedPost?<b>(visited)</b>:''}</p>
      })}
    </div>
  )
}

export default App;
