export default function getDashboard(state){
  return{
    useruuid: state.profileReducer.id_user,
    countertests: state.dashboardReducer.countertests,
    counterquestions: state.dashboardReducer.counterquestions
  }
}
