import logo from './logo.svg';
import './App.css';
import Productdetailpage from './component/Productdetailpage';
import Product from './component/Product';
import Allroutes from './routes/Allroutes';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Product/> */}
    {/* <Productdetailpage/> */}
    <Navbar/>
    <Allroutes/>
    </div>
  );
}

export default App;
