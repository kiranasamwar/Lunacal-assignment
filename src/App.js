import './App.css';
import Gallery from './components/Gallery/Gallery';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     <div className="left-side"></div>
     <div className="right-side">
      <Navbar/>
      <Gallery/>
     </div>
    </div>
  );
}

export default App;
