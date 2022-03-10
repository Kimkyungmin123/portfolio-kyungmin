import { useState } from 'react';
import './education.scss';

export default  function Education ()  {
    const [message, setmMessage] = useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setmMessage(true);
    } 
    return (
        <div className='education' id='education'>
         
        </div>
    );
}
