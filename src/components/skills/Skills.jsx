import './skills.scss';

export default function Skills(){

    const cardData = [{
        id: 1,
        name : "HTML5",
        img:"https://icon-library.com/images/html5-icon/html5-icon-13.jpg",
        desc :"HTML 기술 역량 Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere labore enim optio error ea, consequatur ratione quas",
        

    },
    {
        id: 2,
        name : "CSS",
        img:"https://i.pinimg.com/originals/a3/2f/83/a32f83aa2c675058e4a05a0fd4da05eb.png",
        desc :"CSS 기술 역량Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere labore enim optio error ea, consequatur ratione quas",
        featured:true,

    },
    {
        id: 3,
        name : "JAVASCRIPT",
        img:"https://media.vlpt.us/images/ek615/post/e849d783-daef-40f9-be31-f2b81f39ccc5/javascript2.png",
        desc :"JAVASCRIPT 기술 역량Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere labore enim optio error ea, consequatur ratione quas",
    

    },
    {
        id: 5,
        name : "SASS",
        img:"https://heropy.blog/css/images/vendor_icons/sass.png",
        desc :"SASS 기술 역량 Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere labore enim optio error ea, consequatur ratione quas",
    

    },
    {
        id: 4,
        name : "REACT",
        img:"https://images.velog.io/images/srparkgogo/post/c9d550d8-bc0a-4d18-9cf7-60e347f2178b/512px-React-icon.svg.png",
        desc :"REACT 기술 역량Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere labore enim optio error ea, consequatur ratione quas",
    

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