import { useContext } from "react";
import { AuthCustomContext } from "../MainProvider/MainProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


const Protected = ({children}) => {
    const {user, loading} = useContext(AuthCustomContext);
     const location = useLocation() ;
     const navigate = useNavigate(); 
     
     console.log(navigate, 'location');
     if(loading) {
        return <span className="text-center" > Loading.... </span>
     }
     if(user){
        return children ;
     }

    return <Navigate state={location?.pathname} to='/login'> </Navigate> ;
};
Protected.propTypes = {
    children: PropTypes.node,
}

export default Protected;