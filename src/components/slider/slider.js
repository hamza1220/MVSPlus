import React from 'react'
import SliderBar from './sliderBar'
import { Typography } from "@material-ui/core";
import './styles.css'


const Slider = (props) => {
	return(
		<div className="slider">
			<div className="slider-title"> <Typography variant="h4"> {props.title} </Typography>  </div>
				<SliderBar content={props.content} className={props.sliderClass} arrows={props.arrows}/> 
			<div className="slider-bottom"/>
		</div>

	)
};

export default Slider;