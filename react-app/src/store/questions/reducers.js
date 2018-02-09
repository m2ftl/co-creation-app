let initialState={
    questions: [],
    answers: [],
    topics: []
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
    case "RETRIEVE_TOPICS":
        return{
          ...state,
          topics:action.data
      }
    case "RESET_QUESTIONS":
        return{
          ...state,
          questions:[]
        }
    default:
      return state;
  }
}
