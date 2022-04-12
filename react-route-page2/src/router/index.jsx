import App from "../App"
import Login from "../pages/Login"
import Navbar from "../components/Navbar"
// HashRouter & BrowserRouter
// Switch(^5) & Routes(^6)
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

const routes = [
	{
		path: "/",
		component: "App",
	},
	{
		path: "/login",
		component: "Login",
	},
	{
		path: "/navbar",
		component: "Navbar",
	},
]

const list = routes.map((item, index) => {
	return (
		<li key={index}>
			<Link to={item.path}>{item.component}</Link>
		</li>
	)
})

const BaseRoute = () => {
	return (
		<Router>
			<nav>
				<ul>{list}</ul>
			</nav>

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
