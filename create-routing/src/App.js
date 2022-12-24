
import './App.css';
import OrderCom from './components/pages/order';
import SuplaCom from './components/pages/supla';
import { Route, Routes } from "react-router-dom"; 
import CustomerCom from './components/pages/customer';
import ProdiedCom from './components/pages/prodied';
import Header from './components/pages/header';
function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path="/suplacom" element={<SuplaCom/>}/>
     <Route path="/ordercom" element={<OrderCom />} />
     <Route path="/customercom" element={<CustomerCom />} />
     <Route path="/prodiedcom" element={<ProdiedCom/>}/>
     </Routes>
    </div>
  );
}

export default App;
