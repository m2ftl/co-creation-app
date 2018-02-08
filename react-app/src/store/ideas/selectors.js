export default function getIdeas(state){
  console.log(state);
  return{
    ideas: state.ideasReducer.ideas
  }
}
