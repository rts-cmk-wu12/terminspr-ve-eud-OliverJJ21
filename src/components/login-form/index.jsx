"use client";

import { useActionState } from 'react';
import '../login-form/loginform.scss'
import LoginValidation from '@/actions/loginvalidation';

export default function Login() {
    const [formState, formAction, isPending] = useActionState(LoginValidation);

    return (
        <>
            <div className='login-container'>
                <form action={formAction} className="login-form">
                    <h1>Log Ind</h1>
                    <div className="form-group">
                        <input type="text" name="username" placeholder="brugernavn" />
                        <p className='error'>{formState?.properties?.username?.errors}</p>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="adgangskode" />
                        <p className='error'>{formState?.properties?.username?.errors}</p>
                        <button className='login-form__btn'>Log ind</button>
                    </div>
                </form>
            </div>
        </>
    );
}
