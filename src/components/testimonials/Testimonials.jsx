import './testimonials.scss';

export default function Testmonials(){

    const cardData = [{
        id: 1,
        name : "Jessie",
        title : "Co-Founder of DELA",
        img:"https://thumbs.dreamstime.com/b/charming-happy-asian-female-white-t-shrit-smiling-satisfied-clapping-hands-congratulate-person-win-praising-good-work-well-193061246.jpg",
        icon : "assets/youtube.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere labore enim optio error ea, consequatur ratione quas",
        

    },
    {
        id: 2,
        name : "Lily",
        title : "CEO of ALA",
        img:"https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg",
        icon : "assets/twitter.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere labore enim optio error ea, consequatur ratione quas",
        featured:true,

    },
    {
        id: 3,
        name : "Tom",
        title : "CTO",
        img:"https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404-300x300.jpg",
        icon : "assets/linkedin.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere labore enim optio error ea, consequatur ratione quas",
    

    }];
    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testmonials</h1>
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