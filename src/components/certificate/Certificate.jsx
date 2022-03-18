import './certificate.scss';

export default  function Certificate ()  {

    const list = [
        {
            id : 1,
            date: "2021. 08. 20 ",
            title : "정보처리기사",
            inst : "한국산업인력공단",
        },
        {
            id : 2,
            date: "2020. 11. 08",
            title : "TOEIC SPEAKING",
            inst : " level6 - ETS",
        },
    ];

    return (
        <div className='certificate' id='certificate'>
            <h1>Certificate</h1>
            <div className='split'>
                <div className='left'></div>
                <div className='middle'>
                    <div className='container'>
                        {list.map((data)=>(
                            <div className='data'>
                                <span className='date'>{data.date}</span>
                                <span className='title'>{data.title}</span>
                                <span className='inst'>{data.inst}</span>
                            </div>
                            ))}
                    </div>
                </div>
                <div className='right'></div>
            </div>
        </div>
    );
}
