
import './App.css';
import { Users, NavBar, Footer } from './Screens'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="appContainer">
        <Users/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
