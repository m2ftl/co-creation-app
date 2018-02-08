let initialState={
    questions: [],
    comments: []
};

export default function questionsReducer(state=initialState, action){
  switch(action.type){
    case "RETRIEVE_QUESTIONS":
      return{
        ...state,
        questions:action.data
      }
    default:
      return state;
  }
}
