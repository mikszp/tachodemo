import { Box, Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

export default function Home({ auth, handleAuth }) {
    return (
        <div>
            <h1>Tacholife</h1>
            <Box mt={5}>
                {auth ? null : 
                <Box>
                    <Link to="/login" variant="body2">
                        <Button variant="outlined" size="large">Sign In</Button>
                    </Link>
                    <Link to="/register" variant="body2">
                        <Button variant="outlined" size="large">Sign Up</Button>
                    </Link>
                </Box>}
                {auth ? <Link to="/profile" variant="body2">
                    <Button variant="outlined" size="large">Profile</Button>
                </Link> : null}
                {auth ? <Button onClick={handleAuth} variant="outlined" size="large">Sign Out</Button> : null}
            </Box>
        </div>
    )
}
