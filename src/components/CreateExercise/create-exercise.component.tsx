import React, { useState } from "react";
import FormField from "../FormField/FormField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ExerciseWrapper } from "./create-exercise.styles";

interface IExerciseState {
  username: String;
  description: String;
  duration: Number;
  date: Date;
  // users: unknown[];
}

const initialExerciseState: IExerciseState = {
  username: "",
  description: "",
  duration: 0,
  date: new Date(),
  // users: [],
};

interface IInitialFormValues {
  username: String;
  description: String;
  duration: Number;
}

const initialFormValues: IInitialFormValues = {
  username: "",
  description: "",
  duration: 0,
};

const initialDateState = {
  date: new Date(),
};

const CreateExercise = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [dateValue, setDateValue] = useState<{ date: Date }>(initialDateState);
  const [exercise, setExercise] = useState(initialExerciseState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date: Date) => {
    setDateValue({ date: date });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newExercise = {
      username: formValues.username,
      description: formValues.description,
      duration: formValues.duration,
      date: dateValue.date,
    };

    console.log(newExercise);

    setFormValues(initialFormValues);
    setDateValue(initialDateState);
  };

  return (
    <ExerciseWrapper>
      <p>You are on the Create Exercise component!</p>
      <h3>Create new exercise</h3>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Username"
          id="username"
          name="username"
          value={formValues.username}
          onChange={handleInputChange}
        />
        <FormField
          label="Description"
          id="description"
          name="description"
          value={formValues.description}
          onChange={handleInputChange}
        />
        <FormField
          label="Duration"
          id="duration"
          name="duration"
          value={formValues.duration}
          onChange={handleInputChange}
          type="number"
        />
        <DatePicker
          className="date-picker"
          selected={dateValue.date}
          onChange={handleDateChange}
        />
        <button className="submit-button" type="submit">
          Create
        </button>
      </form>
    </ExerciseWrapper>
  );
};

export default CreateExercise;
