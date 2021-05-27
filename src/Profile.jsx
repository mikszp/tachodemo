import React, { useEffect } from 'react'
import { Fragment } from 'react'
import { Redirect, useHistory } from 'react-router'

export default function Profile({ auth }) {
    if(!auth) {
        return <Redirect to='/login' />
      }
    return (
        <div>
            <h1>Your profile</h1>
        </div> 
    )
}
