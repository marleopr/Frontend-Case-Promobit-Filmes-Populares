import { useNavigate } from "react-router-dom"
import { goToHomePage } from "../../routes/coordinator"

export default function SearchPage() {
    const navigate = useNavigate()

    return (
        <div>
            <h2>SearchPage</h2>
            <button onClick={() => goToHomePage(navigate)}>Home</button>
        </div>
    )
}