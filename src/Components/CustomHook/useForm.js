import { useState } from "react";

export default function useForm(initialValue) {
  const [values, setValues] = useState(initialValue);

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
}
