import { FC } from "react";

import "./CodeBlock.css";

interface ICodeBlock {
  code: string;
}

export const CodeBlock: FC<ICodeBlock> = ({ code }) => {
  return (
    <div className="CodeBlock">
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};
