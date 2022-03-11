import { useState } from 'react';
import './works.scss';

export default  function Works(){
    const [currentSlide,setCurrentSlide] = useState(0)
    const data =[
        {
            id:"1",
            icon: "./assets/mobile.png",
            title:"mobile develop",
            desc:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit Consequuntur perspiciatis.",
            img:
            "https://mblogthumb-phinf.pstatic.net/MjAyMDAxMzBfNzIg/MDAxNTgwMzczMDQzODcw.2_Dy_s_6UVMRCgH3eGkxZY7RGb3W-60XvUdWhZLQU5og.U-zGnRffLXGGLQmwzww0ypjk-2cxPURsUWamnBZ6VlMg.PNG.kosoodream/2020%EC%9B%B9%EB%94%94%EC%9E%90%EC%9D%B8%ED%8A%B8%EB%A0%8C%EB%93%9C_7-1.png?type=w800"
        },
        {
            id:"2",
            icon: "./assets/globe.png",
            title:"Web develop",
            desc:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit Consequuntur perspiciatis.",
            img:
            "https://i.pinimg.com/originals/d5/e7/cd/d5e7cd468409fe19b467b175dd2d1471.png"
        },
        {
            id:"3",
            icon: "./assets/writing.png",
            title:" Design",
            desc:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit Consequuntur perspiciatis.",
            img:
            "https://mblogthumb-phinf.pstatic.net/MjAyMDAxMzBfMjM1/MDAxNTgwMzcyMjk2ODc3.UgDv6KO7sjtV4Xz93P39ruHttt9_P_CYNnoiJP05gjEg.njle4EOtJRkwz14qAWSJ97diVcKqEcfLm9rNBZY3fbsg.JPEG.kosoodream/2020%EC%9B%B9%EB%94%94%EC%9E%90%EC%9D%B8%ED%8A%B8%EB%A0%8C%ED%8A%B8_4-1.jpg?type=w800"
        },
    ];

    const handleClick = (way)=>{
        way ==="left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
        : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
    }

    return (
        <div className='works' id='works'>
            <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`  }}>
                {data.map((d)=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>    
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img 
                            src="https://i.pinimg.com/736x/e6/43/ed/e643edf75d28ef4a77dc71a35419cc9c.jpg" 
                            alt="" />
                        </div>
                    </div> 
                        
                </div>
                ))
                }
            </div> 
            <img src="assets/arrow.png" className='arrow left' alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className='arrow right' alt="" onClick={()=>handleClick()}/>
        </div>
    );
};
