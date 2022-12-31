import React from 'react';
import './Flashcard.css';

function Flashcards(props) {
    return (
        <div tabIndex={0} className="flip-card">
            <div className="flip-card-inner">
            <div className="flip-card-front">
                <p><strong>{props.term}</strong></p>
            </div>
            <div className="flip-card-back">
                <p><strong>{props.def}</strong></p>
            </div>
            </div>
        </div>
    );
}

export default Flashcards;