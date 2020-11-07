import image from '../assets/Vehiculos.svg';
import '../assets/styles/Footer.css';

const Footer = ({log}) => {
    return ( 
        <div className='footer'>
        {log && <img src={image} alt='vehiculos' className='vehiculos-image' />}
            <div className='footer-content'>
                <a 
                    href='https://marianaolimpia.github.io/portafolio/' 
                    target="_blank" 
                    rel="noreferrer"
                >
                    Visita mi portafolio
                </a>
            </div>
        </div>
     );
}
 
export default Footer;