import React, { useEffect, useState } from 'react';
import Slider from '../../components/slider/slider'
import useDimensions from 'react-use-dimensions';

import './styles.css'

const Search = (props) => {
	const [movies, setMovies] = useState([])
	const [rowc, setRowc] = useState(0)
	const [rowRef, rowDim] = useDimensions();

	useEffect(() => {
		setMovies(props.location.state.result.results)
		if (rowDim.width > 1025) {setRowc(9)}
		else if(rowDim.width > 479) {setRowc(5)}
		else {setRowc(3)}

	}, [props, rowDim.width])

	const makeRows = () => {
		let x = 0;
		let key = 0;
		let sliders = [];
		if(movies) {
			while(x<movies.length){
				sliders.push( <Slider key={key} content={movies.slice(x, x+rowc)} arrows={false}/> )
				x = x + rowc;
				key = key + 1

			}
		}

		return sliders
	}

	return (
		<div className="search-container">
			<div className="spacer"/> 
			<div className="row" ref={rowRef}>
				{makeRows()}
			</div>

		</div>
	)
}

export default Search;
			// <Results content = {movies} />