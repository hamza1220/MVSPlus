import React from 'react'
	import './styles.css'

const ScrollArrow = (props) => {
	return(
		<div className={props.className}>
			<div className="arrow-container"><span className="arrow"></span> </div>	
		</div>
	)
}

export default ScrollArrow;