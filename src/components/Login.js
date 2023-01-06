import { Typography, Input, Checkbox, Button } from "@material-tailwind/react";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";

export function SignIn() {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Campo requerido!"),
    password: Yup.string().required("Campo requerido!"),
  });

  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    setLoading(true);

    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        navigate("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }
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
              <Typography as="a" href="#" color="blue" className="font-medium">
                Olvidaste tu Contraseña?
              </Typography>
              <Typography as="a" href="#" color="blue" className="font-medium">
                Crear una cuenta
              </Typography>
            </div>
            <Button size="lg" className="mt-6" fullWidth>
              Ingresar
            </Button>
          </Form>
        </Formik>
      </div>
    </section>
  );
}

export default SignIn;
