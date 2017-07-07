import React from 'react';

export default ({
  isAuthorized,
  unAuthorizedComponent
}) => Component => props => {
  const isUserAuthorized = isAuthorized(props);
  return isUserAuthorized
    ? (
      <Component {...props}/>
    )
    : unAuthorizedComponent || (
      <div>
        You are not authorized
      </div>
    );
};