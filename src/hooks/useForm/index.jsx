import { useState } from "react";
export const useForm = (inicialState) => {
  const [form, setForm] = useState(inicialState);

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const clearForm = () => {
    setForm(inicialState);
  };

  return { form, handleForm, clearForm };
};
