import React from "react";
import { useSelector } from "react-redux";
import { IState } from "../redux/rootReducer";

export interface IAlertProps {
  text: string;
}

export const Alert = () => {
  const text = useSelector((state: IState) => state.alert.text);
  if (!text) return null;
  return <div className="alert alert-warning">{text}</div>;
};
