let initialState={
  countertests: '',
  counterquestions: ''
};

export default function dashboardReducer(state=initialState, action){
  switch(action.type){
    case "RETRIEVE_COUNTERQUESTIONS":
        return{
          ...state,
          counterquestions:action.data
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
