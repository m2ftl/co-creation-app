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
      <div className="edit_profile_page">
      <div>
        <span><h1>Complete your Profile</h1></span>
        <form onSubmit={(e)=> {
            e.preventDefault();
            this.props.createUser(this.props.user)
          }}>
          <div className="edit_profile_globalform">
          <div className="edit_profile_row mb-2">
          {this.props.user.firstName} {this.props.user.lastName}
          </div>
          <div className="edit_profile_row mb-2">
                {this.props.user.email}
          </div>
          <div className="edit_profile_row mb-2">
                <select name="Gender" id="Gender" onChange={this.props.updateGender} required>
                  <option value="">Select your Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
          </div>
          <div className="edit_profile_row mb-2">
                <input
                  placeholder="Birthdate"
                  name="birthdate"
                  type="date"
                  onChange={this.props.updateBirthdate}
                  required
                />
          </div>
          <div className="edit_profile_row mb-2">
                <input
                  placeholder="Phone Number"
                  name="phone"
                  type="tel"
                  pattern="^[0-9\-\+\s\(\)]*$"
                  onChange={this.props.updatePhone}
                  required
                />
            </div>
            <div className="edit_profile_row mb-2">
              <select name="Level" onChange={this.props.updateLevel} required>
                <option value="">Select your Level</option>
                <option value="beginner">Beginner</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
              </div>
              <div className="edit_profile_row mb-2">
              <input
                placeholder="Index"
                name="index"
                type="number"
                step="0.1"
                onChange={this.props.updateIndex}
                required
              />
              </div>
              <div className="edit_profile_row mb-2">
              <p>
                Weather Conditions :<br />
                Rain: <input onClick={this.props.updateRain} checked={this.props.user.weather.rain} className="mr-2" type="checkbox" name="rain" value="rain"/>
                Cold: <input onClick={this.props.updateCold} checked={this.props.user.weather.cold} className="mr-2" type="checkbox" name="cold" value="cold"/>
                Mild: <input onClick={this.props.updateMild} checked={this.props.user.weather.mild} className="mr-2" type="checkbox" name="mild" value="mild"/>
                Sunny: <input onClick={this.props.updateSunny} checked={this.props.user.weather.sunny} className="mr-2" type="checkbox" name="sunny" value="sunny"/>
              </p>
            </div>
            <div className="edit_profile_row">
          <button className="btn btn-send" type="submit">
            Validate your registration
          </button>
          </div>
          </div>
        </form>
      </div>
    </div>}
    return (
      content
    );
  }
}

export default connect(getUser, profileActions)(Profile);
