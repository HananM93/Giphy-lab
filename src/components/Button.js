import React, {useState} from 'react'

const Button = ({giphy}) => {
    return (
        <button onClick={giphy} className='button'>Random</button>  
    )
}

export default Button;