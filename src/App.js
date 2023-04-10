import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/Home/Home';
import FavList from './components/Favlist/Favlist';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Header/>
    <div id = 'main'>
      <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/favorite' element = {<FavList/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
