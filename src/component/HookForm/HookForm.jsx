import React from 'react';
import useInputField from '../../hooks/UseInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('')
    const [email, emailOnChange] = useInputField('')
    const [password, passOnChange] = useInputField('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit', name,email,password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' defaultValue={name} onChange={nameOnChange} />
                <br />
                <input type="email" defaultValue={email} onChange={emailOnChange} name="email" />
                <br />
                <input type="password" name="password" onChange={passOnChange} />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;