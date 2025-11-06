import { useState } from 'react'
import { useNavigate } from 'react-router';
import { getDocs, collection } from "firebase/firestore";
import {db} from '../firebase'

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e)=>{
        e.preventDefault();

        const query = await getDocs(collection(db, "users"));
        query.forEach(doc => {
            const data = doc.data();

            if(data.username == username && data.password == password){
                navigate('/');
            }
        })
    }
    
    return (
        <>
            <div>
                
                <form onSubmit={submit}>
                    <input type="text" name='username' placeholder="username" onChange={e=> setUsername(e.target.value)}/>
                    <input type="text" name='password' placeholder="password" onChange={e=> setPassword(e.target.value)}/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

export default Login