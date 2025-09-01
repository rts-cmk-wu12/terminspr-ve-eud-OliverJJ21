import '../login-form/loginform.scss'

export default function Login() {


    return (
        <>
            <div className='login-container'>
                <form className="login-form">
                    <h1>Log Ind</h1>
                    <div className="form-group">
                        <input type="text" name="name" placeholder="brugernavn" />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="adgangskode" />
                        <button className='login-form__btn'>Log ind</button>
                    </div>
                </form>
            </div>
        </>
    );
}
