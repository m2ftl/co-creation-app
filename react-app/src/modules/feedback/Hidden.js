import React, { Component } from 'react';
import "../../App.css";
import { Link } from "react-router-dom";

class Success extends Component{

  render() {
    return (
        <div>
        <h1> Congrats you find our hidden game of the week!!!! </h1>
        <h1> Be the first to answer correctly to the 3 questions and you will receive a special gift !!!! </h1>
        <label  className="topTitle" >What was the nickname of Jack Nicklaus?</label>
        <div>
        <label> The albatros </label>
        <input name="The albatros"  type="checkbox" />
        <label className="ml-5"> The golden bear </label>
        <input name="The golden bear"  type="checkbox" />
        <label className="ml-5"> Mickey Mouse </label>
        <input name="Mickey Mouse" type="checkbox" />
        </div>
        <label  className="topTitle" >Your ball is in a bunker, After a try you touch the sand but not the ball.</label>
        <div>
        <label> No penality point </label>
        <input name="No penality point"  type="checkbox" />
        <label className="ml-5"> One penality point </label>
        <input name="One penality point"  type="checkbox" />
        <label className="ml-5"> Two penality points </label>
        <input name="Two penality points" type="checkbox" />
        </div>
        <label  className="topTitle" >What is the diameter of the golf ball?</label>
        <div>
        <label> 45,28 mm </label>
        <input name="45,28 mm"  type="checkbox" />
        <label className="ml-5"> 42,53 mm </label>
        <input name="42,53 mm"  type="checkbox" />
        <label className="ml-5"> 42,67 mm </label>
        <input name="42,67 mm" type="checkbox" />
        </div>
        <Link to="/dashboard">
        <button className="btn btn-dash mt-5">Submit your answer</button>
        </Link>
        </div>
    );
  }
}

export default (Success);
