let initialState={
    tests: []
};

export default function testsReducer(state=initialState, action){
  switch(action.type){
    case "RETRIEVE_TESTS":
      return{
        ...state,
        tests:action.data
      }
    default:
      return state;
  }
}
