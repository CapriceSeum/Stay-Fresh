import './App.css';
import './css/main.css'

import Navbar from './components/Navbar';
import Filter from './components/Filter.jsx';
import MyLocalisation from './components/MyLocalisation.jsx';


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

           <MyLocalisation /> {/*Ajout d'une fonctionnalité " Ma position plus tard " */}
      </div>

  );
}

export default App;
