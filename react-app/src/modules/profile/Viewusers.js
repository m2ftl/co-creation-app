import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import { getUser } from "../../store/profile/selectors";
import { profileActions } from '../../store/profile/actions';

class Viewusers extends Component {

  componentDidMount() {
    this.props.retrieveUsers();
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.exportUsers()
    .then(csv => {
      const csvExport = document.createElement('a')
      csvExport.href= 'data:text/csv;charset=utf-8,' + encodeURI(csv)
      console.log(csvExport.href);
      csvExport.target= "_blank"
      csvExport.downloard= "users.csv"
      csvExport.click();
    })
  }

  render() {

  let BeginnerUsers = this.props.userslist.filter((user) => user.level === "beginner");
  let percentageBeginner = Math.round((BeginnerUsers.length * 100) / this.props.userslist.length);
  let AdvancedUsers = this.props.userslist.filter((user) => user.level === "advanced");
  let percentageAdvanced = Math.round((AdvancedUsers.length * 100) / this.props.userslist.length);
  let ExpertUsers = this.props.userslist.filter((user) => user.level === "expert");
  let percentageExpert = Math.round((ExpertUsers.length * 100) / this.props.userslist.length);

  let MaleUsers = this.props.userslist.filter((user) => user.gender === "Male");
  let percentageMale = Math.round((MaleUsers.length * 100) / this.props.userslist.length);
  let FemaleUsers = this.props.userslist.filter((user) => user.gender === "Female");
  let percentageFemale = Math.round((FemaleUsers.length * 100) / this.props.userslist.length);

  let listUsers = this.props.userslist.map((user, index) => {
    let format_date = new Date(user.birthdate);
    let formated_date = format_date.getDate()+'/'+(format_date.getMonth()+1)+'/'+format_date.getFullYear();

    if(this.props.userslist.length !== 0){
      return (
        <div key={index} className="user_item">
          <h4>{user.first_name} {user.last_name}</h4>
          <div className="user_description">
            <div><label>Gender:</label> {user.gender}</div>
            <div><label>Email:</label> {user.email}</div>
            <div><label>Phone:</label> {user.phone}</div>
            <div><label>Level:</label> {user.level}</div>
            <div><label>Player index:</label> {user.player_index}</div>
            <div><label>Birthdate:</label> {formated_date}</div>
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
        <form onSubmit={this.onSubmit}>
        <button className="btn dashboard_button mb-2" type="submit">Export User List</button>
        </form>
        <div className="TableStats">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Stats</th>
                <th scope="col">Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Beginners</td>
                <td>{BeginnerUsers.length}/{this.props.userslist.length} users </td>
                <td>
                <div className="progress">
                  <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{width: `${percentageBeginner}%`}}
                  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Advanced</td>
                <td>{AdvancedUsers.length}/{this.props.userslist.length} users</td>
                <td>
                <div className="progress">
                  <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{width: `${percentageAdvanced}%`}}
                  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Expert</td>
                <td>{ExpertUsers.length}/{this.props.userslist.length} users</td>
                <td>
                <div className="progress">
                  <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{width: `${percentageExpert}%`}}
                  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Men</td>
                <td>{MaleUsers.length}/{this.props.userslist.length} users</td>
                <td>
                <div className="progress">
                  <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{width: `${percentageMale}%`}}
                  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </td>
              </tr><tr>
                <th scope="row">5</th>
                <td>Women</td>
                <td>{FemaleUsers.length}/{this.props.userslist.length} users</td>
                <td>
                <div className="progress">
                  <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{width: `${percentageFemale}%`}}
                  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        {listUsers}
      </div>
    );
  }
}

export default connect(getUser,profileActions)(Viewusers);
