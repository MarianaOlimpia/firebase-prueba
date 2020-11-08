import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../assets/styles/Form.css';
import { useAuth } from '../AuthContext';

const Form = ({register, login}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { loginAuth, signup } = useAuth()
    const history = useHistory();

    async function handleLogIn(e) {
        e.preventDefault()
        try {
          setError("")
          setLoading(true)
          await loginAuth(email, password)
          history.push("/home")
        } catch {
          setError("No se pudo iniciar sesión, por favor valida los datos ingresados")
        }
        setLoading(false)
    }

    async function handleSignUp(e) {
        e.preventDefault()
        try {
          setError("")
          setLoading(true)
          await signup(email, password)
          history.push("/home")
        } catch {
          setError("Hubo un error al intentar el registro, por favor valida los datos ingresados")
        }
        setLoading(false)
      }

    return ( 
        <form className='form'>
            {error && <div className='error-msg'>{error}</div>}
            <input type='email' placeholder='Correo electrónico' onChange={e => setEmail(e.target.value)} />
            <input type='password' placeholder='Contraseña' onChange={e => setPassword(e.target.value)} />
            {register ? 
                <button type='submit' disabled={loading} onClick={handleSignUp}>REGISTRARME</button> :
                <button type='submit' disabled={loading} onClick={handleLogIn}>INGRESAR</button>
            }
            {register && <Link to='/'>Ya sou usuario</Link>}
            {login && <Link to='/register'>Soy usuario nuevo</Link>}
        </form>
     );
}
 
export default Form;