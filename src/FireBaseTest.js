import React, { Component } from 'react'

class FireBaseTest extends Component {
	constructor(){
		super();	
	}
	myFunction(){
		window.alert("this button works");
	}
	render(){
		return(
			<i className="fas fa-plus-circle plus" id="plus" onClick={()=> this.myFunction()}></i>
			);
	}


}
