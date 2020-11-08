import Comments from "../components/Comments";
import Footer from "../components/Footer";
import '../assets/styles/Home.css';
import NewComment from "../components/NewComment";
import logoutBtn from '../assets/logout.svg';
import { useAuth } from '../AuthContext';

const Home = () => {
    const { logout } = useAuth()

    return ( 
        <>
            <div className='header'>
                <h1>Bienvenido</h1>
                <img src={logoutBtn} className='logout-btn' alt='salir' onClick={logout}/>
            </div>
            <div className='home'>
                <NewComment/>
                <Comments/>
            </div>
            <Footer/>
        </>
     );
}
 
export default Home;