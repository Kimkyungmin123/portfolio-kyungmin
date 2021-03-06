import './topbar.scss';
import {Mail, GitHub, EventNote} from "@material-ui/icons"


export default  function Topbar({menuOpen, setMenuOpen}){
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>gyomni</a>
                    
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>kmkm6937@gmail.com</span>    
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon" />
                        <a href="https://github.com/Kimkyungmin123" alt="git">git</a>   
                    </div>
                    <div className="itemContainer">
                        <EventNote className="icon" />
                        <a href="https://velog.io/@gyomni" alt="blog">blog</a>   
                    </div>
                
                </div>
                <div className="right">
                    <div className="hamberger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    );
};
