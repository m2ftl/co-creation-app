let initialState={
    ideas: [],
    ideasByLikes: [],
    comments: []
};

export default function ideasReducer(state=initialState, action){
  switch(action.type){
    case "RETRIEVE_IDEAS":
      return{
        ...state,
        ideas:action.data
      }
    case "RETRIEVE_IDEAS_BY_LIKES":
      return{
        ...state,
        ideasByLikes:action.data
      }
    case "RETRIEVE_COMMENTS":
      return{
        ...state,
        comments:action.data
      }
    case "RESET_COMMENTS":
      return{
        ...state,
        comments: []
      }
    case "ADD_COMMENT":

      return{
        ...state,
        comments: []
      }
    default:
      return state;
  }
}
