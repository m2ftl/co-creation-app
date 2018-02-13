import React, { Component } from 'react';
import "../../App.css";
import likeBtnYellow from '../../images/likeY.png';
import likeBtnGrey from '../../images/likeG.png';
import { connect } from 'react-redux';
import getIdeas from "../../store/ideas/selectors";
import ideasActions from '../../store/ideas/actions';


class Idea extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_input: '',
      counterLikes:'',
      authorized: null
    }
  }

  componentWillMount() {
    this.props.resetComments();
  }


  componentDidMount() {

    this.props.authorizeLike(this.props.match.params.id,this.props.useruuid)
    .then(
      likes => {
        if(likes>0) {
          return this.setState({authorized:false});
        } else {
          return this.setState({authorized:true});
        }
      }
    )

    this.props.countLikes(this.props.match.params.id)
    .then(count => {
      this.setState({counterLikes:count})
      });

    if(this.props.ideas.length === 0) {
      // TODO: fetch only this idea
      this.props.retrieveIdeas();
    }
    this.props.retrieveComments(this.props.match.params.id);
  }

  handleInput = (event) => {
    this.setState({
      current_input: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addComment(this.state.current_input, this.props.useruuid, this.props.match.params.id)
    .then((response) => {
      if(response) {
        window.location.reload()
      } else {
        this.props.history.push('/failed');
      }
    });
  }

  handleCountLikes = () => {
    const counterLikesState = parseInt(this.state.counterLikes,10);
    this.setState({
      counterLikes:counterLikesState+1
    })
  }

  disableLikeBtn = () => {
    this.setState({authorized:false});
  }

  render() {

    let listComments = this.props.comments.map((comment, index) => {
      return (
        <div key={index} className="comment_description">
          <div>&laquo; {comment.comment} &raquo;</div>
          <span>~ &nbsp; {comment.first_name} {comment.last_name} / {comment.date}</span>
        </div>
      )
    });

    let likebtnYellow = (<img src={likeBtnYellow} className="likeBtnYellow pointer" alt="logo" width={'30px'} onClick={() =>  {this.props.like(this.props.match.params.id, this.props.useruuid);
        this.handleCountLikes();this.disableLikeBtn();
    }}/>);

    let likebtnGrey = (<img src={likeBtnGrey} className="likeBtnGrey" alt="logo" width={'30px'} />);

    let like = (<button className="btn" onClick={() =>  {this.props.like(this.props.match.params.id, this.props.useruuid);
        this.handleCountLikes();this.disableLikeBtn();
    }} >Like!</button>);


    const found_idea = this.props.ideas.find((element) => {
      return element.id===this.props.match.params.id;
    }) || [];

    return (
      <div className="idea_page_global">
        <h1>Idea details</h1>

        <div className="div_global_idea">

          <div className="idea_item">
            <div className="idea_item_details">
              <div className="idea_item_title">{found_idea.title}</div>
              <div className="idea_item_description">{found_idea.description}</div>
              <div className="idea_description_owner">submitted by {found_idea.first_name} {found_idea.last_name}</div>
              <div className="like_block">
                {this.state.authorized
                  ? likebtnYellow
                  : likebtnGrey
                }

                <div className="like_counter"> {this.state.counterLikes}</div>
              </div>
            </div>

            <div className="idea_background_picture">
            </div>
          </div>

        </div>

        <div className="idea_comments_block">
          <form onSubmit={this.onSubmit}>
            <label>Write a comment:</label>
            <input type="text" onChange={this.handleInput}/>
            <button className="btn" type="submit">Send</button>
          </form>
          {this.props.comments.length !== 0
            ? listComments
            : null
          }
        </div>
      </div>
    );
  }
}

export default connect(getIdeas, ideasActions)(Idea);
