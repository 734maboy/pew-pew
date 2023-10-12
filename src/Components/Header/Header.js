import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<div className={'header'}>
			<span>
				<Link to={`/another-page`}>Another page</Link>
			</span>
			<span>
				<Link to={`/`}>Home page</Link>
			</span>
		</div>
	)
}

export default Header
