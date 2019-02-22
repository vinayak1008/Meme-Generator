import React from 'react';

const Detail = (props) => {
    return (
        <div>
            <img style={{width: 300}} src={props.contact.imgUrl} />
            <h4>{props.contact.name}</h4>
        </div>
    );
}

export default Detail;