import './menu.scss';


export default  function Menu({menuOpen={menuOpen} ,setMenuOpen={setMenuOpen}}){
    return (
        <div className={'menu '+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#education">Education</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#certificate">Certificate</a>
                </li>
            </ul>
        </div>
    );
};