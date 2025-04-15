import React, { useRef } from 'react';

const UncontrolField = () => {
const emailRef = useRef('')
const passwordRef = useRef('')
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current);
    const email = emailRef.current.value
    const password = passwordRef.current.value
    console.log(email, password);
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="text" name='name' />
                <br />
                <input ref={passwordRef} type="password" name='email' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UncontrolField;