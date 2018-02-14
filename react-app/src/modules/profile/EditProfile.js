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
                className="inputfield"
                value={this.props.user.firstName}
                onChange={this.props.updateFirstName}
                required
              />
            </div>
            <div className="edit_profile_row mt-2">
              <input
                placeholder="Last Name"
                name="lastName"
                type="text"
                className="inputfield"
                value={this.props.user.lastName}
                onChange={this.props.updateLastName}
                required
              />
            </div>
            <div className="edit_profile_row mt-2">
              Gender: <select name="Gender" id="Gender" onChange={this.props.updateGender} required>
                <option selected={selected_gender_choose} value="">Select your Gender</option>
                <option selected={selected_male} value="Male">Male</option>
                <option selected={selected_female} value="Female">Female</option>
              </select>
              </div>
            <div className="edit_profile_row mt-2">
              <input
                placeholder="Email"
                name="email"
                className="inputfield"
                type="text"
                onChange={this.props.updateEmail}
                value={this.props.user.email}
                required
              />
            </div>
            <div className="edit_profile_row mt-2">
              <input
                placeholder="Phone Number"
                name="phone"
                type="tel"
                pattern="^[0-9\-\+\s\(\)]*$"
                className="inputfield"
                onChange={this.props.updatePhone}
                value={this.props.user.phone}
                required
              />
            </div>
            <div className="edit_profile_row mt-2">
              Level: <select name="Level" onChange={this.props.updateLevel} required>
                <option selected={selected_level_choose} value="">Select your Level</option>
                <option selected={selected_beginner} value="beginner">Beginner</option>
                <option selected={selected_advanced} value="advanced">Advanced</option>
                <option selected={selected_expert} value="expert">Expert</option>
              </select>
            </div>
            <div className="edit_profile_row mt-2">
              Index: <input
                placeholder="Index"
                name="index"
                type="number"
                step="0.1"
                onChange={this.props.updateIndex}
                value={this.props.user.index}
                required
              />
            </div>
            <div className="edit_profile_row mt-2">
              <p>
                Weather Conditions :<br />
                Rain: <input onChange={this.props.updateRain} type="checkbox" checked={this.props.user.weather.rain} className="mr-2" name="rain" value="rain"/>
                Cold: <input onChange={this.props.updateCold} type="checkbox" checked={this.props.user.weather.cold} className="mr-2" name="cold" value="cold"/>
                Mild: <input onChange={this.props.updateMild} type="checkbox" checked={this.props.user.weather.mild} className="mr-2" name="mild" value="mild"/>
                Sunny: <input onChange={this.props.updateSunny} type="checkbox" checked={this.props.user.weather.sunny} className="mr-2" name="sunny" value="sunny"/>
              </p>
            </div>
            <div className="edit_profile_row">
              <button className="btn btn-send" type="submit">
                Save my profile
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(getUser, profileActions)(EditProfile);
