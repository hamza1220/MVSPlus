import React from 'react';
import { style } from 'glamor';
import './styles.css'
import placeholder from './placeholder.jpg'

const Avatar = (props) => {
	const styles = {
		avatarImage: style({
			backgroundImage: `url(${props.dp? (props.dp.includes('null')? placeholder: props.dp) : placeholder})`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center center',
			width: '100%',
			height: '100%',	
		}),
	}

	const cleanRole = (role) => {
		return role.replace(/\(voice\)/g, '' ) || 'Unknown';
	}

	return(
		<div className="avatar">
			<div className="avatar-img-container">
				<div {...styles.avatarImage}/>
			</div>
			<span id="avatar-name"> {props.name} </span>
			<span id="avatar-role"> {cleanRole(props.role)} </span>
		</div>
	)
}

export default Avatar;