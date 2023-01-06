import { Typography, Input, Checkbox, Button } from "@material-tailwind/react";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { register } from "../slices/auth";
import { clearMessage } from "../slices/message";

export function Register() {
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val) =>
          val && val.toString().length >= 6 && val.toString().length <= 40
      )
      .required("This field is required!"),
  });

  const handleRegister = (formValue) => {
    const { username, email, password } = formValue;

    setSuccessful(false);

    dispatch(register({ username, email, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };
  return (
    <section className="grid items-center h-screen">
      <div className="p-8 my-auto text-center sm:p-10 md:p-20 xl:px-32 xl:py-24">
        <Typography color="gray" className="mb-16">
          Accede a tu cuenta
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form action="#" className="text-left max-w-[24rem] mx-auto">
            <div className="mb-8">
              <Input size="lg" label="Email" type="email" name="email" />
            </div>
            <div className="mb-4">
              <Input
                size="lg"
                label="Password"
                type="password"
                name="contraseña"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="-ml-3">
                <Checkbox
                  label="Acepto términos y condiciones"
                  labelProps={{
                    className: "font-medium",
                  }}
                />
              </div>
              <div className="-ml-3">
                <Checkbox
                  label="Deseo recibir boletín mensual"
                  labelProps={{
                    className: "font-medium",
                  }}
                />
              </div>
            </div>
            <Button size="lg" className="mt-6" fullWidth>
              Crear cuenta
            </Button>
          </Form>
        </Formik>
      </div>
    </section>
  );
}

export default Register;
//TODO: validate data in the form 