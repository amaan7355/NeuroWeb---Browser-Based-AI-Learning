import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { enqueueSnackbar, useSnackbar } from 'notistack';

const UserAuth = ({children}) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );
    if (currentUser !== null) {
        return children;
    } else {
        enqueueSnackbar('Please Login to continue', {
            anchorOrigin: {
                horizontal: 'right',
                vertical: 'top'
            },
            variant: 'error'
        });
    }

  return <Navigate to='/main/signup' />
}

export default UserAuth;