import './intro.scss';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';

export default  function Intro(){
    const textRef = useRef();
    
    useEffect(()=>{
        init(textRef.current, { 
            showCursor: false, 
            backDelay:1500,
            backSpeed: 60,
            showCursor: true,

            strings: ['성장하는', '열정뿜뿜', '긍정적인'] })    
    }, [])
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/me.png" alt="" />
                    </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>안녕하세요🙋‍♀️ </h2>
                    <h3><span ref={textRef}> </span>FE 개발자</h3>
                    <h1>김경민 입니다.</h1>
                    
                </div>    
                <a href='#portfolio'>
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    );
};