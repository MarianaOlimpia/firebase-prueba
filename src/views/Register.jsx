import Footer from "../components/Footer";
import Form from "../components/Form";

const Register = () => {
    return ( 
        <div>
            <h2 className='title'>Registro de usuarios nuevos</h2>
            <Form register/>
            <Footer log/>
        </div>
     );
}
 
export default Register;