import React, { useState } from 'react';

const Controlfield = () => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
    }
    const handleOnChangePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value)
        if(password.length < 6) {
            setError('Password must be 6 Charecter or longer')
        }
        else{
            setError('')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' placeholder='Type Your Email' required />
                <br />
                <input type="password" name="password" onChange={handleOnChangePassword} defaultValue={password} placeholder='Password' required />
                <br />
                <input type="submit" value="submit" />
            </form>
            <p style={{color: 'red'}} >
                <small> {error} </small>
            </p>
        </div>
    );
};

export default Controlfield;