
import './App.css';
import HeaderCom from './layouts';
import {Route, Routes} from "react-router-dom"
import HomePage from './homepage';


function App() {
  return (
    
    <div className="App">
      
      <HeaderCom/>
      
     <Routes>
<Route path="/" element={<HomePage/>}/>

    </Routes> 

    </div>
  );
}

export default App;
