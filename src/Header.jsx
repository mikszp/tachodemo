import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <header className="App-header">
                <Link style={{ marginLeft: '2rem' }} to='/' variant="body2">
                    TACHOLIFE
                </Link>
            </header>
        </div>
    )
}
