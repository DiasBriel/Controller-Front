import React from "react";
import { Formik, Field, Form } from "formik";
import { CLASSES } from "../styles/constants";

interface MyFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const initialValues: MyFormValues = { email: "", password: "" };
  const inputStyle =
    "placeholder:text-secondary border border-secondary rounded-md py-2 px-4 mb-5";

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => console.log("form submit")}
    >
      <Form className="flex flex-col h-1/5 justify-between">
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <Field
            className={inputStyle}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <Field
            className={inputStyle}
            type="email"
            name="email"
            placeholder="Enter your password"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
