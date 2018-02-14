import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import likeBtnGrey from '../../images/likeG.png';
import getIdeas from "../../store/ideas/selectors";
import ideasActions from '../../store/ideas/actions';
import { Link } from "react-router-dom";

class ViewIdeas extends Component {

  componentDidMount() {
    this.props.retrieveIdeas();
    this.props.retrieveIdeasByLikes();
    this.props.retrieveUserIdeas(this.props.useruuid);
  }

  formatDate(date) {
    let format_date = new Date(date);
    if (typeof date !== "undefined")  {
      return format_date.getDate()+'/'+(format_date.getMonth()+1)+'/'+format_date.getFullYear();}
    else {
      return ""}
  }

  render() {

    let listIdeas = this.props.ideas.map((idea, index) => {
      let formated_date = this.formatDate(idea.date);
      if(this.props.ideas.length !== 0){
        return (
          <Link key={index} to={'/viewidea/'+idea.id}>
            <div className="list_ideas_item">
              <h3>+ {idea.title}</h3>
              <span>{formated_date}</span>
              <div className="idea_description">
                <div>{idea.description}</div>
                <span>submitted by {idea.first_name} {idea.last_name}</span>
              </div>
            </div>
          </Link>
        )
      } else {
        return (
          <div>
            <p>Sorry, there is no idea yet </p>
            <Link to={'/createidea/'}>
              <p>Create an idea !</p>
            </Link>
          </div>
        )
      }
    });

    let likebtnGrey = (<img src={likeBtnGrey} className="likeBtnGrey" alt="logo" width={'25px'} />);

    let listIdeasByLikes = this.props.ideasByLikes.map((idea, index) => {
      let formated_date = this.formatDate(idea.date);
      if(this.props.ideasByLikes.length !== 0){
        return (
          <Link key={index} to={'/viewidea/'+idea.id}>
            <div className="list_ideas_item">
              <h3>+ {idea.title}
                <span className="counterbtn">{likebtnGrey}</span>
                <span className="counter"> {idea.counter}</span>
              </h3>
              <span>{formated_date}</span>
              <div className="idea_description">
                <div>{idea.description}</div>
                <span>submitted by {idea.first_name} {idea.last_name}</span>
              </div>
            </div>
          </Link>
        )
      } else {
        return (
          <div>
            <p>Sorry, there is no idea yet </p>
            <Link to={'/createidea/'}>
              <p>Create an idea !</p>
            </Link>
          </div>
        )
      }
    });

    let listUserIdeas = this.props.userIdeas.map((idea, index) => {
      let formated_date = this.formatDate(idea.date);
      if(this.props.userIdeas.length !== 0){
        return (
          <Link key={index} to={'/viewidea/'+idea.id }>
            <div className="list_ideas_item">
              <h3>+ {idea.title}
                <span className="counterbtn">{likebtnGrey}</span>
                <span className="counter"> {idea.counter}</span>
              </h3>
              <span>{formated_date}</span>
              <div className="idea_description">
                <div>{idea.description}</div>
                <span>submitted by {idea.first_name} {idea.last_name}</span>
              </div>
            </div>
          </Link>
        )
      } else {
        return (
          <div>
            <p>Sorry, you did not create any idea yet </p>
            <Link to={'/createidea/'}>
              <p>Create my first idea !</p>
            </Link>
          </div>
        )
      }
    });

    return (
      <div className="list_ideas_block">
        <h1>Ideas submitted</h1>
        <p className="subtitle_listIdeas">Please feel free to like and/or comment any idea</p>
          <Tabs>
            <TabList>
              <Tab>Most Liked ideas</Tab>
              <Tab>Most Recent ideas</Tab>
              <Tab>My ideas</Tab>
            </TabList>
            <TabPanel>{listIdeasByLikes}</TabPanel>
            <TabPanel>{listIdeas}</TabPanel>
            <TabPanel>{listUserIdeas}</TabPanel>
          </Tabs>

      </div>
    );
  }
}

export default connect(getIdeas, ideasActions)(ViewIdeas);
