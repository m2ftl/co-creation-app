export default function getUseruuid(state){
  return{
    useruuid: state.profileReducer.uuid,
  }
}
