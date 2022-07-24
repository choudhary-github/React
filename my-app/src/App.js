// import logo from './logo.svg';
import './App.css';
import { useMutation } from '@tanstack/react-query'

const timer = duration => {
  return new Promise ((resolve, reject) => {
    setTimeout(()=>{
      resolve(1000)
      console.log('Successful');
    }, duration)
  })
}

function App(){

  const mutation = useMutation(() => timer(1000),{
    onSuccess(data){
      console.log('request is completed',{data});
    },
    onError(error){
      console.log('Error with req',{error});
    },
    onSettled(){
      console.log('request either error or successful');
    }
  })

  async function callMutation(){
    console.log('updating post...');
    await mutation.mutateAsync()
    console.log('post updated');
  }

  return(
    <div className='App'>
      <h1>Mutation</h1>
      <button onClick={callMutation}>Click me</button>
    </div>
  )
}

export default App;
