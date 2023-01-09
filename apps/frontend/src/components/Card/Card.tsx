import { ReactNode } from "react";
import { ClipLoader } from "react-spinners";

import "./Card.css";

interface ICard {
  isLoading: boolean;
  children: ReactNode;
}

export const Card = ({ isLoading, children }: ICard) => {
  return <div className="Card">{isLoading ? <ClipLoader /> : children}</div>;
};
