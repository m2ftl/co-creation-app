import React from "react";
import { connect } from "react-redux";
import { profileActions } from "../../store/profile/actions";
import { getUser } from "../../store/profile/selectors";
import { Redirect} from "react-router-dom";


class Profile extends React.Component {


  render() {
    let content;
    if (this.props.completedProfile){
      content = <Redirect to = "/dashboard" />
    }else{
      content =
      <div>
      <div className="signout" onClick={() => this.props.history.replace("/sign-out")}>
        Sign out
      </div>
        <span style={{ textAlign: "left" }}>
          <h1>Complete your Profile</h1>
        </span>
        <form onSubmit={(e)=> {
            e.preventDefault();
            this.props.createUser(this.props.user)
          }}>
          <div>
            <div className="row">
              <div>
                <input
                  placeholder="First Name"
                  name="firstName"
                  type="text"
                  value={this.props.user.firstName}
                />
                <input
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                  value={this.props.user.lastName}
                />
                <select name="Gender" id="Gender" onChange={this.props.updateGender}>
                  <option value="">Select your Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input
                  placeholder="Birthdate"
                  name="birthdate"
                  type="text"
                  onChange={this.props.updateBirthdate}
                />
              </div>
              <div>
                <input
                  placeholder="Email"
                  name="email"
                  type="text"
                  value={this.props.user.email}
                />
                <input
                  placeholder="Phone Number"
                  name="phone"
                  type="text"
                  onChange={this.props.updatePhone}
                />
              </div>
            </div>
            <div className="row">
              <select name="Level" onChange={this.props.updateLevel}>
                <option value="">Select your Level</option>
                <option value="beginner">Beginner</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
              <input
                placeholder="Index"
                name="index"
                type="text"
                onChange={this.props.updateIndex}
              />
              <p>
                Weather Conditions :<br />
                <input onClick={this.props.updateRain} type="checkbox" name="rain" value="rain"/>Rain
                <input onClick={this.props.updateCold} type="checkbox" name="cold" value="cold"/>Cold
                <input onClick={this.props.updateMild} type="checkbox" name="mild" value="mild"/>Mild
                <input onClick={this.props.updateSunny} type="checkbox" name="sunny" value="sunny"/>Sunny
              </p>
            </div>
          </div>
          <button type="submit">
            Validate your registration
          </button>
        </form>
      </div>}
    return (
      content
    );
  }
}

export default connect(getUser, profileActions)(Profile);
