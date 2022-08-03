import { BaseSyntheticEvent, useState } from "react";

export const useForm = (initialState: any) => {
  const [values, setValues] = useState(initialState);

  const handleInput = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //* All validation logic goes here

  return {
    values,
    setValues,
    handleInput,
  };
};
