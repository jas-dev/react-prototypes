import React from 'react';

const Field = props =>{

    return (
        <div className='form-group'>
            <label>{props.label}</label>
            <input {...props} className='form-control'/>
        </div>
    );
};

export default Field;