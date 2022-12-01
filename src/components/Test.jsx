import { useState } from "react"
import { useEffect } from "react";
import "./Test.css"

export const Test  = (props) =>{
    const [Lis, setLis] = useState([]);
    const [cnt, setCnt] = useState(0);

    useEffect(() =>{
        alert("aaa");        
    }, [Math.floor(cnt / 10)])

    const abcd = () =>{
        const newLis = [...Lis];
        newLis.push(cnt.toString());
        setLis(newLis);

        setCnt(cnt + 1);
        
    }

    return(
        <>
            <h1>{props.text}</h1>
            <button onClick={abcd}>あ</button>
            <h2>{cnt}回</h2>
            <ul>
                {
                    Lis.map((name, index) => {
                        return(
                            <li key={index.toString()}>{name}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}