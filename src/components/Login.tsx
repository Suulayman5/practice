import './login.css'

import React, { useRef, useState, useEffect, FormEvent } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlined from '@mui/icons-material/LockOutlined';
import { MailOutlineTwoTone } from '@mui/icons-material';
        
    const Login: React.FC = () => {
        const userRef = useRef<HTMLInputElement>(null);
    
        const [user, setUser] = useState<string>('');
        const [pwd, setPwd] = useState<string>('');
        const [success, setSuccess] = useState<boolean>(false);
    
        useEffect(() => {
            userRef.current?.focus();
        }, []);
    
        const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setUser('');
            setPwd('');
            setSuccess(true);
        }
    
        return (
            <>
                {success ? (
                    <section>
                        <h1>You are logged in</h1><br />
                        <p>
                            <a href="#">Go to home</a>
                        </p>
                    </section>
                ) : (
                    <section>
                        <h1>Sign in here</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='email'>
                                <MailOutlineIcon className='emailIcon' />
                                <input type="email" id='email' ref={userRef} onChange={(e) => setUser(e.target.value)} value={user} required placeholder='Email' />
                            </div>
                            <div className='password'>
                                <LockOutlined className='passwordIcon' />
                                <input type="password" id='password' onChange={(e) => setPwd(e.target.value)} value={pwd} required placeholder='Password' />
                            </div>
                            <button>Sign in</button>
                        </form>
                    </section>
                )}
            </>
        );
    }
        


export default Login;


