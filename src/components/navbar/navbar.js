import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { search } from '../../api/api';
import './styles.css';
import logo from '../../logo.png';

const Navbar = props => { 
	const [hideOnScroll, setHideOnScroll] = useState(true)
	const [query, setQuery] = useState("")

	const history = useHistory();


	useScrollPosition(
		({ prevPos, currPos }) => {
		  const isShow = !currPos.y
		  if (isShow !== hideOnScroll) setHideOnScroll(isShow)
		},
		[hideOnScroll], null, false, 10
	)

	const searchMovie = (e) => {
		e.preventDefault();
		console.log('search', query)
		search('movie', query).then(res => {			
			history.push({
		        pathname: "/search",
		        state: { result: res }
			});
		})
	}



	return (
		<div className={"navbar " + (hideOnScroll? "hide" : "show")}>
			
			<a href="/"><img className="nav-logo"src={logo} alt="logo"/></a>
			<ul className="nav-links">
				<li><a href="/">  Home </a></li>
				<li><a href="/"> Genres </a></li>
			</ul>

			<div className="nav-search">
				<form onSubmit={e => searchMovie(e)}>
					<input type="text" name="search" placeholder="Find Movies..." autoComplete="off" onChange={e => setQuery(e.target.value)}/>
				</form>
			</div>
		</div>
	)
}
export default Navbar;