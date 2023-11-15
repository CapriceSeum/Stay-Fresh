import './App.css';
import FountainDrinkAPI from './components/FountainDrinkAPI';
import Navbar from './components/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import Filter from './components/Filter.jsx'


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


        <div className='searchbar'>
          <SearchIcon className='searchbar-icon' sx={{ fontSize: '2rem' }} />
          <input type="text" className='searchbar-input'  placeholder='Veuillez indiquez la ville ou de la rue...' />
        </div>
        
        <Filter />

        <FountainDrinkAPI />

      </main>
    

    </div>
  );
}

export default App;
