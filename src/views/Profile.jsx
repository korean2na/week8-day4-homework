import { useContext } from "react"
import { AuthContext } from "../contexts/AuthProvider"

export default function Profile() {
    const { user } = useContext(AuthContext)
    console.log(user)

    return (
        <div className="Profile">
            <h1 className="my-4">Profile</h1>
            <div className="row justify-content-center">
                <div className="col-6 card py-4">
                    <p>Name: &nbsp; { user.username }</p>
                    <p>Email: &nbsp; { user.email }</p>
                    <p>ID: &nbsp; { user.uid }</p>
                </div>
            </div>
        </div>
    )
}