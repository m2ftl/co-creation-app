export default function getQuestions(state){
  return{
    questions: state.questionsReducer.questions,
    answers: state.questionsReducer.answers,
    useruuid: state.profileReducer.id_user
  }
}
