export interface UserState {
  maskUserName: boolean;
}

const initialUserState: UserState = {
  maskUserName: true
};

export function reducer(state= initialUserState, action): UserState {
  switch (action.type) {
    case 'MASK_USER_NAME':
      return {...state, maskUserName: action.payload};
    default:
      return state;
  }

}
