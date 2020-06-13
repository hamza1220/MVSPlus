import React from 'react'
import SliderBar from './sliderBar'
import './styles.css'


const Slider = (props) => {
	return(
		<div className="slider">
			<div className="slider-title"> <span> {props.title} </span> </div>
				<SliderBar content={props.content} className={props.sliderClass} arrows={props.arrows}/> 
			<div className="slider-bottom"/>
		</div>

	)
};

export default Slider;