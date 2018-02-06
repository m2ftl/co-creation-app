import React, { Component } from "react";

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <span style={{ textAlign: "left" }}>
          <h1>Complete your Profile</h1>
        </span>
        <form>
          <div>
            <div class="row">
              <div>
                <input
                  placeholder="First Name"
                  name="firstName"
                  type="text"
                  value="John"
                />
                <input
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                  value="Doe"
                />
                <input placeholder="Gender" name="gender" type="text" />
                <input placeholder="Birthdate" name="birthdate" type="text" />
              </div>
              <div>
                <input
                  placeholder="Email"
                  name="email"
                  type="text"
                  value="john.doe@toto.com"
                />
                <input placeholder="Phone Number" name="phone" type="text" />
              </div>
            </div>
            <div class="row">
              <text>Level</text>
              <select name="Level">
                <option value="beginner">Beginner</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
              <input placeholder="Index" name="index" type="text" />
              <form method="post" action="ton_action">
                <p>
                  Weather Conditions :<br />
                  <input type="checkbox" name="rain" />{" "}
                  <label for="rain">Rain</label>
                  <input type="checkbox" name="cold" />{" "}
                  <label for="cold">Cold</label>
                  <input type="checkbox" name="mild" />{" "}
                  <label for="mild">Mild</label>
                  <input type="checkbox" name="sunny" />{" "}
                  <label for="sunny">Sunny</label>
                </p>
              </form>
            </div>
          </div>
        </form>
        <button>Validate your registration</button>
      </div>
    );
  }
}
