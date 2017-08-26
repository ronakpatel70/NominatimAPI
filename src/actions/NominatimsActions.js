import * as types from '../constants/ActionTypes';

export function addFriend(name) {
  return {
    type: types.ADD_FRIEND,
    name
  };
}

export function Search(name) {
  return {
    type: types.SEARCH_DATA,
    name
  };
}

// export function deleteFriend(id) {
//   return {
//     type: types.DELETE_FRIEND,
//     id
//   };
// }

// export function starFriend(id) {
//   return {
//     type: types.STAR_FRIEND,
//     id
//   };
// }
