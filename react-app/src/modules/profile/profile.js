import React from "react";
import { connect } from "react-redux";
import { profileActions } from "../../store/profile/actions";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <span style={{ textAlign: "left" }}>
          <h1>Complete your Profile</h1>
        </span>
        <form>
          <div>
            <div className="row">
              <div>
                <input
                  placeholder="First Name"
                  name="firstName"
                  type="text"
                  onChange={this.props.updateFirstName}
                />
                <input
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                  onChange={this.props.updateLastName}
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
                  onChange={this.props.updateEmail}
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
        </form>
        <button onClick={this.props.createUser}>
          Validate your registration
        </button>
      </div>
    );
  }
}

export default connect(null, profileActions)(Profile);
