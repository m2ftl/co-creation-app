import React from "react";
import { connect } from "react-redux";
import { profileActions } from "../../store/profile/actions";
import { getUser } from "../../store/profile/selectors";


class EditProfile extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.user);
    this.props.UpdateProfile(this.props.user)
    .then((response) => {
      if(response) {
        this.props.history.push('/success');
      } else {
        this.props.history.push('/failed');
      }
    });
  }


  render() {

    return (
      <div className="edit_profile_page">
        <h3>My Profile</h3>
        <form onSubmit={this.onSubmit}>
          <div className="edit_profile_globalform">
            <div className="edit_profile_row">
              <input
                placeholder="First Name"
                name="firstName"
                type="text"
                value={this.props.user.firstName}
                onChange={this.props.updateFirstName}
              />
              <input
                placeholder="Last Name"
                name="lastName"
                type="text"
                value={this.props.user.lastName}
                onChange={this.props.updateLastName}
              />
            </div>
            <div className="edit_profile_row">
              <select name="Gender" id="Gender" onChange={this.props.updateGender}>
                <option value="">Select your Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              </div>
            <div className="edit_profile_row">
              <input
                placeholder="Birthdate"
                name="birthdate"
                type="text"
                onChange={this.props.updateBirthdate}
                value={this.props.user.birthdate}
              />
            </div>
            <div className="edit_profile_row">
              <input
                placeholder="Email"
                name="email"
                type="text"
                onChange={this.props.updateEmail}
                value={this.props.user.email}
              />
              <input
                placeholder="Phone Number"
                name="phone"
                type="text"
                onChange={this.props.updatePhone}
                value={this.props.user.phone}
              />
            </div>
            <div className="edit_profile_row">
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
                value={this.props.user.index}
              />
            </div>
            <div className="edit_profile_row">
              <p>
                Weather Conditions :<br />
                <input onChange={this.props.updateRain} type="checkbox" checked={this.props.user.weather.rain} name="rain" value="rain"/>Rain
                <input onChange={this.props.updateCold} type="checkbox" checked={this.props.user.weather.cold} name="cold" value="cold"/>Cold
                <input onChange={this.props.updateMild} type="checkbox" checked={this.props.user.weather.mild} name="mild" value="mild"/>Mild
                <input onChange={this.props.updateSunny} type="checkbox" checked={this.props.user.weather.sunny} name="sunny" value="sunny"/>Sunny
              </p>
            </div>
            <div className="edit_profile_row">
              <button type="submit">
                Edit my profile
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(getUser, profileActions)(EditProfile);
