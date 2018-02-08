export default function getIdeas(state){
  return{
    ideas: state.ideasReducer.ideas,
    comments: state.ideasReducer.comments,
    useruuid: state.profileReducer.id_user
  }
}
