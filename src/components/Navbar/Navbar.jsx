import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
	const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
	const manageMobileMenuClick = () => {
		setMobileMenuToggle(!mobileMenuToggle);
	};
	return (
		<nav>
			<a href='#'>
				<img className='logo' src='/images/logo.svg' alt='logo' />
			</a>

			<button
				className='mobile-nav-toggle'
				aria-controls='primary-navigation'
				onClick={manageMobileMenuClick}
				data-toggle={mobileMenuToggle}
			></button>
			<ul
				id='primary-navigation'
				className='nav-links'
				data-visible={mobileMenuToggle}
				role='list'
			>
				<a href='#'>
					{" "}
					<li className='nav-link fs-body'>Home</li>
				</a>
				<a href='#'>
					<li className='nav-link fs-body'>New</li>
				</a>
				<a href='#'>
					<li className='nav-link fs-body'>Popular</li>
				</a>
				<a href='#'>
					<li className='nav-link fs-body'>Trending</li>
				</a>
				<a href='#'>
					<li className='nav-link fs-body'>Categories</li>
				</a>
			</ul>
		</nav>
	);
}
