import { HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from "./types";

export const appReducer = (state = initialAppState, action: IappAction) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export interface IappState {
  loading: boolean;
}

export interface IappAction {
  type: typeof SHOW_LOADER | typeof HIDE_LOADER;
  // payload?: string;
}

const initialAppState = {
  loading: false,
};

export interface IAlertState {
  text: string;
}

const initialAlertState = {
  text: "",
};

export interface IAlertAction {
  type: typeof HIDE_ALERT | typeof SHOW_ALERT;
  payload?: string;
}

export const alertReducer = (
  state: IAlertState = initialAlertState,
  action: IAlertAction
): IAlertState => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, text: action.payload! };
    case HIDE_ALERT:
      return { ...state, text: "" };
    default:
      return state;
  }
};
