import React from "react";
import { useForm } from "../UseForm";

export const Page1: React.FC = () => {
  const initialValues: { name: string; displayName: string } = {
    name: "",
    displayName: "",
  };

  const { values, handleInput } = useForm(initialValues);
  return (
    <div className="page1">
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        placeholder="Steve Jobs"
        name="name"
        value={values.name}
        onChange={handleInput}
      />
      <label htmlFor="displayName">Display Name</label>
      <input
        type="text"
        placeholder="Steve"
        name="displayName"
        value={values.displayName}
        onChange={handleInput}
      />
    </div>
  );
};
