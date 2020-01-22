import {Action} from '@ngrx/store';

export enum UserActionTypes {
  ToggleMaskUserName = '[User] Toggle mask user name'
}

// action creator
export class ToggleMaskUserName implements Action {
  readonly type = UserActionTypes.ToggleMaskUserName;

  constructor(public payload: boolean) {
  }
}

export type UserActions = ToggleMaskUserName; // a type to union (|) all of the action creators (now there's a single one)
