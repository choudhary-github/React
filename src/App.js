// import logo from './logo.svg';
import './App.css';
import { useMutation, useQuery } from '@tanstack/react-query'
import { useState } from 'react';
import queryClient from './react-query-client';

const fetcher = (url, body) => fetch(url,{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})

function App(){
  const [tempLang,setTempLang] = useState('')
  const mutation = useMutation((body) => fetcher(`/api/create-record`, body),{
    onSuccess(data){
      console.log('Got response from backend',{data});
      setTempLang('')
      queryClient.invalidateQueries('favLangs')
    },
    onError(error){
      console.log('Got error from backend',{error});
    }
  })
  
  const {data: favLangs, isLoading, isError } = useQuery(['favLangs'], () => {
    return fetch('/api/get-records').then(t => t.json())
  },{
    select: data => data.lang
  })

  function callMutation(){
    mutation.mutate({record: tempLang})
  }

  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(isError){
    return <p>Error with Req</p>
  }


  return(
    <div className='App'>
      <h1>Some fav languages...</h1>
    {
      favLangs.map(lang => {
        return <li key={lang}>{lang}</li>
      })
    }
    <input type='text' value={tempLang} onChange={e => setTempLang(e.target.value)} />
      <button onClick={callMutation}>Click me</button>
    </div>
  )
}

export default App;
