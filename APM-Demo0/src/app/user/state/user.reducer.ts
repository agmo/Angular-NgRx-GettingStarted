export interface UserState {
  maskUserName: boolean;
}

export function reducer(state: UserState, action): UserState {
  switch (action.type) {
    case 'MASK_USER_NAME':
      return {...state, maskUserName: action.payload};
    default:
      return state;
  }

}
