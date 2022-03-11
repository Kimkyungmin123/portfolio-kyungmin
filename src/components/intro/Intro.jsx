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
                    <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f5b39376-d37b-4b7d-adc9-e4f5c49ab79a/me.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220311T081018Z&X-Amz-Expires=86400&X-Amz-Signature=90459b5e625f7ccc19400b2d9448e25e8b95589e494e8e213a4fa29cc6efb085&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22me.png%22&x-id=GetObject" alt="" />
                    </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>안녕하세요🙋‍♀️ </h2>
                    <h3><span ref={textRef}> </span></h3>
                    <h1>FE 개발자 김경민 입니다.</h1>
                    
                </div>    
                <a href='#portfolio'>
                    <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d73ff0bb-e094-44db-bbe9-3e30f5076e57/down.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220311T081226Z&X-Amz-Expires=86400&X-Amz-Signature=ec4ab6754c2a644db720b957b9fbbee8d120604b2d2a90067c1b4474e672e9cb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22down.png%22&x-id=GetObject" alt="" />
                </a>
            </div>
        </div>
    );
};