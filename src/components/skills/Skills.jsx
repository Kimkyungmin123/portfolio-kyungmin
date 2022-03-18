import './skills.scss';


export default function Skills(){

    const cardData = [{
        id: 1,
        name : "HTML5",
        img:"https://icon-library.com/images/html5-icon/html5-icon-13.jpg",
        desc :"웹 표준을 고려하여 Semantic Markup 작업을 합니다.",
    },

    {
        id: 2,
        name : "CSS",
        img:"https://i.pinimg.com/originals/a3/2f/83/a32f83aa2c675058e4a05a0fd4da05eb.png",
        desc :"CSS3 문법을 사용해서 레이아웃을 디자인할 수 있습니다. ",
        featured:true,
    },

    {
        id: 3,
        name : "JAVASCRIPT",
        img:"https://media.vlpt.us/images/ek615/post/e849d783-daef-40f9-be31-f2b81f39ccc5/javascript2.png",
        desc :"ES6문법으로 개발합니다.",
    },

    {
        id: 5,
        name : "SASS",
        img:"https://heropy.blog/css/images/vendor_icons/sass.png",
        desc :"SASS 문법으로 레이아웃을 디자인합니다",
    },

    {
        id: 4,
        name : "REACT",
        img:"https://images.velog.io/images/srparkgogo/post/c9d550d8-bc0a-4d18-9cf7-60e347f2178b/512px-React-icon.svg.png",
        desc :"함수형 컴포넌트 단위로 개발하고, Hook을 적재적소에 사용합니다",
    }];

    return (
        <div className='skills' id='skills'>
            <h1>Skills</h1>
            <div className="container">
                {cardData.map(c=>(                
                <div className= "card">
                    <div className="top">
                            <h3>{c.name}</h3>
                            <img 
                            className="icon"
                            src={c.img}
                            alt="" />
                    </div>
                    <div className="center">
                        {c.desc}
                        </div>
                </div>
                ))}
            </div>
        </div>
    );
};