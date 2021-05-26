import logo from './logo.svg';
// import AddOne from './component/AddOne';
import './App.css';
import Header from './component/Header';
import Marker from './component/Marker';
import TableResults from './component/TableResults';
import Footer from './component/Footer';
import Fibonacci from './component/Fibonacci';

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Marker/>
      <Fibonacci/>
      <TableResults/>
      <Footer/>
    </div>
  );
}

export default App;
