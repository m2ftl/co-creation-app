export default function getTests(state){
  return{
    tests: state.testsReducer.tests,
    useruuid: state.profileReducer.id_user
  }
}
