// import logo from './logo.svg';
import './App.css';
import { useMutation } from '@tanstack/react-query'

const timer = duration => {
  return new Promise (resolve => {
    setTimeout(()=>{
      resolve()
      console.log('Sucessful');
    }, duration)
  })
}

function App(){

  const mutation = useMutation(() => timer(1000))

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
