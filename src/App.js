// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Gallery from "./components/Gallery/Gallery";
import Information from "./components/Information/Information";
import Regis from './components/Registration/Regis';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Banner/>
      <Information/>
      <Banner2/>
      <Gallery/>
      <Regis/>
      <Footer/>
    </div>
  );
}

export default App;
