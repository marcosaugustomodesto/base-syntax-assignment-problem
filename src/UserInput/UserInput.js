import React from 'react';

const userinput = (props) => {
    const style = {
        border: '4px solid red'
    };
    return <input 
                type="text" 
                style={style}
                onChange={props.changed}                 
                value={props.currentName}/>
}

export default userinput;