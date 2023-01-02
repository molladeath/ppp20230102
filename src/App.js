import {useState} from 'react';
import './App.css';

function App() {
  const [open , setToggle] = useState(true);
  return (
    <div className={open ?"white" :"dark"} >
      <button onClick={()=> { setToggle(!open);}}>바뀜</button>
    </div>
  );
}

export default App;
