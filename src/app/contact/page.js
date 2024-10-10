import next from 'next';


export const Contact = () => {
  return (
    <>
      <div className="contact-container">

        <div className="wrapper">
          <form action="">
            <h2>Login</h2>
            <div className="input-box">
              <input type="text" placeholder='UserName' required />
            </div>

            <div className="input-box">
              <input type="password" placeholder='Password' required minLength="8" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />Remember Me
              </label>
              <span>Forgot Password?</span>
            </div>  
            <button className='btn' type='submit'>Login</button>
            <div className="register-link">
              <p>Don't Have a Account <span href="">Register</span></p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Contact;

