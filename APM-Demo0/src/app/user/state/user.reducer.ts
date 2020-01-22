import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserActions, UserActionTypes} from './user.actions';

export interface UserState {
  maskUserName: boolean;
}

const initialUserState: UserState = {
  maskUserName: true
};

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export function reducer(state= initialUserState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.ToggleMaskUserName:
      return {...state, maskUserName: action.payload};
    default:
      return state;
  }

}
