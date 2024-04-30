import { useContext } from "react";
import { AuthCustomContext } from "../MainProvider/MainProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const Protected = ({children}) => {
    const {user, loading} = useContext(AuthCustomContext);
     const location = useLocation() ;
    //  console.log(location)

     if(loading) {
        return <span className="loading loading-bars loading-lg"></span>
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