import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import {
    moviePortfolio,
    paintPortfolio,
    minishopPortfolio,
    todolistPortfolio,
} from "../../data.js";

export default  function Portfolio(){
    const [selected, setSelected] = useState("movie");
    const [data, setData] = useState([]);
    
    const list = [
        {
            id: "movie",
            title:"Movie App"
        },
        
        {
            id: "paint",
            title:"Paint"
        },
        
        {
            id: "minishop",
            title:"Minishop Game"
        },
        
        {
            id: "todolist",
            title:"Todolist "
        },
        
    ];

    useEffect(()=>{
        switch(selected){
            case "movie":
                setData(moviePortfolio);
                break;
            case "paint":
                setData(paintPortfolio);
                break;
            case "minishop":
                setData(minishopPortfolio);
                break;
            case "todolist":
                setData(todolistPortfolio);
                break;
            default:
                setData(moviePortfolio);
        }
        
    },[selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList 
                    key = {item.id}
                    id={item.id}
                    title={item.title} 
                    active={selected===item.id}
                    setSelected={setSelected}/>
                ))}
            </ul>
            <div className="container">
                {data.map(d=>(
                
                <div className="item">
                
                    <img src={d.img}
                    alt="" />
                    <h3>{d.title}</h3>
                </div>
                
                ))}
                </div>
            </div>
        
    );
};

