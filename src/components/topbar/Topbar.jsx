import './topbar.scss';
import {PhoneIphone, Mail} from "@material-ui/icons"

export default  function Topbar({menuOpen, setMenuOpen}){
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>gyomni</a>
                    <div className="itemContainer">
                        <PhoneIphone className="icon" />
                        <span>010-6357-6937</span>    
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>kmkm6937@gmail.com</span>    
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
