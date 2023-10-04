import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { HotelFormValues } from "../utils/interfeces/@Types";
import Swal from "sweetalert2";
import hotelManagmentService from "../services/hotelManagment-service";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const style = { background: "bg-green-200", drakMode: "bg-green-400" };

const validationSchema = Yup.object().shape({
  hotelName: Yup.string().required("Hotel name is required"),
  image: Yup.mixed().required("Hotel image is required")
  .test('fileSize', 'Image size should not exceed 60kb', value => {
    if (!value) return true; 
    const file = value as File
    return file.size <= 60 * 1024; 
  })
  .test('fileType,Only jpeg, png, jpg, and gif files are', value => {
    if (!value) return true 
    const file = value as File
    const allowedTypes = ['image/jpeg', 'image/png' ,'image/jpg', 'image/gif'];
    return allowedTypes.includes(file.type);
  }),
});




const HotelForm = () => {
  const location = useLocation()
  const hotelName = location.state?.hotelName
  console.log(hotelName)
  const initialValues: HotelFormValues = {
    hotelName: hotelName,
    image: "",
  };
    const nav = useNavigate();
  return (
    <Card style={style}>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        hotelManagmentService.PostImage(values).then((res) => {
          console.log("respon from PostHotel", res);
          Swal.fire({
            title: "Post successfully",
            icon: "success",
            timer: 4000,
          });
          nav("/")
        });
      }}
    >
        {(formik) => (

      <Form>
        <div className="my-2 shadow-md rounded-lg bg-white p-5 ">
        <div className=" font-extralight text-lg form-group gap-2 flex flex-col">
          <label htmlFor="hotelName">Hotel Name</label>
          <Field name="hotelName" type="text" />
          <ErrorMessage name="hotelName" />
        </div>
        <div className=" font-extralight text-lg form-group gap-2 flex flex-col">
          <label htmlFor="image">Hotel Image: </label>
          <div className="flex justify-end">
          <input
            type="file"
            id="image"
            name="image" 
            readOnly
            onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  formik.setFieldValue("image", e.target.files[0]);
                }
              }}
          /></div>
          <ErrorMessage name="image" />
        </div >

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

export default HotelForm;
