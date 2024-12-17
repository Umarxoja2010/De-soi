
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './companents/Header';
import Footer from './companents/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
