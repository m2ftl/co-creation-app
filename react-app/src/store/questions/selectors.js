export default function getQuestions(state){
  return{
    questions: state.questionsReducer.questions,
    answers: state.questionsReducer.answers,
    topics: state.questionsReducer.topics,
    useruuid: state.profileReducer.id_user
  }
}
