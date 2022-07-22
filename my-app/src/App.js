import logo from './logo.svg';
import './App.css';
import { useQuery } from '@tanstack/react-query'

function App() {

  const { data, error }  = useQuery(['hello-world'] ,()=>{
    return Promise.resolve(5)
    })
    console.log({error, data});


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
