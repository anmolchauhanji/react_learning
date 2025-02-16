import { useState, useContext } from 'react';
import Usercontext from '../Context/Usercontext';

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(Usercontext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ name, password });
    };

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login;