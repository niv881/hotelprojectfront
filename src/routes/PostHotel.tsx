import React, { useState } from "react";
import { ErrorMessage, Field, Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import Spinner from "../utils/Spinner";
import Card from "../components/Card";
import { AxiosResponse } from "axios";
import hotelManagmentService from "../services/hotelManagment-service";
import { useNavigate } from "react-router-dom";

const style = { background: "bg-green-200", drakMode: "bg-green-400" };

const PostHotel = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const nav = useNavigate();
  const [hotel, setHotel] = useState({
    hotel: {
      name: "",
      about: "",
      email: "",
      phoneNumber: "",
    },
    address: {
      street: "",
      country: "",
      city: "",
      streetNumber: "",
    },
    rooms: [
      {
        type: "",
        price: 0,
        capacity: 0,
      },
    ],
  });
  const validationSchema = Yup.object({
    hotel: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .test(
          "no-trailing-space",
          "Name should not end with a space",
          (value) => {
            // Use a regular expression to check for trailing spaces
            return !/\s+$/.test(value);
          }
        ),
      about: Yup.string().required("About is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
    }),
    address: Yup.object({
      street: Yup.string().required("Street is required"),
      country: Yup.string().required("Country is required"),
      city: Yup.string().required("City is required"),
      streetNumber: Yup.string().required("Street Number is required"),
    }),
    rooms: Yup.array().of(
      Yup.object().shape({
        type: Yup.string().required("Room type is required"),
        price: Yup.number()
          .required("Room price is required")
          .min(0, "Price must be greater than or equal to 0"),
        capacity: Yup.number()
          .required("Room capacity is required")
          .min(1, "Capacity must be at least 1"),
      })
    ),
  });

  return (
    <Card style={style}>
      <Formik
        initialValues={hotel}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          values.hotel.name.trim();
          hotelManagmentService
            .postHotel(values)
            .then((response) => {
              const axiosResponse = response as AxiosResponse;
              if (axiosResponse.status === 201) {
                // Check if the response status is OK (you may need to adjust this based on your API)
                Swal.fire({
                  title: "Post successfully",
                  icon: "success",
                  timer: 4000,
                });
                nav("/postImageForHotel", {
                  state: { hotelName: values.hotel.name },
                });
              } else {
                // Handle other status codes or error cases
                Swal.fire({
                  title: "Post failed",
                  icon: "error",
                  text: "There was an issue with the request.",
                });
              }
            })
            .catch((error) => {
              // Handle any network errors or exceptions here
              Swal.fire({
                title: "Post failed",
                icon: "error",
                text: "An error occurred while making the request.",
              });
            });
        }}
      >
        {(formik) => (
          <Form className="w-full">
            <div className="my-2 shadow-md rounded-lg bg-white p-5 dark:bg-gray-700 ">
              <div className="font-extralight text-lg form-group gap-2 flex flex-col ">
                <label   className="dark:text-white font-normal" htmlFor="hotel.name">Hotel name : </label>
                <Field
                  className=" px-2 py-1 rounded-md border-green-300 border-2"
                  name="hotel.name"
                  type="text"
                  id="hotel.name"
                />
                <ErrorMessage
                  name="hotel.name"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className=" font-extralight text-lg form-group gap-2 flex flex-col">
                <label   className="dark:text-white font-normal" htmlFor="hotel.about">about : </label>
                <Field
                  className=" px-2 py-1 rounded-md border-green-300 border-2"
                  name="hotel.about"
                  type="text"
                  id="hotel.about"
                />
                <ErrorMessage
                  name="hotel.about"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className=" font-extralight text-lg form-group gap-2 flex flex-col">
                <label   className="dark:text-white font-normal" htmlFor="hotel.email">email : </label>
                <Field
                  className=" px-2 py-1 rounded-md border-green-300 border-2"
                  name="hotel.email"
                  type="text"
                  id="hotel.email"
                />
                <ErrorMessage
                  name="hotel.email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className=" font-extralight text-lg form-group gap-2 flex flex-col">
                <label   className="dark:text-white font-normal" htmlFor="hotel.phoneNumber">phoneNumber : </label>
                <Field
                  className=" px-2 py-1 rounded-md border-green-300 border-2"
                  name="hotel.phoneNumber"
                  type="text"
                  id="hotel.phoneNumber"
                />
                <ErrorMessage
                  name="hotel.phoneNumber"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className=" font-extralight text-lg form-group gap-2 flex flex-col">
                <label   className="dark:text-white font-normal" htmlFor="address.street">street : </label>
                <Field
                  className=" px-2 py-1 rounded-md border-green-300 border-2"
                  name="address.street"
                  type="text"
                  id="address.street"
                />
                <ErrorMessage
                  name="address.street"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className=" font-extralight text-lg form-group gap-2 flex flex-col">
                <label   className="dark:text-white font-normal" htmlFor="country">country : </label>
                <Field
                  className=" px-2 py-1 rounded-md border-green-300 border-2"
                  name="address.country"
                  type="text"
                  id="address.country"
                />
                <ErrorMessage
                  name="address.country"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className=" font-extralight text-lg form-group gap-2 flex flex-col">
                <label   className="dark:text-white font-normal" htmlFor="city">city : </label>
                <Field
                  className=" px-2 py-1 rounded-md border-green-300 border-2"
                  name="address.city"
                  type="text"
                  id="address.city"
                />
                <ErrorMessage
                  name="address.city"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className=" font-extralight text-lg form-group gap-2 flex flex-col">
                <label   className="dark:text-white font-normal" htmlFor="streetNumber">streetNumber : </label>
                <Field
                  className=" px-2 py-1 rounded-md border-green-300 border-2"
                  name="address.streetNumber"
                  type="text"
                  id="address.streetNumber"
                />
                <ErrorMessage
                  name="address.streetNumber"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <FieldArray name="rooms">
                {(arrayHelpers: {
                  remove: (arg0: number) => void;
                  push: (arg0: {
                    type: string;
                    price: string;
                    capacity: string;
                  }) => void;
                }) => (
                  <div>
                    {formik.values.rooms.map((room, index) => (
                      <div
                        className="font-extralight text-lg form-group gap-2 flex flex-col"
                        key={index}
                      >
                        <label   className="dark:text-white font-normal" htmlFor={`rooms.${index}.type`}>
                          Room Type:
                        </label>
                        <Field
                          type="text"
                          className=" px-2 py-1 rounded-md border-green-300 border-2"
                          id={`rooms.${index}.type`}
                          name={`rooms.${index}.type`}
                        />
                        <ErrorMessage
                          name={`rooms.${index}.type`}
                          component="div"
                        />

                        <label   className="dark:text-white font-normal" htmlFor={`rooms.${index}.price`}>
                          Room Price:
                        </label>
                        <Field
                          type="text"
                          className=" px-2 py-1 rounded-md border-green-300 border-2"
                          id={`rooms.${index}.price`}
                          name={`rooms.${index}.price`}
                        />
                        <ErrorMessage
                          name={`rooms.${index}.price`}
                          component="div"
                        />

                        <label   className="dark:text-white font-normal" htmlFor={`rooms.${index}.capacity`}>
                          Room capacity:
                        </label>
                        <Field
                          type="text"
                          className=" px-2 py-1 rounded-md border-green-300 border-2"
                          id={`rooms.${index}.capacity`}
                          name={`rooms.${index}.capacity`}
                        />
                        <ErrorMessage
                          name={`rooms.${index}.capacity`}
                          component="div"
                        />
                        {formik.values.rooms.length > 1 && (
                          <button
                          className=" dark:text-white dark:font-normal"
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            Remove Room
                          </button>
                        )}
                      </div>
                    ))}
                    <div className="font-extralight text-lg form-group gap-2 flex flex-col dark:text-white dark:font-normal">
                      <button
                        type="button"
                        onClick={() =>
                          arrayHelpers.push({
                            type: "",
                            price: "",
                            capacity: "",
                          })
                        }
                      >
                        Add Room
                      </button>
                    </div>
                  </div>
                )}
              </FieldArray>

              <div className="flex justify-center mt-2">
                <button className="disabled:bg-green-700/50 rounded text-white bg-green-600 px-3 py-2 mb-2">
                  Register
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Card>
  );
};
export default PostHotel;
