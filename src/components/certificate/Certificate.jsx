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
            
                {list.map((data)=>(
                    <div>
                        <h2>{data.title}</h2>
                        <h3>{data.date}</h3>
                        <h4>{data.inst}</h4>
                    </div>
                    ))}
            
            
            
        </div>
    );
}
