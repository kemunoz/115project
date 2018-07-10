import React, { Component } from "react";
//import './SidenavButton.css';

class SidenavButton extends Component {
	render() {
		return (
			<button id="sideNavButton" 
				onMouseDown = {this.props.handleMouseDown}>Rooms</button>

		);
	}
}


export default SidenavButton;