export function manageFriends(state, action) {
    let stateCpy = {friends:[]}
    if(state.friends) {
      state.friends.map( friend => {
        stateCpy.friends.push( Object.assign({},friend) );
      });
    }
  
    switch(action.type) {
      case "ADD_FRIEND":
        stateCpy.friends.push( Object.assign({},action.friend) );
        return stateCpy;
      case "REMOVE_FRIEND":
        stateCpy.friends = stateCpy.friends.filter( friend => friend.id !== action.id );
        return stateCpy;
      default:
        return stateCpy;
    }
}
  