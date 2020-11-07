import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Private = ({component: Component, ...rest}) => {
    const { currentUser } = useAuth()
    return ( 
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to='/' />
            }}
        >
        </Route>
     );
}
 
export default Private;