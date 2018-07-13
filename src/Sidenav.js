import React, { Component } from 'react'
// import ReactPlayer from 'react-player'
import './Sidenav.css';
class Sidenav extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      hideAddRoom: true
    };
 };


 addRoom() {
  // alert("Add room was pressed");
  this.setState({
    hideAddRoom: !this.state.hideAddRoom
  })
 }

 searchRoom() {
   var input = document.getElementById("room");
   var filter = input.value.toUpperCase();
   var table = document.getElementById("roomList");
   var tr = table.getElementsByTagName("tr");
   for (var i = 0; i < tr.length; i++) {
      if(tr[i].innerHTML.toUpperCase().includes(filter)) {
         tr[i].style.display = "";
      }
      else{
        tr[i].style.display = "none";
      }
   }
 }

  render () {

    var sidenav_visibility = "hide";

    if (this.props.menuVisibility) {
      sidenav_visibility = "show";
    }

    var addButton = {
      display: this.state.hideAddRoom ? "none" : "block"
    }

    return (
      <div id="sidenav" onMouseDown={this.props.handleMouseDown} className={sidenav_visibility}>
        <div className="roomTitle">Room Selection</div>
        <div className="searchroom">
          <i className="fas fa-plus-circle plus" id="plus" onClick={()=> this.addRoom()}></i>
          <input className="inlink" type="text" name="name" id="room" onChange={()=>this.searchRoom()}/>
        </div>
        <div style={addButton} className="addbox" id="addbox">
          <label className="linkT">
            Room Name:
          </label>
          <input className="inlink"/>
          <label className="linkT">
            Room password:
          </label>
          <input className="inlink"/>
        </div>
        <div className="sidescrollbox">
          <table className="table1" id="roomList">
            <tr>
              <td className="td1"> Audio room <i className="fas fa-circle online"></i>  </td>
            </tr>
            <tr>
              <td className="td1"> Study Music room <i className="fas fa-circle online"></i>  </td>
            </tr>
            <tr>
              <td className="td1"> Alternative room <i className="fas fa-circle online"></i>  </td>
            </tr>
            <tr>
              <td className="td1"> Friends room </td>
            </tr>
            <tr>
              <td className="td1"> Audio room </td>
            </tr>
            <tr>
              <td className="td1"> Audio room </td>
            </tr>
            <tr>
              <td className="td1"> Audio room </td>
            </tr>
            <tr>
              <td className="td1"> Study Music room </td>
            </tr>
            <tr>
              <td className="td1"> Alternative room </td>
            </tr>
            <tr>
              <td className="td1"> Friends room </td>
            </tr>
            <tr>
              <td className="td1"> Audio room </td>
            </tr>
            <tr>
              <td className="td1"> Audio room </td>
            </tr>
            <tr>
              <td className="td1"> Audio room </td>
            </tr>
            <tr>
              <td className="td1"> Study Music room </td>
            </tr>
            <tr>
              <td className="td1"> Alternative room </td>
            </tr>
            <tr>
              <td className="td1"> Friends room </td>
            </tr>
            <tr>
              <td className="td1"> Audio room </td>
            </tr>
            <tr>
              <td className="td1"> Audio room </td>
            </tr>
            <tr>
              <td className="td1"> Audio room </td>
            </tr>
            <tr>
              <td className="td1"> Study Music room </td>
            </tr>
            <tr>
              <td className="td1"> Alternative room </td>
            </tr>
            <tr>
              <td className="td1"> Friends room </td>
            </tr>
            <tr>
              <td className="td1"> Audio room </td>
            </tr>
            <tr>
              <td className="td1"> Audio room </td>
            </tr>
            <tr>
              <td className="td1"> Audio room </td>
            </tr>
            <tr>
              <td className="td1"> Study Music room </td>
            </tr>
            <tr>
              <td className="td1"> Alternative room </td>
            </tr>
            <tr>
              <td className="td1"> Friends room </td>
            </tr>
            <tr>
              <td className="td1"> Audio room </td>
            </tr>
            <tr>
              <td className="td1"> Audio room </td>
            </tr>
            <tr>
              <td className="td1"> Study Music room </td>
            </tr>
            <tr>
              <td className="td1"> Alternative room </td>
            </tr>
            <tr>
              <td className="td1"> Friends room </td>
            </tr>
            <tr>
              <td className="td1"> Study Music room </td>
            </tr>
            <tr>
              <td className="td1"> Alternative room </td>
            </tr>
            <tr>
              <td className="td1"> Friends room </td>
            </tr>
            <tr>
              <td className="td1"> Study Music room </td>
            </tr>
            <tr>
              <td className="td1"> Alternative room </td>
            </tr>
            <tr>
              <td className="td1"> Friends room </td>
            </tr>
            <tr>
              <td className="td1"> Study Music room </td>
            </tr>
            <tr>
              <td className="td1"> Alternative room </td>
            </tr>
            <tr>
              <td className="td1"> Friends room </td>
            </tr>
            <tr>
              <td className="td1"> Study Music room </td>
            </tr>
            <tr>
              <td className="td1"> Alternative room </td>
            </tr>
            <tr>
              <td className="td1"> Friends room </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Sidenav;
