let initialState={
    questions: [],
    answers: []
};

export default function questionsReducer(state=initialState, action){
  switch(action.type){
    case "RETRIEVE_QUESTIONS":
      return{
        ...state,
        questions:action.data
      }
    case "RETRIEVE_ANSWERS":
      return{
        ...state,
        answers:action.data
      }
    default:
      return state;
  }
}
