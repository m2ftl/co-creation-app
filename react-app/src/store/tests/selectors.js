export default function getTests(state){
  return{
    tests: state.testsReducer.tests,
    useruuid: state.profileReducer.id_user,
    firstName: state.profileReducer.firstName,
    lastName: state.profileReducer.lastName,
    answerstests: state.testsReducer.answerstests,
  }
}
