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
        this.props.history.push('/profile_edited');
      } else {
        this.props.history.push('/failed');
      }
    });
  }


  render() {

    let selected_male = "";
    let selected_female = "";
    let selected_gender_choose = "";

    if(this.props.user.gender === "Male") {
      selected_male = "selected";
    } else if (this.props.user.gender === "Female") {
      selected_female = "selected";
    } else {
      selected_gender_choose = "selected";
    }

    let selected_beginner = "";
    let selected_advanced = "";
    let selected_expert = "";

    if(this.props.user.level === "beginner") {
      selected_beginner = "selected";
    } else if (this.props.user.level === "advanced") {
      selected_advanced = "selected";
    } else if (this.props.user.level === "expert"){
      selected_expert = "selected";
    }


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
                <option selected={selected_gender_choose} value="">Select your Gender</option>
                <option selected={selected_male} value="Male">Male</option>
                <option selected={selected_female} value="Female">Female</option>
              </select>
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
                <option selected={selected_beginner} value="beginner">Beginner</option>
                <option selected={selected_advanced} value="advanced">Advanced</option>
                <option selected={selected_expert} value="expert">Expert</option>
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
