import { Action, createReducer, on } from '@ngrx/store';
import { User } from './user';


export const userFeatureKey = 'usersState';

export interface State {

  users: User [],
  error: string 

}

export const initialState: State = {

  users: [],
  error: ''

};

export const reducer = createReducer(
  initialState

);
