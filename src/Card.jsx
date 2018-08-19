import React from 'react';

// props deconstruction AHEAD:
const Card = ({name, email, id}) => { 

    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow b2 shadow-5" >
            <img alt='robots' src={`https://www.robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;