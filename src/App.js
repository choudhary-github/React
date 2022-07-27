// import logo from './logo.svg';
import './App.css';
import { useMutation } from '@tanstack/react-query'

const fetcher = (url, body) => fetch(url,{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})

function App(){

  const mutation = useMutation((body) => fetcher('/api/create-record', body),{
    onSuccess(data){
      console.log('Got response from backend',{data});
    },
    onError(error){
      console.log('Got error from backend',{error});
    }
  })

  function callMutation(){
    mutation.mutate()
  }

  return(
    <div className='App'>
      <h1>Some fav languages...</h1>
      <form action="./post" method="post"
			className="form">
		<button type="submit">Connected?</button>
		</form>
      <button onClick={callMutation}>Click me</button>
    </div>
  )
}

export default App;
