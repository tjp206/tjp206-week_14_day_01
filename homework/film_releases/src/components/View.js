import React from 'react';

const View = ({name, children}) => {
    return(
        <div className="view">
            <h4>{children}</h4>
            <p>{name}</p>
        </div>
    )
}

export default View;