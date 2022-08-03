import React, { useContext } from "react";
import Context from './Context'

function RemoteComponent() {
  const {state} = useContext(Context)

  const background = state.theme === 'dark' ? 'black' : 'yellow'
  const color = state.theme === 'dark' ? 'white' : 'black' 
  return (
    <div>
      <h1 style={{background, color}}>See the Effect</h1>
      <RemoteComponent2/>
    </div>
  );
}
function RemoteComponent2(){
  const {state, dispatch} = useContext(Context)
  return(
    <div>
      <h3 onClick={()=>{
        if (state.theme === 'dark') {
          dispatch({type:'SET_LIGHT_THEME'})
        } else {
          dispatch({type:'SET_DARK_THEME'})          
        }
        }}>mode: {state.theme}</h3>
    </div>
  )
}
export default RemoteComponent;
