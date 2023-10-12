import React from 'react'
import Header from '../Header/Header.js';
import { Outlet } from "react-router-dom";

const Root = ({children}) => {
	return (
		<div>
			<Header/>
			<div>
				<Outlet/>
			</div>
		</div>
	)
}

export default Root
