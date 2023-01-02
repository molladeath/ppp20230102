
import React ,{ useState }from 'react';

function QQQ(props) {
    const [qqqopen , qqqSet] = useState(true);
    return (
        <div id= "qqq"> 
            <ui>
                <li onClick={()=>{qqqSet(!qqqopen)}}>온라인상담</li>
                <li onClick={{}}>온라인예약</li>
                <li onClick={{}}>FAQ</li>
            </ui>
            <div id='qqqbox' className={qqqopen ? '' : 'show'}>
                <button onClick={()=>{qqqSet(!qqqopen)}}>닫기</button>
                폼태그 넣기
            </div>
        </div>
    );
}

export default QQQ;