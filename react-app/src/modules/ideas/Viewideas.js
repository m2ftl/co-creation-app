import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import likeBtnGrey from '../../images/likeG.png';
import likeBtnTop from '../../images/likeY.png';
import lightbulb from '../../images/dash_icons_got_idea.png';
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

    let likebtnGrey = (<img src={likeBtnGrey} className="likeBtnGrey" alt="logo" width={'25px'} />);
    let likebtnTop = (<img src={likeBtnTop} className="likeBtnGrey" alt="logo" width={'35px'} />);

    let top_idea = null;

    if(this.props.ideasByLikes[0] !== undefined){
      top_idea = (
        <Link className="link" to={'/viewidea/'+this.props.ideasByLikes[0].id} style={{ textDecoration: 'none' }}>
          <div className="top_idea_global">
            <div className="top_idea_pics">
              <img src={lightbulb} alt="lightbulb"/>
            </div>
            <div className="top_idea">
              <p className="topIdea_title">{this.props.ideasByLikes[0].title}</p>
              <p className="topIdea_counterbtn">{likebtnTop}</p>
              <p className="topIdea_counter"> {this.props.ideasByLikes[0].counter}</p>
              <p className="topIdea_description">{this.props.ideasByLikes[0].description}</p>
<p className="topIdea_owner">Submitted by {this.props.ideasByLikes[0].first_name} {this.props.ideasByLikes[0].last_name} on {this.formatDate(this.props.ideasByLikes[0].date)}</p>
<img src={this.props.ideasByLikes[0].avatar} className="user_pic2" alt="logo"/>
            </div>
          </div>
        </Link>
      )
    }

    let listIdeas = this.props.ideas.map((idea, index) => {
      let formated_date = this.formatDate(idea.date);
        return (
          <Link className="link" key={index} to={'/viewidea/'+idea.id} style={{ textDecoration: 'none' }}>
            <div className="question_item">
              <h3>{idea.title}
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
    });

    let listIdeasByLikes = this.props.ideasByLikes.map((idea, index) => {
      let formated_date = this.formatDate(idea.date);
        return (
          <Link className="link" key={index} to={'/viewidea/'+idea.id} style={{ textDecoration: 'none' }}>
            <div className="question_item">
              <h3>{idea.title}
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
    });

    let listUserIdeas = this.props.userIdeas.map((idea, index) => {
      let formated_date = this.formatDate(idea.date);
        return (
          <Link className="link" key={index} to={'/viewidea/'+idea.id } style={{ textDecoration: 'none' }}>
            <div className="question_item">
              <h3>{idea.title}
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
    });

    let noIdeaYet = <div>
                      <p>Sorry, there is no idea yet </p>
                      <Link to={'/createidea/'} style={{ textDecoration: 'none' }}>
                        <p>Create an idea !</p>
                      </Link>
                    </div>

    let noPersonalIdeaYet = <div>
                              <p>Sorry, you did not create any idea yet </p>
                              <Link to={'/createidea/'} style={{ textDecoration: 'none' }}>
                                <p>Create my first idea !</p>
                              </Link>
                            </div>

    return (
      <div className="list_ideas_block">
        <h1>Ideas submitted</h1>
        <p className="subtitle_listIdeas">Please feel free to like and/or comment any idea</p>
        <div className="center_top_idea">{top_idea}</div>
          <Tabs>
            <TabList>
              <Tab>Most Liked ideas</Tab>
              <Tab>Most Recent ideas</Tab>
              <Tab>My ideas</Tab>
            </TabList>
              <TabPanel> {this.props.ideasByLikes.length !== 0 ? listIdeasByLikes : noIdeaYet}
              </TabPanel>
              <TabPanel> {this.props.ideas.length !== 0 ? listIdeas : noIdeaYet}
              </TabPanel>
              <TabPanel > {this.props.userIdeas.length !== 0 ? listUserIdeas : noPersonalIdeaYet}
              </TabPanel>
          </Tabs>
      </div>
    );
  }
}

export default connect(getIdeas, ideasActions)(ViewIdeas);
