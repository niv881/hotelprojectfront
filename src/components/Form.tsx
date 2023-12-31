import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import hotelManagmentService from "../services/hotelManagment-service";
import { address } from "../utils/interfeces/@Types";

const FormAddress = (props: { address: (address: string) => void; setCityOptions: (cityOptions: string[]) => void }) => {
  const validationSchema = Yup.object({
    address: Yup.string().min(2).required(),
  });

  const initialValues = {
    address: "",
  };

  const [cityOptions, setCityOptions] = useState<string[]>([]);

  useEffect(() => {
    hotelManagmentService.GetInputAddress().then((res: address[]) => {
      const uniqueCities = Array.from(new Set(res.map((item) => item.city)));
      setCityOptions(uniqueCities);
      props.setCityOptions(uniqueCities);
    }).catch((error: string)=>{
       setCityOptions([`Sorry we have a problem. No option to choose.. `]);
    });
  }, []);

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={({ address }) => {
          props.address(address);
        }}
      >
        <Form className="m-3">
          <div className="rounded-lg">
            <div className="flex items-center justify-center font-extralight text-lg form-group gap-2">
              <Field
                as="select" 
                className="px-2 py-1 rounded-md border-blue-300 border-2 w-full"
                name="address"
                id="address"
              >
                <option value="" disabled>
                  Select a city
                </option>
                {cityOptions.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </Field>
              <button
                type="submit"
                className="bg-gray-950 dark:bg-gray-300 text-gray-400 border dark:text-gray-950  border-gray-400 dark:border-gray-950 dark:font-bold font-bold w-16 h-10 ms-5 rounded-lg"
              >
                GO!
              </button>
            </div>
            <ErrorMessage
              name="address"
              component="div"
              className="text-red-500"
            />
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default FormAddress;

