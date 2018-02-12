let initialState={
    tests: [],
    testsadmin: [],
    answerstests: [],
    countertests: 0
};

export default function testsReducer(state=initialState, action){
  switch(action.type){
    case "RETRIEVE_TESTS":
      return{
        ...state,
        tests:action.data
      }
    case "RETRIEVE_ANSWERSTESTS":
      return{
        ...state,
        answerstests:action.data
      }
    case "RETRIEVE_COUNTERTESTS":
      return{
        ...state,
        countertests:action.data
      }
    default:
      return state;
  }
}
