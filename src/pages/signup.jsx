import { useState } from 'react';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase.js'
import { useNavigate } from 'react-router';

const Signup = ()=>{
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = (e)=>{
        e.preventDefault();

        addDoc(collection(db, "users"), {
            username: username,
            password: password
        })

        navigate('/login')
    }
    return (
        <>
        
            <div>
                <form onSubmit={submit}>

                    <input type="text" name="username" placeholder="Username" onChange={x => setUsername(x.target.value)}/>
                    <input type="password" name="password" placeholder="Password" onChange={x => setPassword(x.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Signup