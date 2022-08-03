import React from "react";
import { useForm } from "../UseForm";

export const Page2: React.FC = () => {
  const initialValues: { workspaceName: string; url: string } = {
    workspaceName: "",
    url: "",
  };

  const { values, handleInput } = useForm(initialValues);
  return (
    <div className="page2">
      <label htmlFor="name">Workspace Name</label>
      <input
        type="text"
        placeholder="Eden"
        name="workspaceName"
        value={values.workspaceName}
        onChange={handleInput}
      />
      <label htmlFor="displayName">
        Workspace URL <span>(optional)</span>
      </label>
      <div className="page2__url">
        <div className="default-url">
          <span>www.eden.com/</span>
        </div>
        <input
          type="url"
          placeholder="Example"
          name="url"
          value={values.url}
          onChange={handleInput}
        />
      </div>
    </div>
  );
};
