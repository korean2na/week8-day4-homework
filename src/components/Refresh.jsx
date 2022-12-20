import { useNavigate } from "react-router"

export default function Refresh() {
    const navigate = useNavigate()
    navigate(0)
}