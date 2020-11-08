import image from '../assets/Vehiculos.svg';
import '../assets/styles/Footer.css';

const Footer = ({log}) => {
    return ( 
        <div className='footer'>
        {log && <div className='vehiculos-image'><img src={image} alt='vehiculos' /></div>}
            <div className='footer-content'>
                <span>Mariana Olimpia Perez Ruiz</span>
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