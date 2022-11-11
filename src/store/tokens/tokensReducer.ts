import { Action } from "./actions";

export interface TokenState {
  tokens: string;
}
//começa vazio
const initialState = {
  tokens: '',
}

export const tokensReducer = (state: TokenState = initialState, Action: Action) => {
  switch (Action.type) {
    case 'ADD_TOKEN': {
      return { tokens: Action.payload };
    }
    default: return state
  }
}