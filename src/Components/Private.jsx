import { useContext } from "react";
import { AuthCustomContext } from "../MainProvider/MainProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const Private = ({children}) => {
     const {user, loading} = useContext(AuthCustomContext);
     const location = useLocation() ;
   //   console.log(location, 'prvate')
     if(loading) {
        return <span className="text-center" > Loading.... </span>
     }
     if(user){
        return children ;
     }

    return <Navigate state={location?.pathname} to='/login'> </Navigate> ;
};
Private.propTypes = {
    children: PropTypes.node,
}
export default Private;