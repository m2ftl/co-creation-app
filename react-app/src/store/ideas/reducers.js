let initialState={
    ideas: []
};

export default function ideasReducer(state=initialState, action){
  switch(action.type){
    case "RETRIEVE_IDEAS":
      return{
        ...state,
        ideas:action.data
      }
    default:
      return state;
  }
}
