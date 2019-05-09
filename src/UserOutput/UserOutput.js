import React from 'react';

import './UserOutput.css'
const useroutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>Telefone: {props.telefone}</p>
        </div>
    )
}

export default useroutput;