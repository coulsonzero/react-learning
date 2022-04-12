import App from "../App"
import Login from "../pages/Login"
import Navbar from '../components/Navbar'
// HashRouter & BrowserRouter
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const BaseRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/" element={<App />}>
                    <Route path="/navbar" element={<Navbar />}></Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default BaseRoute