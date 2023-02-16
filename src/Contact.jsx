import React, { useEffect, useState } from 'react';

const Contact = () => {
    const [num,setNum] = useState(0);

    useEffect( ()=> { 
       document.title=`Puja is ${num}`;
    });
    const myBtn = () => {
        setNum(num+1);
        console.log('abc');
    }

    return (
    <>
    <h1>Contact Here</h1>
    <button onClick={myBtn}>BUTTON IS CLICKED {num} TIMES</button>
    </>
    );
}

export default Contact;