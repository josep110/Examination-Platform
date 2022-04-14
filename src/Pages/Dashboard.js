import React, { useState } from 'react'
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from "react-router-dom"

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError('')
        try{
            await logout()
            history.push('./signin')
        } catch{
            setError('Failed to log out')
        }
    }



    return (
        <>
            <Card>
                <Card.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email: </strong> {currentUser.email}
                </Card.Body>
            </Card>
                <div className="w-100 text-center mt-2">
                    <Button variant="link" onClick={handleLogout}>Log out</Button>
                </div>
        </>

    )
}