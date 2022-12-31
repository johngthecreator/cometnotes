import React, { useContext, useEffect, useState } from 'react';
import Nav from '../components/Nav';
import { CardContext } from '../CardContext';
import Flashcards from '../components/Flashcards';

function Preview(props) {
    const [compCards, makeCards] = useState([]);
    useEffect(()=>{
        if (JSON.parse(sessionStorage.getItem("cards")).length > 0){
            let previewCards = JSON.parse(sessionStorage.getItem("cards"))
            let cards = previewCards.split("\n");
            for (let x in cards) {
                let data = cards[x].split("::");
                makeCards((prevData)=>([...prevData, {"term":data[0], "def":data[1]} ]))
            }
        }
    },[])
    if(compCards.length > 0){
        return(
            <div>
                <Nav />
                <div className="flex flex-col items-center m-3">
                    {compCards.map((cd)=>{
                        return(
                            <Flashcards term={cd["term"]} def={cd["def"]} />
                        )
                    })}
                </div>
            </div>
        )
    }
    return (
        <div>
            <Nav /> 
            <h1 className='text-center font-bold text-2xl text-white'>No Cards Found</h1>
        </div>
    );
}

export default Preview;