import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { getMovie, getMovieCredits, getSimilar, getReviews } from '../../api/api';
import { getYear, moneyConverter, timeConverter } from '../../helpers/helpers';
import Avatar from '../../components/avatar/avatar';
import Slider from '../../components/slider/slider';
import Accordion from '../../components/accordion/accordion'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './styles.css';
const imgsrc = "https://image.tmdb.org/t/p"

const Movie = ({ match, location }) => {
	const [movie, setMovie] = useState({})
  	const [credits, setCredits] = useState({})
  	const [similar, setSimilar] = useState([])
  	const [reviews, setReviews] = useState([])

	useEffect(()=>{
		getMovie(match.params.id).then((value)=>setMovie(value))
		getMovieCredits(match.params.id).then((value)=>setCredits(value))
		getReviews(match.params.id).then((value)=>setReviews(value.results))
		getSimilar(match.params.id).then((value)=>setSimilar(value.results))
	}, [match.params.id])

	const genreList = movie.genres? 
				movie.genres.map((genre, key)=> 
					movie.genres.length - key - 1 ? 
					<span key={key}> {genre.name} <div className="movie-genre-divider"/> </span> 
					: 
					<span key={key}> {genre.name}  </span>
				)
		 		:null

	const info = (title, body, isLink) => {
		return(
			<div className="info">
				<span className="info-title"> {title} </span>
				{
					isLink? 
					<a className="info-body info-anchor" href={body} target="_blank" rel="noopener noreferrer"><ExitToAppIcon/> Visit </a> 
					: 
					<span className="info-body"> {body || 'N/A'} </span>
				}
			</div>
		)
	}

	return (
		<div className="movie"> 
			<div className="movie-header">
				<div className="movie-backdrop">
					<img className="movie-backdrop-img" src={movie.backdrop_path? imgsrc+"/original"+ movie.backdrop_path : null } alt="backdrop"/>
					{console.log(movie.backdrop_path)}
					<div className="movie-backdrop-overlay"/> 
				</div>
				<div className="movie-header-grid">
			      	<Grid container > 
				        <Grid item xs={12} md={4} className="movie-poster-container">
							<img className={" movie-poster"} src={movie.poster_path? imgsrc + "/w500"+ movie.poster_path : null  } alt="poster"/>
				        </Grid>
				        <Grid item xs={12} md={8} className="movie-header-details">
				          	<div className="center-v">
					          	<div className="movie-release"> {movie.release_date? movie.release_date.split('-')[0] : null} </div>
					          	<span className="movie-title">  {movie.title}  
					          		<div className="movie-rating"> {movie.vote_average? movie.vote_average : 'N/A'} </div> 
					          	</span>
					        	<br/>
					        	<div className="movie-genre-list"> {genreList} </div>
					          	<br/> 
				          		<div className="movie-release-md"> {movie.release_date? getYear(movie.release_date) : null} </div>
							</div>		        	
				        </Grid>
			      	</Grid>
			    </div>
			</div>

			<Grid container>
		        <Grid item xs={12} md={9}>
		          	<div className="movie-body">
		          		<div className="overview">
			          		<div className="movie-body-title"> <span>Overview</span> </div>
			          		<p className="movie-body-overview"> {movie? movie.overview : null} </p>
			          	</div>
			          	<div className="cast">
			          		<div className="movie-body-title"> <span>Cast & Crew</span> </div>
			          		<div className="cast-avatars">
				          		{credits.cast? 
				          			credits.cast.slice(0,Math.min(credits.cast.length, 10)).map((cred, ckey) => 
				          				<div className="movie-avatar" key={ckey}><Avatar dp={cred? imgsrc + "/w185" + cred.profile_path : null} name={cred.name} role={cred.character}/></div>) 
				          			: null
				          		}
				          	</div>
				          	<div className="cast-avatars">
				          		{credits.crew? 
				          			(credits.crew.find(element=> element.job === "Director")? [credits.crew.find(element=> element.job === "Director")].map((cred, dkey) => 
				          				<div className="movie-avatar" key={dkey}><Avatar dp={cred.profile_path!==null ? imgsrc + "/w185" + cred.profile_path: null} name={cred.name} role={"Director"}/></div>) 
										:
										null
	      							 )
				          			: null
				          		}
				          	</div>
				          	
			          	</div>
		          	</div>
		        </Grid>

		        <Grid item xs={12} md={3} className="info-container">
		        	<Grid container>
		        	{
		        		[{title: 'Status', body: movie.status}, 
		        		{title: 'Release Date', body: movie.release_date, isLink: false},
		        		{title: 'Runtime', body: timeConverter(movie.runtime), isLink: false},
		        		{title: 'Revenue', body:  moneyConverter(movie.revenue), isLink: false},
		        		{title: 'Budget', body: moneyConverter(movie.budget), isLink: false},
		        		{title: 'Homepage', body: movie.homepage, isLink: true}
		        		].map((item, ikey)=>
			        	<Grid item xs={4} md={12} key={ikey}>
			          		{info(item.title, item.body, item.isLink)}		
			        	</Grid>
		        	)}
		        	</Grid>
		        </Grid>
	      	</Grid>

	      	<div className="movie-body"> <div className="movie-body-title"> <span>Reviews</span> </div></div>
	      	<div className="movie-reviews-similar-container"> 
		      	<div className="movie-reviews">
			      	<Accordion reviews={reviews}/>
				</div>
			</div>

			<div className="movie-body"> <div className="movie-body-title"> <span>Similar Movies</span> </div></div>		
	      	<div className="movie-reviews-similar-container pt-0"> 
		      	<Slider content={similar} title={""} arrows={true}/>
			</div>

		</div>
	)
}

export default Movie;
