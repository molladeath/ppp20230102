import React , { useState }from 'react';

function Notice(props) {
    const [noticels, noticeSet] = useState (['img1','img2','img3']);
    let number = 0;
    return (
        <div>
            <h3>{props.title}</h3>
            <p>
            <button onClick={
                ()=>{
                    number++
                    const newNoticels = [...noticels, '새로운이미지'+number]
                    noticeSet(newNoticels);
                }
            }>후기</button><button>상품</button>
            </p>
            <ul>
                {
                    noticels.map((item, index)=>{
                        return(
                            <li>{item}</li>
                        )
                    })
                }

            </ul>
        </div>
    );
}

export default Notice;