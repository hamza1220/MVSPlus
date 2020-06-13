import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import ScrollArrow from '../scrollArrow/scrollArrow'
import './styles.css'

const Jumbotron = props =>{
	const [movie, setMovie] = useState(0);
	useEffect(()=> {
		if (props.content) {
			setMovie(props.content)
		}

	}, [props])

	const genreSingle = (genre, isNotLast) => {
		return (
			isNotLast? <span> {genre} <div className="genre-divider"/> </span> : <span> {genre}  </span>
		)
	} 

	const getGenre = (genre_id) => {
		return (
			props.genres?
				props.genres.find(genre=> genre.id === genre_id)?
					props.genres.find(genre=> genre.id === genre_id).name
					: null
				:null 
		)
	}

	const genreList = 
	 	movie? movie.genre_ids.map((g, key)=>
				<span key={key}>
					{genreSingle (getGenre(g), movie.genre_ids.length - key - 1)}
				</span>
			)
	 		:null

	return (
		<div className="jumbotron">
			<img className="jumbotron-backdrop" src={movie? "https://image.tmdb.org/t/p/original"+ movie.backdrop_path:null} alt={movie.original_title}/> 
			<div className="jumbotron-overlay"/>
			<div className="jumbotron-content">				
				<div className="jumbotron-title"> {movie.original_title} </div>
				<div className="jumbotron-overview"> {movie.overview} </div>
				<div className="jumbotron-genres">
					{genreList} 
				</div>
				<Link to={'/Movie/'+ movie.id}>
					<button className="info-btn"> 
						<InfoIcon className="info-btn-icon"/><span className="info-btn-text"> More Info </span>
					</button>
				</Link>
			</div>
			<a className="jumbotron-scroll" href={`#${props.scrollTo}`}> 
				<ScrollArrow scrollTo={props.scrollTo}/>
			</a> 
		</div>
	)
}

export default Jumbotron;