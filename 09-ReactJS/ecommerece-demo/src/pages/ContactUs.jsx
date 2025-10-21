import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// ✅ Validation Schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  phone: Yup.string(), // optional
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot exceed 500 characters"),
});

const ContactUs = () => {
  return (
    <div className="container my-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">Contact Us</h2>

      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          phone: "",
          message: "",
        }}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={true}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          alert("✅ Thank you! We will get to you soon.");
          console.log("Form Data:", values);

          resetForm(); // reset form values
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            {/* Email */}
            <div className="mb-3">
              <label>Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>

            {/* First Name */}
            <div className="mb-3">
              <label>First Name</label>
              <Field type="text" name="firstName" className="form-control" />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Last Name */}
            <div className="mb-3">
              <label>Last Name</label>
              <Field type="text" name="lastName" className="form-control" />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-3">
              <label>Phone Number (optional)</label>
              <PhoneInput
                country={"eg"}
                value={values.phone}
                onChange={(phone) => setFieldValue("phone", phone)}
                inputProps={{
                  name: "phone",
                  className: "form-control",
                }}
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Message */}
            <div className="mb-3">
              <label>Message</label>
              <Field
                as="textarea"
                name="message"
                rows="5"
                className="form-control"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-danger"
              />
            </div>

            <button
              type="submit"
              className="btn btn-dark"
              disabled={isSubmitting}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUs;
