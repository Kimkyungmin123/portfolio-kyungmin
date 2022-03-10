import './skills.scss';

export default function Skills(){

    const cardData = [{
        id: 1,
        name : "HTML5",
        title : "Co-Founder of DELA",
        img:"https://icon-library.com/images/html5-icon/html5-icon-13.jpg",
        icon : "assets/youtube.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere labore enim optio error ea, consequatur ratione quas",
        

    },
    {
        id: 2,
        name : "CSS",
        title : "CEO of ALA",
        img:"https://i.pinimg.com/originals/a3/2f/83/a32f83aa2c675058e4a05a0fd4da05eb.png",
        icon : "assets/twitter.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere labore enim optio error ea, consequatur ratione quas",
        featured:true,

    },
    {
        id: 3,
        name : "JAVASCRIPT",
        title : "CTO",
        img:"https://media.vlpt.us/images/ek615/post/e849d783-daef-40f9-be31-f2b81f39ccc5/javascript2.png",
        icon : "assets/linkedin.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere labore enim optio error ea, consequatur ratione quas",
    

    },
    {
        id: 3,
        name : "REACT",
        title : "CTO",
        img:"https://images.velog.io/images/srparkgogo/post/c9d550d8-bc0a-4d18-9cf7-60e347f2178b/512px-React-icon.svg.png",
        icon : "assets/linkedin.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere labore enim optio error ea, consequatur ratione quas",
    

    }];
    return (
        <div className='testimonials' id='testimonials'>
            <h1>Skills</h1>
            <div className="container">
                {cardData.map(c=>(                
                <div className={c.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img 
                            src="assets/right-arrow.png"  
                            className='left' 
                            alt="" />

                        <img 
                            className="user"
                            src={c.img}
                            alt="" />
                            
                        <img
                            className="right"
                            src={c.icon}
                            alt="" />
                    </div>
                    <div className="center">
                        {c.desc}
                        </div>
                    <div className="bottom">
                        <h3>{c.name}</h3>
                        <h4>{c.title}</h4>    
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};