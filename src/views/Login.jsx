import '../assets/styles/LoginRegister.css';
import Footer from "../components/Footer";
import Form from "../components/Form";

const Login = () => {
    return ( 
        <div>
        <h2 className='title'>Inicio de sesión</h2>
        <Form login/>
        <Footer log/>
        </div>
     );
}
 
export default Login;