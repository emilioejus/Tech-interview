import logo from './logo.svg';
// import AddOne from './component/AddOne';
import './App.css';
import Header from './component/Header';
import Marker from './component/Marker';

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Marker/>
    </div>
  );
}

export default App;
