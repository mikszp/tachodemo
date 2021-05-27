import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ProtectedRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
        if (auth) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/login',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}