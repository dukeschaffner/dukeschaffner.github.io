import './App.css';
import {SiteNavbar} from './components/Navbar/Navbar.js'
import About from './pages/About/About.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App outer">
      <SiteNavbar/>
      <div className="inner">
        <About/>
      </div>
      
    </div>
  );
}


export default App;
