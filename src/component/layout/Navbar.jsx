import { NavLink } from "react-router-dom";

function Navbar(){

	let activeStyle = {
		/* textDecoration: 'underline', */
		/* backgroundColor: 'rgb(49 46 129)', */
		borderBottom: '3px solid #16a34a'
	};

	return (
			<nav className="nav bg-slate-900">
				<NavLink 
				to="/" 
				className="site-title">
					API's
				</NavLink>
				<ul>
					<li>
						<NavLink 
						to="/posts" 
						className="hover:bg-green-700 hover:text-lime-300"
						style={ ({ isActive }) => isActive ? activeStyle : undefined }>
							Posts
						</NavLink>
					</li>
					<li>
						<NavLink 
						to="/algo" 
						className="hover:bg-green-700 hover:text-lime-300"
						style={ ({ isActive }) => isActive ? activeStyle : undefined }>
							Algo
						</NavLink>
					</li>
					<li>
						<NavLink 
						to="/otro" 
						className="hover:bg-green-700 hover:text-lime-300"
						style={ ({ isActive }) => isActive ? activeStyle : undefined }>
							Otro
						</NavLink>
					</li>
				</ul>
			</nav>
		);

}

export default Navbar;