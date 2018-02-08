export default function getQuestions(state){
  return{
    questions: state.questionsReducer.questions,
    comments: state.questionsReducer.comments,
    useruuid: state.profileReducer.id_user
  }
}
