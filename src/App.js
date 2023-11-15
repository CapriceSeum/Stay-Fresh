import './App.css';
import './css/font.css'
import './css/main.css'

import Navbar from './components/Navbar';
import Filter from './components/Filter.jsx';


function App() {

  return (

      <div className="App">

        <header>
          <Navbar />

          <div className='container'>
            <h3>Accedez avec facilité toutes les ressources vous permettant de lutter contre la chaleur !</h3>
          </div>
          
        </header>
        <main>
          <Filter />
        </main>
      </div>

  );
}

export default App;
