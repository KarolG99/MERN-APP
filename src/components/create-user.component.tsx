import axios from "axios";
import React, { useState } from "react";
import { ExerciseWrapper } from "./CreateExercise/create-exercise.styles";
import FormField from "./FormField/FormField";

interface IInitialUserState {
  username: string;
}

const initialUserState: IInitialUserState = {
  username: "",
};
const CreateUser = () => {
  const [formValues, setFormValues] = useState(initialUserState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = {
      username: formValues.username,
    };
    axios
      .post("http://localhost:3000/users/add", newUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setFormValues(initialUserState);
  };

  return (
    <ExerciseWrapper>
      <p>You are on the Create User component!</p>
      <h3>Create new user</h3>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Username"
          id="username"
          name="username"
          value={formValues.username}
          onChange={handleInputChange}
        />

        <button className="submit-button" type="submit">
          Create
        </button>
      </form>
    </ExerciseWrapper>
  );
};

export default CreateUser;
