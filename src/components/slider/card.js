import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import useDimensions from 'react-use-dimensions';
import './styles.css'

const Card = props => {
	const [cardRef, cardDim] = useDimensions();

	useEffect(() => {
		props.getWidth(cardDim)
	})

	const noImg = () => {
		return (
			<Paper className="no-img" elevation={3}>
				<span>{props.movie.title}</span>
			</Paper>
		)
	}

	return (
		<Link {...props.style.cardStyles} to ={'/Movie/'+ props.movie.id} className="item" ref={cardRef}>
		{
			props.movie.poster_path?
				<img className="poster" src={"https://image.tmdb.org/t/p/w500/" + props.movie.poster_path} alt={props.movie.title} /> 
				:
				noImg()
		}
		</Link>
	)

}

export default Card;