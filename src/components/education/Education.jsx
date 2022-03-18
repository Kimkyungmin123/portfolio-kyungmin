import { useState } from 'react';
import './education.scss';

export default  function Education ()  {

    const list = [
        {
            id : 1,
            date: "2021. 08",
            title : "99일 완주반 프론트엔드 개발자되기",
            inst : "제로베이스",
        },
        {
            id : 2,
            date: "2021. 06",
            title : "김민태의 프론트엔드아카데미",
            inst : " 패스트캠퍼스",
        },
        {
            id : 3,
            date: "2021. 02",
            title : "산업공학부 디자인공학전공 졸업",
            inst : "금오공과대학교",
        },
        {
            id : 4,
            date: "2021. 01",
            title : "HTML/CSS/JavsScript 기초",
            inst : "인프런",
        },
    ];

    return (
        <div className='education' id='education'>
            <h1>Education</h1>
            <div className='container'>
                {list.map((data)=>(
                    <div className='eduData'>
                        <span className='date'>{data.date}</span>
                        <span className='title'>{data.title}</span>
                        <span className='inst'>{data.inst}</span>
                    </div>
                ))}
            </div>
            <sapn className="circle"></sapn>
        </div>
    );
}
