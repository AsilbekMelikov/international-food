import React from 'react';
import {useHistory} from "react-router-dom";

const About = () =>  {
    const {goBack} = useHistory()
    return (
        <div>
            <h1>Hello from About section</h1>
            <button type='button' className='btn' onClick={goBack}>Go back</button>
        </div>
    );
}

export default About;