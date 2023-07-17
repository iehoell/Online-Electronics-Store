import React from 'react';

function Selector(props) {
    return(
        <option value={props.value}>{props.value}</option>
    );
}

export default Selector;