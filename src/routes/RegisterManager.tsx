import { ErrorMessage, Field, Formik, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Spinner from "../utils/Spinner";
import Card from "../components/Card";
import authService from "../services/auth-service";
const style = { background: "bg-green-200", drakMode: "bg-green-400" };

const RegisterManager = () => {
  const nav = useNavigate();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const validationSchema = Yup.object({
    username: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(8)
      .required()
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,20}$/),
  });
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  return (
    <>
      <Card style={style}>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={({ username, email, password }) => {
            setLoading(true);

            authService
              .registerManager(username, email, password)
              .then((res) => {
                if (res.data) {
                  Swal.fire({
                    title: "Register successfully",
                    icon: "success",
                    timer: 4000,
                  });
                  nav("/login");
                }     
              })
              .catch((e) => {
                Swal.fire({
                  title: "Oops...",
                  text: `${e}`,
                  icon: "error",
                  timer: 4000,
                });
                setError(`Error Occurred ! come back later 😄`);
              })
              .finally(() => {
                setLoading(false);
              });
          }}
        >
          <Form className="w-full">
            {error && (
              <p className="text-red-500 flex justify-center w-fit mx-auto px-10 py-5 mt-4 p-4 shadow-md rounded-3xl">
                {error}
              </p>
            )}
            <div className="my-2 shadow-md rounded-lg bg-white p-5">
              <div className=" font-extralight text-lg form-group gap-2 flex flex-col">
                <label htmlFor="username">User name : </label>
                <Field
                  className=" px-2 py-1 rounded-md border-green-300 border-2"
                  name="username"
                  type="text"
                  id="username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className=" font-extralight text-lg form-group gap-2 flex flex-col">
                <label htmlFor="email">Email address : </label>
                <Field
                  className=" px-2 py-1 rounded-md border-green-300 border-2"
                  name="email"
                  type="text"
                  id="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className=" font-extralight text-lg form-group gap-2 flex flex-col">
                <label htmlFor="password">Password : </label>
                <Field
                  className=" px-2 py-1 rounded-md border-green-300 border-2"
                  name="password"
                  type="text"
                  id="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex justify-center mt-2">
                <button
                  disabled={loading}
                  className="disabled:bg-green-700/50 rounded text-white bg-green-600 px-3 py-2 mb-2"
                >
                  Register
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </Card>
      {loading && <Spinner />}
    </>
  );
};

export default RegisterManager;
