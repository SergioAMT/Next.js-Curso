import React from 'react';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const SingleEventPage = ({ data }) => {
const inputEmail = useRef();
const router = useRouter();
const [message, setmessage] = useState('');

const onSubmit = async(e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value
    const eventId = router?.query.id;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!emailValue.match(validRegex)){
setmessage('Please introduce a correct email address')
    }

    try {
        const response = await fetch('/api/email-registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: emailValue, eventId})
        });

        if(!response.ok) throw new Error(`Error: ${response.status}`)
        const data = await response.json();
        setmessage(data.message);
        inputEmail.current.value = '';

        //POST fetch request
        //body emailValue ant the eventId
    }catch(e){
        console.log('ERROR', e)
    }
}

    return (
        <div className='event_single_page'>
            <h1> {data.title} </h1>
            <Image src={data.image} width={1000} height={500} alt={data.title} />
            <p> {data.description} </p>

            <form onSubmit={onSubmit} className='email_registration'>
                <label>Get Registered for this Event</label>
                <input ref={inputEmail} id='email' placeholder='Please insert your email here' />
                <button type='submit'>Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default SingleEventPage;
