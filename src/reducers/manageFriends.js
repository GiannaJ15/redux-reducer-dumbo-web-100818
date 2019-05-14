export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return ( {
<<<<<<< HEAD
        friends: [...state.friends, action.friend]
      })
    case 'REMOVE_FRIEND': 
      let noNewFriends = state.friends.filter((friend) => {
        return friend.id !== action.id
      })
      return ({
        friends: noNewFriends
=======
        friends: [...friends, action.payload]
>>>>>>> e28ef09023fbd73944b4a4a5635ecd353f0d36dc
      })
    default:
      return state
  }
}
