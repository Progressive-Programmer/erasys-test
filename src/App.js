
import { useEffect } from 'react';
import './App.css';
import { actionType } from './Context/Reducer';
import { useStateValue } from './Context/StateProvider';
import { Users, NavBar, Footer } from './Screens'


function App() {
  const [{isOnline}, dispatch ] = useStateValue();
  useEffect(()=>{
    dispatch({type:actionType.SET_IS_ONLINE, isOnline:navigator.onLine})
    
  },[navigator.onLine])

  return (
    <div className="App">
      <div className="appContainer">
        <NavBar/>
        <Users/>
      </div>
    </div>
  );
}

export default App;
