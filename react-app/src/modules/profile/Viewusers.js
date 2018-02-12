import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import { getUser } from "../../store/profile/selectors";
import { profileActions } from '../../store/profile/actions';

class Viewusers extends Component {

  componentDidMount() {
    this.props.retrieveUsers();
  }

  render() {


  let listUsers = this.props.userslist.map((user, index) => {
    console.log(user);
    let format_date = new Date(user.birthdate);
    let formated_date = format_date.getDate()+'/'+(format_date.getMonth()+1)+'/'+format_date.getFullYear();

    if(this.props.userslist.length !== 0){
      return (
        <div className="user_item">
          <h3> {user.first_name} {user.last_name}</h3>
          <div className="user_description">
            <div>Gender: {user.gender}</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
            <div>Level: {user.level}</div>
            <div>Player index: {user.player_index}</div>
            <div>Birthdate: {formated_date}</div>
          </div>
        </div>
      )
    } else {
      return (
        <div>Sorry, there is no idea for the moment</div>
      )
    }
  });

    return (
      <div className="list_ideas_block">
        <h1>Users List</h1>
        {listUsers}
      </div>
    );
  }
}

export default connect(getUser,profileActions)(Viewusers);
