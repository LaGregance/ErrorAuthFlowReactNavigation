import {createStore} from 'redux';

const rootReducer = (state: any = {isLogged: false}, action: any) => {
  const newState = {...state};
  if (action.type === 'ACTION_USER_LOGIN') {
    newState.isLogged = true;
  }
  return newState;
};

const rootStore = createStore(rootReducer);
export default rootStore;
