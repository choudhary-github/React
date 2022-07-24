// import logo from './logo.svg';
import './App.css';
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import Post from './Post';

const fetcher = url => fetch(url).then(res=>res.json())
function App(){

  const { isLoading, data: posts } = useQuery(['posts'], () => fetcher('https://jsonplaceholder.typicode.com/posts'))
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
        return <p key={post.id}>
          <a onClick={() => setPostID(post.id)} href='/#'>{post.id} - {post.title}</a></p>
      })}
    </div>
  )
}

export default App;
