// Survey field contains logic to render a single label and text input

import React from 'react';

//input object below is es6 destructuring  (taking the input property from the props object of redux-form)
// try console.log(props.input);
export default ({ input, label, meta:{error, touched} }) => { 
    return (
        <div>
            <label>{label}</label>
            {/* The {...input} is jsx for taking all the keys and values input contains instead of specifying each */}
            <input {...input} style={{marginBottom:"3px"}}/>
            <div className="red-text" style={{marginBottom:"20px"}}>
            {touched && error}
            </div>
        </div>
    );
}