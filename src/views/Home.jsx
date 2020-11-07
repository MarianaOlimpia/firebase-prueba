import Comments from "../components/Comments";
import Footer from "../components/Footer";
import NewComment from "../components/NewComment";

const Home = () => {
    return ( 
        <>
            <h1>Bienvenido</h1>
            <NewComment/>
            <Comments/>
            <Footer/>
        </>
     );
}
 
export default Home;