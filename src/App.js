import {useState} from 'react';
import './App.css';

function App() {
  const [open , setToggle] = useState(true);
  return (
    <div className='body openpopup' >
      <div id = 'pop'>
        <button>닫기</button>
        <p>화면 정가운데</p>
      </div>
    </div>
  );
}

export default App;
