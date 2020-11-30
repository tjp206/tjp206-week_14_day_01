import React from 'react';

const Film = ({name, children}) => {
    return(
        <div className="film">
            <h4>{children}</h4>
            <p>{name}</p>
        </div>
    )
}

export default Film;