import { FC } from "react";

import "./Field.css";

interface IField {
  label: string;
  value: string;
}

export const Field: FC<IField> = ({ label, value }) => {
  return (
    <div className="Field">
      <label className="Label">{label}</label>
      <span className="Value">{value}</span>
    </div>
  );
};
