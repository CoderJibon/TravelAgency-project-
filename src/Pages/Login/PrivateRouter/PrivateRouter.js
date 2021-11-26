import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './PrivateRouter.css';
const PrivateRouter = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return(
            <div className="loadingPage">
                <Spinner className='reload' animation="border" variant="primary" />
            </div>
        )
    }
    return (
        <Route
         {...rest}
         render={({ location }) => user.email ? children : <Redirect to={{
            pathname: "/login",
            state: { from: location }
         }}  ></Redirect>  }>
            
        </Route>
    );
};

export default PrivateRouter;