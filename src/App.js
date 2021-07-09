
import './App.css';
import { Users, NavBar, Footer } from './Screens'

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <NavBar/>
        <Users/>
        {/* <Loader/> */}
      </div>
      <Footer/>      
    </div>
  );
}

export default App;
